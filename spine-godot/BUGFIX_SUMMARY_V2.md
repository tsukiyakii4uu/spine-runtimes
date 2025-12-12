# Crash Fix: SpineSkeletonDataResource Destructor (v2)

## TL;DR

Fixed segmentation fault during Godot editor shutdown by using `ObjectDB::get_instance()` to safely validate the `EditorFileSystem` pointer before attempting to disconnect the signal in the destructor. The original code used a raw pointer that could become dangling during shutdown; the fix stores the `ObjectID` at construction time and validates it in the destructor.

**Changed files:**
- `spine_godot/SpineSkeletonDataResource.h` - Added `ObjectID editor_file_system_id` member variable
- `spine_godot/SpineSkeletonDataResource.cpp` - Modified constructor and destructor

---

## Context

Mario requested a reference for the claim that removing the disconnect code entirely was safe. Upon investigation, that claim was not fully accurate. Godot's automatic signal cleanup in `Object::~Object()` also calls methods on the signal owner, which could crash if the owner is already destroyed.

The proper fix is to retain the disconnect logic but use Godot's `ObjectDB` system to safely validate that `EditorFileSystem` still exists before calling any methods on it.

---

## The Problem

The Godot editor crashed with signal 11 (SIGSEGV) during shutdown. The crash occurred in the `SpineSkeletonDataResource` destructor when attempting to disconnect from the `EditorFileSystem` singleton's "resources_reimported" signal.

**Original crash backtrace:**
```
[14] SpineSkeletonDataResource::~SpineSkeletonDataResource()
     (spine_godot/SpineSkeletonDataResource.cpp:255)
```

**Root cause:** During editor shutdown, singletons are destroyed in an undefined order. The destructor used `get_editor_file_system()` which returns a raw pointer. If `EditorFileSystem` was destroyed before `SpineSkeletonDataResource` objects, the pointer became dangling. Calling `efs->is_connected()` on a dangling pointer caused the segfault.

The check `if (efs)` only verifies the pointer is non-null, not that the memory it points to is valid.

---

## The Solution

Use Godot's `ObjectDB` system to safely validate object existence:

1. Store the `ObjectID` of `EditorFileSystem` when connecting the signal (in constructor)
2. Use `ObjectDB::get_instance(id)` in the destructor to check if the object still exists
3. Only proceed with disconnect if the object is valid

`ObjectDB::get_instance()` is safe to call even if the object has been destroyed - it returns `nullptr` in that case, rather than accessing freed memory.

---

## Code Changes

### Header file (SpineSkeletonDataResource.h)

**Added member variable (inside private section, under TOOLS_ENABLED):**
```cpp
#ifdef TOOLS_ENABLED
	// Store the ObjectID of EditorFileSystem to safely validate it in destructor.
	// Raw pointers to singletons can become dangling during editor shutdown,
	// but ObjectID can be safely validated via ObjectDB::get_instance().
	ObjectID editor_file_system_id;
#endif
```

### Source file (SpineSkeletonDataResource.cpp)

**Constructor - store the ObjectID when connecting:**
```cpp
SpineSkeletonDataResource::SpineSkeletonDataResource()
	: default_mix(0), skeleton_data(nullptr), animation_state_data(nullptr) {

#ifdef TOOLS_ENABLED
#if VERSION_MAJOR > 3
	if (Engine::get_singleton()->is_editor_hint()) {
		EditorFileSystem *efs = get_editor_file_system();
		if (efs) {
			// Store the ObjectID for safe validation in destructor
			editor_file_system_id = efs->get_instance_id();
			efs->connect("resources_reimported", callable_mp(this, &SpineSkeletonDataResource::_on_resources_reimported));
		}
	}
#else
	if (Engine::get_singleton()->is_editor_hint()) {
		EditorFileSystem *efs = EditorFileSystem::get_singleton();
		if (efs) {
			// Store the ObjectID for safe validation in destructor
			editor_file_system_id = efs->get_instance_id();
			efs->connect("resources_reimported", this, "_on_resources_reimported");
		}
	}
#endif
#endif
}
```

**Destructor - validate via ObjectDB before disconnecting:**
```cpp
SpineSkeletonDataResource::~SpineSkeletonDataResource() {
#ifdef TOOLS_ENABLED
#if VERSION_MAJOR > 3
	if (Engine::get_singleton()->is_editor_hint()) {
		// Use ObjectDB::get_instance() to safely check if EditorFileSystem still exists.
		// This avoids the dangling pointer problem during editor shutdown where
		// EditorFileSystem may be destroyed before SpineSkeletonDataResource objects.
		EditorFileSystem *efs = Object::cast_to<EditorFileSystem>(ObjectDB::get_instance(editor_file_system_id));
		if (efs && efs->is_connected("resources_reimported", callable_mp(this, &SpineSkeletonDataResource::_on_resources_reimported))) {
			efs->disconnect("resources_reimported", callable_mp(this, &SpineSkeletonDataResource::_on_resources_reimported));
		}
	}
#else
	if (Engine::get_singleton()->is_editor_hint()) {
		// Use ObjectDB::get_instance() to safely check if EditorFileSystem still exists.
		EditorFileSystem *efs = Object::cast_to<EditorFileSystem>(ObjectDB::get_instance(editor_file_system_id));
		if (efs && efs->is_connected("resources_reimported", this, "_on_resources_reimported")) {
			efs->disconnect("resources_reimported", this, "_on_resources_reimported");
		}
	}
#endif
#endif

	delete skeleton_data;
	delete animation_state_data;
}
```

---

## Why This Works

1. **ObjectID is just a uint64_t** - It's safe to store and doesn't hold a reference to the object
2. **ObjectDB::get_instance() is safe** - It performs a lookup in Godot's object registry and returns `nullptr` if the object no longer exists, without accessing any potentially-freed memory
3. **The pattern is used throughout Godot** - See `godot/core/object/undo_redo.cpp`, `godot/core/object/message_queue.cpp`, and `godot/core/object/callable_method_pointer.h` for examples

**From godot/core/object/undo_redo.cpp:355:**
```cpp
Object *obj = ObjectDB::get_instance(op.object);
if (!obj) { //may have been deleted and this is fine
    continue;
}
```

---

## Why Not Just Remove the Disconnect?

Mario correctly questioned whether removing the disconnect entirely was safe. Investigation revealed:

1. Godot's `Object::~Object()` does perform automatic signal cleanup (lines 2186-2198 in object.cpp)
2. However, that cleanup also calls `c.signal.get_object()->_disconnect(...)` which accesses the signal owner
3. If the signal owner is destroyed first, the automatic cleanup would also crash

The automatic cleanup uses `c.callable.get_object()` which does perform ObjectDB validation, but the crash was happening in our custom destructor code before the automatic cleanup ran.

Retaining explicit disconnect with proper validation is the safer approach and follows patterns used elsewhere in the Godot codebase.

---

## Testing Checklist

- [ ] Editor starts without errors
- [ ] Editor closes cleanly without crashes
- [ ] Hot-reload works (modify and reimport a Spine asset while editor is running)
- [ ] Normal gameplay with Spine assets works
- [ ] Test with both module build and GDExtension build
- [ ] Test with C# build if applicable

---

## References

- Godot ObjectDB implementation: `godot/core/object/object.h:1044-1064`
- Godot Object destructor signal cleanup: `godot/core/object/object.cpp:2135-2198`
- Example usage in undo_redo: `godot/core/object/undo_redo.cpp:355`
- GitHub Issue on signal disconnection: https://github.com/godotengine/godot/issues/70414
