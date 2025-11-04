"use strict";
var spine = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // spine-construct3/spine-construct3-lib/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    AABBRectangleBoundsProvider: () => AABBRectangleBoundsProvider,
    AlphaTimeline: () => AlphaTimeline,
    Animation: () => Animation,
    AnimationState: () => AnimationState,
    AnimationStateAdapter: () => AnimationStateAdapter,
    AnimationStateData: () => AnimationStateData,
    AssetCache: () => AssetCache,
    AssetLoader: () => AssetLoader,
    AssetManagerBase: () => AssetManagerBase,
    AtlasAttachmentLoader: () => AtlasAttachmentLoader,
    Attachment: () => Attachment,
    AttachmentTimeline: () => AttachmentTimeline,
    BinaryInput: () => BinaryInput,
    BlendMode: () => BlendMode,
    BlendingModeSpineToC3: () => BlendingModeSpineToC3,
    Bone: () => Bone,
    BoneData: () => BoneData,
    BoneLocal: () => BoneLocal,
    BonePose: () => BonePose,
    BoneTimeline1: () => BoneTimeline1,
    BoneTimeline2: () => BoneTimeline2,
    BoundingBoxAttachment: () => BoundingBoxAttachment,
    C3Texture: () => C3Texture,
    C3TextureEditor: () => C3TextureEditor,
    CURRENT: () => CURRENT,
    ClippingAttachment: () => ClippingAttachment,
    Color: () => Color,
    Constraint: () => Constraint,
    ConstraintData: () => ConstraintData,
    ConstraintTimeline1: () => ConstraintTimeline1,
    CurveTimeline: () => CurveTimeline,
    CurveTimeline1: () => CurveTimeline1,
    DebugUtils: () => DebugUtils,
    DeformTimeline: () => DeformTimeline,
    Downloader: () => Downloader,
    DrawOrderTimeline: () => DrawOrderTimeline,
    Event: () => Event,
    EventData: () => EventData,
    EventQueue: () => EventQueue,
    EventTimeline: () => EventTimeline,
    EventType: () => EventType,
    FIRST: () => FIRST,
    FakeTexture: () => FakeTexture,
    FromProperty: () => FromProperty,
    FromRotate: () => FromRotate,
    FromScaleX: () => FromScaleX,
    FromScaleY: () => FromScaleY,
    FromShearY: () => FromShearY,
    FromX: () => FromX,
    FromY: () => FromY,
    HOLD_FIRST: () => HOLD_FIRST,
    HOLD_MIX: () => HOLD_MIX,
    HOLD_SUBSEQUENT: () => HOLD_SUBSEQUENT,
    IkConstraint: () => IkConstraint,
    IkConstraintData: () => IkConstraintData,
    IkConstraintPose: () => IkConstraintPose,
    IkConstraintTimeline: () => IkConstraintTimeline,
    Inherit: () => Inherit,
    InheritTimeline: () => InheritTimeline,
    IntSet: () => IntSet,
    Interpolation: () => Interpolation,
    MathUtils: () => MathUtils,
    MeshAttachment: () => MeshAttachment,
    MixBlend: () => MixBlend,
    MixDirection: () => MixDirection,
    PathAttachment: () => PathAttachment,
    PathConstraint: () => PathConstraint,
    PathConstraintData: () => PathConstraintData,
    PathConstraintMixTimeline: () => PathConstraintMixTimeline,
    PathConstraintPose: () => PathConstraintPose,
    PathConstraintPositionTimeline: () => PathConstraintPositionTimeline,
    PathConstraintSpacingTimeline: () => PathConstraintSpacingTimeline,
    Physics: () => Physics,
    PhysicsConstraint: () => PhysicsConstraint,
    PhysicsConstraintDampingTimeline: () => PhysicsConstraintDampingTimeline,
    PhysicsConstraintData: () => PhysicsConstraintData,
    PhysicsConstraintGravityTimeline: () => PhysicsConstraintGravityTimeline,
    PhysicsConstraintInertiaTimeline: () => PhysicsConstraintInertiaTimeline,
    PhysicsConstraintMassTimeline: () => PhysicsConstraintMassTimeline,
    PhysicsConstraintMixTimeline: () => PhysicsConstraintMixTimeline,
    PhysicsConstraintPose: () => PhysicsConstraintPose,
    PhysicsConstraintResetTimeline: () => PhysicsConstraintResetTimeline,
    PhysicsConstraintStrengthTimeline: () => PhysicsConstraintStrengthTimeline,
    PhysicsConstraintTimeline: () => PhysicsConstraintTimeline,
    PhysicsConstraintWindTimeline: () => PhysicsConstraintWindTimeline,
    PointAttachment: () => PointAttachment,
    Pool: () => Pool,
    Posed: () => Posed,
    PosedActive: () => PosedActive,
    PosedData: () => PosedData,
    PositionMode: () => PositionMode,
    Pow: () => Pow,
    PowOut: () => PowOut,
    Property: () => Property,
    RGB2Timeline: () => RGB2Timeline,
    RGBA2Timeline: () => RGBA2Timeline,
    RGBATimeline: () => RGBATimeline,
    RGBTimeline: () => RGBTimeline,
    RegionAttachment: () => RegionAttachment,
    RotateMode: () => RotateMode,
    RotateTimeline: () => RotateTimeline,
    SETUP: () => SETUP,
    SUBSEQUENT: () => SUBSEQUENT,
    ScaleTimeline: () => ScaleTimeline,
    ScaleXTimeline: () => ScaleXTimeline,
    ScaleYTimeline: () => ScaleYTimeline,
    Sequence: () => Sequence,
    SequenceMode: () => SequenceMode,
    SequenceModeValues: () => SequenceModeValues,
    SequenceTimeline: () => SequenceTimeline,
    SetupPoseBoundsProvider: () => SetupPoseBoundsProvider,
    ShearTimeline: () => ShearTimeline,
    ShearXTimeline: () => ShearXTimeline,
    ShearYTimeline: () => ShearYTimeline,
    Skeleton: () => Skeleton,
    SkeletonBinary: () => SkeletonBinary,
    SkeletonBounds: () => SkeletonBounds,
    SkeletonClipping: () => SkeletonClipping,
    SkeletonData: () => SkeletonData,
    SkeletonJson: () => SkeletonJson,
    SkeletonRendererCore: () => SkeletonRendererCore,
    Skin: () => Skin,
    SkinEntry: () => SkinEntry,
    SkinsAndAnimationBoundsProvider: () => SkinsAndAnimationBoundsProvider,
    Slider: () => Slider,
    SliderData: () => SliderData,
    SliderMixTimeline: () => SliderMixTimeline,
    SliderPose: () => SliderPose,
    SliderTimeline: () => SliderTimeline,
    Slot: () => Slot,
    SlotCurveTimeline: () => SlotCurveTimeline,
    SlotData: () => SlotData,
    SlotPose: () => SlotPose,
    SpacingMode: () => SpacingMode,
    StringSet: () => StringSet,
    Texture: () => Texture,
    TextureAtlas: () => TextureAtlas,
    TextureAtlasPage: () => TextureAtlasPage,
    TextureAtlasRegion: () => TextureAtlasRegion,
    TextureFilter: () => TextureFilter,
    TextureRegion: () => TextureRegion,
    TextureWrap: () => TextureWrap,
    TimeKeeper: () => TimeKeeper,
    Timeline: () => Timeline,
    ToProperty: () => ToProperty,
    ToRotate: () => ToRotate,
    ToScaleX: () => ToScaleX,
    ToScaleY: () => ToScaleY,
    ToShearY: () => ToShearY,
    ToX: () => ToX,
    ToY: () => ToY,
    TrackEntry: () => TrackEntry,
    TransformConstraint: () => TransformConstraint,
    TransformConstraintData: () => TransformConstraintData,
    TransformConstraintPose: () => TransformConstraintPose,
    TransformConstraintTimeline: () => TransformConstraintTimeline,
    TranslateTimeline: () => TranslateTimeline,
    TranslateXTimeline: () => TranslateXTimeline,
    TranslateYTimeline: () => TranslateYTimeline,
    Triangulator: () => Triangulator,
    Utils: () => Utils,
    Vector2: () => Vector2,
    VertexAttachment: () => VertexAttachment,
    WindowedMean: () => WindowedMean,
    isBoneTimeline: () => isBoneTimeline,
    isConstraintTimeline: () => isConstraintTimeline,
    isSlotTimeline: () => isSlotTimeline
  });

  // spine-core/src/Utils.ts
  var IntSet = class {
    array = [];
    add(value) {
      const contains = this.contains(value);
      this.array[value | 0] = value | 0;
      return !contains;
    }
    contains(value) {
      return this.array[value | 0] !== void 0;
    }
    remove(value) {
      this.array[value | 0] = void 0;
    }
    clear() {
      this.array.length = 0;
    }
  };
  var StringSet = class {
    entries = {};
    size = 0;
    add(value) {
      const contains = this.entries[value];
      this.entries[value] = true;
      if (!contains) {
        this.size++;
        return true;
      }
      return false;
    }
    addAll(values) {
      const oldSize = this.size;
      for (let i = 0, n = values.length; i < n; i++)
        this.add(values[i]);
      return oldSize !== this.size;
    }
    contains(value) {
      return this.entries[value];
    }
    clear() {
      this.entries = {};
      this.size = 0;
    }
  };
  var Color = class _Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
    static WHITE = new _Color(1, 1, 1, 1);
    static RED = new _Color(1, 0, 0, 1);
    static GREEN = new _Color(0, 1, 0, 1);
    static BLUE = new _Color(0, 0, 1, 1);
    static MAGENTA = new _Color(1, 0, 1, 1);
    set(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      return this.clamp();
    }
    setFromColor(c) {
      this.r = c.r;
      this.g = c.g;
      this.b = c.b;
      this.a = c.a;
      return this;
    }
    setFromString(hex) {
      hex = hex.charAt(0) === "#" ? hex.substr(1) : hex;
      this.r = parseInt(hex.substr(0, 2), 16) / 255;
      this.g = parseInt(hex.substr(2, 2), 16) / 255;
      this.b = parseInt(hex.substr(4, 2), 16) / 255;
      this.a = hex.length !== 8 ? 1 : parseInt(hex.substr(6, 2), 16) / 255;
      return this;
    }
    add(r, g, b, a) {
      this.r += r;
      this.g += g;
      this.b += b;
      this.a += a;
      return this.clamp();
    }
    clamp() {
      if (this.r < 0) this.r = 0;
      else if (this.r > 1) this.r = 1;
      if (this.g < 0) this.g = 0;
      else if (this.g > 1) this.g = 1;
      if (this.b < 0) this.b = 0;
      else if (this.b > 1) this.b = 1;
      if (this.a < 0) this.a = 0;
      else if (this.a > 1) this.a = 1;
      return this;
    }
    static rgba8888ToColor(color, value) {
      color.r = ((value & 4278190080) >>> 24) / 255;
      color.g = ((value & 16711680) >>> 16) / 255;
      color.b = ((value & 65280) >>> 8) / 255;
      color.a = (value & 255) / 255;
    }
    static rgb888ToColor(color, value) {
      color.r = ((value & 16711680) >>> 16) / 255;
      color.g = ((value & 65280) >>> 8) / 255;
      color.b = (value & 255) / 255;
    }
    toRgb888() {
      const hex = (x) => `0${(x * 255).toString(16)}`.slice(-2);
      return Number(`0x${hex(this.r)}${hex(this.g)}${hex(this.b)}`);
    }
    static fromString(hex, color = new _Color()) {
      return color.setFromString(hex);
    }
  };
  var MathUtils = class _MathUtils {
    // biome-ignore lint/suspicious/noApproximativeNumericConstant: reference runtime
    static PI = 3.1415927;
    static PI2 = _MathUtils.PI * 2;
    static invPI2 = 1 / _MathUtils.PI2;
    static radiansToDegrees = 180 / _MathUtils.PI;
    static radDeg = _MathUtils.radiansToDegrees;
    static degreesToRadians = _MathUtils.PI / 180;
    static degRad = _MathUtils.degreesToRadians;
    static clamp(value, min, max) {
      if (value < min) return min;
      if (value > max) return max;
      return value;
    }
    static cosDeg(degrees) {
      return Math.cos(degrees * _MathUtils.degRad);
    }
    static sinDeg(degrees) {
      return Math.sin(degrees * _MathUtils.degRad);
    }
    static atan2Deg(y, x) {
      return Math.atan2(y, x) * _MathUtils.radDeg;
    }
    static signum(value) {
      return value > 0 ? 1 : value < 0 ? -1 : 0;
    }
    static toInt(x) {
      return x > 0 ? Math.floor(x) : Math.ceil(x);
    }
    static cbrt(x) {
      const y = Math.pow(Math.abs(x), 1 / 3);
      return x < 0 ? -y : y;
    }
    static randomTriangular(min, max) {
      return _MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
    }
    static randomTriangularWith(min, max, mode) {
      const u = Math.random();
      const d = max - min;
      if (u <= (mode - min) / d) return min + Math.sqrt(u * d * (mode - min));
      return max - Math.sqrt((1 - u) * d * (max - mode));
    }
    static isPowerOfTwo(value) {
      return value && (value & value - 1) === 0;
    }
  };
  var Interpolation = class {
    apply(start, end, a) {
      return start + (end - start) * this.applyInternal(a);
    }
  };
  var Pow = class extends Interpolation {
    power = 2;
    constructor(power) {
      super();
      this.power = power;
    }
    applyInternal(a) {
      if (a <= 0.5) return Math.pow(a * 2, this.power) / 2;
      return Math.pow((a - 1) * 2, this.power) / (this.power % 2 === 0 ? -2 : 2) + 1;
    }
  };
  var PowOut = class extends Pow {
    constructor(power) {
      super(power);
    }
    applyInternal(a) {
      return Math.pow(a - 1, this.power) * (this.power % 2 === 0 ? -1 : 1) + 1;
    }
  };
  var Utils = class _Utils {
    static SUPPORTS_TYPED_ARRAYS = typeof Float32Array !== "undefined";
    static arrayCopy(source, sourceStart, dest, destStart, numElements) {
      for (let i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
        dest[j] = source[i];
      }
    }
    static arrayFill(array, fromIndex, toIndex, value) {
      for (let i = fromIndex; i < toIndex; i++)
        array[i] = value;
    }
    // biome-ignore lint/suspicious/noExplicitAny: ok any in this case
    static setArraySize(array, size, value = 0) {
      const oldSize = array.length;
      if (oldSize === size) return array;
      array.length = size;
      if (oldSize < size) {
        for (let i = oldSize; i < size; i++) array[i] = value;
      }
      return array;
    }
    // biome-ignore lint/suspicious/noExplicitAny: ok any in this case
    static ensureArrayCapacity(array, size, value = 0) {
      if (array.length >= size) return array;
      return _Utils.setArraySize(array, size, value);
    }
    static newArray(size, defaultValue) {
      const array = [];
      for (let i = 0; i < size; i++) array[i] = defaultValue;
      return array;
    }
    static newFloatArray(size) {
      if (_Utils.SUPPORTS_TYPED_ARRAYS)
        return new Float32Array(size);
      else {
        const array = [];
        for (let i = 0; i < array.length; i++) array[i] = 0;
        return array;
      }
    }
    static newShortArray(size) {
      if (_Utils.SUPPORTS_TYPED_ARRAYS)
        return new Int16Array(size);
      else {
        const array = [];
        for (let i = 0; i < array.length; i++) array[i] = 0;
        return array;
      }
    }
    static toFloatArray(array) {
      return _Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
    }
    static toSinglePrecision(value) {
      return _Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
    }
    // This function is used to fix WebKit 602 specific issue described at https://esotericsoftware.com/forum/d/10109-ios-10-disappearing-graphics
    static webkit602BugfixHelper(alpha, blend) {
    }
    static contains(array, element, identity = true) {
      for (let i = 0; i < array.length; i++)
        if (array[i] === element) return true;
      return false;
    }
    // biome-ignore lint/suspicious/noExplicitAny: ok any in this case
    static enumValue(type, name) {
      return type[name[0].toUpperCase() + name.slice(1)];
    }
  };
  var DebugUtils = class {
    static logBones(skeleton) {
      for (let i = 0; i < skeleton.bones.length; i++) {
        const bone = skeleton.bones[i].applied;
        console.log(`${bone.bone.data.name}, ${bone.a}, ${bone.b}, ${bone.c}, ${bone.d}, ${bone.worldX}, ${bone.worldY}`);
      }
    }
  };
  var Pool = class {
    items = [];
    instantiator;
    constructor(instantiator) {
      this.instantiator = instantiator;
    }
    obtain() {
      return this.items.length > 0 ? this.items.pop() : this.instantiator();
    }
    free(item) {
      item.reset?.();
      this.items.push(item);
    }
    freeAll(items) {
      for (let i = 0; i < items.length; i++)
        this.free(items[i]);
    }
    clear() {
      this.items.length = 0;
    }
  };
  var Vector2 = class {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    length() {
      const x = this.x;
      const y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    normalize() {
      const len = this.length();
      if (len !== 0) {
        this.x /= len;
        this.y /= len;
      }
      return this;
    }
  };
  var TimeKeeper = class {
    maxDelta = 0.064;
    framesPerSecond = 0;
    delta = 0;
    totalTime = 0;
    lastTime = Date.now() / 1e3;
    frameCount = 0;
    frameTime = 0;
    update() {
      const now = Date.now() / 1e3;
      this.delta = now - this.lastTime;
      this.frameTime += this.delta;
      this.totalTime += this.delta;
      if (this.delta > this.maxDelta) this.delta = this.maxDelta;
      this.lastTime = now;
      this.frameCount++;
      if (this.frameTime > 1) {
        this.framesPerSecond = this.frameCount / this.frameTime;
        this.frameTime = 0;
        this.frameCount = 0;
      }
    }
  };
  var WindowedMean = class {
    values;
    addedValues = 0;
    lastValue = 0;
    mean = 0;
    dirty = true;
    constructor(windowSize = 32) {
      this.values = new Array(windowSize);
    }
    hasEnoughData() {
      return this.addedValues >= this.values.length;
    }
    addValue(value) {
      if (this.addedValues < this.values.length) this.addedValues++;
      this.values[this.lastValue++] = value;
      if (this.lastValue > this.values.length - 1) this.lastValue = 0;
      this.dirty = true;
    }
    getMean() {
      if (this.hasEnoughData()) {
        if (this.dirty) {
          let mean = 0;
          for (let i = 0; i < this.values.length; i++)
            mean += this.values[i];
          this.mean = mean / this.values.length;
          this.dirty = false;
        }
        return this.mean;
      }
      return 0;
    }
  };

  // spine-core/src/attachments/Attachment.ts
  var Attachment = class {
    name;
    constructor(name) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
    }
  };
  var VertexAttachment = class _VertexAttachment extends Attachment {
    static nextID = 0;
    /** The unique ID for this attachment. */
    id = _VertexAttachment.nextID++;
    /** The bones which affect the {@link vertices}. The array entries are, for each vertex, the number of bones affecting
     * the vertex followed by that many bone indices, which is the index of the bone in {@link Skeleton.bones}. Will be null
     * if this attachment has no weights. */
    bones = null;
    /** The vertex positions in the bone's coordinate system. For a non-weighted attachment, the values are `x,y`
     * entries for each vertex. For a weighted attachment, the values are `x,y,weight` entries for each bone affecting
     * each vertex. */
    vertices = [];
    /** The maximum number of world vertex values that can be output by
     * {@link computeWorldVertices} using the `count` parameter. */
    worldVerticesLength = 0;
    /** Timelines for the timeline attachment are also applied to this attachment.
     * May be null if no attachment-specific timelines should be applied. */
    timelineAttachment = this;
    constructor(name) {
      super(name);
    }
    /** Transforms the attachment's local {@link #vertices} to world coordinates. If the slot's {@link SlotPose.deform} is
     * not empty, it is used to deform the vertices.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide.
     * @param start The index of the first {@link #vertices} value to transform. Each vertex has 2 values, x and y.
     * @param count The number of world vertex values to output. Must be <= {@link #worldVerticesLength} - `start`.
     * @param worldVertices The output world vertices. Must have a length >= `offset` + `count` *
     *           `stride` / 2.
     * @param offset The `worldVertices` index to begin writing values.
     * @param stride The number of `worldVertices` entries between the value pairs written. */
    computeWorldVertices(skeleton, slot, start, count, worldVertices, offset, stride) {
      count = offset + (count >> 1) * stride;
      const deformArray = slot.applied.deform;
      let vertices = this.vertices;
      const bones = this.bones;
      if (!bones) {
        if (deformArray.length > 0) vertices = deformArray;
        const bone = slot.bone.applied;
        const x = bone.worldX;
        const y = bone.worldY;
        const a = bone.a, b = bone.b, c = bone.c, d = bone.d;
        for (let v2 = start, w = offset; w < count; v2 += 2, w += stride) {
          const vx = vertices[v2], vy = vertices[v2 + 1];
          worldVertices[w] = vx * a + vy * b + x;
          worldVertices[w + 1] = vx * c + vy * d + y;
        }
        return;
      }
      let v = 0, skip = 0;
      for (let i = 0; i < start; i += 2) {
        const n = bones[v];
        v += n + 1;
        skip += n;
      }
      const skeletonBones = skeleton.bones;
      if (deformArray.length === 0) {
        for (let w = offset, b = skip * 3; w < count; w += stride) {
          let wx = 0, wy = 0;
          let n = bones[v++];
          n += v;
          for (; v < n; v++, b += 3) {
            const bone = skeletonBones[bones[v]].applied;
            const vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }
          worldVertices[w] = wx;
          worldVertices[w + 1] = wy;
        }
      } else {
        const deform = deformArray;
        for (let w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
          let wx = 0, wy = 0;
          let n = bones[v++];
          n += v;
          for (; v < n; v++, b += 3, f += 2) {
            const bone = skeletonBones[bones[v]].applied;
            const vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }
          worldVertices[w] = wx;
          worldVertices[w + 1] = wy;
        }
      }
    }
    /** Does not copy id (generated) or name (set on construction). **/
    copyTo(attachment) {
      if (this.bones) {
        attachment.bones = [];
        Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
      } else
        attachment.bones = null;
      if (this.vertices) {
        attachment.vertices = Utils.newFloatArray(this.vertices.length);
        Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
      }
      attachment.worldVerticesLength = this.worldVerticesLength;
      attachment.timelineAttachment = this.timelineAttachment;
    }
  };

  // spine-core/src/attachments/Sequence.ts
  var Sequence = class _Sequence {
    static _nextID = 0;
    id = _Sequence.nextID();
    regions;
    start = 0;
    digits = 0;
    /** The index of the region to show for the setup pose. */
    setupIndex = 0;
    constructor(count) {
      this.regions = new Array(count);
    }
    copy() {
      const copy = new _Sequence(this.regions.length);
      Utils.arrayCopy(this.regions, 0, copy.regions, 0, this.regions.length);
      copy.start = this.start;
      copy.digits = this.digits;
      copy.setupIndex = this.setupIndex;
      return copy;
    }
    apply(slot, attachment) {
      let index = slot.sequenceIndex;
      if (index === -1) index = this.setupIndex;
      if (index >= this.regions.length) index = this.regions.length - 1;
      const region = this.regions[index];
      if (attachment.region !== region) {
        attachment.region = region;
        attachment.updateRegion();
      }
    }
    getPath(basePath, index) {
      let result = basePath;
      const frame = (this.start + index).toString();
      for (let i = this.digits - frame.length; i > 0; i--)
        result += "0";
      result += frame;
      return result;
    }
    static nextID() {
      return _Sequence._nextID++;
    }
  };
  var SequenceMode = /* @__PURE__ */ ((SequenceMode2) => {
    SequenceMode2[SequenceMode2["hold"] = 0] = "hold";
    SequenceMode2[SequenceMode2["once"] = 1] = "once";
    SequenceMode2[SequenceMode2["loop"] = 2] = "loop";
    SequenceMode2[SequenceMode2["pingpong"] = 3] = "pingpong";
    SequenceMode2[SequenceMode2["onceReverse"] = 4] = "onceReverse";
    SequenceMode2[SequenceMode2["loopReverse"] = 5] = "loopReverse";
    SequenceMode2[SequenceMode2["pingpongReverse"] = 6] = "pingpongReverse";
    return SequenceMode2;
  })(SequenceMode || {});
  var SequenceModeValues = [
    0 /* hold */,
    1 /* once */,
    2 /* loop */,
    3 /* pingpong */,
    4 /* onceReverse */,
    5 /* loopReverse */,
    6 /* pingpongReverse */
  ];

  // spine-core/src/Animation.ts
  var Animation = class {
    /** The animation's name, which is unique across all animations in the skeleton. */
    name;
    /** If the returned array or the timelines it contains are modified, {@link setTimelines()} must be called. */
    timelines = [];
    timelineIds;
    bones;
    /** The duration of the animation in seconds, which is usually the highest time of all frames in the timeline. The duration is
     * used to know when it has completed and when it should loop back to the start. */
    duration;
    constructor(name, timelines, duration) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
      this.duration = duration;
      this.timelineIds = new StringSet();
      this.bones = [];
      this.setTimelines(timelines);
    }
    setTimelines(timelines) {
      if (!timelines) throw new Error("timelines cannot be null.");
      this.timelines = timelines;
      const n = timelines.length;
      this.timelineIds.clear();
      this.bones.length = 0;
      const boneSet = /* @__PURE__ */ new Set();
      const items = timelines;
      for (let i = 0; i < n; i++) {
        const timeline = items[i];
        this.timelineIds.addAll(timeline.getPropertyIds());
        if (isBoneTimeline(timeline) && boneSet.add(timeline.boneIndex))
          this.bones.push(timeline.boneIndex);
      }
    }
    hasTimeline(ids) {
      for (let i = 0; i < ids.length; i++)
        if (this.timelineIds.contains(ids[i])) return true;
      return false;
    }
    /** Applies the animation's timelines to the specified skeleton.
     *
     * See Timeline {@link Timeline.apply}.
     * @param skeleton The skeleton the animation is being applied to. This provides access to the bones, slots, and other skeleton
     *           components the timelines may change.
     * @param lastTime The last time in seconds this animation was applied. Some timelines trigger only at specific times rather
     *           than every frame. Pass -1 the first time an animation is applied to ensure frame 0 is triggered.
     * @param time The time in seconds the skeleton is being posed for. Most timelines find the frame before and the frame after
     *           this time and interpolate between the frame values. If beyond the {@link duration} and <code>loop</code> is
     *           true then the animation will repeat, else the last frame will be applied.
     * @param loop If true, the animation repeats after the {@link duration}.
     * @param events If any events are fired, they are added to this list. Can be null to ignore fired events or if no timelines
     *           fire events.
     * @param alpha 0 applies the current or setup values (depending on <code>blend</code>). 1 applies the timeline values. Between
     *           0 and 1 applies values between the current or setup values and the timeline values. By adjusting
     *           <code>alpha</code> over time, an animation can be mixed in or out. <code>alpha</code> can also be useful to apply
     *           animations on top of each other (layering).
     * @param blend Controls how mixing is applied when <code>alpha</code> < 1.
     * @param direction Indicates whether the timelines are mixing in or out. Used by timelines which perform instant transitions,
     *           such as {@link DrawOrderTimeline} or {@link AttachmentTimeline}.
     * @param appliedPose True to to modify the applied pose. */
    apply(skeleton, lastTime, time, loop, events, alpha, blend, direction, appliedPose) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      if (loop && this.duration !== 0) {
        time %= this.duration;
        if (lastTime > 0) lastTime %= this.duration;
      }
      const timelines = this.timelines;
      for (let i = 0, n = timelines.length; i < n; i++)
        timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose);
    }
  };
  var MixBlend = /* @__PURE__ */ ((MixBlend2) => {
    MixBlend2[MixBlend2["setup"] = 0] = "setup";
    MixBlend2[MixBlend2["first"] = 1] = "first";
    MixBlend2[MixBlend2["replace"] = 2] = "replace";
    MixBlend2[MixBlend2["add"] = 3] = "add";
    return MixBlend2;
  })(MixBlend || {});
  var MixDirection = /* @__PURE__ */ ((MixDirection2) => {
    MixDirection2[MixDirection2["in"] = 0] = "in";
    MixDirection2[MixDirection2["out"] = 1] = "out";
    return MixDirection2;
  })(MixDirection || {});
  var Property = /* @__PURE__ */ ((Property2) => {
    Property2[Property2["rotate"] = 0] = "rotate";
    Property2[Property2["x"] = 1] = "x";
    Property2[Property2["y"] = 2] = "y";
    Property2[Property2["scaleX"] = 3] = "scaleX";
    Property2[Property2["scaleY"] = 4] = "scaleY";
    Property2[Property2["shearX"] = 5] = "shearX";
    Property2[Property2["shearY"] = 6] = "shearY";
    Property2[Property2["inherit"] = 7] = "inherit";
    Property2[Property2["rgb"] = 8] = "rgb";
    Property2[Property2["alpha"] = 9] = "alpha";
    Property2[Property2["rgb2"] = 10] = "rgb2";
    Property2[Property2["attachment"] = 11] = "attachment";
    Property2[Property2["deform"] = 12] = "deform";
    Property2[Property2["event"] = 13] = "event";
    Property2[Property2["drawOrder"] = 14] = "drawOrder";
    Property2[Property2["ikConstraint"] = 15] = "ikConstraint";
    Property2[Property2["transformConstraint"] = 16] = "transformConstraint";
    Property2[Property2["pathConstraintPosition"] = 17] = "pathConstraintPosition";
    Property2[Property2["pathConstraintSpacing"] = 18] = "pathConstraintSpacing";
    Property2[Property2["pathConstraintMix"] = 19] = "pathConstraintMix";
    Property2[Property2["physicsConstraintInertia"] = 20] = "physicsConstraintInertia";
    Property2[Property2["physicsConstraintStrength"] = 21] = "physicsConstraintStrength";
    Property2[Property2["physicsConstraintDamping"] = 22] = "physicsConstraintDamping";
    Property2[Property2["physicsConstraintMass"] = 23] = "physicsConstraintMass";
    Property2[Property2["physicsConstraintWind"] = 24] = "physicsConstraintWind";
    Property2[Property2["physicsConstraintGravity"] = 25] = "physicsConstraintGravity";
    Property2[Property2["physicsConstraintMix"] = 26] = "physicsConstraintMix";
    Property2[Property2["physicsConstraintReset"] = 27] = "physicsConstraintReset";
    Property2[Property2["sequence"] = 28] = "sequence";
    Property2[Property2["sliderTime"] = 29] = "sliderTime";
    Property2[Property2["sliderMix"] = 30] = "sliderMix";
    return Property2;
  })(Property || {});
  var Timeline = class {
    propertyIds;
    frames;
    constructor(frameCount, ...propertyIds) {
      this.propertyIds = propertyIds;
      this.frames = Utils.newFloatArray(frameCount * this.getFrameEntries());
    }
    getPropertyIds() {
      return this.propertyIds;
    }
    getFrameEntries() {
      return 1;
    }
    getFrameCount() {
      return this.frames.length / this.getFrameEntries();
    }
    getDuration() {
      return this.frames[this.frames.length - this.getFrameEntries()];
    }
    /** Linear search using the specified stride (default 1).
     * @param time Must be >= the first value in <code>frames</code>.
     * @return The index of the first value <= <code>time</code>. */
    static search(frames, time, step = 1) {
      const n = frames.length;
      for (let i = step; i < n; i += step)
        if (frames[i] > time) return i - step;
      return n - step;
    }
  };
  function isSlotTimeline(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.slotIndex === "number";
  }
  var CurveTimeline = class extends Timeline {
    curves;
    // type, x, y, ...
    constructor(frameCount, bezierCount, ...propertyIds) {
      super(frameCount, ...propertyIds);
      this.curves = Utils.newFloatArray(
        frameCount + bezierCount * 18
        /*BEZIER_SIZE*/
      );
      this.curves[frameCount - 1] = 1;
    }
    /** Sets the specified key frame to linear interpolation. */
    setLinear(frame) {
      this.curves[frame] = 0;
    }
    /** Sets the specified key frame to stepped interpolation. */
    setStepped(frame) {
      this.curves[frame] = 1;
    }
    /** Shrinks the storage for Bezier curves, for use when <code>bezierCount</code> (specified in the constructor) was larger
     * than the actual number of Bezier curves. */
    shrink(bezierCount) {
      const size = this.getFrameCount() + bezierCount * 18;
      if (this.curves.length > size) {
        const newCurves = Utils.newFloatArray(size);
        Utils.arrayCopy(this.curves, 0, newCurves, 0, size);
        this.curves = newCurves;
      }
    }
    /** Stores the segments for the specified Bezier curve. For timelines that modify multiple values, there may be more than
     * one curve per frame.
     * @param bezier The ordinal of this Bezier curve for this timeline, between 0 and <code>bezierCount - 1</code> (specified
     *           in the constructor), inclusive.
     * @param frame Between 0 and <code>frameCount - 1</code>, inclusive.
     * @param value The index of the value for this frame that this curve is used for.
     * @param time1 The time for the first key.
     * @param value1 The value for the first key.
     * @param cx1 The time for the first Bezier handle.
     * @param cy1 The value for the first Bezier handle.
     * @param cx2 The time of the second Bezier handle.
     * @param cy2 The value for the second Bezier handle.
     * @param time2 The time for the second key.
     * @param value2 The value for the second key. */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
      const curves = this.curves;
      let i = this.getFrameCount() + bezier * 18;
      if (value === 0) curves[frame] = 2 + i;
      const tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = (value1 - cy1 * 2 + cy2) * 0.03;
      const dddx = ((cx1 - cx2) * 3 - time1 + time2) * 6e-3, dddy = ((cy1 - cy2) * 3 - value1 + value2) * 6e-3;
      let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
      let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = (cy1 - value1) * 0.3 + tmpy + dddy * 0.16666667;
      let x = time1 + dx, y = value1 + dy;
      for (let n = i + 18; i < n; i += 2) {
        curves[i] = x;
        curves[i + 1] = y;
        dx += ddx;
        dy += ddy;
        ddx += dddx;
        ddy += dddy;
        x += dx;
        y += dy;
      }
    }
    /** Returns the Bezier interpolated value for the specified time.
     * @param frameIndex The index into {@link #getFrames()} for the values of the frame before <code>time</code>.
     * @param valueOffset The offset from <code>frameIndex</code> to the value this curve is used for.
     * @param i The index of the Bezier segments. See {@link #getCurveType(int)}. */
    getBezierValue(time, frameIndex, valueOffset, i) {
      const curves = this.curves;
      if (curves[i] > time) {
        const x2 = this.frames[frameIndex], y2 = this.frames[frameIndex + valueOffset];
        return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
      }
      const n = i + 18;
      for (i += 2; i < n; i += 2) {
        if (curves[i] >= time) {
          const x2 = curves[i - 2], y2 = curves[i - 1];
          return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
        }
      }
      frameIndex += this.getFrameEntries();
      const x = curves[n - 2], y = curves[n - 1];
      return y + (time - x) / (this.frames[frameIndex] - x) * (this.frames[frameIndex + valueOffset] - y);
    }
  };
  var CurveTimeline1 = class extends CurveTimeline {
    constructor(frameCount, bezierCount, propertyId) {
      super(frameCount, bezierCount, propertyId);
    }
    getFrameEntries() {
      return 2;
    }
    /** Sets the time and value for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value) {
      frame <<= 1;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*VALUE*/
      ] = value;
    }
    /** Returns the interpolated value for the specified time. */
    getCurveValue(time) {
      const frames = this.frames;
      let i = frames.length - 2;
      for (let ii = 2; ii <= i; ii += 2) {
        if (frames[ii] > time) {
          i = ii - 2;
          break;
        }
      }
      const curveType = this.curves[i >> 1];
      switch (curveType) {
        case 0: {
          const before = frames[i], value = frames[
            i + 1
            /*VALUE*/
          ];
          return value + (time - before) / (frames[
            i + 2
            /*ENTRIES*/
          ] - before) * (frames[
            i + 2 + 1
            /*VALUE*/
          ] - value);
        }
        case 1:
          return frames[
            i + 1
            /*VALUE*/
          ];
      }
      return this.getBezierValue(
        time,
        i,
        1,
        curveType - 2
        /*BEZIER*/
      );
    }
    getRelativeValue(time, alpha, blend, current, setup) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
        }
        return current;
      }
      const value = this.getCurveValue(time);
      switch (blend) {
        case 0 /* setup */:
          return setup + value * alpha;
        case 1 /* first */:
        case 2 /* replace */:
          return current + (value + setup - current) * alpha;
        case 3 /* add */:
          return current + value * alpha;
      }
    }
    getAbsoluteValue(time, alpha, blend, current, setup, value) {
      if (value === void 0)
        return this.getAbsoluteValue1(time, alpha, blend, current, setup);
      else
        return this.getAbsoluteValue2(time, alpha, blend, current, setup, value);
    }
    getAbsoluteValue1(time, alpha, blend, current, setup) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
          default:
            return current;
        }
      }
      const value = this.getCurveValue(time);
      switch (blend) {
        case 0 /* setup */:
          return setup + (value - setup) * alpha;
        case 1 /* first */:
        case 2 /* replace */:
          return current + (value - current) * alpha;
        case 3 /* add */:
          return current + value * alpha;
      }
    }
    getAbsoluteValue2(time, alpha, blend, current, setup, value) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
          default:
            return current;
        }
      }
      switch (blend) {
        case 0 /* setup */:
          return setup + (value - setup) * alpha;
        case 1 /* first */:
        case 2 /* replace */:
          return current + (value - current) * alpha;
        case 3 /* add */:
          return current + value * alpha;
      }
    }
    getScaleValue(time, alpha, blend, direction, current, setup) {
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
          default:
            return current;
        }
      }
      const value = this.getCurveValue(time) * setup;
      if (alpha === 1) return blend === 3 /* add */ ? current + value - setup : value;
      if (direction === 1 /* out */) {
        switch (blend) {
          case 0 /* setup */:
            return setup + (Math.abs(value) * MathUtils.signum(setup) - setup) * alpha;
          case 1 /* first */:
          case 2 /* replace */:
            return current + (Math.abs(value) * MathUtils.signum(current) - current) * alpha;
        }
      } else {
        let s = 0;
        switch (blend) {
          case 0 /* setup */:
            s = Math.abs(setup) * MathUtils.signum(value);
            return s + (value - s) * alpha;
          case 1 /* first */:
          case 2 /* replace */:
            s = Math.abs(current) * MathUtils.signum(value);
            return s + (value - s) * alpha;
        }
      }
      return current + (value - setup) * alpha;
    }
  };
  var BoneTimeline2 = class extends CurveTimeline {
    boneIndex;
    /** @param bezierCount The maximum number of Bezier curves. See {@link #shrink(int)}.
     * @param propertyIds Unique identifiers for the properties the timeline modifies. */
    constructor(frameCount, bezierCount, boneIndex, property1, property2) {
      super(frameCount, bezierCount, `${property1}|${boneIndex}`, `${property2}|${boneIndex}`);
      this.boneIndex = boneIndex;
    }
    getFrameEntries() {
      return 3;
    }
    /** Sets the time and values for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value1, value2) {
      frame *= 3;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*VALUE1*/
      ] = value1;
      this.frames[
        frame + 2
        /*VALUE2*/
      ] = value2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const bone = skeleton.bones[this.boneIndex];
      if (bone.active) this.apply1(appliedPose ? bone.applied : bone.pose, bone.data.setup, time, alpha, blend, direction);
    }
  };
  function isBoneTimeline(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.boneIndex === "number";
  }
  var BoneTimeline1 = class extends CurveTimeline1 {
    boneIndex;
    constructor(frameCount, bezierCount, boneIndex, property) {
      super(frameCount, bezierCount, `${property}|${boneIndex}`);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const bone = skeleton.bones[this.boneIndex];
      if (bone.active) this.apply1(appliedPose ? bone.applied : bone.pose, bone.data.setup, time, alpha, blend, direction);
    }
  };
  var RotateTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 0 /* rotate */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.rotation = this.getRelativeValue(time, alpha, blend, pose.rotation, setup.rotation);
    }
  };
  var TranslateTimeline = class extends BoneTimeline2 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 1 /* x */, 2 /* y */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            pose.x = setup.x;
            pose.y = setup.y;
            return;
          case 1 /* first */:
            pose.x += (setup.x - pose.x) * alpha;
            pose.y += (setup.y - pose.y) * alpha;
        }
        return;
      }
      let x = 0, y = 0;
      const i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          const t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        }
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */:
          pose.x = setup.x + x * alpha;
          pose.y = setup.y + y * alpha;
          break;
        case 1 /* first */:
        case 2 /* replace */:
          pose.x += (setup.x + x - pose.x) * alpha;
          pose.y += (setup.y + y - pose.y) * alpha;
          break;
        case 3 /* add */:
          pose.x += x * alpha;
          pose.y += y * alpha;
      }
    }
  };
  var TranslateXTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 1 /* x */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.x = this.getRelativeValue(time, alpha, blend, pose.x, setup.x);
    }
  };
  var TranslateYTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 2 /* y */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.y = this.getRelativeValue(time, alpha, blend, pose.y, setup.y);
    }
  };
  var ScaleTimeline = class extends BoneTimeline2 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 3 /* scaleX */, 4 /* scaleY */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            pose.scaleX = setup.scaleX;
            pose.scaleY = setup.scaleY;
            return;
          case 1 /* first */:
            pose.scaleX += (setup.scaleX - pose.scaleX) * alpha;
            pose.scaleY += (setup.scaleY - pose.scaleY) * alpha;
        }
        return;
      }
      let x, y;
      const i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          const t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        }
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      x *= setup.scaleX;
      y *= setup.scaleY;
      if (alpha === 1) {
        if (blend === 3 /* add */) {
          pose.scaleX += x - setup.scaleX;
          pose.scaleY += y - setup.scaleY;
        } else {
          pose.scaleX = x;
          pose.scaleY = y;
        }
      } else {
        let bx = 0, by = 0;
        if (direction === 1 /* out */) {
          switch (blend) {
            case 0 /* setup */:
              bx = setup.scaleX;
              by = setup.scaleY;
              pose.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
              pose.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
              break;
            case 1 /* first */:
            case 2 /* replace */:
              bx = pose.scaleX;
              by = pose.scaleY;
              pose.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
              pose.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
              break;
            case 3 /* add */:
              pose.scaleX += (x - setup.scaleX) * alpha;
              pose.scaleY += (y - setup.scaleY) * alpha;
          }
        } else {
          switch (blend) {
            case 0 /* setup */:
              bx = Math.abs(setup.scaleX) * MathUtils.signum(x);
              by = Math.abs(setup.scaleY) * MathUtils.signum(y);
              pose.scaleX = bx + (x - bx) * alpha;
              pose.scaleY = by + (y - by) * alpha;
              break;
            case 1 /* first */:
            case 2 /* replace */:
              bx = Math.abs(pose.scaleX) * MathUtils.signum(x);
              by = Math.abs(pose.scaleY) * MathUtils.signum(y);
              pose.scaleX = bx + (x - bx) * alpha;
              pose.scaleY = by + (y - by) * alpha;
              break;
            case 3 /* add */:
              pose.scaleX += (x - setup.scaleX) * alpha;
              pose.scaleY += (y - setup.scaleY) * alpha;
          }
        }
      }
    }
  };
  var ScaleXTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 3 /* scaleX */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.scaleX = this.getScaleValue(time, alpha, blend, direction, pose.scaleX, setup.scaleX);
    }
  };
  var ScaleYTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 4 /* scaleY */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.scaleY = this.getScaleValue(time, alpha, blend, direction, pose.scaleY, setup.scaleY);
    }
  };
  var ShearTimeline = class extends BoneTimeline2 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 5 /* shearX */, 6 /* shearY */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            pose.shearX = setup.shearX;
            pose.shearY = setup.shearY;
            return;
          case 1 /* first */:
            pose.shearX += (setup.shearX - pose.shearX) * alpha;
            pose.shearY += (setup.shearY - pose.shearY) * alpha;
        }
        return;
      }
      let x = 0, y = 0;
      const i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          const t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        }
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */:
          pose.shearX = setup.shearX + x * alpha;
          pose.shearY = setup.shearY + y * alpha;
          break;
        case 1 /* first */:
        case 2 /* replace */:
          pose.shearX += (setup.shearX + x - pose.shearX) * alpha;
          pose.shearY += (setup.shearY + y - pose.shearY) * alpha;
          break;
        case 3 /* add */:
          pose.shearX += x * alpha;
          pose.shearY += y * alpha;
      }
    }
  };
  var ShearXTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 5 /* shearX */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.shearX = this.getRelativeValue(time, alpha, blend, pose.shearX, setup.shearX);
    }
  };
  var ShearYTimeline = class extends BoneTimeline1 {
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, boneIndex, 6 /* shearY */);
    }
    apply1(pose, setup, time, alpha, blend, direction) {
      pose.shearY = this.getRelativeValue(time, alpha, blend, pose.shearY, setup.shearY);
    }
  };
  var InheritTimeline = class extends Timeline {
    boneIndex;
    constructor(frameCount, boneIndex) {
      super(frameCount, `${7 /* inherit */}|${boneIndex}`);
      this.boneIndex = boneIndex;
    }
    getFrameEntries() {
      return 2;
    }
    /** Sets the inherit transform mode for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, inherit) {
      frame *= 2;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*INHERIT*/
      ] = inherit;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;
      const pose = appliedPose ? bone.applied : bone.pose;
      if (direction === 1 /* out */) {
        if (blend === 0 /* setup */) pose.inherit = bone.data.setup.inherit;
        return;
      }
      const frames = this.frames;
      if (time < frames[0]) {
        if (blend === 0 /* setup */ || blend === 1 /* first */) pose.inherit = bone.data.setup.inherit;
      } else
        pose.inherit = this.frames[
          Timeline.search(
            frames,
            time,
            2
            /*ENTRIES*/
          ) + 1
          /*INHERIT*/
        ];
    }
  };
  var SlotCurveTimeline = class extends CurveTimeline {
    slotIndex;
    constructor(frameCount, bezierCount, slotIndex, ...propertyIds) {
      super(frameCount, bezierCount, ...propertyIds);
      this.slotIndex = slotIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const slot = skeleton.slots[this.slotIndex];
      if (slot.bone.active) this.apply1(slot, appliedPose ? slot.applied : slot.pose, time, alpha, blend);
    }
  };
  var RGBATimeline = class extends SlotCurveTimeline {
    constructor(frameCount, bezierCount, slotIndex) {
      super(
        frameCount,
        bezierCount,
        slotIndex,
        //
        `${8 /* rgb */}|${slotIndex}`,
        //
        `${9 /* alpha */}|${slotIndex}`
      );
    }
    getFrameEntries() {
      return 5;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b, a) {
      frame *= 5;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*A*/
      ] = a;
    }
    apply1(slot, pose, time, alpha, blend) {
      const frames = this.frames;
      const color = pose.color;
      if (time < frames[0]) {
        const setup = slot.data.setup.color;
        switch (blend) {
          case 0 /* setup */:
            color.setFromColor(setup);
            break;
          case 1 /* first */:
            color.add(
              (setup.r - color.r) * alpha,
              (setup.g - color.g) * alpha,
              (setup.b - color.b) * alpha,
              (setup.a - color.a) * alpha
            );
            break;
        }
        return;
      }
      let r = 0, g = 0, b = 0, a = 0;
      const i = Timeline.search(
        frames,
        time,
        5
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 5
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          const t = (time - before) / (frames[
            i + 5
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 5 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 5 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 5 + 3
            /*B*/
          ] - b) * t;
          a += (frames[
            i + 5 + 4
            /*A*/
          ] - a) * t;
          break;
        }
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          a = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
      }
      if (alpha === 1)
        color.set(r, g, b, a);
      else {
        if (blend === 0 /* setup */) color.setFromColor(slot.data.setup.color);
        color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
      }
    }
  };
  var RGBTimeline = class extends SlotCurveTimeline {
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, slotIndex, `${8 /* rgb */}|${slotIndex}`);
    }
    getFrameEntries() {
      return 4;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b) {
      frame <<= 2;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
    }
    apply1(slot, pose, time, alpha, blend) {
      const frames = this.frames;
      const color = pose.color;
      if (time < frames[0]) {
        const setup = slot.data.setup.color;
        switch (blend) {
          case 0 /* setup */:
            color.r = setup.r;
            color.g = setup.g;
            color.b = setup.b;
            return;
          case 1 /* first */:
            color.r += (setup.r - color.r) * alpha;
            color.g += (setup.g - color.g) * alpha;
            color.b += (setup.b - color.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0;
      const i = Timeline.search(
        frames,
        time,
        4
        /*ENTRIES*/
      );
      const curveType = this.curves[i >> 2];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          const t = (time - before) / (frames[
            i + 4
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 4 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 4 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 4 + 3
            /*B*/
          ] - b) * t;
          break;
        }
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
      }
      if (alpha === 1) {
        color.r = r;
        color.g = g;
        color.b = b;
      } else {
        if (blend === 0 /* setup */) {
          const setup = slot.data.setup.color;
          color.r = setup.r;
          color.g = setup.g;
          color.b = setup.b;
        }
        color.r += (r - color.r) * alpha;
        color.g += (g - color.g) * alpha;
        color.b += (b - color.b) * alpha;
      }
    }
  };
  var AlphaTimeline = class extends CurveTimeline1 {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, `${9 /* alpha */}|${slotIndex}`);
      this.slotIndex = slotIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      const color = (appliedPose ? slot.applied : slot.pose).color;
      const frames = this.frames;
      if (time < frames[0]) {
        const setup = slot.data.setup.color;
        switch (blend) {
          case 0 /* setup */:
            color.a = setup.a;
            break;
          case 1 /* first */:
            color.a += (setup.a - color.a) * alpha;
            break;
        }
        return;
      }
      const a = this.getCurveValue(time);
      if (alpha === 1)
        color.a = a;
      else {
        if (blend === 0 /* setup */) color.a = slot.data.setup.color.a;
        color.a += (a - color.a) * alpha;
      }
    }
  };
  var RGBA2Timeline = class extends SlotCurveTimeline {
    constructor(frameCount, bezierCount, slotIndex) {
      super(
        frameCount,
        bezierCount,
        slotIndex,
        //
        `${8 /* rgb */}|${slotIndex}`,
        //
        `${9 /* alpha */}|${slotIndex}`,
        //
        `${10 /* rgb2 */}|${slotIndex}`
      );
    }
    getFrameEntries() {
      return 8;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, a, r2, g2, b2) {
      frame <<= 3;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*A*/
      ] = a;
      this.frames[
        frame + 5
        /*R2*/
      ] = r2;
      this.frames[
        frame + 6
        /*G2*/
      ] = g2;
      this.frames[
        frame + 7
        /*B2*/
      ] = b2;
    }
    apply1(slot, pose, time, alpha, blend) {
      const frames = this.frames;
      const light = pose.color, dark = pose.darkColor;
      if (time < frames[0]) {
        const setup = slot.data.setup;
        const setupLight = setup.color, setupDark = setup.darkColor;
        switch (blend) {
          case 0 /* setup */:
            light.setFromColor(setupLight);
            dark.r = setupDark.r;
            dark.g = setupDark.g;
            dark.b = setupDark.b;
            return;
          case 1 /* first */:
            light.add(
              (setupLight.r - light.r) * alpha,
              (setupLight.g - light.g) * alpha,
              (setupLight.b - light.b) * alpha,
              (setupLight.a - light.a) * alpha
            );
            dark.r += (setupDark.r - dark.r) * alpha;
            dark.g += (setupDark.g - dark.g) * alpha;
            dark.b += (setupDark.b - dark.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
      const i = Timeline.search(
        frames,
        time,
        8
        /*ENTRIES*/
      );
      const curveType = this.curves[i >> 3];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          r2 = frames[
            i + 5
            /*R2*/
          ];
          g2 = frames[
            i + 6
            /*G2*/
          ];
          b2 = frames[
            i + 7
            /*B2*/
          ];
          const t = (time - before) / (frames[
            i + 8
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 8 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 8 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 8 + 3
            /*B*/
          ] - b) * t;
          a += (frames[
            i + 8 + 4
            /*A*/
          ] - a) * t;
          r2 += (frames[
            i + 8 + 5
            /*R2*/
          ] - r2) * t;
          g2 += (frames[
            i + 8 + 6
            /*G2*/
          ] - g2) * t;
          b2 += (frames[
            i + 8 + 7
            /*B2*/
          ] - b2) * t;
          break;
        }
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          r2 = frames[
            i + 5
            /*R2*/
          ];
          g2 = frames[
            i + 6
            /*G2*/
          ];
          b2 = frames[
            i + 7
            /*B2*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          a = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          r2 = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          g2 = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
          b2 = this.getBezierValue(
            time,
            i,
            7,
            curveType + 18 * 6 - 2
            /*BEZIER*/
          );
      }
      if (alpha === 1) {
        light.set(r, g, b, a);
        dark.r = r2;
        dark.g = g2;
        dark.b = b2;
      } else {
        if (blend === 0 /* setup */) {
          const setup = slot.data.setup;
          light.setFromColor(setup.color);
          const setupDark = setup.darkColor;
          dark.r = setupDark.r;
          dark.g = setupDark.g;
          dark.b = setupDark.b;
        }
        light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
        dark.r += (r2 - dark.r) * alpha;
        dark.g += (g2 - dark.g) * alpha;
        dark.b += (b2 - dark.b) * alpha;
      }
    }
  };
  var RGB2Timeline = class extends SlotCurveTimeline {
    constructor(frameCount, bezierCount, slotIndex) {
      super(
        frameCount,
        bezierCount,
        slotIndex,
        //
        `${8 /* rgb */}|${slotIndex}`,
        //
        `${10 /* rgb2 */}|${slotIndex}`
      );
    }
    getFrameEntries() {
      return 7;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, r2, g2, b2) {
      frame *= 7;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*R2*/
      ] = r2;
      this.frames[
        frame + 5
        /*G2*/
      ] = g2;
      this.frames[
        frame + 6
        /*B2*/
      ] = b2;
    }
    apply1(slot, pose, time, alpha, blend) {
      const frames = this.frames;
      const light = pose.color, dark = pose.darkColor;
      if (time < frames[0]) {
        const setup = slot.data.setup;
        const setupLight = setup.color, setupDark = setup.darkColor;
        switch (blend) {
          case 0 /* setup */:
            light.r = setupLight.r;
            light.g = setupLight.g;
            light.b = setupLight.b;
            dark.r = setupDark.r;
            dark.g = setupDark.g;
            dark.b = setupDark.b;
            return;
          case 1 /* first */:
            light.r += (setupLight.r - light.r) * alpha;
            light.g += (setupLight.g - light.g) * alpha;
            light.b += (setupLight.b - light.b) * alpha;
            dark.r += (setupDark.r - dark.r) * alpha;
            dark.g += (setupDark.g - dark.g) * alpha;
            dark.b += (setupDark.b - dark.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0, r2 = 0, g2 = 0, b2 = 0;
      const i = Timeline.search(
        frames,
        time,
        7
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 7
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          r2 = frames[
            i + 4
            /*R2*/
          ];
          g2 = frames[
            i + 5
            /*G2*/
          ];
          b2 = frames[
            i + 6
            /*B2*/
          ];
          const t = (time - before) / (frames[
            i + 7
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 7 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 7 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 7 + 3
            /*B*/
          ] - b) * t;
          r2 += (frames[
            i + 7 + 4
            /*R2*/
          ] - r2) * t;
          g2 += (frames[
            i + 7 + 5
            /*G2*/
          ] - g2) * t;
          b2 += (frames[
            i + 7 + 6
            /*B2*/
          ] - b2) * t;
          break;
        }
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          r2 = frames[
            i + 4
            /*R2*/
          ];
          g2 = frames[
            i + 5
            /*G2*/
          ];
          b2 = frames[
            i + 6
            /*B2*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          r2 = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          g2 = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          b2 = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
      }
      if (alpha === 1) {
        light.r = r;
        light.g = g;
        light.b = b;
        dark.r = r2;
        dark.g = g2;
        dark.b = b2;
      } else {
        if (blend === 0 /* setup */) {
          const setup = slot.data.setup;
          const setupLight = setup.color, setupDark = setup.darkColor;
          light.r = setupLight.r;
          light.g = setupLight.g;
          light.b = setupLight.b;
          dark.r = setupDark.r;
          dark.g = setupDark.g;
          dark.b = setupDark.b;
        }
        light.r += (r - light.r) * alpha;
        light.g += (g - light.g) * alpha;
        light.b += (b - light.b) * alpha;
        dark.r += (r2 - dark.r) * alpha;
        dark.g += (g2 - dark.g) * alpha;
        dark.b += (b2 - dark.b) * alpha;
      }
    }
  };
  var AttachmentTimeline = class extends Timeline {
    slotIndex = 0;
    /** The attachment name for each key frame. May contain null values to clear the attachment. */
    attachmentNames;
    constructor(frameCount, slotIndex) {
      super(frameCount, `${11 /* attachment */}|${slotIndex}`);
      this.slotIndex = slotIndex;
      this.attachmentNames = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the attachment name for the specified key frame. */
    setFrame(frame, time, attachmentName) {
      this.frames[frame] = time;
      this.attachmentNames[frame] = attachmentName;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      const pose = appliedPose ? slot.applied : slot.pose;
      if (direction === 1 /* out */) {
        if (blend === 0 /* setup */) this.setAttachment(skeleton, pose, slot.data.attachmentName);
      } else if (time < this.frames[0]) {
        if (blend === 0 /* setup */ || blend === 1 /* first */) this.setAttachment(skeleton, pose, slot.data.attachmentName);
      } else
        this.setAttachment(skeleton, pose, this.attachmentNames[Timeline.search(this.frames, time)]);
    }
    setAttachment(skeleton, pose, attachmentName) {
      pose.setAttachment(!attachmentName ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
    }
  };
  var DeformTimeline = class extends SlotCurveTimeline {
    /** The attachment that will be deformed.
     *
     * See {@link VertexAttachment.getTimelineAttachment()}. */
    attachment;
    /** The vertices for each key frame. */
    vertices;
    constructor(frameCount, bezierCount, slotIndex, attachment) {
      super(frameCount, bezierCount, slotIndex, `${12 /* deform */}|${slotIndex}|${attachment.id}`);
      this.attachment = attachment;
      this.vertices = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time and vertices for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds.
     * @param vertices Vertex positions for an unweighted VertexAttachment, or deform offsets if it has weights. */
    setFrame(frame, time, vertices) {
      this.frames[frame] = time;
      this.vertices[frame] = vertices;
    }
    /** @param value1 Ignored (0 is used for a deform timeline).
     * @param value2 Ignored (1 is used for a deform timeline). */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
      const curves = this.curves;
      let i = this.getFrameCount() + bezier * 18;
      if (value === 0) curves[frame] = 2 + i;
      const tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = cy2 * 0.03 - cy1 * 0.06;
      const dddx = ((cx1 - cx2) * 3 - time1 + time2) * 6e-3, dddy = (cy1 - cy2 + 0.33333333) * 0.018;
      let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
      let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = cy1 * 0.3 + tmpy + dddy * 0.16666667;
      let x = time1 + dx, y = dy;
      for (let n = i + 18; i < n; i += 2) {
        curves[i] = x;
        curves[i + 1] = y;
        dx += ddx;
        dy += ddy;
        ddx += dddx;
        ddy += dddy;
        x += dx;
        y += dy;
      }
    }
    getCurvePercent(time, frame) {
      const curves = this.curves;
      let i = curves[frame];
      switch (i) {
        case 0: {
          const x2 = this.frames[frame];
          return (time - x2) / (this.frames[frame + this.getFrameEntries()] - x2);
        }
        case 1:
          return 0;
      }
      i -= 2;
      if (curves[i] > time) {
        const x2 = this.frames[frame];
        return curves[i + 1] * (time - x2) / (curves[i] - x2);
      }
      const n = i + 18;
      for (i += 2; i < n; i += 2) {
        if (curves[i] >= time) {
          const x2 = curves[i - 2], y2 = curves[i - 1];
          return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
        }
      }
      const x = curves[n - 2], y = curves[n - 1];
      return y + (1 - y) * (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
    }
    apply1(slot, pose, time, alpha, blend) {
      if (!(pose.attachment instanceof VertexAttachment)) return;
      const vertexAttachment = pose.attachment;
      if (vertexAttachment.timelineAttachment !== this.attachment) return;
      const deform = pose.deform;
      if (deform.length === 0) blend = 0 /* setup */;
      const vertices = this.vertices;
      const vertexCount = vertices[0].length;
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            deform.length = 0;
            return;
          case 1 /* first */:
            if (alpha === 1) {
              deform.length = 0;
              return;
            }
            deform.length = vertexCount;
            if (!vertexAttachment.bones) {
              const setupVertices = vertexAttachment.vertices;
              for (let i = 0; i < vertexCount; i++)
                deform[i] += (setupVertices[i] - deform[i]) * alpha;
            } else {
              alpha = 1 - alpha;
              for (let i = 0; i < vertexCount; i++)
                deform[i] *= alpha;
            }
        }
        return;
      }
      deform.length = vertexCount;
      if (time >= frames[frames.length - 1]) {
        const lastVertices = vertices[frames.length - 1];
        if (alpha === 1) {
          if (blend === 3 /* add */) {
            if (!vertexAttachment.bones) {
              const setupVertices = vertexAttachment.vertices;
              for (let i = 0; i < vertexCount; i++)
                deform[i] += lastVertices[i] - setupVertices[i];
            } else {
              for (let i = 0; i < vertexCount; i++)
                deform[i] += lastVertices[i];
            }
          } else
            Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
        } else {
          switch (blend) {
            case 0 /* setup */: {
              if (!vertexAttachment.bones) {
                const setupVertices = vertexAttachment.vertices;
                for (let i = 0; i < vertexCount; i++) {
                  const setup = setupVertices[i];
                  deform[i] = setup + (lastVertices[i] - setup) * alpha;
                }
              } else {
                for (let i = 0; i < vertexCount; i++)
                  deform[i] = lastVertices[i] * alpha;
              }
              break;
            }
            case 1 /* first */:
            case 2 /* replace */:
              for (let i = 0; i < vertexCount; i++)
                deform[i] += (lastVertices[i] - deform[i]) * alpha;
              break;
            case 3 /* add */:
              if (!vertexAttachment.bones) {
                const setupVertices = vertexAttachment.vertices;
                for (let i = 0; i < vertexCount; i++)
                  deform[i] += (lastVertices[i] - setupVertices[i]) * alpha;
              } else {
                for (let i = 0; i < vertexCount; i++)
                  deform[i] += lastVertices[i] * alpha;
              }
          }
        }
        return;
      }
      const frame = Timeline.search(frames, time);
      const percent = this.getCurvePercent(time, frame);
      const prevVertices = vertices[frame];
      const nextVertices = vertices[frame + 1];
      if (alpha === 1) {
        if (blend === 3 /* add */) {
          if (!vertexAttachment.bones) {
            const setupVertices = vertexAttachment.vertices;
            for (let i = 0; i < vertexCount; i++) {
              const prev = prevVertices[i];
              deform[i] += prev + (nextVertices[i] - prev) * percent - setupVertices[i];
            }
          } else {
            for (let i = 0; i < vertexCount; i++) {
              const prev = prevVertices[i];
              deform[i] += prev + (nextVertices[i] - prev) * percent;
            }
          }
        } else if (percent === 0)
          Utils.arrayCopy(prevVertices, 0, deform, 0, vertexCount);
        else {
          for (let i = 0; i < vertexCount; i++) {
            const prev = prevVertices[i];
            deform[i] = prev + (nextVertices[i] - prev) * percent;
          }
        }
      } else {
        switch (blend) {
          case 0 /* setup */: {
            if (!vertexAttachment.bones) {
              const setupVertices = vertexAttachment.vertices;
              for (let i = 0; i < vertexCount; i++) {
                const prev = prevVertices[i], setup = setupVertices[i];
                deform[i] = setup + (prev + (nextVertices[i] - prev) * percent - setup) * alpha;
              }
            } else {
              for (let i = 0; i < vertexCount; i++) {
                const prev = prevVertices[i];
                deform[i] = (prev + (nextVertices[i] - prev) * percent) * alpha;
              }
            }
            break;
          }
          case 1 /* first */:
          case 2 /* replace */:
            for (let i = 0; i < vertexCount; i++) {
              const prev = prevVertices[i];
              deform[i] += (prev + (nextVertices[i] - prev) * percent - deform[i]) * alpha;
            }
            break;
          case 3 /* add */:
            if (!vertexAttachment.bones) {
              const setupVertices = vertexAttachment.vertices;
              for (let i = 0; i < vertexCount; i++) {
                const prev = prevVertices[i];
                deform[i] += (prev + (nextVertices[i] - prev) * percent - setupVertices[i]) * alpha;
              }
            } else {
              for (let i = 0; i < vertexCount; i++) {
                const prev = prevVertices[i];
                deform[i] += (prev + (nextVertices[i] - prev) * percent) * alpha;
              }
            }
        }
      }
    }
  };
  var SequenceTimeline = class _SequenceTimeline extends Timeline {
    static ENTRIES = 3;
    static MODE = 1;
    static DELAY = 2;
    slotIndex;
    attachment;
    constructor(frameCount, slotIndex, attachment) {
      super(frameCount, `${28 /* sequence */}|${slotIndex}|${attachment.sequence.id}`);
      this.slotIndex = slotIndex;
      this.attachment = attachment;
    }
    getFrameEntries() {
      return _SequenceTimeline.ENTRIES;
    }
    getSlotIndex() {
      return this.slotIndex;
    }
    getAttachment() {
      return this.attachment;
    }
    /** Sets the time, mode, index, and frame time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time Seconds between frames. */
    setFrame(frame, time, mode, index, delay) {
      const frames = this.frames;
      frame *= _SequenceTimeline.ENTRIES;
      frames[frame] = time;
      frames[frame + _SequenceTimeline.MODE] = mode | index << 4;
      frames[frame + _SequenceTimeline.DELAY] = delay;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction, appliedPose) {
      const slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      const pose = appliedPose ? slot.applied : slot.pose;
      const slotAttachment = pose.attachment;
      const attachment = this.attachment;
      if (slotAttachment !== attachment) {
        if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.timelineAttachment !== attachment) return;
      }
      const sequence = slotAttachment.sequence;
      if (!sequence) return;
      if (direction === 1 /* out */) {
        if (blend === 0 /* setup */) pose.sequenceIndex = -1;
        return;
      }
      const frames = this.frames;
      if (time < frames[0]) {
        if (blend === 0 /* setup */ || blend === 1 /* first */) pose.sequenceIndex = -1;
        return;
      }
      const i = Timeline.search(frames, time, _SequenceTimeline.ENTRIES);
      const before = frames[i];
      const modeAndIndex = frames[i + _SequenceTimeline.MODE];
      const delay = frames[i + _SequenceTimeline.DELAY];
      let index = modeAndIndex >> 4, count = sequence.regions.length;
      const mode = SequenceModeValues[modeAndIndex & 15];
      if (mode !== 0 /* hold */) {
        index += (time - before) / delay + 1e-5 | 0;
        switch (mode) {
          case 1 /* once */:
            index = Math.min(count - 1, index);
            break;
          case 2 /* loop */:
            index %= count;
            break;
          case 3 /* pingpong */: {
            const n = (count << 1) - 2;
            index = n === 0 ? 0 : index % n;
            if (index >= count) index = n - index;
            break;
          }
          case 4 /* onceReverse */:
            index = Math.max(count - 1 - index, 0);
            break;
          case 5 /* loopReverse */:
            index = count - 1 - index % count;
            break;
          case 6 /* pingpongReverse */: {
            const n = (count << 1) - 2;
            index = n === 0 ? 0 : (index + count - 1) % n;
            if (index >= count) index = n - index;
          }
        }
      }
      pose.sequenceIndex = index;
    }
  };
  var EventTimeline = class _EventTimeline extends Timeline {
    static propertyIds = [`${13 /* event */}`];
    /** The event for each key frame. */
    events;
    constructor(frameCount) {
      super(frameCount, ..._EventTimeline.propertyIds);
      this.events = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the event for the specified key frame. */
    setFrame(frame, event) {
      this.frames[frame] = event.time;
      this.events[frame] = event;
    }
    /** Fires events for frames > `lastTime` and <= `time`. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      if (!firedEvents) return;
      const frames = this.frames;
      const frameCount = this.frames.length;
      if (lastTime > time) {
        this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction, appliedPose);
        lastTime = -1;
      } else if (lastTime >= frames[frameCount - 1])
        return;
      if (time < frames[0]) return;
      let i = 0;
      if (lastTime < frames[0])
        i = 0;
      else {
        i = Timeline.search(frames, lastTime) + 1;
        const frameTime = frames[i];
        while (i > 0) {
          if (frames[i - 1] !== frameTime) break;
          i--;
        }
      }
      for (; i < frameCount && time >= frames[i]; i++)
        firedEvents.push(this.events[i]);
    }
  };
  var DrawOrderTimeline = class _DrawOrderTimeline extends Timeline {
    static propertyIds = [`${14 /* drawOrder */}`];
    /** The draw order for each key frame. See {@link #setFrame(int, float, int[])}. */
    drawOrders;
    constructor(frameCount) {
      super(frameCount, ..._DrawOrderTimeline.propertyIds);
      this.drawOrders = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the draw order for the specified key frame.
     * @param drawOrder For each slot in {@link Skeleton#slots}, the index of the new draw order. May be null to use setup pose
     *           draw order. */
    setFrame(frame, time, drawOrder) {
      this.frames[frame] = time;
      this.drawOrders[frame] = drawOrder;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      if (direction === 1 /* out */) {
        if (blend === 0 /* setup */) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }
      if (time < this.frames[0]) {
        if (blend === 0 /* setup */ || blend === 1 /* first */) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }
      const idx = Timeline.search(this.frames, time);
      const drawOrderToSetupIndex = this.drawOrders[idx];
      if (!drawOrderToSetupIndex)
        Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
      else {
        const drawOrder = skeleton.drawOrder;
        const slots = skeleton.slots;
        for (let i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
          drawOrder[i] = slots[drawOrderToSetupIndex[i]];
      }
    }
  };
  function isConstraintTimeline(obj) {
    return typeof obj === "object" && obj !== null && typeof obj.constraintIndex === "number";
  }
  var IkConstraintTimeline = class extends CurveTimeline {
    constraintIndex = 0;
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, `${15 /* ikConstraint */}|${constraintIndex}`);
      this.constraintIndex = constraintIndex;
    }
    getFrameEntries() {
      return 6;
    }
    /** Sets the time, mix, softness, bend direction, compress, and stretch for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds.
     * @param bendDirection 1 or -1. */
    setFrame(frame, time, mix, softness, bendDirection, compress, stretch) {
      frame *= 6;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*MIX*/
      ] = mix;
      this.frames[
        frame + 2
        /*SOFTNESS*/
      ] = softness;
      this.frames[
        frame + 3
        /*BEND_DIRECTION*/
      ] = bendDirection;
      this.frames[
        frame + 4
        /*COMPRESS*/
      ] = compress ? 1 : 0;
      this.frames[
        frame + 5
        /*STRETCH*/
      ] = stretch ? 1 : 0;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (!constraint.active) return;
      const pose = appliedPose ? constraint.applied : constraint.pose;
      const frames = this.frames;
      if (time < frames[0]) {
        const setup = constraint.data.setup;
        switch (blend) {
          case 0 /* setup */:
            pose.mix = setup.mix;
            pose.softness = setup.softness;
            pose.bendDirection = setup.bendDirection;
            pose.compress = setup.compress;
            pose.stretch = setup.stretch;
            return;
          case 1 /* first */:
            pose.mix += (setup.mix - pose.mix) * alpha;
            pose.softness += (setup.softness - pose.softness) * alpha;
            pose.bendDirection = setup.bendDirection;
            pose.compress = setup.compress;
            pose.stretch = setup.stretch;
        }
        return;
      }
      let mix = 0, softness = 0;
      const i = Timeline.search(
        frames,
        time,
        6
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 6
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          mix = frames[
            i + 1
            /*MIX*/
          ];
          softness = frames[
            i + 2
            /*SOFTNESS*/
          ];
          const t = (time - before) / (frames[
            i + 6
            /*ENTRIES*/
          ] - before);
          mix += (frames[
            i + 6 + 1
            /*MIX*/
          ] - mix) * t;
          softness += (frames[
            i + 6 + 2
            /*SOFTNESS*/
          ] - softness) * t;
          break;
        }
        case 1:
          mix = frames[
            i + 1
            /*MIX*/
          ];
          softness = frames[
            i + 2
            /*SOFTNESS*/
          ];
          break;
        default:
          mix = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          softness = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */: {
          const setup = constraint.data.setup;
          pose.mix = setup.mix + (mix - setup.mix) * alpha;
          pose.softness = setup.softness + (softness - setup.softness) * alpha;
          if (direction === 1 /* out */) {
            pose.bendDirection = setup.bendDirection;
            pose.compress = setup.compress;
            pose.stretch = setup.stretch;
            return;
          }
          break;
        }
        case 1 /* first */:
        case 2 /* replace */:
          pose.mix += (mix - pose.mix) * alpha;
          pose.softness += (softness - pose.softness) * alpha;
          if (direction === 1 /* out */) return;
          break;
        case 3 /* add */:
          pose.mix += mix * alpha;
          pose.softness += softness * alpha;
          if (direction === 1 /* out */) return;
          break;
      }
      pose.bendDirection = frames[
        i + 3
        /*BEND_DIRECTION*/
      ];
      pose.compress = frames[
        i + 4
        /*COMPRESS*/
      ] !== 0;
      pose.stretch = frames[
        i + 5
        /*STRETCH*/
      ] !== 0;
    }
  };
  var TransformConstraintTimeline = class extends CurveTimeline {
    /** The index of the transform constraint slot in {@link Skeleton.transformConstraints} that will be changed. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, `${16 /* transformConstraint */}|${constraintIndex}`);
      this.constraintIndex = constraintIndex;
    }
    getFrameEntries() {
      return 7;
    }
    /** Sets the time, rotate mix, translate mix, scale mix, and shear mix for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY) {
      const frames = this.frames;
      frame *= 7;
      frames[frame] = time;
      frames[
        frame + 1
        /*ROTATE*/
      ] = mixRotate;
      frames[
        frame + 2
        /*X*/
      ] = mixX;
      frames[
        frame + 3
        /*Y*/
      ] = mixY;
      frames[
        frame + 4
        /*SCALEX*/
      ] = mixScaleX;
      frames[
        frame + 5
        /*SCALEY*/
      ] = mixScaleY;
      frames[
        frame + 6
        /*SHEARY*/
      ] = mixShearY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (!constraint.active) return;
      const pose = appliedPose ? constraint.applied : constraint.pose;
      const frames = this.frames;
      if (time < frames[0]) {
        const setup = constraint.data.setup;
        switch (blend) {
          case 0 /* setup */:
            pose.mixRotate = setup.mixRotate;
            pose.mixX = setup.mixX;
            pose.mixY = setup.mixY;
            pose.mixScaleX = setup.mixScaleX;
            pose.mixScaleY = setup.mixScaleY;
            pose.mixShearY = setup.mixShearY;
            return;
          case 1 /* first */:
            pose.mixRotate += (setup.mixRotate - pose.mixRotate) * alpha;
            pose.mixX += (setup.mixX - pose.mixX) * alpha;
            pose.mixY += (setup.mixY - pose.mixY) * alpha;
            pose.mixScaleX += (setup.mixScaleX - pose.mixScaleX) * alpha;
            pose.mixScaleY += (setup.mixScaleY - pose.mixScaleY) * alpha;
            pose.mixShearY += (setup.mixShearY - pose.mixShearY) * alpha;
        }
        return;
      }
      let rotate, x, y, scaleX, scaleY, shearY;
      const i = Timeline.search(
        frames,
        time,
        7
        /*ENTRIES*/
      );
      const curveType = this.curves[
        i / 7
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          scaleX = frames[
            i + 4
            /*SCALEX*/
          ];
          scaleY = frames[
            i + 5
            /*SCALEY*/
          ];
          shearY = frames[
            i + 6
            /*SHEARY*/
          ];
          const t = (time - before) / (frames[
            i + 7
            /*ENTRIES*/
          ] - before);
          rotate += (frames[
            i + 7 + 1
            /*ROTATE*/
          ] - rotate) * t;
          x += (frames[
            i + 7 + 2
            /*X*/
          ] - x) * t;
          y += (frames[
            i + 7 + 3
            /*Y*/
          ] - y) * t;
          scaleX += (frames[
            i + 7 + 4
            /*SCALEX*/
          ] - scaleX) * t;
          scaleY += (frames[
            i + 7 + 5
            /*SCALEY*/
          ] - scaleY) * t;
          shearY += (frames[
            i + 7 + 6
            /*SHEARY*/
          ] - shearY) * t;
          break;
        }
        case 1:
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          scaleX = frames[
            i + 4
            /*SCALEX*/
          ];
          scaleY = frames[
            i + 5
            /*SCALEY*/
          ];
          shearY = frames[
            i + 6
            /*SHEARY*/
          ];
          break;
        default:
          rotate = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          x = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          scaleX = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          scaleY = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          shearY = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */: {
          const setup = constraint.data.setup;
          pose.mixRotate = setup.mixRotate + (rotate - setup.mixRotate) * alpha;
          pose.mixX = setup.mixX + (x - setup.mixX) * alpha;
          pose.mixY = setup.mixY + (y - setup.mixY) * alpha;
          pose.mixScaleX = setup.mixScaleX + (scaleX - setup.mixScaleX) * alpha;
          pose.mixScaleY = setup.mixScaleY + (scaleY - setup.mixScaleY) * alpha;
          pose.mixShearY = setup.mixShearY + (shearY - setup.mixShearY) * alpha;
          break;
        }
        case 1 /* first */:
        case 2 /* replace */:
          pose.mixRotate += (rotate - pose.mixRotate) * alpha;
          pose.mixX += (x - pose.mixX) * alpha;
          pose.mixY += (y - pose.mixY) * alpha;
          pose.mixScaleX += (scaleX - pose.mixScaleX) * alpha;
          pose.mixScaleY += (scaleY - pose.mixScaleY) * alpha;
          pose.mixShearY += (shearY - pose.mixShearY) * alpha;
          break;
        case 3 /* add */:
          pose.mixRotate += rotate * alpha;
          pose.mixX += x * alpha;
          pose.mixY += y * alpha;
          pose.mixScaleX += scaleX * alpha;
          pose.mixScaleY += scaleY * alpha;
          pose.mixShearY += shearY * alpha;
          break;
      }
    }
  };
  var ConstraintTimeline1 = class extends CurveTimeline1 {
    constraintIndex;
    constructor(frameCount, bezierCount, constraintIndex, property) {
      super(frameCount, bezierCount, `${property}|${constraintIndex}`);
      this.constraintIndex = constraintIndex;
    }
  };
  var PathConstraintPositionTimeline = class extends ConstraintTimeline1 {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 17 /* pathConstraintPosition */);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (constraint.active) {
        const pose = appliedPose ? constraint.applied : constraint.pose;
        pose.position = this.getAbsoluteValue(time, alpha, blend, pose.position, constraint.data.setup.position);
      }
    }
  };
  var PathConstraintSpacingTimeline = class extends ConstraintTimeline1 {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 18 /* pathConstraintSpacing */);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (constraint.active) {
        const pose = appliedPose ? constraint.applied : constraint.pose;
        pose.spacing = this.getAbsoluteValue(time, alpha, blend, pose.spacing, constraint.data.setup.spacing);
      }
    }
  };
  var PathConstraintMixTimeline = class extends CurveTimeline {
    constraintIndex;
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, `${19 /* pathConstraintMix */}|${constraintIndex}`);
      this.constraintIndex = constraintIndex;
    }
    getFrameEntries() {
      return 4;
    }
    /** Sets the time and color for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, mixRotate, mixX, mixY) {
      const frames = this.frames;
      frame <<= 2;
      frames[frame] = time;
      frames[
        frame + 1
        /*ROTATE*/
      ] = mixRotate;
      frames[
        frame + 2
        /*X*/
      ] = mixX;
      frames[
        frame + 3
        /*Y*/
      ] = mixY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (!constraint.active) return;
      const pose = appliedPose ? constraint.applied : constraint.pose;
      const frames = this.frames;
      if (time < frames[0]) {
        const setup = constraint.data.setup;
        switch (blend) {
          case 0 /* setup */:
            pose.mixRotate = setup.mixRotate;
            pose.mixX = setup.mixX;
            pose.mixY = setup.mixY;
            return;
          case 1 /* first */:
            pose.mixRotate += (setup.mixRotate - pose.mixRotate) * alpha;
            pose.mixX += (setup.mixX - pose.mixX) * alpha;
            pose.mixY += (setup.mixY - pose.mixY) * alpha;
        }
        return;
      }
      let rotate, x, y;
      const i = Timeline.search(
        frames,
        time,
        4
        /*ENTRIES*/
      );
      const curveType = this.curves[i >> 2];
      switch (curveType) {
        case 0: {
          const before = frames[i];
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          const t = (time - before) / (frames[
            i + 4
            /*ENTRIES*/
          ] - before);
          rotate += (frames[
            i + 4 + 1
            /*ROTATE*/
          ] - rotate) * t;
          x += (frames[
            i + 4 + 2
            /*X*/
          ] - x) * t;
          y += (frames[
            i + 4 + 3
            /*Y*/
          ] - y) * t;
          break;
        }
        case 1:
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          break;
        default:
          rotate = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          x = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */: {
          const setup = constraint.data.setup;
          pose.mixRotate = setup.mixRotate + (rotate - setup.mixRotate) * alpha;
          pose.mixX = setup.mixX + (x - setup.mixX) * alpha;
          pose.mixY = setup.mixY + (y - setup.mixY) * alpha;
          break;
        }
        case 1 /* first */:
        case 2 /* replace */:
          pose.mixRotate += (rotate - pose.mixRotate) * alpha;
          pose.mixX += (x - pose.mixX) * alpha;
          pose.mixY += (y - pose.mixY) * alpha;
          break;
        case 3 /* add */:
          pose.mixRotate += rotate * alpha;
          pose.mixX += x * alpha;
          pose.mixY += y * alpha;
          break;
      }
    }
  };
  var PhysicsConstraintTimeline = class extends ConstraintTimeline1 {
    /** @param constraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, bezierCount, constraintIndex, property) {
      super(frameCount, bezierCount, constraintIndex, property);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      if (this.constraintIndex === -1) {
        const value = time >= this.frames[0] ? this.getCurveValue(time) : 0;
        const constraints = skeleton.physics;
        for (const constraint of constraints) {
          if (constraint.active && this.global(constraint.data)) {
            const pose = appliedPose ? constraint.applied : constraint.pose;
            this.set(pose, this.getAbsoluteValue(time, alpha, blend, this.get(pose), this.get(constraint.data.setup), value));
          }
        }
      } else {
        const constraint = skeleton.constraints[this.constraintIndex];
        if (constraint.active) {
          const pose = appliedPose ? constraint.applied : constraint.pose;
          this.set(pose, this.getAbsoluteValue(time, alpha, blend, this.get(pose), this.get(constraint.data.setup)));
        }
      }
    }
  };
  var PhysicsConstraintInertiaTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 20 /* physicsConstraintInertia */);
    }
    get(pose) {
      return pose.inertia;
    }
    set(pose, value) {
      pose.inertia = value;
    }
    global(constraint) {
      return constraint.inertiaGlobal;
    }
  };
  var PhysicsConstraintStrengthTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 21 /* physicsConstraintStrength */);
    }
    get(pose) {
      return pose.strength;
    }
    set(pose, value) {
      pose.strength = value;
    }
    global(constraint) {
      return constraint.strengthGlobal;
    }
  };
  var PhysicsConstraintDampingTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 22 /* physicsConstraintDamping */);
    }
    get(pose) {
      return pose.damping;
    }
    set(pose, value) {
      pose.damping = value;
    }
    global(constraint) {
      return constraint.dampingGlobal;
    }
  };
  var PhysicsConstraintMassTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 23 /* physicsConstraintMass */);
    }
    get(pose) {
      return 1 / pose.massInverse;
    }
    set(pose, value) {
      pose.massInverse = 1 / value;
    }
    global(constraint) {
      return constraint.massGlobal;
    }
  };
  var PhysicsConstraintWindTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 24 /* physicsConstraintWind */);
    }
    get(pose) {
      return pose.wind;
    }
    set(pose, value) {
      pose.wind = value;
    }
    global(constraint) {
      return constraint.windGlobal;
    }
  };
  var PhysicsConstraintGravityTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 25 /* physicsConstraintGravity */);
    }
    get(pose) {
      return pose.gravity;
    }
    set(pose, value) {
      pose.gravity = value;
    }
    global(constraint) {
      return constraint.gravityGlobal;
    }
  };
  var PhysicsConstraintMixTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 26 /* physicsConstraintMix */);
    }
    get(pose) {
      return pose.mix;
    }
    set(pose, value) {
      pose.mix = value;
    }
    global(constraint) {
      return constraint.mixGlobal;
    }
  };
  var PhysicsConstraintResetTimeline = class _PhysicsConstraintResetTimeline extends Timeline {
    static propertyIds = [27 /* physicsConstraintReset */.toString()];
    /** The index of the physics constraint in {@link Skeleton.contraints} that will be reset when this timeline is
    * applied, or -1 if all physics constraints in the skeleton will be reset. */
    constraintIndex;
    /** @param constraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, constraintIndex) {
      super(frameCount, ..._PhysicsConstraintResetTimeline.propertyIds);
      this.constraintIndex = constraintIndex;
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive. */
    setFrame(frame, time) {
      this.frames[frame] = time;
    }
    /** Resets the physics constraint when frames > <code>lastTime</code> and <= <code>time</code>. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      let constraint;
      if (this.constraintIndex !== -1) {
        constraint = skeleton.constraints[this.constraintIndex];
        if (!constraint.active) return;
      }
      const frames = this.frames;
      if (lastTime > time) {
        this.apply(skeleton, lastTime, Number.MAX_VALUE, [], alpha, blend, direction, appliedPose);
        lastTime = -1;
      } else if (lastTime >= frames[frames.length - 1])
        return;
      if (time < frames[0]) return;
      if (lastTime < frames[0] || time >= frames[Timeline.search(frames, lastTime) + 1]) {
        if (constraint != null)
          constraint.reset(skeleton);
        else {
          for (const constraint2 of skeleton.physics) {
            if (constraint2.active) constraint2.reset(skeleton);
          }
        }
      }
    }
  };
  var SliderTimeline = class extends ConstraintTimeline1 {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 29 /* sliderTime */);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (constraint.active) {
        const pose = appliedPose ? constraint.applied : constraint.pose;
        pose.time = this.getAbsoluteValue(time, alpha, blend, pose.time, constraint.data.setup.time);
      }
    }
  };
  var SliderMixTimeline = class extends ConstraintTimeline1 {
    constructor(frameCount, bezierCount, constraintIndex) {
      super(frameCount, bezierCount, constraintIndex, 30 /* sliderMix */);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction, appliedPose) {
      const constraint = skeleton.constraints[this.constraintIndex];
      if (constraint.active) {
        const pose = appliedPose ? constraint.applied : constraint.pose;
        pose.mix = this.getAbsoluteValue(time, alpha, blend, pose.mix, constraint.data.setup.mix);
      }
    }
  };

  // spine-core/src/AnimationState.ts
  var AnimationState = class _AnimationState {
    static emptyAnimation = new Animation("<empty>", [], 0);
    /** The AnimationStateData to look up mix durations. */
    data;
    /** The list of tracks that currently have animations, which may contain null entries. */
    tracks = [];
    /** Multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower
     * or faster. Defaults to 1.
     *
     * See TrackEntry {@link TrackEntry#timeScale} for affecting a single animation. */
    timeScale = 1;
    unkeyedState = 0;
    events = [];
    listeners = [];
    queue = new EventQueue(this);
    propertyIDs = new StringSet();
    animationsChanged = false;
    trackEntryPool = new Pool(() => new TrackEntry());
    constructor(data) {
      this.data = data;
    }
    /** Increments each track entry {@link TrackEntry#trackTime()}, setting queued animations as current if needed. */
    update(delta) {
      delta *= this.timeScale;
      const tracks = this.tracks;
      for (let i = 0, n = tracks.length; i < n; i++) {
        const current = tracks[i];
        if (!current) continue;
        current.animationLast = current.nextAnimationLast;
        current.trackLast = current.nextTrackLast;
        let currentDelta = delta * current.timeScale;
        if (current.delay > 0) {
          current.delay -= currentDelta;
          if (current.delay > 0) continue;
          currentDelta = -current.delay;
          current.delay = 0;
        }
        let next = current.next;
        if (next) {
          const nextTime = current.trackLast - next.delay;
          if (nextTime >= 0) {
            next.delay = 0;
            next.trackTime += current.timeScale === 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
            current.trackTime += currentDelta;
            this.setCurrent(i, next, true);
            while (next.mixingFrom) {
              next.mixTime += delta;
              next = next.mixingFrom;
            }
            continue;
          }
        } else if (current.trackLast >= current.trackEnd && !current.mixingFrom) {
          tracks[i] = null;
          this.queue.end(current);
          this.clearNext(current);
          continue;
        }
        if (current.mixingFrom && this.updateMixingFrom(current, delta)) {
          let from = current.mixingFrom;
          current.mixingFrom = null;
          if (from) from.mixingTo = null;
          while (from) {
            this.queue.end(from);
            from = from.mixingFrom;
          }
        }
        current.trackTime += currentDelta;
      }
      this.queue.drain();
    }
    /** Returns true when all mixing from entries are complete. */
    updateMixingFrom(to, delta) {
      const from = to.mixingFrom;
      if (!from) return true;
      const finished = this.updateMixingFrom(from, delta);
      from.animationLast = from.nextAnimationLast;
      from.trackLast = from.nextTrackLast;
      if (to.nextTrackLast !== -1 && to.mixTime >= to.mixDuration) {
        if (from.totalAlpha === 0 || to.mixDuration === 0) {
          to.mixingFrom = from.mixingFrom;
          if (from.mixingFrom != null) from.mixingFrom.mixingTo = to;
          to.interruptAlpha = from.interruptAlpha;
          this.queue.end(from);
        }
        return finished;
      }
      from.trackTime += delta * from.timeScale;
      to.mixTime += delta;
      return false;
    }
    /** Poses the skeleton using the track entry animations. There are no side effects other than invoking listeners, so the
     * animation state can be applied to multiple skeletons to pose them identically.
     * @returns True if any animations were applied. */
    apply(skeleton) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      if (this.animationsChanged) this._animationsChanged();
      const events = this.events;
      const tracks = this.tracks;
      let applied = false;
      for (let i = 0, n = tracks.length; i < n; i++) {
        const current = tracks[i];
        if (!current || current.delay > 0) continue;
        applied = true;
        const blend = i === 0 ? 1 /* first */ : current.mixBlend;
        let alpha = current.alpha;
        if (current.mixingFrom)
          alpha *= this.applyMixingFrom(current, skeleton, blend);
        else if (current.trackTime >= current.trackEnd && !current.next)
          alpha = 0;
        let attachments = alpha >= current.alphaAttachmentThreshold;
        let animationLast = current.animationLast, animationTime = current.getAnimationTime(), applyTime = animationTime;
        let applyEvents = events;
        if (current.reverse) {
          applyTime = current.animation.duration - applyTime;
          applyEvents = null;
        }
        const timelines = current.animation.timelines;
        const timelineCount = timelines.length;
        if (i === 0 && alpha === 1 || blend === 3 /* add */) {
          if (i === 0) attachments = true;
          for (let ii = 0; ii < timelineCount; ii++) {
            Utils.webkit602BugfixHelper(alpha, blend);
            const timeline = timelines[ii];
            if (timeline instanceof AttachmentTimeline)
              this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
            else
              timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, blend, 0 /* in */, false);
          }
        } else {
          const timelineMode = current.timelineMode;
          const shortestRotation = current.shortestRotation;
          const firstFrame = !shortestRotation && current.timelinesRotation.length !== timelineCount << 1;
          if (firstFrame) current.timelinesRotation.length = timelineCount << 1;
          for (let ii = 0; ii < timelineCount; ii++) {
            const timeline = timelines[ii];
            const timelineBlend = timelineMode[ii] === SUBSEQUENT ? blend : 0 /* setup */;
            if (!shortestRotation && timeline instanceof RotateTimeline) {
              this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, current.timelinesRotation, ii << 1, firstFrame);
            } else if (timeline instanceof AttachmentTimeline) {
              this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
            } else {
              Utils.webkit602BugfixHelper(alpha, blend);
              timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, timelineBlend, 0 /* in */, false);
            }
          }
        }
        this.queueEvents(current, animationTime);
        events.length = 0;
        current.nextAnimationLast = animationTime;
        current.nextTrackLast = current.trackTime;
      }
      const setupState = this.unkeyedState + SETUP;
      const slots = skeleton.slots;
      for (let i = 0, n = skeleton.slots.length; i < n; i++) {
        const slot = slots[i];
        if (slot.attachmentState === setupState) {
          const attachmentName = slot.data.attachmentName;
          slot.pose.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
        }
      }
      this.unkeyedState += 2;
      this.queue.drain();
      return applied;
    }
    applyMixingFrom(to, skeleton, blend) {
      const from = to.mixingFrom;
      if (from.mixingFrom) this.applyMixingFrom(from, skeleton, blend);
      let mix = 0;
      if (to.mixDuration === 0) {
        mix = 1;
        if (blend === 1 /* first */) blend = 0 /* setup */;
      } else {
        mix = to.mixTime / to.mixDuration;
        if (mix > 1) mix = 1;
        if (blend !== 1 /* first */) blend = from.mixBlend;
      }
      const attachments = mix < from.mixAttachmentThreshold, drawOrder = mix < from.mixDrawOrderThreshold;
      const timelines = from.animation.timelines;
      const timelineCount = timelines.length;
      const alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
      let animationLast = from.animationLast, animationTime = from.getAnimationTime(), applyTime = animationTime;
      let events = null;
      if (from.reverse)
        applyTime = from.animation.duration - applyTime;
      else if (mix < from.eventThreshold)
        events = this.events;
      if (blend === 3 /* add */) {
        for (let i = 0; i < timelineCount; i++)
          timelines[i].apply(skeleton, animationLast, applyTime, events, alphaMix, blend, 1 /* out */, false);
      } else {
        const timelineMode = from.timelineMode;
        const timelineHoldMix = from.timelineHoldMix;
        const shortestRotation = from.shortestRotation;
        const firstFrame = !shortestRotation && from.timelinesRotation.length !== timelineCount << 1;
        if (firstFrame) from.timelinesRotation.length = timelineCount << 1;
        from.totalAlpha = 0;
        for (let i = 0; i < timelineCount; i++) {
          const timeline = timelines[i];
          let direction = 1 /* out */;
          let timelineBlend;
          let alpha = 0;
          switch (timelineMode[i]) {
            case SUBSEQUENT:
              if (!drawOrder && timeline instanceof DrawOrderTimeline) continue;
              timelineBlend = blend;
              alpha = alphaMix;
              break;
            case FIRST:
              timelineBlend = 0 /* setup */;
              alpha = alphaMix;
              break;
            case HOLD_SUBSEQUENT:
              timelineBlend = blend;
              alpha = alphaHold;
              break;
            case HOLD_FIRST:
              timelineBlend = 0 /* setup */;
              alpha = alphaHold;
              break;
            default: {
              timelineBlend = 0 /* setup */;
              const holdMix = timelineHoldMix[i];
              alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
              break;
            }
          }
          from.totalAlpha += alpha;
          if (!shortestRotation && timeline instanceof RotateTimeline)
            this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, from.timelinesRotation, i << 1, firstFrame);
          else if (timeline instanceof AttachmentTimeline)
            this.applyAttachmentTimeline(timeline, skeleton, applyTime, timelineBlend, attachments && alpha >= from.alphaAttachmentThreshold);
          else {
            Utils.webkit602BugfixHelper(alpha, blend);
            if (drawOrder && timeline instanceof DrawOrderTimeline && timelineBlend === 0 /* setup */)
              direction = 0 /* in */;
            timeline.apply(skeleton, animationLast, applyTime, events, alpha, timelineBlend, direction, false);
          }
        }
      }
      if (to.mixDuration > 0) this.queueEvents(from, animationTime);
      this.events.length = 0;
      from.nextAnimationLast = animationTime;
      from.nextTrackLast = from.trackTime;
      return mix;
    }
    applyAttachmentTimeline(timeline, skeleton, time, blend, attachments) {
      const slot = skeleton.slots[timeline.slotIndex];
      if (!slot.bone.active) return;
      if (time < timeline.frames[0]) {
        if (blend === 0 /* setup */ || blend === 1 /* first */)
          this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
      } else
        this.setAttachment(skeleton, slot, timeline.attachmentNames[Timeline.search(timeline.frames, time)], attachments);
      if (slot.attachmentState <= this.unkeyedState) slot.attachmentState = this.unkeyedState + SETUP;
    }
    setAttachment(skeleton, slot, attachmentName, attachments) {
      slot.pose.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
      if (attachments) slot.attachmentState = this.unkeyedState + CURRENT;
    }
    applyRotateTimeline(timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
      if (firstFrame) timelinesRotation[i] = 0;
      if (alpha === 1) {
        timeline.apply(skeleton, 0, time, null, 1, blend, 0 /* in */, false);
        return;
      }
      const bone = skeleton.bones[timeline.boneIndex];
      if (!bone.active) return;
      const pose = bone.pose, setup = bone.data.setup;
      const frames = timeline.frames;
      let r1 = 0, r2 = 0;
      if (time < frames[0]) {
        switch (blend) {
          // biome-ignore lint/suspicious/noFallthroughSwitchClause: reference runtime does fall through
          case 0 /* setup */:
            pose.rotation = setup.rotation;
          // biome-ignore lint/suspicious/useDefaultSwitchClauseLast: needed for fall through
          default:
            return;
          case 1 /* first */:
            r1 = pose.rotation;
            r2 = setup.rotation;
        }
      } else {
        r1 = blend === 0 /* setup */ ? setup.rotation : pose.rotation;
        r2 = setup.rotation + timeline.getCurveValue(time);
      }
      let total = 0, diff = r2 - r1;
      diff -= Math.ceil(diff / 360 - 0.5) * 360;
      if (diff === 0) {
        total = timelinesRotation[i];
      } else {
        let lastTotal = 0, lastDiff = 0;
        if (firstFrame) {
          lastTotal = 0;
          lastDiff = diff;
        } else {
          lastTotal = timelinesRotation[i];
          lastDiff = timelinesRotation[i + 1];
        }
        const loops = lastTotal - lastTotal % 360;
        total = diff + loops;
        let current = diff >= 0, dir = lastTotal >= 0;
        if (Math.abs(lastDiff) <= 90 && MathUtils.signum(lastDiff) !== MathUtils.signum(diff)) {
          if (Math.abs(lastTotal - loops) > 180) {
            total += 360 * MathUtils.signum(lastTotal);
            dir = current;
          } else if (loops !== 0)
            total -= 360 * MathUtils.signum(lastTotal);
          else
            dir = current;
        }
        if (dir !== current) total += 360 * MathUtils.signum(lastTotal);
        timelinesRotation[i] = total;
      }
      timelinesRotation[i + 1] = diff;
      pose.rotation = r1 + total * alpha;
    }
    queueEvents(entry, animationTime) {
      const animationStart = entry.animationStart, animationEnd = entry.animationEnd;
      const duration = animationEnd - animationStart;
      const trackLastWrapped = entry.trackLast % duration;
      const events = this.events;
      let i = 0, n = events.length;
      for (; i < n; i++) {
        const event = events[i];
        if (event.time < trackLastWrapped) break;
        if (event.time > animationEnd) continue;
        this.queue.event(entry, event);
      }
      let complete = false;
      if (entry.loop) {
        if (duration === 0)
          complete = true;
        else {
          const cycles = Math.floor(entry.trackTime / duration);
          complete = cycles > 0 && cycles > Math.floor(entry.trackLast / duration);
        }
      } else
        complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
      if (complete) this.queue.complete(entry);
      for (; i < n; i++) {
        const event = events[i];
        if (event.time < animationStart) continue;
        this.queue.event(entry, event);
      }
    }
    /** Removes all animations from all tracks, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTracks() {
      const oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;
      for (let i = 0, n = this.tracks.length; i < n; i++)
        this.clearTrack(i);
      this.tracks.length = 0;
      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    }
    /** Removes all animations from the track, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTrack(trackIndex) {
      if (trackIndex >= this.tracks.length) return;
      const current = this.tracks[trackIndex];
      if (!current) return;
      this.queue.end(current);
      this.clearNext(current);
      let entry = current;
      while (true) {
        const from = entry.mixingFrom;
        if (!from) break;
        this.queue.end(from);
        entry.mixingFrom = null;
        entry.mixingTo = null;
        entry = from;
      }
      this.tracks[current.trackIndex] = null;
      this.queue.drain();
    }
    setCurrent(index, current, interrupt) {
      const from = this.expandToIndex(index);
      this.tracks[index] = current;
      current.previous = null;
      if (from) {
        if (interrupt) this.queue.interrupt(from);
        current.mixingFrom = from;
        from.mixingTo = current;
        current.mixTime = 0;
        if (from.mixingFrom && from.mixDuration > 0)
          current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
        from.timelinesRotation.length = 0;
      }
      this.queue.start(current);
    }
    setAnimation(trackIndex, animationNameOrAnimation, loop = false) {
      if (typeof animationNameOrAnimation === "string")
        return this.setAnimation1(trackIndex, animationNameOrAnimation, loop);
      return this.setAnimation2(trackIndex, animationNameOrAnimation, loop);
    }
    setAnimation1(trackIndex, animationName, loop = false) {
      const animation = this.data.skeletonData.findAnimation(animationName);
      if (!animation) throw new Error(`Animation not found: ${animationName}`);
      return this.setAnimation2(trackIndex, animation, loop);
    }
    /** Sets the current animation for a track, discarding any queued animations.
     * <p>
     * If the formerly current track entry is for the same animation and was never applied to a skeleton, it is replaced (not mixed
     * from).
     * @param loop If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     *           duration. In either case {@link TrackEntry#getTrackEnd()} determines when the track is cleared.
     * @return A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose(TrackEntry)} event occurs. */
    setAnimation2(trackIndex, animation, loop = false) {
      if (trackIndex < 0) throw new Error("trackIndex must be >= 0.");
      if (!animation) throw new Error("animation cannot be null.");
      let interrupt = true;
      let current = this.expandToIndex(trackIndex);
      if (current) {
        if (current.nextTrackLast === -1 && current.animation === animation) {
          this.tracks[trackIndex] = current.mixingFrom;
          this.queue.interrupt(current);
          this.queue.end(current);
          this.clearNext(current);
          current = current.mixingFrom;
          interrupt = false;
        } else
          this.clearNext(current);
      }
      const entry = this.trackEntry(trackIndex, animation, loop, current);
      this.setCurrent(trackIndex, entry, interrupt);
      this.queue.drain();
      return entry;
    }
    addAnimation(trackIndex, animationNameOrAnimation, loop = false, delay = 0) {
      if (typeof animationNameOrAnimation === "string")
        return this.addAnimation1(trackIndex, animationNameOrAnimation, loop, delay);
      return this.addAnimation2(trackIndex, animationNameOrAnimation, loop, delay);
    }
    addAnimation1(trackIndex, animationName, loop = false, delay = 0) {
      const animation = this.data.skeletonData.findAnimation(animationName);
      if (!animation) throw new Error(`Animation not found: ${animationName}`);
      return this.addAnimation2(trackIndex, animation, loop, delay);
    }
    addAnimation2(trackIndex, animation, loop = false, delay = 0) {
      if (!animation) throw new Error("animation cannot be null.");
      let last = this.expandToIndex(trackIndex);
      if (last) {
        while (last.next)
          last = last.next;
      }
      const entry = this.trackEntry(trackIndex, animation, loop, last);
      if (!last) {
        this.setCurrent(trackIndex, entry, true);
        this.queue.drain();
        if (delay < 0) delay = 0;
      } else {
        last.next = entry;
        entry.previous = last;
        if (delay <= 0) delay = Math.max(delay + last.getTrackComplete() - entry.mixDuration, 0);
      }
      entry.delay = delay;
      return entry;
    }
    /** Sets an empty animation for a track, discarding any queued animations, and sets the track entry's
     * {@link TrackEntry#mixduration}. An empty animation has no timelines and serves as a placeholder for mixing in or out.
     *
     * Mixing out is done by setting an empty animation with a mix duration using either {@link #setEmptyAnimation()},
     * {@link #setEmptyAnimations()}, or {@link #addEmptyAnimation()}. Mixing to an empty animation causes
     * the previous animation to be applied less and less over the mix duration. Properties keyed in the previous animation
     * transition to the value from lower tracks or to the setup pose value if no lower tracks key the property. A mix duration of
     * 0 still mixes out over one frame.
     *
     * Mixing in is done by first setting an empty animation, then adding an animation using
     * {@link #addAnimation()} and on the returned track entry, set the
     * {@link TrackEntry#setMixDuration()}. Mixing from an empty animation causes the new animation to be applied more and
     * more over the mix duration. Properties keyed in the new animation transition from the value from lower tracks or from the
     * setup pose value if no lower tracks key the property to the value keyed in the new animation.
     *
     * See <a href='https://esotericsoftware.com/spine-applying-animations/#Empty-animations'>Empty animations</a> in the Spine
     * Runtimes Guide. */
    setEmptyAnimation(trackIndex, mixDuration = 0) {
      const entry = this.setAnimation(trackIndex, _AnimationState.emptyAnimation, false);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    }
    /** Adds an empty animation to be played after the current or last queued animation for a track, and sets the track entry's
     * {@link TrackEntry#getMixDuration()}. If the track has no entries, it is equivalent to calling
     * {@link #setEmptyAnimation(int, float)}.
     *
     * See {@link #setEmptyAnimation(int, float)} and
     * <a href='https://esotericsoftware.com/spine-applying-animations/#Empty-animations'>Empty animations</a> in the Spine
     * Runtimes Guide.
     * @param delay If > 0, sets {@link TrackEntry#getDelay()}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration plus the specified <code>delay</code> (ie the mix ends at (<code>delay</code> = 0) or
     *           before (<code>delay</code> < 0) the previous track entry duration). If the previous entry is looping, its next
     *           loop completion is used instead of its duration.
     * @return A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose(TrackEntry)} event occurs. */
    addEmptyAnimation(trackIndex, mixDuration = 0, delay = 0) {
      const entry = this.addAnimation(trackIndex, _AnimationState.emptyAnimation, false, delay);
      if (delay <= 0) entry.delay = Math.max(entry.delay + entry.mixDuration - mixDuration, 0);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    }
    /** Sets an empty animation for every track, discarding any queued animations, and mixes to it over the specified mix duration.
     *
     * See <a href='https://esotericsoftware.com/spine-applying-animations/#Empty-animations'>Empty animations</a> in the Spine
     * Runtimes Guide. */
    setEmptyAnimations(mixDuration = 0) {
      const oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;
      for (let i = 0, n = this.tracks.length; i < n; i++) {
        const current = this.tracks[i];
        if (current) this.setEmptyAnimation(current.trackIndex, mixDuration);
      }
      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    }
    expandToIndex(index) {
      if (index < this.tracks.length) return this.tracks[index];
      Utils.ensureArrayCapacity(this.tracks, index + 1, null);
      this.tracks.length = index + 1;
      return null;
    }
    /** @param last May be null. */
    trackEntry(trackIndex, animation, loop, last) {
      const entry = this.trackEntryPool.obtain();
      entry.reset();
      entry.trackIndex = trackIndex;
      entry.animation = animation;
      entry.loop = loop;
      entry.holdPrevious = false;
      entry.reverse = false;
      entry.shortestRotation = false;
      entry.eventThreshold = 0;
      entry.alphaAttachmentThreshold = 0;
      entry.mixAttachmentThreshold = 0;
      entry.mixDrawOrderThreshold = 0;
      entry.animationStart = 0;
      entry.animationEnd = animation.duration;
      entry.animationLast = -1;
      entry.nextAnimationLast = -1;
      entry.delay = 0;
      entry.trackTime = 0;
      entry.trackLast = -1;
      entry.nextTrackLast = -1;
      entry.trackEnd = Number.MAX_VALUE;
      entry.timeScale = 1;
      entry.alpha = 1;
      entry.mixTime = 0;
      entry.mixDuration = !last ? 0 : this.data.getMix(last.animation, animation);
      entry.interruptAlpha = 1;
      entry.totalAlpha = 0;
      entry.mixBlend = 2 /* replace */;
      return entry;
    }
    /** Removes the {@link TrackEntry#getNext() next entry} and all entries after it for the specified entry. */
    clearNext(entry) {
      let next = entry.next;
      while (next) {
        this.queue.dispose(next);
        next = next.next;
      }
      entry.next = null;
    }
    _animationsChanged() {
      this.animationsChanged = false;
      this.propertyIDs.clear();
      const tracks = this.tracks;
      for (let i = 0, n = tracks.length; i < n; i++) {
        let entry = tracks[i];
        if (!entry) continue;
        while (entry.mixingFrom)
          entry = entry.mixingFrom;
        do {
          if (!entry.mixingTo || entry.mixBlend !== 3 /* add */) this.computeHold(entry);
          entry = entry.mixingTo;
        } while (entry);
      }
    }
    computeHold(entry) {
      const to = entry.mixingTo;
      const timelines = entry.animation.timelines;
      const timelinesCount = entry.animation.timelines.length;
      const timelineMode = entry.timelineMode;
      timelineMode.length = timelinesCount;
      const timelineHoldMix = entry.timelineHoldMix;
      timelineHoldMix.length = 0;
      const propertyIDs = this.propertyIDs;
      if (to?.holdPrevious) {
        for (let i = 0; i < timelinesCount; i++)
          timelineMode[i] = propertyIDs.addAll(timelines[i].getPropertyIds()) ? HOLD_FIRST : HOLD_SUBSEQUENT;
        return;
      }
      outer:
        for (let i = 0; i < timelinesCount; i++) {
          const timeline = timelines[i];
          const ids = timeline.getPropertyIds();
          if (!propertyIDs.addAll(ids))
            timelineMode[i] = SUBSEQUENT;
          else if (!to || timeline instanceof AttachmentTimeline || timeline instanceof DrawOrderTimeline || timeline instanceof EventTimeline || !to.animation.hasTimeline(ids)) {
            timelineMode[i] = FIRST;
          } else {
            for (let next = to.mixingTo; next; next = next.mixingTo) {
              if (next.animation.hasTimeline(ids)) continue;
              if (entry.mixDuration > 0) {
                timelineMode[i] = HOLD_MIX;
                timelineHoldMix[i] = next;
                continue outer;
              }
              break;
            }
            timelineMode[i] = HOLD_FIRST;
          }
        }
    }
    /** Returns the track entry for the animation currently playing on the track, or null if no animation is currently playing. */
    getCurrent(trackIndex) {
      if (trackIndex >= this.tracks.length) return null;
      return this.tracks[trackIndex];
    }
    /** Adds a listener to receive events for all track entries. */
    addListener(listener) {
      if (!listener) throw new Error("listener cannot be null.");
      this.listeners.push(listener);
    }
    /** Removes the listener added with {@link #addListener()}. */
    removeListener(listener) {
      const index = this.listeners.indexOf(listener);
      if (index >= 0) this.listeners.splice(index, 1);
    }
    /** Removes all listeners added with {@link #addListener()}. */
    clearListeners() {
      this.listeners.length = 0;
    }
    /** Discards all listener notifications that have not yet been delivered. This can be useful to call from an
     * {@link AnimationStateListener} when it is known that further notifications that may have been already queued for delivery
     * are not wanted because new animations are being set. */
    clearListenerNotifications() {
      this.queue.clear();
    }
  };
  var TrackEntry = class {
    /** The animation to apply for this track entry. */
    animation = null;
    previous = null;
    /** The animation queued to start after this animation, or null. `next` makes up a linked list. */
    next = null;
    /** The track entry for the previous animation when mixing from the previous animation to this animation, or null if no
     * mixing is currently occuring. When mixing from multiple animations, `mixingFrom` makes up a linked list. */
    mixingFrom = null;
    /** The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is
     * currently occuring. When mixing to multiple animations, `mixingTo` makes up a linked list. */
    mixingTo = null;
    /** The listener for events generated by this track entry, or null.
     *
     * A track entry returned from {@link AnimationState#setAnimation()} is already the current animation
     * for the track, so the track entry listener {@link AnimationStateListener#start()} will not be called. */
    listener = null;
    /** The index of the track where this track entry is either current or queued.
     *
     * See {@link AnimationState#getCurrent()}. */
    trackIndex = 0;
    /** If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     * duration. */
    loop = false;
    /** If true, when mixing from the previous animation to this animation, the previous animation is applied as normal instead
     * of being mixed out.
     *
     * When mixing between animations that key the same property, if a lower track also keys that property then the value will
     * briefly dip toward the lower track value during the mix. This happens because the first animation mixes from 100% to 0%
     * while the second animation mixes from 0% to 100%. Setting `holdPrevious` to true applies the first animation
     * at 100% during the mix so the lower track value is overwritten. Such dipping does not occur on the lowest track which
     * keys the property, only when a higher track also keys the property.
     *
     * Snapping will occur if `holdPrevious` is true and this animation does not key all the same properties as the
     * previous animation. */
    holdPrevious = false;
    reverse = false;
    shortestRotation = false;
    /** When the mix percentage ({@link #mixTime} / {@link #mixDuration}) is less than the
     * `eventThreshold`, event timelines are applied while this animation is being mixed out. Defaults to 0, so event
     * timelines are not applied while this animation is being mixed out. */
    eventThreshold = 0;
    /** When the mix percentage ({@link #mixtime} / {@link #mixDuration}) is less than the
     * `attachmentThreshold`, attachment timelines are applied while this animation is being mixed out. Defaults to
     * 0, so attachment timelines are not applied while this animation is being mixed out. */
    mixAttachmentThreshold = 0;
    /** When {@link #getAlpha()} is greater than <code>alphaAttachmentThreshold</code>, attachment timelines are applied.
     * Defaults to 0, so attachment timelines are always applied. */
    alphaAttachmentThreshold = 0;
    /** When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
     * <code>mixDrawOrderThreshold</code>, draw order timelines are applied while this animation is being mixed out. Defaults to
     * 0, so draw order timelines are not applied while this animation is being mixed out. */
    mixDrawOrderThreshold = 0;
    /** Seconds when this animation starts, both initially and after looping. Defaults to 0.
     *
     * When changing the `animationStart` time, it often makes sense to set {@link #animationLast} to the same
     * value to prevent timeline keys before the start time from triggering. */
    animationStart = 0;
    /** Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will
     * loop back to {@link #animationStart} at this time. Defaults to the animation {@link Animation#duration}. */
    animationEnd = 0;
    /** The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this
     * animation is applied, event timelines will fire all events between the `animationLast` time (exclusive) and
     * `animationTime` (inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation
     * is applied. */
    animationLast = 0;
    nextAnimationLast = 0;
    /** Seconds to postpone playing the animation. When this track entry is the current track entry, `delay`
     * postpones incrementing the {@link #trackTime}. When this track entry is queued, `delay` is the time from
     * the start of the previous animation to when this track entry will become the current track entry (ie when the previous
     * track entry {@link TrackEntry#trackTime} >= this track entry's `delay`).
     *
     * {@link #timeScale} affects the delay. */
    delay = 0;
    /** Current time in seconds this track entry has been the current track entry. The track time determines
     * {@link #animationTime}. The track time can be set to start the animation at a time other than 0, without affecting
     * looping. */
    trackTime = 0;
    trackLast = 0;
    nextTrackLast = 0;
    /** The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float
     * value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time
     * is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the
     * properties keyed by the animation are set to the setup pose and the track is cleared.
     *
     * It may be desired to use {@link AnimationState#addEmptyAnimation()} rather than have the animation
     * abruptly cease being applied. */
    trackEnd = 0;
    /** Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or
     * faster. Defaults to 1.
     *
     * {@link #mixTime} is not affected by track entry time scale, so {@link #mixDuration} may need to be adjusted to
     * match the animation speed.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, assuming time scale to be 1. If
     * the time scale is not 1, the delay may need to be adjusted.
     *
     * See AnimationState {@link AnimationState#timeScale} for affecting all animations. */
    timeScale = 0;
    /** Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults
     * to 1, which overwrites the skeleton's current pose with this animation.
     *
     * Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to
     * use alpha on track 0 if the skeleton pose is from the last frame render. */
    alpha = 0;
    /** Seconds from 0 to the {@link #getMixDuration()} when mixing from the previous animation to this animation. May be
     * slightly more than `mixDuration` when the mix is complete. */
    mixTime = 0;
    /** Seconds for mixing from the previous animation to this animation. Defaults to the value provided by AnimationStateData
     * {@link AnimationStateData#getMix()} based on the animation before this animation (if any).
     *
     * A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the
     * properties it was animating.
     *
     * The `mixDuration` can be set manually rather than use the value from
     * {@link AnimationStateData#getMix()}. In that case, the `mixDuration` can be set for a new
     * track entry only before {@link AnimationState#update(float)} is next called.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, not a mix duration set
     * afterward. */
    mixDuration = 0;
    interruptAlpha = 0;
    totalAlpha = 0;
    /** Sets both {@link #getMixDuration()} and {@link #getDelay()}.
     * @param delay If > 0, sets {@link TrackEntry#getDelay()}. If <= 0, the delay set is the duration of the previous track
     *           entry minus the specified mix duration plus the specified <code>delay</code> (ie the mix ends at
     *           (<code>delay</code> = 0) or before (<code>delay</code> < 0) the previous track entry duration). If the previous
     *           entry is looping, its next loop completion is used instead of its duration. */
    setMixDuration(mixDuration, delay) {
      this.mixDuration = mixDuration;
      if (delay !== void 0) {
        if (delay <= 0) {
          if (this.previous != null)
            delay = Math.max(delay + this.previous.getTrackComplete() - mixDuration, 0);
          else
            delay = 0;
        }
        this.delay = delay;
      }
    }
    /** Controls how properties keyed in the animation are mixed with lower tracks. Defaults to {@link MixBlend#replace}, which
     * replaces the values from the lower tracks with the animation values. {@link MixBlend#add} adds the animation values to
     * the values from the lower tracks.
     *
     * The `mixBlend` can be set for a new track entry only before {@link AnimationState#apply()} is next
     * called. */
    mixBlend = 2 /* replace */;
    timelineMode = [];
    timelineHoldMix = [];
    timelinesRotation = [];
    reset() {
      this.next = null;
      this.previous = null;
      this.mixingFrom = null;
      this.mixingTo = null;
      this.animation = null;
      this.listener = null;
      this.timelineMode.length = 0;
      this.timelineHoldMix.length = 0;
      this.timelinesRotation.length = 0;
    }
    /** Uses {@link #trackTime} to compute the `animationTime`, which is between {@link #animationStart}
     * and {@link #animationEnd}. When the `trackTime` is 0, the `animationTime` is equal to the
     * `animationStart` time. */
    getAnimationTime() {
      if (this.loop) {
        const duration = this.animationEnd - this.animationStart;
        if (duration === 0) return this.animationStart;
        return this.trackTime % duration + this.animationStart;
      }
      return Math.min(this.trackTime + this.animationStart, this.animationEnd);
    }
    setAnimationLast(animationLast) {
      this.animationLast = animationLast;
      this.nextAnimationLast = animationLast;
    }
    /** Returns true if at least one loop has been completed.
     *
     * See {@link AnimationStateListener#complete()}. */
    isComplete() {
      return this.trackTime >= this.animationEnd - this.animationStart;
    }
    /** Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the
     * long way around when using {@link #alpha} and starting animations on other tracks.
     *
     * Mixing with {@link MixBlend#replace} involves finding a rotation between two others, which has two possible solutions:
     * the short way or the long way around. The two rotations likely change over time, so which direction is the short or long
     * way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the
     * long way. TrackEntry chooses the short way the first time it is applied and remembers that direction. */
    resetRotationDirections() {
      this.timelinesRotation.length = 0;
    }
    getTrackComplete() {
      const duration = this.animationEnd - this.animationStart;
      if (duration !== 0) {
        if (this.loop) return duration * (1 + (this.trackTime / duration | 0));
        if (this.trackTime < duration) return duration;
      }
      return this.trackTime;
    }
    /** Returns true if this track entry has been applied at least once.
     * <p>
     * See {@link AnimationState#apply(Skeleton)}. */
    wasApplied() {
      return this.nextTrackLast !== -1;
    }
    /** Returns true if there is a {@link #getNext()} track entry and it will become the current track entry during the next
     * {@link AnimationState#update(float)}. */
    isNextReady() {
      return this.next != null && this.nextTrackLast - this.next.delay >= 0;
    }
  };
  var EventQueue = class {
    objects = [];
    drainDisabled = false;
    animState;
    constructor(animState) {
      this.animState = animState;
    }
    start(entry) {
      this.objects.push(0 /* start */);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    }
    interrupt(entry) {
      this.objects.push(1 /* interrupt */);
      this.objects.push(entry);
    }
    end(entry) {
      this.objects.push(2 /* end */);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    }
    dispose(entry) {
      this.objects.push(3 /* dispose */);
      this.objects.push(entry);
    }
    complete(entry) {
      this.objects.push(4 /* complete */);
      this.objects.push(entry);
    }
    event(entry, event) {
      this.objects.push(5 /* event */);
      this.objects.push(entry);
      this.objects.push(event);
    }
    drain() {
      if (this.drainDisabled) return;
      this.drainDisabled = true;
      const listeners = this.animState.listeners;
      const objects = this.objects;
      for (let i = 0; i < objects.length; i += 2) {
        const type = objects[i];
        const entry = objects[i + 1];
        switch (type) {
          case 0 /* start */:
            if (entry.listener?.start) entry.listener.start(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.start) listener.start(entry);
            }
            break;
          case 1 /* interrupt */:
            if (entry.listener?.interrupt) entry.listener.interrupt(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.interrupt) listener.interrupt(entry);
            }
            break;
          // biome-ignore lint/suspicious/noFallthroughSwitchClause: reference runtime does fall through
          case 2 /* end */:
            if (entry.listener?.end) entry.listener.end(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.end) listener.end(entry);
            }
          // Fall through.
          case 3 /* dispose */:
            if (entry.listener?.dispose) entry.listener.dispose(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.dispose) listener.dispose(entry);
            }
            this.animState.trackEntryPool.free(entry);
            break;
          case 4 /* complete */:
            if (entry.listener?.complete) entry.listener.complete(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.complete) listener.complete(entry);
            }
            break;
          case 5 /* event */: {
            const event = objects[i++ + 2];
            if (entry.listener?.event) entry.listener.event(entry, event);
            for (let ii = 0; ii < listeners.length; ii++) {
              const listener = listeners[ii];
              if (listener.event) listener.event(entry, event);
            }
            break;
          }
        }
      }
      this.clear();
      this.drainDisabled = false;
    }
    clear() {
      this.objects.length = 0;
    }
  };
  var EventType = /* @__PURE__ */ ((EventType2) => {
    EventType2[EventType2["start"] = 0] = "start";
    EventType2[EventType2["interrupt"] = 1] = "interrupt";
    EventType2[EventType2["end"] = 2] = "end";
    EventType2[EventType2["dispose"] = 3] = "dispose";
    EventType2[EventType2["complete"] = 4] = "complete";
    EventType2[EventType2["event"] = 5] = "event";
    return EventType2;
  })(EventType || {});
  var AnimationStateAdapter = class {
    start(entry) {
    }
    interrupt(entry) {
    }
    end(entry) {
    }
    dispose(entry) {
    }
    complete(entry) {
    }
    event(entry, event) {
    }
  };
  var SUBSEQUENT = 0;
  var FIRST = 1;
  var HOLD_SUBSEQUENT = 2;
  var HOLD_FIRST = 3;
  var HOLD_MIX = 4;
  var SETUP = 1;
  var CURRENT = 2;

  // spine-core/src/AnimationStateData.ts
  var AnimationStateData = class {
    /** The SkeletonData to look up animations when they are specified by name. */
    skeletonData;
    animationToMixTime = {};
    /** The mix duration to use when no mix duration has been defined between two animations. */
    defaultMix = 0;
    constructor(skeletonData) {
      if (!skeletonData) throw new Error("skeletonData cannot be null.");
      this.skeletonData = skeletonData;
    }
    setMix(from, to, duration) {
      if (typeof from === "string")
        return this.setMix1(from, to, duration);
      return this.setMix2(from, to, duration);
    }
    setMix1(fromName, toName, duration) {
      const from = this.skeletonData.findAnimation(fromName);
      if (!from) throw new Error(`Animation not found: ${fromName}`);
      const to = this.skeletonData.findAnimation(toName);
      if (!to) throw new Error(`Animation not found: ${toName}`);
      this.setMix2(from, to, duration);
    }
    setMix2(from, to, duration) {
      if (!from) throw new Error("from cannot be null.");
      if (!to) throw new Error("to cannot be null.");
      const key = `${from.name}.${to.name}`;
      this.animationToMixTime[key] = duration;
    }
    /** Returns the mix duration to use when changing from the specified animation to the other, or the {@link #defaultMix} if
      * no mix duration has been set. */
    getMix(from, to) {
      const key = `${from.name}.${to.name}`;
      const value = this.animationToMixTime[key];
      return value === void 0 ? this.defaultMix : value;
    }
  };

  // spine-core/src/Texture.ts
  var Texture = class {
    _image;
    constructor(image) {
      this._image = image;
    }
    getImage() {
      return this._image;
    }
  };
  var TextureFilter = /* @__PURE__ */ ((TextureFilter2) => {
    TextureFilter2[TextureFilter2["Nearest"] = 9728] = "Nearest";
    TextureFilter2[TextureFilter2["Linear"] = 9729] = "Linear";
    TextureFilter2[TextureFilter2["MipMap"] = 9987] = "MipMap";
    TextureFilter2[TextureFilter2["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
    TextureFilter2[TextureFilter2["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
    TextureFilter2[TextureFilter2["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
    TextureFilter2[TextureFilter2["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
    return TextureFilter2;
  })(TextureFilter || {});
  var TextureWrap = /* @__PURE__ */ ((TextureWrap2) => {
    TextureWrap2[TextureWrap2["MirroredRepeat"] = 33648] = "MirroredRepeat";
    TextureWrap2[TextureWrap2["ClampToEdge"] = 33071] = "ClampToEdge";
    TextureWrap2[TextureWrap2["Repeat"] = 10497] = "Repeat";
    return TextureWrap2;
  })(TextureWrap || {});
  var TextureRegion = class {
    texture;
    u = 0;
    v = 0;
    u2 = 0;
    v2 = 0;
    width = 0;
    height = 0;
    degrees = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
  };
  var FakeTexture = class extends Texture {
    setFilters(minFilter, magFilter) {
    }
    setWraps(uWrap, vWrap) {
    }
    dispose() {
    }
  };

  // spine-core/src/TextureAtlas.ts
  var TextureAtlas = class {
    pages = [];
    regions = [];
    constructor(atlasText) {
      const reader = new TextureAtlasReader(atlasText);
      const entry = new Array(4);
      const pageFields = {};
      pageFields.size = (page2) => {
        page2.width = parseInt(entry[1]);
        page2.height = parseInt(entry[2]);
      };
      pageFields.format = () => {
      };
      pageFields.filter = (page2) => {
        page2.minFilter = Utils.enumValue(TextureFilter, entry[1]);
        page2.magFilter = Utils.enumValue(TextureFilter, entry[2]);
      };
      pageFields.repeat = (page2) => {
        if (entry[1].indexOf("x") !== -1) page2.uWrap = 10497 /* Repeat */;
        if (entry[1].indexOf("y") !== -1) page2.vWrap = 10497 /* Repeat */;
      };
      pageFields.pma = (page2) => {
        page2.pma = entry[1] === "true";
      };
      var regionFields = {};
      regionFields.xy = (region) => {
        region.x = parseInt(entry[1]);
        region.y = parseInt(entry[2]);
      };
      regionFields.size = (region) => {
        region.width = parseInt(entry[1]);
        region.height = parseInt(entry[2]);
      };
      regionFields.bounds = (region) => {
        region.x = parseInt(entry[1]);
        region.y = parseInt(entry[2]);
        region.width = parseInt(entry[3]);
        region.height = parseInt(entry[4]);
      };
      regionFields.offset = (region) => {
        region.offsetX = parseInt(entry[1]);
        region.offsetY = parseInt(entry[2]);
      };
      regionFields.orig = (region) => {
        region.originalWidth = parseInt(entry[1]);
        region.originalHeight = parseInt(entry[2]);
      };
      regionFields.offsets = (region) => {
        region.offsetX = parseInt(entry[1]);
        region.offsetY = parseInt(entry[2]);
        region.originalWidth = parseInt(entry[3]);
        region.originalHeight = parseInt(entry[4]);
      };
      regionFields.rotate = (region) => {
        const value = entry[1];
        if (value === "true")
          region.degrees = 90;
        else if (value !== "false")
          region.degrees = parseInt(value);
      };
      regionFields.index = (region) => {
        region.index = parseInt(entry[1]);
      };
      let line = reader.readLine();
      while (line && line.trim().length === 0)
        line = reader.readLine();
      while (true) {
        if (!line || line.trim().length === 0) break;
        if (reader.readEntry(entry, line) === 0) break;
        line = reader.readLine();
      }
      let page = null;
      let names = null;
      let values = null;
      while (true) {
        if (line === null) break;
        if (line.trim().length === 0) {
          page = null;
          line = reader.readLine();
        } else if (!page) {
          page = new TextureAtlasPage(line.trim());
          while (true) {
            if (reader.readEntry(entry, line = reader.readLine()) === 0) break;
            const field = pageFields[entry[0]];
            if (field) field(page);
          }
          this.pages.push(page);
        } else {
          const region = new TextureAtlasRegion(page, line);
          while (true) {
            const count = reader.readEntry(entry, line = reader.readLine());
            if (count === 0) break;
            const field = regionFields[entry[0]];
            if (field)
              field(region);
            else {
              if (!names) names = [];
              if (!values) values = [];
              names.push(entry[0]);
              const entryValues = [];
              for (let i = 0; i < count; i++)
                entryValues.push(parseInt(entry[i + 1]));
              values.push(entryValues);
            }
          }
          if (region.originalWidth === 0 && region.originalHeight === 0) {
            region.originalWidth = region.width;
            region.originalHeight = region.height;
          }
          if (names && names.length > 0 && values && values.length > 0) {
            region.names = names;
            region.values = values;
            names = null;
            values = null;
          }
          region.u = region.x / page.width;
          region.v = region.y / page.height;
          if (region.degrees === 90) {
            region.u2 = (region.x + region.height) / page.width;
            region.v2 = (region.y + region.width) / page.height;
          } else {
            region.u2 = (region.x + region.width) / page.width;
            region.v2 = (region.y + region.height) / page.height;
          }
          this.regions.push(region);
        }
      }
    }
    findRegion(name) {
      for (let i = 0; i < this.regions.length; i++) {
        if (this.regions[i].name === name) {
          return this.regions[i];
        }
      }
      return null;
    }
    setTextures(assetManager, pathPrefix = "") {
      for (const page of this.pages)
        page.setTexture(assetManager.get(pathPrefix + page.name));
    }
    dispose() {
      for (let i = 0; i < this.pages.length; i++) {
        this.pages[i].texture?.dispose();
      }
    }
  };
  var TextureAtlasReader = class {
    lines;
    index = 0;
    constructor(text) {
      this.lines = text.split(/\r\n|\r|\n/);
    }
    readLine() {
      if (this.index >= this.lines.length)
        return null;
      return this.lines[this.index++];
    }
    readEntry(entry, line) {
      if (!line) return 0;
      line = line.trim();
      if (line.length === 0) return 0;
      const colon = line.indexOf(":");
      if (colon === -1) return 0;
      entry[0] = line.substr(0, colon).trim();
      for (let i = 1, lastMatch = colon + 1; ; i++) {
        const comma = line.indexOf(",", lastMatch);
        if (comma === -1) {
          entry[i] = line.substr(lastMatch).trim();
          return i;
        }
        entry[i] = line.substr(lastMatch, comma - lastMatch).trim();
        lastMatch = comma + 1;
        if (i === 4) return 4;
      }
    }
  };
  var TextureAtlasPage = class {
    name;
    minFilter = 9728 /* Nearest */;
    magFilter = 9728 /* Nearest */;
    uWrap = 33071 /* ClampToEdge */;
    vWrap = 33071 /* ClampToEdge */;
    texture = null;
    width = 0;
    height = 0;
    pma = false;
    regions = [];
    constructor(name) {
      this.name = name;
    }
    setTexture(texture) {
      this.texture = texture;
      texture.setFilters(this.minFilter, this.magFilter);
      texture.setWraps(this.uWrap, this.vWrap);
      for (const region of this.regions)
        region.texture = texture;
    }
  };
  var TextureAtlasRegion = class extends TextureRegion {
    page;
    name;
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
    index = 0;
    degrees = 0;
    names = null;
    values = null;
    constructor(page, name) {
      super();
      this.page = page;
      this.name = name;
      page.regions.push(this);
    }
  };

  // spine-core/src/AssetManagerBase.ts
  var AssetManagerBase = class {
    pathPrefix = "";
    textureLoader;
    downloader;
    cache;
    errors = {};
    toLoad = 0;
    loaded = 0;
    constructor(textureLoader, pathPrefix = "", downloader = new Downloader(), cache = new AssetCache()) {
      this.textureLoader = textureLoader;
      this.pathPrefix = pathPrefix;
      this.downloader = downloader;
      this.cache = cache;
    }
    start(path) {
      this.toLoad++;
      return this.pathPrefix + path;
    }
    success(callback, path, asset) {
      this.toLoad--;
      this.loaded++;
      this.cache.assets[path] = asset;
      this.cache.assetsRefCount[path] = (this.cache.assetsRefCount[path] || 0) + 1;
      if (callback) callback(path, asset);
    }
    error(callback, path, message) {
      this.toLoad--;
      this.loaded++;
      this.errors[path] = message;
      if (callback) callback(path, message);
    }
    loadAll() {
      const promise = new Promise((resolve, reject) => {
        const check = () => {
          if (this.isLoadingComplete()) {
            if (this.hasErrors()) reject(this.errors);
            else resolve(this);
            return;
          }
          requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
      });
      return promise;
    }
    setRawDataURI(path, data) {
      this.downloader.rawDataUris[this.pathPrefix + path] = data;
    }
    loadBinary(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadBinary(path, (data) => {
          this.success(success, path, data);
          resolve(data);
        }, (status, responseText) => {
          const errorMsg = `Couldn't load binary ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    loadText(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      this.downloader.downloadText(path, (data) => {
        this.success(success, path, data);
      }, (status, responseText) => {
        this.error(error, path, `Couldn't load text ${path}: status ${status}, ${responseText}`);
      });
    }
    loadJson(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadJson(path, (data) => {
          this.success(success, path, data);
          resolve(data);
        }, (status, responseText) => {
          const errorMsg = `Couldn't load JSON ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    reuseAssets(path, success = () => {
    }, error = () => {
    }) {
      const loadedStatus = this.cache.getAsset(path);
      const alreadyExistsOrLoading = loadedStatus !== void 0;
      if (alreadyExistsOrLoading) {
        this.cache.assetsLoaded[path] = loadedStatus.then((data) => {
          data = data instanceof Image || data instanceof ImageBitmap ? this.textureLoader(data) : data;
          this.success(success, path, data);
          return data;
        }).catch((errorMsg) => {
          this.error(error, path, errorMsg);
          return void 0;
        });
      }
      return alreadyExistsOrLoading;
    }
    loadTexture(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        const isBrowser = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document);
        const isWebWorker = !isBrowser;
        if (isWebWorker) {
          fetch(path, { mode: "cors" }).then((response) => {
            if (response.ok) return response.blob();
            const errorMsg = `Couldn't load image: ${path}`;
            this.error(error, path, `Couldn't load image: ${path}`);
            reject(errorMsg);
          }).then((blob) => {
            return blob ? createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" }) : null;
          }).then((bitmap) => {
            if (bitmap) {
              const texture = this.createTexture(path, bitmap);
              this.success(success, path, texture);
              resolve(texture);
            }
            ;
          });
        } else {
          const image = new Image();
          image.crossOrigin = "anonymous";
          image.onload = () => {
            const texture = this.createTexture(path, image);
            this.success(success, path, texture);
            resolve(texture);
          };
          image.onerror = () => {
            const errorMsg = `Couldn't load image: ${path}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          };
          if (this.downloader.rawDataUris[path]) path = this.downloader.rawDataUris[path];
          image.src = path;
        }
      });
    }
    loadTextureAtlas(path, success = () => {
    }, error = () => {
    }, fileAlias) {
      const index = path.lastIndexOf("/");
      const parent = index >= 0 ? path.substring(0, index + 1) : "";
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadText(path, (atlasText) => {
          try {
            const atlas = this.createTextureAtlas(path, atlasText);
            let toLoad = atlas.pages.length, abort = false;
            for (const page of atlas.pages) {
              this.loadTexture(
                !fileAlias ? parent + page.name : fileAlias[page.name],
                (imagePath, texture) => {
                  if (!abort) {
                    page.setTexture(texture);
                    if (--toLoad === 0) {
                      this.success(success, path, atlas);
                      resolve(atlas);
                    }
                  }
                },
                (imagePath, message) => {
                  if (!abort) {
                    const errorMsg = `Couldn't load texture ${path} page image: ${imagePath}`;
                    this.error(error, path, errorMsg);
                    reject(errorMsg);
                  }
                  abort = true;
                }
              );
            }
          } catch (e) {
            const errorMsg = `Couldn't parse texture atlas ${path}: ${e.message}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          }
        }, (status, responseText) => {
          const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    loadTextureAtlasButNoTextures(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadText(path, (atlasText) => {
          try {
            const atlas = this.createTextureAtlas(path, atlasText);
            this.success(success, path, atlas);
            resolve(atlas);
          } catch (e) {
            const errorMsg = `Couldn't parse texture atlas ${path}: ${e.message}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          }
        }, (status, responseText) => {
          const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    // Promisified versions of load function
    async loadBinaryAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadBinary(
          path,
          (_, binary) => resolve(binary),
          (_, message) => reject(message)
        );
      });
    }
    async loadJsonAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadJson(
          path,
          (_, object) => resolve(object),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTexture(
          path,
          (_, texture) => resolve(texture),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAtlasAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTextureAtlas(
          path,
          (_, atlas) => resolve(atlas),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAtlasButNoTexturesAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTextureAtlasButNoTextures(
          path,
          (_, atlas) => resolve(atlas),
          (_, message) => reject(message)
        );
      });
    }
    setCache(cache) {
      this.cache = cache;
    }
    get(path) {
      return this.cache.assets[this.pathPrefix + path];
    }
    require(path) {
      path = this.pathPrefix + path;
      const asset = this.cache.assets[path];
      if (asset) return asset;
      const error = this.errors[path];
      throw Error(`Asset not found: ${path}${error ? `
${error}` : ""}`);
    }
    remove(path) {
      path = this.pathPrefix + path;
      const asset = this.cache.assets[path];
      if (asset.dispose) asset.dispose();
      delete this.cache.assets[path];
      delete this.cache.assetsRefCount[path];
      delete this.cache.assetsLoaded[path];
      return asset;
    }
    removeAll() {
      for (const path in this.cache.assets) {
        const asset = this.cache.assets[path];
        if (asset.dispose) asset.dispose();
      }
      this.cache.assets = {};
      this.cache.assetsLoaded = {};
      this.cache.assetsRefCount = {};
    }
    isLoadingComplete() {
      return this.toLoad === 0;
    }
    getToLoad() {
      return this.toLoad;
    }
    getLoaded() {
      return this.loaded;
    }
    dispose() {
      this.removeAll();
    }
    // dispose asset only if it's not used by others
    disposeAsset(path) {
      const asset = this.cache.assets[path];
      if (asset instanceof TextureAtlas) {
        asset.dispose();
        return;
      }
      this.disposeAssetInternal(path);
    }
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
    getErrors() {
      return this.errors;
    }
    disposeAssetInternal(path) {
      if (this.cache.assetsRefCount[path] > 0 && --this.cache.assetsRefCount[path] === 0) {
        return this.remove(path);
      }
    }
    createTextureAtlas(path, atlasText) {
      const atlas = new TextureAtlas(atlasText);
      atlas.dispose = () => {
        if (this.cache.assetsRefCount[path] <= 0) return;
        this.disposeAssetInternal(path);
        for (const page of atlas.pages) {
          page.texture?.dispose();
        }
      };
      return atlas;
    }
    createTexture(path, image) {
      const texture = this.textureLoader(image);
      const textureDispose = texture.dispose.bind(texture);
      texture.dispose = () => {
        if (this.disposeAssetInternal(path)) textureDispose();
      };
      return texture;
    }
  };
  var AssetCache = class _AssetCache {
    assets = {};
    assetsRefCount = {};
    assetsLoaded = {};
    static AVAILABLE_CACHES = /* @__PURE__ */ new Map();
    static getCache(id) {
      const cache = _AssetCache.AVAILABLE_CACHES.get(id);
      if (cache) return cache;
      const newCache = new _AssetCache();
      _AssetCache.AVAILABLE_CACHES.set(id, newCache);
      return newCache;
    }
    async addAsset(path, asset) {
      this.assetsLoaded[path] = Promise.resolve(asset);
      this.assets[path] = asset;
      return asset;
    }
    getAsset(path) {
      return this.assetsLoaded[path];
    }
  };
  var Downloader = class {
    callbacks = {};
    rawDataUris = {};
    dataUriToString(dataUri) {
      if (!dataUri.startsWith("data:")) {
        throw new Error("Not a data URI.");
      }
      let base64Idx = dataUri.indexOf("base64,");
      if (base64Idx !== -1) {
        base64Idx += "base64,".length;
        return atob(dataUri.substr(base64Idx));
      } else {
        return dataUri.substr(dataUri.indexOf(",") + 1);
      }
    }
    base64ToUint8Array(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes;
    }
    dataUriToUint8Array(dataUri) {
      if (!dataUri.startsWith("data:")) {
        throw new Error("Not a data URI.");
      }
      let base64Idx = dataUri.indexOf("base64,");
      if (base64Idx === -1) throw new Error("Not a binary data URI.");
      base64Idx += "base64,".length;
      return this.base64ToUint8Array(dataUri.substr(base64Idx));
    }
    downloadText(url, success, error) {
      if (this.start(url, success, error)) return;
      const rawDataUri = this.rawDataUris[url];
      if (rawDataUri && !rawDataUri.includes(".")) {
        try {
          this.finish(url, 200, this.dataUriToString(rawDataUri));
        } catch (e) {
          this.finish(url, 400, JSON.stringify(e));
        }
        return;
      }
      const request = new XMLHttpRequest();
      request.overrideMimeType("text/html");
      request.open("GET", rawDataUri ? rawDataUri : url, true);
      const done = () => {
        this.finish(url, request.status, request.responseText);
      };
      request.onload = done;
      request.onerror = done;
      request.send();
    }
    downloadJson(url, success, error) {
      this.downloadText(url, (data) => {
        success(JSON.parse(data));
      }, error);
    }
    downloadBinary(url, success, error) {
      if (this.start(url, success, error)) return;
      const rawDataUri = this.rawDataUris[url];
      if (rawDataUri && !rawDataUri.includes(".")) {
        try {
          this.finish(url, 200, this.dataUriToUint8Array(rawDataUri));
        } catch (e) {
          this.finish(url, 400, JSON.stringify(e));
        }
        return;
      }
      const request = new XMLHttpRequest();
      request.open("GET", rawDataUri ? rawDataUri : url, true);
      request.responseType = "arraybuffer";
      const onerror = () => {
        this.finish(url, request.status, request.response);
      };
      request.onload = () => {
        if (request.status === 200 || request.status === 0)
          this.finish(url, 200, new Uint8Array(request.response));
        else
          onerror();
      };
      request.onerror = onerror;
      request.send();
    }
    start(url, success, error) {
      let callbacks = this.callbacks[url];
      try {
        if (callbacks) return true;
        this.callbacks[url] = callbacks = [];
      } finally {
        callbacks.push(success, error);
      }
    }
    finish(url, status, data) {
      const callbacks = this.callbacks[url];
      delete this.callbacks[url];
      if (status === 200 || status === 0) {
        for (let i = 0, n = callbacks.length; i < n; i += 2)
          callbacks[i](data);
      } else {
        for (let i = 1, n = callbacks.length; i < n; i += 2)
          callbacks[i](status, data);
      }
    }
  };

  // spine-core/src/attachments/BoundingBoxAttachment.ts
  var BoundingBoxAttachment = class _BoundingBoxAttachment extends VertexAttachment {
    color = new Color(1, 1, 1, 1);
    constructor(name) {
      super(name);
    }
    copy() {
      const copy = new _BoundingBoxAttachment(this.name);
      this.copyTo(copy);
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/ClippingAttachment.ts
  var ClippingAttachment = class _ClippingAttachment extends VertexAttachment {
    /** Clipping is performed between the clipping polygon's slot and the end slot. Returns null if clipping is done until the end of
     * the skeleton's rendering. */
    endSlot = null;
    // Nonessential.
    /** The color of the clipping polygon as it was in Spine. Available only when nonessential data was exported. Clipping polygons
     * are not usually rendered at runtime. */
    color = new Color(0.2275, 0.2275, 0.8078, 1);
    // ce3a3aff
    constructor(name) {
      super(name);
    }
    copy() {
      const copy = new _ClippingAttachment(this.name);
      this.copyTo(copy);
      copy.endSlot = this.endSlot;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/MeshAttachment.ts
  var MeshAttachment = class _MeshAttachment extends VertexAttachment {
    region = null;
    /** The name of the texture region for this attachment. */
    path;
    /** The UV pair for each vertex, normalized within the texture region. */
    regionUVs = [];
    /** The UV pair for each vertex, normalized within the entire texture.
     *
     * See {@link #updateUVs}. */
    uvs = [];
    /** Triplets of vertex indices which describe the mesh's triangulation. */
    triangles = [];
    /** The color to tint the mesh. */
    color = new Color(1, 1, 1, 1);
    /** The width of the mesh's image. Available only when nonessential data was exported. */
    width = 0;
    /** The height of the mesh's image. Available only when nonessential data was exported. */
    height = 0;
    /** The number of entries at the beginning of {@link #vertices} that make up the mesh hull. */
    hullLength = 0;
    /** Vertex index pairs describing edges for controling triangulation. Mesh triangles will never cross edges. Only available if
     * nonessential data was exported. Triangulation is not performed at runtime. */
    edges = [];
    parentMesh = null;
    sequence = null;
    tempColor = new Color(0, 0, 0, 0);
    constructor(name, path) {
      super(name);
      this.path = path;
    }
    /** Calculates {@link #uvs} using the {@link #regionUVs} and region. Must be called if the region, the region's properties, or
     * the {@link #regionUVs} are changed. */
    updateRegion() {
      if (!this.region) throw new Error("Region not set.");
      const regionUVs = this.regionUVs;
      if (!this.uvs || this.uvs.length !== regionUVs.length) this.uvs = Utils.newFloatArray(regionUVs.length);
      const uvs = this.uvs;
      const n = this.uvs.length;
      let u = this.region.u, v = this.region.v, width = 0, height = 0;
      if (this.region instanceof TextureAtlasRegion) {
        const region = this.region, page = region.page;
        const textureWidth = page.width, textureHeight = page.height;
        switch (region.degrees) {
          case 90:
            u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
            v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + regionUVs[i + 1] * width;
              uvs[i + 1] = v + (1 - regionUVs[i]) * height;
            }
            return;
          case 180:
            u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
            v -= region.offsetY / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i]) * width;
              uvs[i + 1] = v + (1 - regionUVs[i + 1]) * height;
            }
            return;
          case 270:
            u -= region.offsetY / textureWidth;
            v -= region.offsetX / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i + 1]) * width;
              uvs[i + 1] = v + regionUVs[i] * height;
            }
            return;
          default:
            u -= region.offsetX / textureWidth;
            v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;
        }
      } else if (!this.region) {
        u = v = 0;
        width = height = 1;
      } else {
        width = this.region.u2 - u;
        height = this.region.v2 - v;
      }
      for (let i = 0; i < n; i += 2) {
        uvs[i] = u + regionUVs[i] * width;
        uvs[i + 1] = v + regionUVs[i + 1] * height;
      }
    }
    /** The parent mesh if this is a linked mesh, else null. A linked mesh shares the {@link #bones}, {@link #vertices},
     * {@link #regionUVs}, {@link #triangles}, {@link #hullLength}, {@link #edges}, {@link #width}, and {@link #height} with the
     * parent mesh, but may have a different {@link #name} or {@link #path} (and therefore a different texture). */
    getParentMesh() {
      return this.parentMesh;
    }
    /** @param parentMesh May be null. */
    setParentMesh(parentMesh) {
      this.parentMesh = parentMesh;
      if (parentMesh) {
        this.bones = parentMesh.bones;
        this.vertices = parentMesh.vertices;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
        this.regionUVs = parentMesh.regionUVs;
        this.triangles = parentMesh.triangles;
        this.hullLength = parentMesh.hullLength;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
      }
    }
    copy() {
      if (this.parentMesh) return this.newLinkedMesh();
      const copy = new _MeshAttachment(this.name, this.path);
      copy.region = this.region;
      copy.color.setFromColor(this.color);
      this.copyTo(copy);
      copy.regionUVs = [];
      Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
      copy.uvs = this.uvs instanceof Float32Array ? Utils.newFloatArray(this.uvs.length) : [];
      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
      copy.triangles = [];
      Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
      copy.hullLength = this.hullLength;
      copy.sequence = this.sequence != null ? this.sequence.copy() : null;
      if (this.edges) {
        copy.edges = [];
        Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
      }
      copy.width = this.width;
      copy.height = this.height;
      return copy;
    }
    computeWorldVertices(skeleton, slot, start, count, worldVertices, offset, stride) {
      if (this.sequence != null) this.sequence.apply(slot.applied, this);
      super.computeWorldVertices(skeleton, slot, start, count, worldVertices, offset, stride);
    }
    /** Returns a new mesh with the {@link #parentMesh} set to this mesh's parent mesh, if any, else to this mesh. **/
    newLinkedMesh() {
      const copy = new _MeshAttachment(this.name, this.path);
      copy.region = this.region;
      copy.color.setFromColor(this.color);
      copy.timelineAttachment = this.timelineAttachment;
      copy.setParentMesh(this.parentMesh ? this.parentMesh : this);
      if (copy.region != null) copy.updateRegion();
      return copy;
    }
  };

  // spine-core/src/attachments/PathAttachment.ts
  var PathAttachment = class _PathAttachment extends VertexAttachment {
    /** The lengths along the path in the setup pose from the start of the path to the end of each Bezier curve. */
    lengths = [];
    /** If true, the start and end knots are connected. */
    closed = false;
    /** If true, additional calculations are performed to make calculating positions along the path more accurate. If false, fewer
     * calculations are performed but calculating positions along the path is less accurate. */
    constantSpeed = false;
    /** The color of the path as it was in Spine. Available only when nonessential data was exported. Paths are not usually
     * rendered at runtime. */
    color = new Color(1, 1, 1, 1);
    constructor(name) {
      super(name);
    }
    copy() {
      const copy = new _PathAttachment(this.name);
      this.copyTo(copy);
      copy.lengths = [];
      Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
      copy.closed = this.closed;
      copy.constantSpeed = this.constantSpeed;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/PointAttachment.ts
  var PointAttachment = class _PointAttachment extends VertexAttachment {
    x = 0;
    y = 0;
    rotation = 0;
    /** The color of the point attachment as it was in Spine. Available only when nonessential data was exported. Point attachments
     * are not usually rendered at runtime. */
    color = new Color(0.38, 0.94, 0, 1);
    constructor(name) {
      super(name);
    }
    computeWorldPosition(bone, point) {
      point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
      point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
      return point;
    }
    computeWorldRotation(bone) {
      const r = this.rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
      const x = cos * bone.a + sin * bone.b;
      const y = cos * bone.c + sin * bone.d;
      return MathUtils.atan2Deg(y, x);
    }
    copy() {
      const copy = new _PointAttachment(this.name);
      copy.x = this.x;
      copy.y = this.y;
      copy.rotation = this.rotation;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/RegionAttachment.ts
  var RegionAttachment = class _RegionAttachment extends Attachment {
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local rotation. */
    rotation = 0;
    /** The width of the region attachment in Spine. */
    width = 0;
    /** The height of the region attachment in Spine. */
    height = 0;
    /** The color to tint the region attachment. */
    color = new Color(1, 1, 1, 1);
    /** The name of the texture region for this attachment. */
    path;
    region = null;
    sequence = null;
    /** For each of the 4 vertices, a pair of <code>x,y</code> values that is the local position of the vertex.
     *
     * See {@link #updateRegion()}. */
    offset = Utils.newFloatArray(8);
    uvs = Utils.newFloatArray(8);
    tempColor = new Color(1, 1, 1, 1);
    constructor(name, path) {
      super(name);
      this.path = path;
    }
    /** Calculates the {@link #offset} using the region settings. Must be called after changing region settings. */
    updateRegion() {
      if (!this.region) throw new Error("Region not set.");
      const region = this.region;
      const uvs = this.uvs;
      const regionScaleX = this.width / this.region.originalWidth * this.scaleX;
      const regionScaleY = this.height / this.region.originalHeight * this.scaleY;
      const localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
      const localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
      const localX2 = localX + this.region.width * regionScaleX;
      const localY2 = localY + this.region.height * regionScaleY;
      const radians = this.rotation * MathUtils.degRad;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const x = this.x, y = this.y;
      const localXCos = localX * cos + x;
      const localXSin = localX * sin;
      const localYCos = localY * cos + y;
      const localYSin = localY * sin;
      const localX2Cos = localX2 * cos + x;
      const localX2Sin = localX2 * sin;
      const localY2Cos = localY2 * cos + y;
      const localY2Sin = localY2 * sin;
      const offset = this.offset;
      offset[0] = localXCos - localYSin;
      offset[1] = localYCos + localXSin;
      offset[2] = localXCos - localY2Sin;
      offset[3] = localY2Cos + localXSin;
      offset[4] = localX2Cos - localY2Sin;
      offset[5] = localY2Cos + localX2Sin;
      offset[6] = localX2Cos - localYSin;
      offset[7] = localYCos + localX2Sin;
      if (region == null) {
        uvs[0] = 0;
        uvs[1] = 0;
        uvs[2] = 0;
        uvs[3] = 1;
        uvs[4] = 1;
        uvs[5] = 1;
        uvs[6] = 1;
        uvs[7] = 0;
      } else if (region.degrees === 90) {
        uvs[0] = region.u2;
        uvs[1] = region.v2;
        uvs[2] = region.u;
        uvs[3] = region.v2;
        uvs[4] = region.u;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v;
      } else {
        uvs[0] = region.u;
        uvs[1] = region.v2;
        uvs[2] = region.u;
        uvs[3] = region.v;
        uvs[4] = region.u2;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v2;
      }
    }
    /** Transforms the attachment's four vertices to world coordinates. If the attachment has a {@link #sequence}, the region may
     * be changed.
     * <p>
     * See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide.
     * @param worldVertices The output world vertices. Must have a length >= <code>offset</code> + 8.
     * @param offset The <code>worldVertices</code> index to begin writing values.
     * @param stride The number of <code>worldVertices</code> entries between the value pairs written. */
    computeWorldVertices(slot, worldVertices, offset, stride) {
      if (this.sequence) this.sequence.apply(slot.applied, this);
      const bone = slot.bone.applied;
      const vertexOffset = this.offset;
      const x = bone.worldX, y = bone.worldY;
      const a = bone.a, b = bone.b, c = bone.c, d = bone.d;
      let offsetX = 0, offsetY = 0;
      offsetX = vertexOffset[0];
      offsetY = vertexOffset[1];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[2];
      offsetY = vertexOffset[3];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[4];
      offsetY = vertexOffset[5];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[6];
      offsetY = vertexOffset[7];
      worldVertices[offset] = offsetX * a + offsetY * b + x;
      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
    }
    copy() {
      const copy = new _RegionAttachment(this.name, this.path);
      copy.region = this.region;
      copy.x = this.x;
      copy.y = this.y;
      copy.scaleX = this.scaleX;
      copy.scaleY = this.scaleY;
      copy.rotation = this.rotation;
      copy.width = this.width;
      copy.height = this.height;
      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
      Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
      copy.color.setFromColor(this.color);
      copy.sequence = this.sequence != null ? this.sequence.copy() : null;
      return copy;
    }
    static X1 = 0;
    static Y1 = 1;
    static C1R = 2;
    static C1G = 3;
    static C1B = 4;
    static C1A = 5;
    static U1 = 6;
    static V1 = 7;
    static X2 = 8;
    static Y2 = 9;
    static C2R = 10;
    static C2G = 11;
    static C2B = 12;
    static C2A = 13;
    static U2 = 14;
    static V2 = 15;
    static X3 = 16;
    static Y3 = 17;
    static C3R = 18;
    static C3G = 19;
    static C3B = 20;
    static C3A = 21;
    static U3 = 22;
    static V3 = 23;
    static X4 = 24;
    static Y4 = 25;
    static C4R = 26;
    static C4G = 27;
    static C4B = 28;
    static C4A = 29;
    static U4 = 30;
    static V4 = 31;
  };

  // spine-core/src/AtlasAttachmentLoader.ts
  var AtlasAttachmentLoader = class {
    atlas;
    allowMissingRegions;
    constructor(atlas, allowMissingRegions = false) {
      this.atlas = atlas;
      this.allowMissingRegions = allowMissingRegions;
    }
    loadSequence(name, basePath, sequence) {
      const regions = sequence.regions;
      for (let i = 0, n = regions.length; i < n; i++) {
        const path = sequence.getPath(basePath, i);
        regions[i] = this.atlas.findRegion(path);
        if (regions[i] == null && !this.allowMissingRegions)
          throw new Error(`Region not found in atlas: ${path} (sequence: ${name})`);
      }
    }
    newRegionAttachment(skin, name, path, sequence) {
      const attachment = new RegionAttachment(name, path);
      if (sequence != null) {
        this.loadSequence(name, path, sequence);
      } else {
        const region = this.atlas.findRegion(path);
        if (region == null && !this.allowMissingRegions)
          throw new Error(`Region not found in atlas: ${path} (region attachment: ${name})`);
        attachment.region = region;
      }
      return attachment;
    }
    newMeshAttachment(skin, name, path, sequence) {
      const attachment = new MeshAttachment(name, path);
      if (sequence != null) {
        this.loadSequence(name, path, sequence);
      } else {
        const region = this.atlas.findRegion(path);
        if (region == null && !this.allowMissingRegions)
          throw new Error(`Region not found in atlas: ${path} (mesh attachment: ${name})`);
        attachment.region = region;
      }
      return attachment;
    }
    newBoundingBoxAttachment(skin, name) {
      return new BoundingBoxAttachment(name);
    }
    newPathAttachment(skin, name) {
      return new PathAttachment(name);
    }
    newPointAttachment(skin, name) {
      return new PointAttachment(name);
    }
    newClippingAttachment(skin, name) {
      return new ClippingAttachment(name);
    }
  };

  // spine-core/src/BoneLocal.ts
  var BoneLocal = class {
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 0;
    /** The local scaleY. */
    scaleY = 0;
    /** The local shearX. */
    shearX = 0;
    /** The local shearY. */
    shearY = 0;
    inherit = 0 /* Normal */;
    set(pose) {
      if (pose == null) throw new Error("pose cannot be null.");
      this.x = pose.x;
      this.y = pose.y;
      this.rotation = pose.rotation;
      this.scaleX = pose.scaleX;
      this.scaleY = pose.scaleY;
      this.shearX = pose.shearX;
      this.shearY = pose.shearY;
      this.inherit = pose.inherit;
    }
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
    setScale(scaleOrX, scaleY) {
      this.scaleX = scaleOrX;
      this.scaleY = scaleY === void 0 ? scaleOrX : scaleY;
    }
    /** Determines how parent world transforms affect this bone. */
    getInherit() {
      return this.inherit;
    }
    setInherit(inherit) {
      if (inherit == null) throw new Error("inherit cannot be null.");
      this.inherit = inherit;
    }
  };

  // spine-core/src/PosedData.ts
  var PosedData = class {
    /** The constraint's name, which is unique across all constraints in the skeleton of the same type. */
    name;
    setup;
    /** When true, {@link Skeleton.updateWorldTransform} only updates this constraint if the {@link Skeleton.skin}
     * contains this constraint.
     *
     * See {@link Skin.constraints}. */
    skinRequired = false;
    constructor(name, setup) {
      if (name == null) throw new Error("name cannot be null.");
      this.name = name;
      this.setup = setup;
    }
  };

  // spine-core/src/BoneData.ts
  var BoneData = class _BoneData extends PosedData {
    /** The index of the bone in {@link Skeleton.getBones}. */
    index = 0;
    /** @returns May be null. */
    parent = null;
    /** The bone's length. */
    length = 0;
    // Nonessential.
    /** The color of the bone as it was in Spine. Available only when nonessential data was exported. Bones are not usually
     * rendered at runtime. */
    color = new Color();
    /** The bone icon as it was in Spine, or null if nonessential data was not exported. */
    icon;
    /** False if the bone was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = false;
    constructor(index, name, parent) {
      super(name, new BoneLocal());
      if (index < 0) throw new Error("index must be >= 0.");
      if (!name) throw new Error("name cannot be null.");
      this.index = index;
      this.parent = parent;
    }
    copy(parent) {
      const copy = new _BoneData(this.index, this.name, parent);
      copy.length = this.length;
      copy.setup.set(this.setup);
      return copy;
    }
  };
  var Inherit = /* @__PURE__ */ ((Inherit2) => {
    Inherit2[Inherit2["Normal"] = 0] = "Normal";
    Inherit2[Inherit2["OnlyTranslation"] = 1] = "OnlyTranslation";
    Inherit2[Inherit2["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
    Inherit2[Inherit2["NoScale"] = 3] = "NoScale";
    Inherit2[Inherit2["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
    return Inherit2;
  })(Inherit || {});

  // spine-core/src/BonePose.ts
  var BonePose = class extends BoneLocal {
    bone;
    /** Part of the world transform matrix for the X axis. If changed, {@link updateLocalTransform()} should be called. */
    a = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link updateLocalTransform()} should be called. */
    b = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link updateLocalTransform()} should be called. */
    c = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link updateLocalTransform()} should be called. */
    d = 0;
    /** The world X position. If changed, {@link updateLocalTransform()} should be called. */
    worldY = 0;
    /** The world Y position. If changed, {@link updateLocalTransform()} should be called. */
    worldX = 0;
    world = 0;
    local = 0;
    /** Called by {@link Skeleton#updateCache()} to compute the world transform, if needed. */
    update(skeleton, physics) {
      if (this.world !== skeleton._update) this.updateWorldTransform(skeleton);
    }
    /** Computes the world transform using the parent bone's applied pose and this pose. Child bones are not updated.
     * <p>
     * See <a href="https://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide. */
    updateWorldTransform(skeleton) {
      if (this.local === skeleton._update)
        this.updateLocalTransform(skeleton);
      else
        this.world = skeleton._update;
      const rotation = this.rotation;
      const scaleX = this.scaleX;
      const scaleY = this.scaleY;
      const shearX = this.shearX;
      const shearY = this.shearY;
      if (!this.bone.parent) {
        const sx = skeleton.scaleX, sy = skeleton.scaleY;
        const rx = (rotation + shearX) * MathUtils.degRad;
        const ry = (rotation + 90 + shearY) * MathUtils.degRad;
        this.a = Math.cos(rx) * scaleX * sx;
        this.b = Math.cos(ry) * scaleY * sx;
        this.c = Math.sin(rx) * scaleX * sy;
        this.d = Math.sin(ry) * scaleY * sy;
        this.worldX = this.x * sx + skeleton.x;
        this.worldY = this.y * sy + skeleton.y;
        return;
      }
      const parent = this.bone.parent.applied;
      let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
      this.worldX = pa * this.x + pb * this.y + parent.worldX;
      this.worldY = pc * this.x + pd * this.y + parent.worldY;
      switch (this.inherit) {
        case 0 /* Normal */: {
          const rx = (rotation + shearX) * MathUtils.degRad;
          const ry = (rotation + 90 + shearY) * MathUtils.degRad;
          const la = Math.cos(rx) * scaleX;
          const lb = Math.cos(ry) * scaleY;
          const lc = Math.sin(rx) * scaleX;
          const ld = Math.sin(ry) * scaleY;
          this.a = pa * la + pb * lc;
          this.b = pa * lb + pb * ld;
          this.c = pc * la + pd * lc;
          this.d = pc * lb + pd * ld;
          return;
        }
        case 1 /* OnlyTranslation */: {
          const rx = (rotation + shearX) * MathUtils.degRad;
          const ry = (rotation + 90 + shearY) * MathUtils.degRad;
          this.a = Math.cos(rx) * scaleX;
          this.b = Math.cos(ry) * scaleY;
          this.c = Math.sin(rx) * scaleX;
          this.d = Math.sin(ry) * scaleY;
          break;
        }
        case 2 /* NoRotationOrReflection */: {
          const sx = 1 / skeleton.scaleX, sy = 1 / skeleton.scaleY;
          pa *= sx;
          pc *= sy;
          let s = pa * pa + pc * pc;
          let prx = 0;
          if (s > 1e-4) {
            s = Math.abs(pa * pd * sy - pb * sx * pc) / s;
            pb = pc * s;
            pd = pa * s;
            prx = MathUtils.atan2Deg(pc, pa);
          } else {
            pa = 0;
            pc = 0;
            prx = 90 - MathUtils.atan2Deg(pd, pb);
          }
          const rx = (rotation + shearX - prx) * MathUtils.degRad;
          const ry = (rotation + shearY - prx + 90) * MathUtils.degRad;
          const la = Math.cos(rx) * scaleX;
          const lb = Math.cos(ry) * scaleY;
          const lc = Math.sin(rx) * scaleX;
          const ld = Math.sin(ry) * scaleY;
          this.a = pa * la - pb * lc;
          this.b = pa * lb - pb * ld;
          this.c = pc * la + pd * lc;
          this.d = pc * lb + pd * ld;
          break;
        }
        case 3 /* NoScale */:
        case 4 /* NoScaleOrReflection */: {
          let r = rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
          let za = (pa * cos + pb * sin) / skeleton.scaleX;
          let zc = (pc * cos + pd * sin) / skeleton.scaleY;
          let s = Math.sqrt(za * za + zc * zc);
          if (s > 1e-5) s = 1 / s;
          za *= s;
          zc *= s;
          s = Math.sqrt(za * za + zc * zc);
          if (this.inherit === 3 /* NoScale */ && pa * pd - pb * pc < 0 !== (skeleton.scaleX < 0 !== skeleton.scaleY < 0)) s = -s;
          r = Math.PI / 2 + Math.atan2(zc, za);
          const zb = Math.cos(r) * s;
          const zd = Math.sin(r) * s;
          const rx = shearX * MathUtils.degRad;
          const ry = (90 + shearY) * MathUtils.degRad;
          const la = Math.cos(rx) * scaleX;
          const lb = Math.cos(ry) * scaleY;
          const lc = Math.sin(rx) * scaleX;
          const ld = Math.sin(ry) * scaleY;
          this.a = za * la + zb * lc;
          this.b = za * lb + zb * ld;
          this.c = zc * la + zd * lc;
          this.d = zc * lb + zd * ld;
          break;
        }
      }
      this.a *= skeleton.scaleX;
      this.b *= skeleton.scaleX;
      this.c *= skeleton.scaleY;
      this.d *= skeleton.scaleY;
    }
    /** Computes the local transform values from the world transform.
     * <p>
     * If the world transform is modified (by a constraint, {@link #rotateWorld(float)}, etc) then this method should be called so
     * the local transform matches the world transform. The local transform may be needed by other code (eg to apply another
     * constraint).
     * <p>
     * Some information is ambiguous in the world transform, such as -1,-1 scale versus 180 rotation. The local transform after
     * calling this method is equivalent to the local transform used to compute the world transform, but may not be identical. */
    updateLocalTransform(skeleton) {
      this.local = 0;
      this.world = skeleton._update;
      if (!this.bone.parent) {
        this.x = this.worldX - skeleton.x;
        this.y = this.worldY - skeleton.y;
        const a = this.a, b = this.b, c = this.c, d = this.d;
        this.rotation = MathUtils.atan2Deg(c, a);
        this.scaleX = Math.sqrt(a * a + c * c);
        this.scaleY = Math.sqrt(b * b + d * d);
        this.shearX = 0;
        this.shearY = MathUtils.atan2Deg(a * b + c * d, a * d - b * c);
        return;
      }
      const parent = this.bone.parent.applied;
      let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
      let pid = 1 / (pa * pd - pb * pc);
      let ia = pd * pid, ib = pb * pid, ic = pc * pid, id = pa * pid;
      const dx = this.worldX - parent.worldX, dy = this.worldY - parent.worldY;
      this.x = dx * ia - dy * ib;
      this.y = dy * id - dx * ic;
      let ra, rb, rc, rd;
      if (this.inherit === 1 /* OnlyTranslation */) {
        ra = this.a;
        rb = this.b;
        rc = this.c;
        rd = this.d;
      } else {
        switch (this.inherit) {
          case 2 /* NoRotationOrReflection */: {
            const s = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
            pb = -pc * skeleton.scaleX * s / skeleton.scaleY;
            pd = pa * skeleton.scaleY * s / skeleton.scaleX;
            pid = 1 / (pa * pd - pb * pc);
            ia = pd * pid;
            ib = pb * pid;
            break;
          }
          case 3 /* NoScale */:
          case 4 /* NoScaleOrReflection */: {
            let r = this.rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
            pa = (pa * cos + pb * sin) / skeleton.scaleX;
            pc = (pc * cos + pd * sin) / skeleton.scaleY;
            let s = Math.sqrt(pa * pa + pc * pc);
            if (s > 1e-5) s = 1 / s;
            pa *= s;
            pc *= s;
            s = Math.sqrt(pa * pa + pc * pc);
            if (this.inherit === 3 /* NoScale */ && pid < 0 !== (skeleton.scaleX < 0 !== skeleton.scaleY < 0)) s = -s;
            r = MathUtils.PI / 2 + Math.atan2(pc, pa);
            pb = Math.cos(r) * s;
            pd = Math.sin(r) * s;
            pid = 1 / (pa * pd - pb * pc);
            ia = pd * pid;
            ib = pb * pid;
            ic = pc * pid;
            id = pa * pid;
          }
        }
        ra = ia * this.a - ib * this.c;
        rb = ia * this.b - ib * this.d;
        rc = id * this.c - ic * this.a;
        rd = id * this.d - ic * this.b;
      }
      this.shearX = 0;
      this.scaleX = Math.sqrt(ra * ra + rc * rc);
      if (this.scaleX > 1e-4) {
        const det = ra * rd - rb * rc;
        this.scaleY = det / this.scaleX;
        this.shearY = -MathUtils.atan2Deg(ra * rb + rc * rd, det);
        this.rotation = MathUtils.atan2Deg(rc, ra);
      } else {
        this.scaleX = 0;
        this.scaleY = Math.sqrt(rb * rb + rd * rd);
        this.shearY = 0;
        this.rotation = 90 - MathUtils.atan2Deg(rd, rb);
      }
    }
    /** If the world transform has been modified and the local transform no longer matches, {@link #updateLocalTransform(Skeleton)}
     * is called. */
    validateLocalTransform(skeleton) {
      if (this.local === skeleton._update) this.updateLocalTransform(skeleton);
    }
    modifyLocal(skeleton) {
      if (this.local === skeleton._update) this.updateLocalTransform(skeleton);
      this.world = 0;
      this.resetWorld(skeleton._update);
    }
    modifyWorld(update) {
      this.local = update;
      this.world = update;
      this.resetWorld(update);
    }
    resetWorld(update) {
      const children = this.bone.children;
      for (let i = 0, n = children.length; i < n; i++) {
        const child = children[i].applied;
        if (child.world === update) {
          child.world = 0;
          child.local = 0;
          child.resetWorld(update);
        }
      }
    }
    /** The world rotation for the X axis, calculated using {@link a} and {@link c}. */
    getWorldRotationX() {
      return MathUtils.atan2Deg(this.c, this.a);
    }
    /** The world rotation for the Y axis, calculated using {@link b} and {@link d}. */
    getWorldRotationY() {
      return MathUtils.atan2Deg(this.d, this.b);
    }
    /** The magnitude (always positive) of the world scale X, calculated using {@link a} and {@link c}. */
    getWorldScaleX() {
      return Math.sqrt(this.a * this.a + this.c * this.c);
    }
    /** The magnitude (always positive) of the world scale Y, calculated using {@link b} and {@link d}. */
    getWorldScaleY() {
      return Math.sqrt(this.b * this.b + this.d * this.d);
    }
    // public Matrix3 getWorldTransform (Matrix3 worldTransform) {
    // 	if (worldTransform == null) throw new IllegalArgumentException("worldTransform cannot be null.");
    // 	float[] val = worldTransform.val;
    // 	val[M00] = a;
    // 	val[M01] = b;
    // 	val[M10] = c;
    // 	val[M11] = d;
    // 	val[M02] = worldX;
    // 	val[M12] = worldY;
    // 	val[M20] = 0;
    // 	val[M21] = 0;
    // 	val[M22] = 1;
    // 	return worldTransform;
    // }
    /** Transforms a point from world coordinates to the bone's local coordinates. */
    worldToLocal(world) {
      if (world == null) throw new Error("world cannot be null.");
      const det = this.a * this.d - this.b * this.c;
      const x = world.x - this.worldX, y = world.y - this.worldY;
      world.x = (x * this.d - y * this.b) / det;
      world.y = (y * this.a - x * this.c) / det;
      return world;
    }
    /** Transforms a point from the bone's local coordinates to world coordinates. */
    localToWorld(local) {
      if (local == null) throw new Error("local cannot be null.");
      const x = local.x, y = local.y;
      local.x = x * this.a + y * this.b + this.worldX;
      local.y = x * this.c + y * this.d + this.worldY;
      return local;
    }
    /** Transforms a point from world coordinates to the parent bone's local coordinates. */
    worldToParent(world) {
      if (world == null) throw new Error("world cannot be null.");
      return this.bone.parent == null ? world : this.bone.parent.applied.worldToLocal(world);
    }
    /** Transforms a point from the parent bone's coordinates to world coordinates. */
    parentToWorld(world) {
      if (world == null) throw new Error("world cannot be null.");
      return this.bone.parent == null ? world : this.bone.parent.applied.localToWorld(world);
    }
    /** Transforms a world rotation to a local rotation. */
    worldToLocalRotation(worldRotation) {
      worldRotation *= MathUtils.degRad;
      const sin = Math.sin(worldRotation), cos = Math.cos(worldRotation);
      return MathUtils.atan2Deg(this.a * sin - this.c * cos, this.d * cos - this.b * sin) + this.rotation - this.shearX;
    }
    /** Transforms a local rotation to a world rotation. */
    localToWorldRotation(localRotation) {
      localRotation = (localRotation - this.rotation - this.shearX) * MathUtils.degRad;
      const sin = Math.sin(localRotation), cos = Math.cos(localRotation);
      return MathUtils.atan2Deg(cos * this.c + sin * this.d, cos * this.a + sin * this.b);
    }
    /** Rotates the world transform the specified amount.
     * <p>
     * After changes are made to the world transform, {@link updateLocalTransform} should be called on this bone and any
     * child bones, recursively. */
    rotateWorld(degrees) {
      degrees *= MathUtils.degRad;
      const sin = Math.sin(degrees), cos = Math.cos(degrees);
      const ra = this.a, rb = this.b;
      this.a = cos * ra - sin * this.c;
      this.b = cos * rb - sin * this.d;
      this.c = sin * ra + cos * this.c;
      this.d = sin * rb + cos * this.d;
    }
  };

  // spine-core/src/Posed.ts
  var Posed = class {
    /** The constraint's setup pose data. */
    data;
    pose;
    constrained;
    applied;
    constructor(data, pose, constrained) {
      if (data == null) throw new Error("data cannot be null.");
      this.data = data;
      this.pose = pose;
      this.constrained = constrained;
      this.applied = pose;
    }
    setupPose() {
      this.pose.set(this.data.setup);
    }
    /** The constraint's setup pose data. */
    getData() {
      return this.data;
    }
    getPose() {
      return this.pose;
    }
    getAppliedPose() {
      return this.applied;
    }
    usePose() {
      this.applied = this.pose;
    }
    useConstrained() {
      this.applied = this.constrained;
    }
    resetConstrained() {
      this.constrained.set(this.pose);
    }
  };

  // spine-core/src/PosedActive.ts
  var PosedActive = class extends Posed {
    active = false;
    constructor(data, pose, constrained) {
      super(data, pose, constrained);
      this.setupPose();
    }
    /** Returns false when this constraint won't be updated by
     * {@link Skeleton.updateWorldTransform()} because a skin is required and the
     * {@link Skeleton.getSkin() active skin} does not contain this item.
     * @see Skin.getBones()
     * @see Skin.getConstraints()
     * @see PosedData.getSkinRequired()
     * @see Skeleton.updateCache() */
    isActive() {
      return this.active;
    }
  };

  // spine-core/src/Bone.ts
  var Bone = class _Bone extends PosedActive {
    /** The parent bone, or null if this is the root bone. */
    parent = null;
    /** The immediate children of this bone. */
    children = [];
    sorted = false;
    constructor(data, parent) {
      super(data, new BonePose(), new BonePose());
      this.parent = parent;
      this.applied.bone = this;
      this.constrained.bone = this;
    }
    /** Make a copy of the bone. Does not copy the {@link #getChildren()} bones. */
    copy(parent) {
      const copy = new _Bone(this.data, parent);
      copy.pose.set(this.pose);
      return copy;
    }
  };

  // spine-core/src/Constraint.ts
  var Constraint = class extends PosedActive {
    constructor(data, pose, constrained) {
      super(data, pose, constrained);
    }
    isSourceActive() {
      return true;
    }
  };

  // spine-core/src/ConstraintData.ts
  var ConstraintData = class extends PosedData {
    constructor(name, setup) {
      super(name, setup);
    }
  };

  // spine-core/src/Event.ts
  var Event = class {
    data;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    time = 0;
    volume = 0;
    balance = 0;
    constructor(time, data) {
      if (!data) throw new Error("data cannot be null.");
      this.time = time;
      this.data = data;
    }
  };

  // spine-core/src/EventData.ts
  var EventData = class {
    name;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    audioPath = null;
    volume = 0;
    balance = 0;
    constructor(name) {
      this.name = name;
    }
  };

  // spine-core/src/IkConstraintPose.ts
  var IkConstraintPose = class {
    /** For two bone IK, controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** For one bone IK, when true and the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true and the target is out of range, the parent bone is scaled to reach it.
     *
     * For two bone IK: 1) the child bone's local Y translation is set to 0, 2) stretch is not applied if {@link softness} is
     * > 0, and 3) if the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotation.
     *
     * For two bone IK: if the parent bone has local nonuniform scale, the child bone's local Y translation is set to 0. */
    mix = 0;
    /** For two bone IK, the target bone's distance from the maximum reach of the bones where rotation begins to slow. The bones
     * will not straighten completely until the target is this far out of range. */
    softness = 0;
    set(pose) {
      this.mix = pose.mix;
      this.softness = pose.softness;
      this.bendDirection = pose.bendDirection;
      this.compress = pose.compress;
      this.stretch = pose.stretch;
    }
  };

  // spine-core/src/IkConstraint.ts
  var IkConstraint = class _IkConstraint extends Constraint {
    /** The 1 or 2 bones that will be modified by this IK constraint. */
    bones;
    /** The bone that is the IK target. */
    target;
    constructor(data, skeleton) {
      super(data, new IkConstraintPose(), new IkConstraintPose());
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.bones = [];
      for (const boneData of data.bones)
        this.bones.push(skeleton.bones[boneData.index].constrained);
      this.target = skeleton.bones[data.target.index];
    }
    copy(skeleton) {
      var copy = new _IkConstraint(this.data, skeleton);
      copy.pose.set(this.pose);
      return copy;
    }
    update(skeleton, physics) {
      const p = this.applied;
      if (p.mix === 0) return;
      const target = this.target.applied;
      const bones = this.bones;
      switch (bones.length) {
        case 1:
          _IkConstraint.apply(skeleton, bones[0], target.worldX, target.worldY, p.compress, p.stretch, this.data.uniform, p.mix);
          break;
        case 2:
          _IkConstraint.apply(
            skeleton,
            bones[0],
            bones[1],
            target.worldX,
            target.worldY,
            p.bendDirection,
            p.stretch,
            this.data.uniform,
            p.softness,
            p.mix
          );
          break;
      }
    }
    sort(skeleton) {
      skeleton.sortBone(this.target);
      const parent = this.bones[0].bone;
      skeleton.sortBone(parent);
      skeleton._updateCache.push(this);
      parent.sorted = false;
      skeleton.sortReset(parent.children);
      skeleton.constrained(parent);
      if (this.bones.length > 1) skeleton.constrained(this.bones[1].bone);
    }
    isSourceActive() {
      return this.target.active;
    }
    static apply(skeleton, boneOrParent, targetXorChild, targetYOrTargetX, compressOrTargetY, stretchOrBendDir, uniformOrStretch, mixOrUniform, softness, mix) {
      if (typeof targetXorChild === "number")
        _IkConstraint.apply1(skeleton, boneOrParent, targetXorChild, targetYOrTargetX, compressOrTargetY, stretchOrBendDir, uniformOrStretch, mixOrUniform);
      else
        _IkConstraint.apply2(
          skeleton,
          boneOrParent,
          targetXorChild,
          targetYOrTargetX,
          compressOrTargetY,
          stretchOrBendDir,
          uniformOrStretch,
          mixOrUniform,
          softness,
          mix
        );
    }
    static apply1(skeleton, bone, targetX, targetY, compress, stretch, uniform, mix) {
      bone.modifyLocal(skeleton);
      const p = bone.bone.parent.applied;
      let pa = p.a, pb = p.b, pc = p.c, pd = p.d;
      let rotationIK = -bone.shearX - bone.rotation, tx = 0, ty = 0;
      switch (bone.inherit) {
        case 1 /* OnlyTranslation */:
          tx = (targetX - bone.worldX) * MathUtils.signum(skeleton.scaleX);
          ty = (targetY - bone.worldY) * MathUtils.signum(skeleton.scaleY);
          break;
        // biome-ignore lint/suspicious/noFallthroughSwitchClause: reference runtime
        case 2 /* NoRotationOrReflection */: {
          const s = Math.abs(pa * pd - pb * pc) / Math.max(1e-4, pa * pa + pc * pc);
          const sa = pa / skeleton.scaleX;
          const sc = pc / skeleton.scaleY;
          pb = -sc * s * skeleton.scaleX;
          pd = sa * s * skeleton.scaleY;
          rotationIK += MathUtils.atan2Deg(sc, sa);
        }
        // Fall through
        default: {
          const x = targetX - p.worldX, y = targetY - p.worldY;
          const d = pa * pd - pb * pc;
          if (Math.abs(d) <= 1e-4) {
            tx = 0;
            ty = 0;
          } else {
            tx = (x * pd - y * pb) / d - bone.x;
            ty = (y * pa - x * pc) / d - bone.y;
          }
        }
      }
      rotationIK += MathUtils.atan2Deg(ty, tx);
      if (bone.scaleX < 0) rotationIK += 180;
      if (rotationIK > 180)
        rotationIK -= 360;
      else if (rotationIK < -180)
        rotationIK += 360;
      bone.rotation += rotationIK * mix;
      if (compress || stretch) {
        switch (bone.inherit) {
          case 3 /* NoScale */:
          case 4 /* NoScaleOrReflection */:
            tx = targetX - bone.worldX;
            ty = targetY - bone.worldY;
        }
        const b = bone.bone.data.length * bone.scaleX;
        if (b > 1e-4) {
          const dd = tx * tx + ty * ty;
          if (compress && dd < b * b || stretch && dd > b * b) {
            const s = (Math.sqrt(dd) / b - 1) * mix + 1;
            bone.scaleX *= s;
            if (uniform) bone.scaleY *= s;
          }
        }
      }
    }
    /** Applies 2 bone IK. The target is specified in the world coordinate system.
     * @param child A direct descendant of the parent bone. */
    static apply2(skeleton, parent, child, targetX, targetY, bendDir, stretch, uniform, softness, mix) {
      if (parent.inherit !== 0 /* Normal */ || child.inherit !== 0 /* Normal */) return;
      parent.modifyLocal(skeleton);
      child.modifyLocal(skeleton);
      let px = parent.x, py = parent.y, psx = parent.scaleX, psy = parent.scaleY, csx = child.scaleX;
      let os1 = 0, os2 = 0, s2 = 0;
      if (psx < 0) {
        psx = -psx;
        os1 = 180;
        s2 = -1;
      } else {
        os1 = 0;
        s2 = 1;
      }
      if (psy < 0) {
        psy = -psy;
        s2 = -s2;
      }
      if (csx < 0) {
        csx = -csx;
        os2 = 180;
      } else
        os2 = 0;
      let cwx = 0, cwy = 0, a = parent.a, b = parent.b, c = parent.c, d = parent.d;
      const u = Math.abs(psx - psy) <= 1e-4;
      if (!u || stretch) {
        child.y = 0;
        cwx = a * child.x + parent.worldX;
        cwy = c * child.x + parent.worldY;
      } else {
        cwx = a * child.x + b * child.y + parent.worldX;
        cwy = c * child.x + d * child.y + parent.worldY;
      }
      const pp = parent.bone.parent.applied;
      a = pp.a;
      b = pp.b;
      c = pp.c;
      d = pp.d;
      let id = a * d - b * c, x = cwx - pp.worldX, y = cwy - pp.worldY;
      id = Math.abs(id) <= 1e-4 ? 0 : 1 / id;
      const dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
      let l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.bone.data.length * csx, a1, a2;
      if (l1 < 1e-4) {
        _IkConstraint.apply(skeleton, parent, targetX, targetY, false, stretch, false, mix);
        child.rotation = 0;
        return;
      }
      x = targetX - pp.worldX;
      y = targetY - pp.worldY;
      let tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
      let dd = tx * tx + ty * ty;
      if (softness !== 0) {
        softness *= psx * (csx + 1) * 0.5;
        const td = Math.sqrt(dd), sd = td - l1 - l2 * psx + softness;
        if (sd > 0) {
          let p = Math.min(1, sd / (softness * 2)) - 1;
          p = (sd - softness * (1 - p * p)) / td;
          tx -= p * tx;
          ty -= p * ty;
          dd = tx * tx + ty * ty;
        }
      }
      outer:
        if (u) {
          l2 *= psx;
          let cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
          if (cos < -1) {
            cos = -1;
            a2 = Math.PI * bendDir;
          } else if (cos > 1) {
            cos = 1;
            a2 = 0;
            if (stretch) {
              a = (Math.sqrt(dd) / (l1 + l2) - 1) * mix + 1;
              parent.scaleX *= a;
              if (uniform) parent.scaleY *= a;
            }
          } else
            a2 = Math.acos(cos) * bendDir;
          a = l1 + l2 * cos;
          b = l2 * Math.sin(a2);
          a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
        } else {
          a = psx * l2;
          b = psy * l2;
          const aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
          c = bb * l1 * l1 + aa * dd - aa * bb;
          const c1 = -2 * bb * l1, c2 = bb - aa;
          d = c1 * c1 - 4 * c2 * c;
          if (d >= 0) {
            let q = Math.sqrt(d);
            if (c1 < 0) q = -q;
            q = -(c1 + q) * 0.5;
            let r0 = q / c2, r1 = c / q;
            const r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
            r0 = dd - r * r;
            if (r0 >= 0) {
              y = Math.sqrt(r0) * bendDir;
              a1 = ta - Math.atan2(y, r);
              a2 = Math.atan2(y / psy, (r - l1) / psx);
              break outer;
            }
          }
          let minAngle = MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
          let maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
          c = -a * l1 / (aa - bb);
          if (c >= -1 && c <= 1) {
            c = Math.acos(c);
            x = a * Math.cos(c) + l1;
            y = b * Math.sin(c);
            d = x * x + y * y;
            if (d < minDist) {
              minAngle = c;
              minDist = d;
              minX = x;
              minY = y;
            }
            if (d > maxDist) {
              maxAngle = c;
              maxDist = d;
              maxX = x;
              maxY = y;
            }
          }
          if (dd <= (minDist + maxDist) * 0.5) {
            a1 = ta - Math.atan2(minY * bendDir, minX);
            a2 = minAngle * bendDir;
          } else {
            a1 = ta - Math.atan2(maxY * bendDir, maxX);
            a2 = maxAngle * bendDir;
          }
        }
      const os = Math.atan2(child.y, child.x) * s2;
      a1 = (a1 - os) * MathUtils.radDeg + os1 - parent.rotation;
      if (a1 > 180)
        a1 -= 360;
      else if (a1 < -180)
        a1 += 360;
      parent.rotation += a1 * mix;
      a2 = ((a2 + os) * MathUtils.radDeg - child.shearX) * s2 + os2 - child.rotation;
      if (a2 > 180)
        a2 -= 360;
      else if (a2 < -180)
        a2 += 360;
      child.rotation += a2 * mix;
    }
  };

  // spine-core/src/IkConstraintData.ts
  var IkConstraintData = class extends ConstraintData {
    /** The bones that are constrained by this IK constraint. */
    bones = [];
    _target = null;
    /** The bone that is the IK target. */
    set target(boneData) {
      this._target = boneData;
    }
    get target() {
      if (!this._target) throw new Error("target cannot be null.");
      else return this._target;
    }
    /** When true and {@link IkConstraintPose.compress} or {@link IkConstraintPose.stretch} is used, the bone is scaled
     * on both the X and Y axes. */
    uniform = false;
    constructor(name) {
      super(name, new IkConstraintPose());
    }
    create(skeleton) {
      return new IkConstraint(this, skeleton);
    }
  };

  // spine-core/src/PathConstraintPose.ts
  var PathConstraintPose = class {
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
    mixRotate = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
    mixX = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
    mixY = 0;
    set(pose) {
      this.position = pose.position;
      this.spacing = pose.spacing;
      this.mixRotate = pose.mixRotate;
      this.mixX = pose.mixX;
      this.mixY = pose.mixY;
    }
  };

  // spine-core/src/PathConstraintData.ts
  var PathConstraintData = class extends ConstraintData {
    /** The bones that will be modified by this path constraint. */
    bones = [];
    /** The slot whose path attachment will be used to constrained the bones. */
    set slot(slotData) {
      this._slot = slotData;
    }
    get slot() {
      if (!this._slot) throw new Error("SlotData not set.");
      else return this._slot;
    }
    _slot = null;
    /** The mode for positioning the first bone on the path. */
    positionMode = 0 /* Fixed */;
    /** The mode for positioning the bones after the first bone on the path. */
    spacingMode = 1 /* Fixed */;
    /** The mode for adjusting the rotation of the bones. */
    rotateMode = 1 /* Chain */;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    constructor(name) {
      super(name, new PathConstraintPose());
    }
    create(skeleton) {
      return new PathConstraint(this, skeleton);
    }
  };
  var PositionMode = /* @__PURE__ */ ((PositionMode2) => {
    PositionMode2[PositionMode2["Fixed"] = 0] = "Fixed";
    PositionMode2[PositionMode2["Percent"] = 1] = "Percent";
    return PositionMode2;
  })(PositionMode || {});
  var SpacingMode = /* @__PURE__ */ ((SpacingMode2) => {
    SpacingMode2[SpacingMode2["Length"] = 0] = "Length";
    SpacingMode2[SpacingMode2["Fixed"] = 1] = "Fixed";
    SpacingMode2[SpacingMode2["Percent"] = 2] = "Percent";
    SpacingMode2[SpacingMode2["Proportional"] = 3] = "Proportional";
    return SpacingMode2;
  })(SpacingMode || {});
  var RotateMode = /* @__PURE__ */ ((RotateMode2) => {
    RotateMode2[RotateMode2["Tangent"] = 0] = "Tangent";
    RotateMode2[RotateMode2["Chain"] = 1] = "Chain";
    RotateMode2[RotateMode2["ChainScale"] = 2] = "ChainScale";
    return RotateMode2;
  })(RotateMode || {});

  // spine-core/src/PathConstraint.ts
  var PathConstraint = class _PathConstraint extends Constraint {
    static NONE = -1;
    static BEFORE = -2;
    static AFTER = -3;
    static epsilon = 1e-5;
    /** The path constraint's setup pose data. */
    data;
    /** The bones that will be modified by this path constraint. */
    bones;
    /** The slot whose path attachment will be used to constrained the bones. */
    slot;
    spaces = [];
    positions = [];
    world = [];
    curves = [];
    lengths = [];
    segments = [];
    constructor(data, skeleton) {
      super(data, new PathConstraintPose(), new PathConstraintPose());
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.bones = [];
      for (const boneData of this.data.bones)
        this.bones.push(skeleton.bones[boneData.index].constrained);
      this.slot = skeleton.slots[data.slot.index];
    }
    copy(skeleton) {
      var copy = new _PathConstraint(this.data, skeleton);
      copy.pose.set(this.pose);
      return copy;
    }
    update(skeleton, physics) {
      const attachment = this.slot.applied.attachment;
      if (!(attachment instanceof PathAttachment)) return;
      const p = this.applied;
      const mixRotate = p.mixRotate, mixX = p.mixX, mixY = p.mixY;
      if (mixRotate === 0 && mixX === 0 && mixY === 0) return;
      const data = this.data;
      const tangents = data.rotateMode === 0 /* Tangent */, scale = data.rotateMode === 2 /* ChainScale */;
      const bones = this.bones;
      const boneCount = bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
      const spaces = Utils.setArraySize(this.spaces, spacesCount), lengths = scale ? this.lengths = Utils.setArraySize(this.lengths, boneCount) : [];
      const spacing = p.spacing;
      switch (data.spacingMode) {
        case 2 /* Percent */:
          if (scale) {
            for (let i = 0, n = spacesCount - 1; i < n; i++) {
              const bone = bones[i];
              const setupLength = bone.bone.data.length;
              const x = setupLength * bone.a, y = setupLength * bone.c;
              lengths[i] = Math.sqrt(x * x + y * y);
            }
          }
          Utils.arrayFill(spaces, 1, spacesCount, spacing);
          break;
        case 3 /* Proportional */: {
          let sum = 0;
          for (let i = 0, n = spacesCount - 1; i < n; ) {
            const bone = bones[i];
            const setupLength = bone.bone.data.length;
            if (setupLength < _PathConstraint.epsilon) {
              if (scale) lengths[i] = 0;
              spaces[++i] = spacing;
            } else {
              const x = setupLength * bone.a, y = setupLength * bone.c;
              const length = Math.sqrt(x * x + y * y);
              if (scale) lengths[i] = length;
              spaces[++i] = length;
              sum += length;
            }
          }
          if (sum > 0) {
            sum = spacesCount / sum * spacing;
            for (let i = 1; i < spacesCount; i++)
              spaces[i] *= sum;
          }
          break;
        }
        default: {
          const lengthSpacing = data.spacingMode === 0 /* Length */;
          for (let i = 0, n = spacesCount - 1; i < n; ) {
            const bone = bones[i];
            const setupLength = bone.bone.data.length;
            if (setupLength < _PathConstraint.epsilon) {
              if (scale) lengths[i] = 0;
              spaces[++i] = spacing;
            } else {
              const x = setupLength * bone.a, y = setupLength * bone.c;
              const length = Math.sqrt(x * x + y * y);
              if (scale) lengths[i] = length;
              spaces[++i] = (lengthSpacing ? Math.max(0, setupLength + spacing) : spacing) * length / setupLength;
            }
          }
        }
      }
      const positions = this.computeWorldPositions(skeleton, attachment, spacesCount, tangents);
      let boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
      let tip = false;
      if (offsetRotation === 0)
        tip = data.rotateMode === 1 /* Chain */;
      else {
        tip = false;
        const bone = this.slot.bone.applied;
        offsetRotation *= bone.a * bone.d - bone.b * bone.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
      }
      for (let i = 0, ip = 3, u = skeleton._update; i < boneCount; i++, ip += 3) {
        const bone = bones[i];
        bone.worldX += (boneX - bone.worldX) * mixX;
        bone.worldY += (boneY - bone.worldY) * mixY;
        const x = positions[ip], y = positions[ip + 1], dx = x - boneX, dy = y - boneY;
        if (scale) {
          const length = lengths[i];
          if (length !== 0) {
            const s = (Math.sqrt(dx * dx + dy * dy) / length - 1) * mixRotate + 1;
            bone.a *= s;
            bone.c *= s;
          }
        }
        boneX = x;
        boneY = y;
        if (mixRotate > 0) {
          let a = bone.a, b = bone.b, c = bone.c, d = bone.d, r = 0, cos = 0, sin = 0;
          if (tangents)
            r = positions[ip - 1];
          else if (spaces[i + 1] === 0)
            r = positions[ip + 2];
          else
            r = Math.atan2(dy, dx);
          r -= Math.atan2(c, a);
          if (tip) {
            cos = Math.cos(r);
            sin = Math.sin(r);
            const length = bone.bone.data.length;
            boneX += (length * (cos * a - sin * c) - dx) * mixRotate;
            boneY += (length * (sin * a + cos * c) - dy) * mixRotate;
          } else {
            r += offsetRotation;
          }
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          r *= mixRotate;
          cos = Math.cos(r);
          sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
        }
        bone.modifyWorld(u);
      }
    }
    computeWorldPositions(skeleton, path, spacesCount, tangents) {
      const slot = this.slot;
      let position = this.applied.position;
      let spaces = this.spaces, out = Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = this.world;
      const closed = path.closed;
      let verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = _PathConstraint.NONE;
      if (!path.constantSpeed) {
        const lengths = path.lengths;
        curveCount -= closed ? 1 : 2;
        const pathLength2 = lengths[curveCount];
        if (this.data.positionMode === 1 /* Percent */) position *= pathLength2;
        let multiplier2;
        switch (this.data.spacingMode) {
          case 2 /* Percent */:
            multiplier2 = pathLength2;
            break;
          case 3 /* Proportional */:
            multiplier2 = pathLength2 / spacesCount;
            break;
          default:
            multiplier2 = 1;
        }
        world = Utils.setArraySize(this.world, 8);
        for (let i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
          const space = spaces[i] * multiplier2;
          position += space;
          let p = position;
          if (closed) {
            p %= pathLength2;
            if (p < 0) p += pathLength2;
            curve = 0;
          } else if (p < 0) {
            if (prevCurve !== _PathConstraint.BEFORE) {
              prevCurve = _PathConstraint.BEFORE;
              path.computeWorldVertices(skeleton, slot, 2, 4, world, 0, 2);
            }
            this.addBeforePosition(p, world, 0, out, o);
            continue;
          } else if (p > pathLength2) {
            if (prevCurve !== _PathConstraint.AFTER) {
              prevCurve = _PathConstraint.AFTER;
              path.computeWorldVertices(skeleton, slot, verticesLength - 6, 4, world, 0, 2);
            }
            this.addAfterPosition(p - pathLength2, world, 0, out, o);
            continue;
          }
          for (; ; curve++) {
            const length = lengths[curve];
            if (p > length) continue;
            if (curve === 0)
              p /= length;
            else {
              const prev = lengths[curve - 1];
              p = (p - prev) / (length - prev);
            }
            break;
          }
          if (curve !== prevCurve) {
            prevCurve = curve;
            if (closed && curve === curveCount) {
              path.computeWorldVertices(skeleton, slot, verticesLength - 4, 4, world, 0, 2);
              path.computeWorldVertices(skeleton, slot, 0, 4, world, 4, 2);
            } else
              path.computeWorldVertices(skeleton, slot, curve * 6 + 2, 8, world, 0, 2);
          }
          this.addCurvePosition(
            p,
            world[0],
            world[1],
            world[2],
            world[3],
            world[4],
            world[5],
            world[6],
            world[7],
            out,
            o,
            tangents || i > 0 && space === 0
          );
        }
        return out;
      }
      if (closed) {
        verticesLength += 2;
        world = Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(skeleton, slot, 2, verticesLength - 4, world, 0, 2);
        path.computeWorldVertices(skeleton, slot, 0, 2, world, verticesLength - 4, 2);
        world[verticesLength - 2] = world[0];
        world[verticesLength - 1] = world[1];
      } else {
        curveCount--;
        verticesLength -= 4;
        world = Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(skeleton, slot, 2, verticesLength, world, 0, 2);
      }
      const curves = Utils.setArraySize(this.curves, curveCount);
      let pathLength = 0;
      let x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
      let tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
      for (let i = 0, w = 2; i < curveCount; i++, w += 6) {
        cx1 = world[w];
        cy1 = world[w + 1];
        cx2 = world[w + 2];
        cy2 = world[w + 3];
        x2 = world[w + 4];
        y2 = world[w + 5];
        tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
        tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
        ddfx = tmpx * 2 + dddfx;
        ddfy = tmpy * 2 + dddfy;
        dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
        dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        ddfx += dddfx;
        ddfy += dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx + dddfx;
        dfy += ddfy + dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        curves[i] = pathLength;
        x1 = x2;
        y1 = y2;
      }
      if (this.data.positionMode === 1 /* Percent */) position *= pathLength;
      let multiplier;
      switch (this.data.spacingMode) {
        case 2 /* Percent */:
          multiplier = pathLength;
          break;
        case 3 /* Proportional */:
          multiplier = pathLength / spacesCount;
          break;
        default:
          multiplier = 1;
      }
      const segments = this.segments;
      let curveLength = 0;
      for (let i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
        const space = spaces[i] * multiplier;
        position += space;
        let p = position;
        if (closed) {
          p %= pathLength;
          if (p < 0) p += pathLength;
          curve = 0;
          segment = 0;
        } else if (p < 0) {
          this.addBeforePosition(p, world, 0, out, o);
          continue;
        } else if (p > pathLength) {
          this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
          continue;
        }
        for (; ; curve++) {
          const length = curves[curve];
          if (p > length) continue;
          if (curve === 0)
            p /= length;
          else {
            const prev = curves[curve - 1];
            p = (p - prev) / (length - prev);
          }
          break;
        }
        if (curve !== prevCurve) {
          prevCurve = curve;
          let ii = curve * 6;
          x1 = world[ii];
          y1 = world[ii + 1];
          cx1 = world[ii + 2];
          cy1 = world[ii + 3];
          cx2 = world[ii + 4];
          cy2 = world[ii + 5];
          x2 = world[ii + 6];
          y2 = world[ii + 7];
          tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
          tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
          dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 6e-3;
          dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 6e-3;
          ddfx = tmpx * 2 + dddfx;
          ddfy = tmpy * 2 + dddfy;
          dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
          dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
          curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
          segments[0] = curveLength;
          for (ii = 1; ii < 8; ii++) {
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
            segments[ii] = curveLength;
          }
          dfx += ddfx;
          dfy += ddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[8] = curveLength;
          dfx += ddfx + dddfx;
          dfy += ddfy + dddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[9] = curveLength;
          segment = 0;
        }
        p *= curveLength;
        for (; ; segment++) {
          const length = segments[segment];
          if (p > length) continue;
          if (segment === 0)
            p /= length;
          else {
            const prev = segments[segment - 1];
            p = segment + (p - prev) / (length - prev);
          }
          break;
        }
        this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || i > 0 && space === 0);
      }
      return out;
    }
    addBeforePosition(p, temp, i, out, o) {
      const x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    }
    addAfterPosition(p, temp, i, out, o) {
      const x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    }
    addCurvePosition(p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
      if (p === 0 || Number.isNaN(p)) {
        out[o] = x1;
        out[o + 1] = y1;
        out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
        return;
      }
      const tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
      const ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
      const x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
      out[o] = x;
      out[o + 1] = y;
      if (tangents) {
        if (p < 1e-3)
          out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
        else
          out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
      }
    }
    sort(skeleton) {
      const slotIndex = this.slot.data.index;
      const slotBone = this.slot.bone;
      if (skeleton.skin != null) this.sortPathSlot(skeleton, skeleton.skin, slotIndex, slotBone);
      if (skeleton.data.defaultSkin != null && skeleton.data.defaultSkin !== skeleton.skin)
        this.sortPathSlot(skeleton, skeleton.data.defaultSkin, slotIndex, slotBone);
      this.sortPath(skeleton, this.slot.pose.attachment, slotBone);
      const bones = this.bones;
      const boneCount = this.bones.length;
      for (let i = 0; i < boneCount; i++) {
        const bone = bones[i].bone;
        skeleton.sortBone(bone);
        skeleton.constrained(bone);
      }
      skeleton._updateCache.push(this);
      for (let i = 0; i < boneCount; i++)
        skeleton.sortReset(bones[i].bone.children);
      for (let i = 0; i < boneCount; i++)
        bones[i].bone.sorted = true;
    }
    sortPathSlot(skeleton, skin, slotIndex, slotBone) {
      const entries = skin.getAttachments();
      for (let i = 0, n = entries.length; i < n; i++) {
        const entry = entries[i];
        if (entry.slotIndex === slotIndex) this.sortPath(skeleton, entry.attachment, slotBone);
      }
    }
    sortPath(skeleton, attachment, slotBone) {
      if (!(attachment instanceof PathAttachment)) return;
      const pathBones = attachment.bones;
      if (pathBones == null)
        skeleton.sortBone(slotBone);
      else {
        const bones = skeleton.bones;
        for (let i = 0, n = pathBones.length; i < n; ) {
          let nn = pathBones[i++];
          nn += i;
          while (i < nn)
            skeleton.sortBone(bones[pathBones[i++]]);
        }
      }
    }
    isSourceActive() {
      return this.slot.bone.active;
    }
  };

  // spine-core/src/Physics.ts
  var Physics = /* @__PURE__ */ ((Physics2) => {
    Physics2[Physics2["none"] = 0] = "none";
    Physics2[Physics2["reset"] = 1] = "reset";
    Physics2[Physics2["update"] = 2] = "update";
    Physics2[Physics2["pose"] = 3] = "pose";
    return Physics2;
  })(Physics || {});

  // spine-core/src/PhysicsConstraintPose.ts
  var PhysicsConstraintPose = class {
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
    mix = 0;
    set(pose) {
      this.inertia = pose.inertia;
      this.strength = pose.strength;
      this.damping = pose.damping;
      this.massInverse = pose.massInverse;
      this.wind = pose.wind;
      this.gravity = pose.gravity;
      this.mix = pose.mix;
    }
  };

  // spine-core/src/SlotPose.ts
  var SlotPose = class {
    /** The color used to tint the slot's attachment. If {@link darkColor} is set, this is used as the light color for two
     * color tinting. */
    color = new Color(1, 1, 1, 1);
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    /** The current attachment for the slot, or null if the slot has no attachment. */
    attachment = null;
    // Not used in setup pose.
    /** The index of the texture region to display when the slot's attachment has a {@link Sequence}. -1 represents the
     * {@link Sequence.getSetupIndex()}. */
    sequenceIndex = 0;
    /** Values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a
     * weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions.
     *
     * See {@link VertexAttachment.computeWorldVertices()} and
     * {@link DeformTimeline}. */
    deform = [];
    SlotPose() {
    }
    set(pose) {
      if (pose == null) throw new Error("pose cannot be null.");
      this.color.setFromColor(pose.color);
      if (this.darkColor != null && pose.darkColor != null) this.darkColor.setFromColor(pose.darkColor);
      this.attachment = pose.attachment;
      this.sequenceIndex = pose.sequenceIndex;
      this.deform.length = 0;
      this.deform.push(...pose.deform);
    }
    /** The current attachment for the slot, or null if the slot has no attachment. */
    getAttachment() {
      return this.attachment;
    }
    /** Sets the slot's attachment and, if the attachment changed, resets {@link #sequenceIndex} and clears the {@link #deform}.
     * The deform is not cleared if the old attachment has the same {@link VertexAttachment.getTimelineAttachment()} as the
     * specified attachment. */
    setAttachment(attachment) {
      if (this.attachment === attachment) return;
      if (!(attachment instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment) || attachment.timelineAttachment !== this.attachment.timelineAttachment) {
        this.deform.length = 0;
      }
      this.attachment = attachment;
      this.sequenceIndex = -1;
    }
  };

  // spine-core/src/Slot.ts
  var Slot = class extends Posed {
    skeleton;
    /** The bone this slot belongs to. */
    bone;
    attachmentState = 0;
    constructor(data, skeleton) {
      super(data, new SlotPose(), new SlotPose());
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.skeleton = skeleton;
      this.bone = skeleton.bones[data.boneData.index];
      if (data.setup.darkColor != null) {
        this.pose.darkColor = new Color();
        this.constrained.darkColor = new Color();
      }
      this.setupPose();
    }
    setupPose() {
      this.pose.color.setFromColor(this.data.setup.color);
      if (this.pose.darkColor) this.pose.darkColor.setFromColor(this.data.setup.darkColor);
      this.pose.sequenceIndex = this.data.setup.sequenceIndex;
      if (!this.data.attachmentName)
        this.pose.setAttachment(null);
      else {
        this.pose.attachment = null;
        this.pose.setAttachment(this.skeleton.getAttachment(this.data.index, this.data.attachmentName));
      }
    }
  };

  // spine-core/src/Skeleton.ts
  var Skeleton = class _Skeleton {
    static quadTriangles = [0, 1, 2, 2, 3, 0];
    static yDown = false;
    static get yDir() {
      return _Skeleton.yDown ? -1 : 1;
    }
    /** The skeleton's setup pose data. */
    data;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones;
    /** The skeleton's slots. */
    slots;
    /** The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order. */
    drawOrder;
    /** The skeleton's constraints. */
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    constraints;
    /** The skeleton's physics constraints. */
    physics;
    /** The list of bones and constraints, sorted in the order they should be updated, as computed by {@link updateCache()}. */
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    _updateCache = [];
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    resetCache = [];
    /** The skeleton's current skin. May be null. */
    skin = null;
    /** The color to tint all the skeleton's attachments. */
    color;
    /** Scales the entire skeleton on the X axis.
     *
     * Bones that do not inherit scale are still affected by this property. */
    scaleX = 1;
    _scaleY = 1;
    /** Scales the entire skeleton on the Y axis.
     *
     * Bones that do not inherit scale are still affected by this property. */
    get scaleY() {
      return this._scaleY * _Skeleton.yDir;
    }
    set scaleY(scaleY) {
      this._scaleY = scaleY;
    }
    /** Sets the skeleton X position, which is added to the root bone worldX position.
     *
     * Bones that do not inherit translation are still affected by this property. */
    x = 0;
    /** Sets the skeleton Y position, which is added to the root bone worldY position.
     *
     * Bones that do not inherit translation are still affected by this property. */
    y = 0;
    /** Returns the skeleton's time. This is used for time-based manipulations, such as {@link PhysicsConstraint}.
     *
     * See {@link _update()}. */
    time = 0;
    windX = 1;
    windY = 0;
    gravityX = 0;
    gravityY = 1;
    _update = 0;
    constructor(data) {
      if (!data) throw new Error("data cannot be null.");
      this.data = data;
      this.bones = [];
      for (let i = 0; i < data.bones.length; i++) {
        const boneData = data.bones[i];
        let bone;
        if (!boneData.parent)
          bone = new Bone(boneData, null);
        else {
          const parent = this.bones[boneData.parent.index];
          bone = new Bone(boneData, parent);
          parent.children.push(bone);
        }
        this.bones.push(bone);
      }
      this.slots = [];
      this.drawOrder = [];
      for (const slotData of this.data.slots) {
        const slot = new Slot(slotData, this);
        this.slots.push(slot);
        this.drawOrder.push(slot);
      }
      this.physics = [];
      this.constraints = [];
      for (const constraintData of this.data.constraints) {
        const constraint = constraintData.create(this);
        if (constraint instanceof PhysicsConstraint) this.physics.push(constraint);
        this.constraints.push(constraint);
      }
      this.color = new Color(1, 1, 1, 1);
      this.updateCache();
    }
    /** Caches information about bones and constraints. Must be called if the {@link getSkin()} is modified or if bones,
     * constraints, or weighted path attachments are added or removed. */
    updateCache() {
      this._updateCache.length = 0;
      this.resetCache.length = 0;
      const slots = this.slots;
      for (let i = 0, n2 = slots.length; i < n2; i++)
        slots[i].usePose();
      const bones = this.bones;
      const boneCount = bones.length;
      for (let i = 0, n2 = boneCount; i < n2; i++) {
        const bone = bones[i];
        bone.sorted = bone.data.skinRequired;
        bone.active = !bone.sorted;
        bone.usePose();
      }
      if (this.skin) {
        const skinBones = this.skin.bones;
        for (let i = 0, n2 = this.skin.bones.length; i < n2; i++) {
          let bone = this.bones[skinBones[i].index];
          do {
            bone.sorted = false;
            bone.active = true;
            bone = bone.parent;
          } while (bone);
        }
      }
      const constraints = this.constraints;
      let n = this.constraints.length;
      for (let i = 0; i < n; i++)
        constraints[i].usePose();
      for (let i = 0; i < n; i++) {
        const constraint = constraints[i];
        constraint.active = constraint.isSourceActive() && (!constraint.data.skinRequired || this.skin != null && this.skin.constraints.includes(constraint.data));
        if (constraint.active) constraint.sort(this);
      }
      for (let i = 0; i < boneCount; i++)
        this.sortBone(bones[i]);
      n = this._updateCache.length;
      for (let i = 0; i < n; i++) {
        const updateable = this._updateCache[i];
        if (updateable instanceof Bone) this._updateCache[i] = updateable.applied;
      }
    }
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    constrained(object) {
      if (object.pose === object.applied) {
        object.useConstrained();
        this.resetCache.push(object);
      }
    }
    sortBone(bone) {
      if (bone.sorted || !bone.active) return;
      const parent = bone.parent;
      if (parent) this.sortBone(parent);
      bone.sorted = true;
      this._updateCache.push(bone);
    }
    sortReset(bones) {
      for (let i = 0, n = bones.length; i < n; i++) {
        const bone = bones[i];
        if (bone.active) {
          if (bone.sorted) this.sortReset(bone.children);
          bone.sorted = false;
        }
      }
    }
    /** Updates the world transform for each bone and applies all constraints.
     * <p>
     * See <a href="https://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide. */
    updateWorldTransform(physics) {
      this._update++;
      const resetCache = this.resetCache;
      for (let i = 0, n = this.resetCache.length; i < n; i++)
        resetCache[i].resetConstrained();
      const updateCache = this._updateCache;
      for (let i = 0, n = this._updateCache.length; i < n; i++)
        updateCache[i].update(this, physics);
    }
    /** Sets the bones, constraints, and slots to their setup pose values. */
    setupPose() {
      this.setupPoseBones();
      this.setupPoseSlots();
    }
    /** Sets the bones and constraints to their setup pose values. */
    setupPoseBones() {
      const bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++)
        bones[i].setupPose();
      const constraints = this.constraints;
      for (let i = 0, n = constraints.length; i < n; i++)
        constraints[i].setupPose();
    }
    /** Sets the slots and draw order to their setup pose values. */
    setupPoseSlots() {
      const slots = this.slots;
      Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
      for (let i = 0, n = slots.length; i < n; i++)
        slots[i].setupPose();
    }
    /** Returns the root bone, or null if the skeleton has no bones. */
    getRootBone() {
      if (this.bones.length === 0) return null;
      return this.bones[0];
    }
    /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
     * repeatedly. */
    findBone(boneName) {
      if (!boneName) throw new Error("boneName cannot be null.");
      const bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++)
        if (bones[i].data.name === boneName) return bones[i];
      return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * repeatedly. */
    findSlot(slotName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      const slots = this.slots;
      for (let i = 0, n = slots.length; i < n; i++)
        if (slots[i].data.name === slotName) return slots[i];
      return null;
    }
    setSkin(newSkin) {
      if (typeof newSkin === "string")
        this.setSkinByName(newSkin);
      else
        this.setSkinBySkin(newSkin);
    }
    setSkinByName(skinName) {
      const skin = this.data.findSkin(skinName);
      if (!skin) throw new Error(`Skin not found: ${skinName}`);
      this.setSkin(skin);
    }
    setSkinBySkin(newSkin) {
      if (newSkin === this.skin) return;
      if (newSkin) {
        if (this.skin)
          newSkin.attachAll(this, this.skin);
        else {
          const slots = this.slots;
          for (let i = 0, n = slots.length; i < n; i++) {
            const slot = slots[i];
            const name = slot.data.attachmentName;
            if (name) {
              const attachment = newSkin.getAttachment(i, name);
              if (attachment) slot.pose.setAttachment(attachment);
            }
          }
        }
      }
      this.skin = newSkin;
      this.updateCache();
    }
    getAttachment(slotNameOrIndex, attachmentName) {
      if (typeof slotNameOrIndex === "string")
        return this.getAttachmentByName(slotNameOrIndex, attachmentName);
      return this.getAttachmentByIndex(slotNameOrIndex, attachmentName);
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot name and attachment
     * name.
     *
     * See {@link #getAttachment()}.
     * @returns May be null. */
    getAttachmentByName(slotName, attachmentName) {
      const slot = this.data.findSlot(slotName);
      if (!slot) throw new Error(`Can't find slot with name ${slotName}`);
      return this.getAttachment(slot.index, attachmentName);
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot index and
     * attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.
     *
     * See [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide.
     * @returns May be null. */
    getAttachmentByIndex(slotIndex, attachmentName) {
      if (!attachmentName) throw new Error("attachmentName cannot be null.");
      if (this.skin) {
        const attachment = this.skin.getAttachment(slotIndex, attachmentName);
        if (attachment) return attachment;
      }
      if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
      return null;
    }
    /** A convenience method to set an attachment by finding the slot with {@link findSlot()}, finding the attachment with
     * {@link getAttachment()}, then setting the slot's {@link Slot.attachment}.
     * @param attachmentName May be null to clear the slot's attachment. */
    setAttachment(slotName, attachmentName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      const slot = this.findSlot(slotName);
      if (!slot) throw new Error(`Slot not found: ${slotName}`);
      let attachment = null;
      if (attachmentName) {
        attachment = this.getAttachment(slot.data.index, attachmentName);
        if (!attachment)
          throw new Error(`Attachment not found: ${attachmentName}, for slot: ${slotName}`);
      }
      slot.pose.setAttachment(attachment);
    }
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    findConstraint(constraintName, type) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      if (type == null) throw new Error("type cannot be null.");
      const constraints = this.constraints;
      for (let i = 0, n = constraints.length; i < n; i++) {
        const constraint = constraints[i];
        if (constraint instanceof type && constraint.data.name === constraintName) return constraint;
      }
      return null;
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose as `{ x: number, y: number, width: number, height: number }`.
     * Note that this method will create temporary objects which can add to garbage collection pressure. Use `getBounds()` if garbage collection is a concern. */
    getBoundsRect(clipper) {
      const offset = new Vector2();
      const size = new Vector2();
      this.getBounds(offset, size, void 0, clipper);
      return { x: offset.x, y: offset.y, width: size.x, height: size.y };
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.
     * @param offset An output value, the distance from the skeleton origin to the bottom left corner of the AABB.
     * @param size An output value, the width and height of the AABB.
     * @param temp Working memory to temporarily store attachments' computed world vertices.
     * @param clipper {@link SkeletonClipping} to use. If <code>null</code>, no clipping is applied. */
    getBounds(offset, size, temp = new Array(2), clipper = null) {
      if (!offset) throw new Error("offset cannot be null.");
      if (!size) throw new Error("size cannot be null.");
      const drawOrder = this.drawOrder;
      let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
      for (let i = 0, n = drawOrder.length; i < n; i++) {
        const slot = drawOrder[i];
        if (!slot.bone.active) continue;
        let verticesLength = 0;
        let vertices = null;
        let triangles = null;
        const attachment = slot.pose.attachment;
        if (attachment) {
          if (attachment instanceof RegionAttachment) {
            verticesLength = 8;
            vertices = Utils.setArraySize(temp, verticesLength, 0);
            attachment.computeWorldVertices(slot, vertices, 0, 2);
            triangles = _Skeleton.quadTriangles;
          } else if (attachment instanceof MeshAttachment) {
            verticesLength = attachment.worldVerticesLength;
            vertices = Utils.setArraySize(temp, verticesLength, 0);
            attachment.computeWorldVertices(this, slot, 0, verticesLength, vertices, 0, 2);
            triangles = attachment.triangles;
          } else if (attachment instanceof ClippingAttachment && clipper) {
            clipper.clipEnd(slot);
            clipper.clipStart(this, slot, attachment);
            continue;
          }
          if (vertices && triangles) {
            if (clipper?.isClipping() && clipper.clipTriangles(vertices, triangles, triangles.length)) {
              vertices = clipper.clippedVertices;
              verticesLength = clipper.clippedVertices.length;
            }
            for (let ii = 0, nn = vertices.length; ii < nn; ii += 2) {
              const x = vertices[ii], y = vertices[ii + 1];
              minX = Math.min(minX, x);
              minY = Math.min(minY, y);
              maxX = Math.max(maxX, x);
              maxY = Math.max(maxY, y);
            }
          }
        }
        if (clipper) clipper.clipEnd(slot);
      }
      if (clipper) clipper.clipEnd();
      offset.set(minX, minY);
      size.set(maxX - minX, maxY - minY);
    }
    /** Scales the entire skeleton on the X and Y axes.
     *
     * Bones that do not inherit scale are still affected by this property. */
    setScale(scaleX, scaleY) {
      this.scaleX = scaleX;
      this.scaleY = scaleY;
    }
    /** Sets the skeleton X and Y position, which is added to the root bone worldX and worldY position.
     *
     * Bones that do not inherit translation are still affected by this property. */
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
    /** Increments the skeleton's {@link #time}. */
    update(delta) {
      this.time += delta;
    }
    /** Calls {@link PhysicsConstraint.translate} for each physics constraint. */
    physicsTranslate(x, y) {
      const constraints = this.physics;
      for (let i = 0, n = constraints.length; i < n; i++)
        constraints[i].translate(x, y);
    }
    /** Calls {@link PhysicsConstraint.rotate} for each physics constraint. */
    physicsRotate(x, y, degrees) {
      const constraints = this.physics;
      for (let i = 0, n = constraints.length; i < n; i++)
        constraints[i].rotate(x, y, degrees);
    }
  };

  // spine-core/src/PhysicsConstraint.ts
  var PhysicsConstraint = class _PhysicsConstraint extends Constraint {
    bone;
    _reset = true;
    ux = 0;
    uy = 0;
    cx = 0;
    cy = 0;
    tx = 0;
    ty = 0;
    xOffset = 0;
    xLag = 0;
    xVelocity = 0;
    yOffset = 0;
    yLag = 0;
    yVelocity = 0;
    rotateOffset = 0;
    rotateLag = 0;
    rotateVelocity = 0;
    scaleOffset = 0;
    scaleLag = 0;
    scaleVelocity = 0;
    remaining = 0;
    lastTime = 0;
    constructor(data, skeleton) {
      super(data, new PhysicsConstraintPose(), new PhysicsConstraintPose());
      if (skeleton == null) throw new Error("skeleton cannot be null.");
      this.bone = skeleton.bones[data.bone.index].constrained;
    }
    copy(skeleton) {
      var copy = new _PhysicsConstraint(this.data, skeleton);
      copy.pose.set(this.pose);
      return copy;
    }
    reset(skeleton) {
      this.remaining = 0;
      this.lastTime = skeleton.time;
      this._reset = true;
      this.xOffset = 0;
      this.xLag = 0;
      this.xVelocity = 0;
      this.yOffset = 0;
      this.yLag = 0;
      this.yVelocity = 0;
      this.rotateOffset = 0;
      this.rotateLag = 0;
      this.rotateVelocity = 0;
      this.scaleOffset = 0;
      this.scaleLag = 0;
      this.scaleVelocity = 0;
    }
    /** Translates the physics constraint so next {@link update} forces are applied as if the bone moved an
     * additional amount in world space. */
    translate(x, y) {
      this.ux -= x;
      this.uy -= y;
      this.cx -= x;
      this.cy -= y;
    }
    /** Rotates the physics constraint so next {@link update} forces are applied as if the bone rotated around the
     * specified point in world space. */
    rotate(x, y, degrees) {
      const r = degrees * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
      const dx = this.cx - x, dy = this.cy - y;
      this.translate(dx * cos - dy * sin - dx, dx * sin + dy * cos - dy);
    }
    /** Applies the constraint to the constrained bones. */
    update(skeleton, physics) {
      const p = this.applied;
      const mix = p.mix;
      if (mix === 0) return;
      const x = this.data.x > 0, y = this.data.y > 0, rotateOrShearX = this.data.rotate > 0 || this.data.shearX > 0, scaleX = this.data.scaleX > 0;
      const bone = this.bone;
      let l = bone.bone.data.length, t = this.data.step, z = 0;
      switch (physics) {
        case 0 /* none */:
          return;
        // biome-ignore lint/suspicious/noFallthroughSwitchClause: fall through expected
        case 1 /* reset */:
          this.reset(skeleton);
        // Fall through.
        case 2 /* update */: {
          const delta = Math.max(skeleton.time - this.lastTime, 0), aa = this.remaining;
          this.remaining += delta;
          this.lastTime = skeleton.time;
          const bx = bone.worldX, by = bone.worldY;
          if (this._reset) {
            this._reset = false;
            this.ux = bx;
            this.uy = by;
          } else {
            let a = this.remaining, i = p.inertia, f = skeleton.data.referenceScale, d = -1, m = 0, e = 0, qx = this.data.limit * delta, qy = qx * Math.abs(skeleton.scaleY);
            qx *= Math.abs(skeleton.scaleX);
            if (x || y) {
              if (x) {
                const u = (this.ux - bx) * i;
                this.xOffset += u > qx ? qx : u < -qx ? -qx : u;
                this.ux = bx;
              }
              if (y) {
                const u = (this.uy - by) * i;
                this.yOffset += u > qy ? qy : u < -qy ? -qy : u;
                this.uy = by;
              }
              if (a >= t) {
                const xs = this.xOffset, ys = this.yOffset;
                d = p.damping ** (60 * t);
                m = t * p.massInverse;
                e = p.strength;
                const w = f * p.wind, g = f * p.gravity;
                const ax = (w * skeleton.windX + g * skeleton.gravityX) * skeleton.scaleX;
                const ay = (w * skeleton.windY + g * skeleton.gravityY) * skeleton.scaleY;
                do {
                  if (x) {
                    this.xVelocity += (ax - this.xOffset * e) * m;
                    this.xOffset += this.xVelocity * t;
                    this.xVelocity *= d;
                  }
                  if (y) {
                    this.yVelocity -= (ay + this.yOffset * e) * m;
                    this.yOffset += this.yVelocity * t;
                    this.yVelocity *= d;
                  }
                  a -= t;
                } while (a >= t);
                this.xLag = this.xOffset - xs;
                this.yLag = this.yOffset - ys;
              }
              z = Math.max(0, 1 - a / t);
              if (x) bone.worldX += (this.xOffset - this.xLag * z) * mix * this.data.x;
              if (y) bone.worldY += (this.yOffset - this.yLag * z) * mix * this.data.y;
            }
            if (rotateOrShearX || scaleX) {
              let ca = Math.atan2(bone.c, bone.a), c = 0, s = 0, mr = 0, dx = this.cx - bone.worldX, dy = this.cy - bone.worldY;
              if (dx > qx)
                dx = qx;
              else if (dx < -qx)
                dx = -qx;
              if (dy > qy)
                dy = qy;
              else if (dy < -qy)
                dy = -qy;
              a = this.remaining;
              if (rotateOrShearX) {
                mr = (this.data.rotate + this.data.shearX) * mix;
                z = this.rotateLag * Math.max(0, 1 - aa / t);
                let r = Math.atan2(dy + this.ty, dx + this.tx) - ca - (this.rotateOffset - z) * mr;
                this.rotateOffset += (r - Math.ceil(r * MathUtils.invPI2 - 0.5) * MathUtils.PI2) * i;
                r = (this.rotateOffset - z) * mr + ca;
                c = Math.cos(r);
                s = Math.sin(r);
                if (scaleX) {
                  r = l * bone.getWorldScaleX();
                  if (r > 0) this.scaleOffset += (dx * c + dy * s) * i / r;
                }
              } else {
                c = Math.cos(ca);
                s = Math.sin(ca);
                const r = l * bone.getWorldScaleX() - this.scaleLag * Math.max(0, 1 - aa / t);
                if (r > 0) this.scaleOffset += (dx * c + dy * s) * i / r;
              }
              if (a >= t) {
                if (d === -1) {
                  d = p.damping ** (60 * t);
                  m = t * p.massInverse;
                  e = p.strength;
                }
                const ax = p.wind * skeleton.windX + p.gravity * skeleton.gravityX;
                const ay = (p.wind * skeleton.windY + p.gravity * skeleton.gravityY) * Skeleton.yDir;
                const rs = this.rotateOffset, ss = this.scaleOffset, h = l / f;
                while (true) {
                  a -= t;
                  if (scaleX) {
                    this.scaleVelocity += (ax * c - ay * s - this.scaleOffset * e) * m;
                    this.scaleOffset += this.scaleVelocity * t;
                    this.scaleVelocity *= d;
                  }
                  if (rotateOrShearX) {
                    this.rotateVelocity -= ((ax * s + ay * c) * h + this.rotateOffset * e) * m;
                    this.rotateOffset += this.rotateVelocity * t;
                    this.rotateVelocity *= d;
                    if (a < t) break;
                    const r = this.rotateOffset * mr + ca;
                    c = Math.cos(r);
                    s = Math.sin(r);
                  } else if (a < t)
                    break;
                }
                this.rotateLag = this.rotateOffset - rs;
                this.scaleLag = this.scaleOffset - ss;
              }
              z = Math.max(0, 1 - a / t);
            }
            this.remaining = a;
          }
          this.cx = bone.worldX;
          this.cy = bone.worldY;
          break;
        }
        case 3 /* pose */:
          z = Math.max(0, 1 - this.remaining / t);
          if (x) bone.worldX += (this.xOffset - this.xLag * z) * mix * this.data.x;
          if (y) bone.worldY += (this.yOffset - this.yLag * z) * mix * this.data.y;
      }
      if (rotateOrShearX) {
        let o = (this.rotateOffset - this.rotateLag * z) * mix, s = 0, c = 0, a = 0;
        if (this.data.shearX > 0) {
          let r = 0;
          if (this.data.rotate > 0) {
            r = o * this.data.rotate;
            s = Math.sin(r);
            c = Math.cos(r);
            a = bone.b;
            bone.b = c * a - s * bone.d;
            bone.d = s * a + c * bone.d;
          }
          r += o * this.data.shearX;
          s = Math.sin(r);
          c = Math.cos(r);
          a = bone.a;
          bone.a = c * a - s * bone.c;
          bone.c = s * a + c * bone.c;
        } else {
          o *= this.data.rotate;
          s = Math.sin(o);
          c = Math.cos(o);
          a = bone.a;
          bone.a = c * a - s * bone.c;
          bone.c = s * a + c * bone.c;
          a = bone.b;
          bone.b = c * a - s * bone.d;
          bone.d = s * a + c * bone.d;
        }
      }
      if (scaleX) {
        const s = 1 + (this.scaleOffset - this.scaleLag * z) * mix * this.data.scaleX;
        bone.a *= s;
        bone.c *= s;
      }
      if (physics !== 3 /* pose */) {
        this.tx = l * bone.a;
        this.ty = l * bone.c;
      }
      bone.modifyWorld(skeleton._update);
    }
    sort(skeleton) {
      const bone = this.bone.bone;
      skeleton.sortBone(bone);
      skeleton._updateCache.push(this);
      skeleton.sortReset(bone.children);
      skeleton.constrained(bone);
    }
    isSourceActive() {
      return this.bone.bone.active;
    }
  };

  // spine-core/src/PhysicsConstraintData.ts
  var PhysicsConstraintData = class extends ConstraintData {
    /** The bone constrained by this physics constraint. */
    set bone(boneData) {
      this._bone = boneData;
    }
    get bone() {
      if (!this._bone) throw new Error("BoneData not set.");
      else return this._bone;
    }
    _bone = null;
    x = 0;
    y = 0;
    rotate = 0;
    scaleX = 0;
    shearX = 0;
    limit = 0;
    step = 0;
    inertiaGlobal = false;
    strengthGlobal = false;
    dampingGlobal = false;
    massGlobal = false;
    windGlobal = false;
    gravityGlobal = false;
    mixGlobal = false;
    constructor(name) {
      super(name, new PhysicsConstraintPose());
    }
    create(skeleton) {
      return new PhysicsConstraint(this, skeleton);
    }
  };

  // spine-core/src/polyfills.ts
  (() => {
    if (typeof Math.fround === "undefined") {
      Math.fround = /* @__PURE__ */ ((array) => (x) => {
        array[0] = x;
        return array[0];
      })(new Float32Array(1));
    }
  })();

  // spine-core/src/SkeletonData.ts
  var SkeletonData = class {
    /** The skeleton's name, which by default is the name of the skeleton data file, if possible. May be null. */
    name = null;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones = [];
    // Ordered parents first.
    /** The skeleton's slots in the setup pose draw order. */
    slots = [];
    // Setup pose draw order.
    skins = [];
    /** The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.
     *
     * See {@link Skeleton#getAttachmentByName()}.
     * May be null. */
    defaultSkin = null;
    /** The skeleton's events. */
    events = [];
    /** The skeleton's animations. */
    animations = [];
    /** The skeleton's IK constraints. */
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    constraints = [];
    /** The X coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    x = 0;
    /** The Y coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    y = 0;
    /** The width of the skeleton's axis aligned bounding box in the setup pose. */
    width = 0;
    /** The height of the skeleton's axis aligned bounding box in the setup pose. */
    height = 0;
    /** Baseline scale factor for applying distance-dependent effects on non-scalable properties, such as angle or scale. Default
     * is 100. */
    referenceScale = 100;
    /** The Spine version used to export the skeleton data, or null. */
    version = null;
    /** The skeleton data hash. This value will change if any of the skeleton data has changed. May be null. */
    hash = null;
    // Nonessential
    /** The dopesheet FPS in Spine. Available only when nonessential data was exported. */
    fps = 30;
    /** The path to the images directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    imagesPath = null;
    /** The path to the audio directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    audioPath = null;
    /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findBone(boneName) {
      if (!boneName) throw new Error("boneName cannot be null.");
      const bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++)
        if (bones[i].name === boneName) return bones[i];
      return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSlot(slotName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      const slots = this.slots;
      for (let i = 0, n = slots.length; i < n; i++)
        if (slots[i].name === slotName) return slots[i];
      return null;
    }
    /** Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSkin(skinName) {
      if (!skinName) throw new Error("skinName cannot be null.");
      const skins = this.skins;
      for (let i = 0, n = skins.length; i < n; i++)
        if (skins[i].name === skinName) return skins[i];
      return null;
    }
    /** Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findEvent(eventDataName) {
      if (!eventDataName) throw new Error("eventDataName cannot be null.");
      const events = this.events;
      for (let i = 0, n = events.length; i < n; i++)
        if (events[i].name === eventDataName) return events[i];
      return null;
    }
    /** Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to
     * call it multiple times.
     * @returns May be null. */
    findAnimation(animationName) {
      if (!animationName) throw new Error("animationName cannot be null.");
      const animations = this.animations;
      for (let i = 0, n = animations.length; i < n; i++)
        if (animations[i].name === animationName) return animations[i];
      return null;
    }
    // --- Constraints.
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    findConstraint(constraintName, type) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      if (type == null) throw new Error("type cannot be null.");
      const constraints = this.constraints;
      for (let i = 0, n = this.constraints.length; i < n; i++) {
        const constraint = constraints[i];
        if (constraint instanceof type && constraint.name === constraintName) return constraint;
      }
      return null;
    }
  };

  // spine-core/src/Skin.ts
  var SkinEntry = class {
    constructor(slotIndex = 0, name, attachment) {
      this.slotIndex = slotIndex;
      this.name = name;
      this.attachment = attachment;
    }
  };
  var Skin = class {
    /** The skin's name, which is unique across all skins in the skeleton. */
    name;
    attachments = [];
    bones = [];
    // biome-ignore lint/suspicious/noExplicitAny: reference runtime does not restrict to specific types
    constraints = [];
    /** The color of the skin as it was in Spine, or a default color if nonessential data was not exported. */
    color = new Color(0.99607843, 0.61960787, 0.30980393, 1);
    // fe9e4fff
    constructor(name) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
    }
    /** Adds an attachment to the skin for the specified slot index and name. */
    setAttachment(slotIndex, name, attachment) {
      if (!attachment) throw new Error("attachment cannot be null.");
      const attachments = this.attachments;
      if (slotIndex >= attachments.length) attachments.length = slotIndex + 1;
      if (!attachments[slotIndex]) attachments[slotIndex] = {};
      attachments[slotIndex][name] = attachment;
    }
    /** Adds all attachments, bones, and constraints from the specified skin to this skin. */
    addSkin(skin) {
      for (let i = 0; i < skin.bones.length; i++) {
        const bone = skin.bones[i];
        let contained = false;
        for (let ii = 0; ii < this.bones.length; ii++) {
          if (this.bones[ii] === bone) {
            contained = true;
            break;
          }
        }
        if (!contained) this.bones.push(bone);
      }
      for (let i = 0; i < skin.constraints.length; i++) {
        const constraint = skin.constraints[i];
        let contained = false;
        for (let ii = 0; ii < this.constraints.length; ii++) {
          if (this.constraints[ii] === constraint) {
            contained = true;
            break;
          }
        }
        if (!contained) this.constraints.push(constraint);
      }
      const attachments = skin.getAttachments();
      for (let i = 0; i < attachments.length; i++) {
        const attachment = attachments[i];
        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
      }
    }
    /** Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not
     * copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals. */
    copySkin(skin) {
      for (let i = 0; i < skin.bones.length; i++) {
        const bone = skin.bones[i];
        let contained = false;
        for (let ii = 0; ii < this.bones.length; ii++) {
          if (this.bones[ii] === bone) {
            contained = true;
            break;
          }
        }
        if (!contained) this.bones.push(bone);
      }
      for (let i = 0; i < skin.constraints.length; i++) {
        const constraint = skin.constraints[i];
        let contained = false;
        for (let ii = 0; ii < this.constraints.length; ii++) {
          if (this.constraints[ii] === constraint) {
            contained = true;
            break;
          }
        }
        if (!contained) this.constraints.push(constraint);
      }
      const attachments = skin.getAttachments();
      for (let i = 0; i < attachments.length; i++) {
        const attachment = attachments[i];
        if (!attachment.attachment) continue;
        if (attachment.attachment instanceof MeshAttachment) {
          attachment.attachment = attachment.attachment.newLinkedMesh();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        } else {
          attachment.attachment = attachment.attachment.copy();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        }
      }
    }
    /** Returns the attachment for the specified slot index and name, or null. */
    getAttachment(slotIndex, name) {
      const dictionary = this.attachments[slotIndex];
      return dictionary ? dictionary[name] : null;
    }
    /** Removes the attachment in the skin for the specified slot index and name, if any. */
    removeAttachment(slotIndex, name) {
      const dictionary = this.attachments[slotIndex];
      if (dictionary) delete dictionary[name];
    }
    /** Returns all attachments in this skin. */
    getAttachments() {
      const entries = [];
      for (let i = 0; i < this.attachments.length; i++) {
        const slotAttachments = this.attachments[i];
        if (slotAttachments) {
          for (const name in slotAttachments) {
            const attachment = slotAttachments[name];
            if (attachment) entries.push(new SkinEntry(i, name, attachment));
          }
        }
      }
      return entries;
    }
    /** Returns all attachments in this skin for the specified slot index. */
    getAttachmentsForSlot(slotIndex, attachments) {
      const slotAttachments = this.attachments[slotIndex];
      if (slotAttachments) {
        for (const name in slotAttachments) {
          const attachment = slotAttachments[name];
          if (attachment) attachments.push(new SkinEntry(slotIndex, name, attachment));
        }
      }
    }
    /** Clears all attachments, bones, and constraints. */
    clear() {
      this.attachments.length = 0;
      this.bones.length = 0;
      this.constraints.length = 0;
    }
    /** Attach each attachment in this skin if the corresponding attachment in the old skin is currently attached. */
    attachAll(skeleton, oldSkin) {
      let slotIndex = 0;
      for (let i = 0; i < skeleton.slots.length; i++) {
        const slot = skeleton.slots[i];
        const slotAttachment = slot.pose.getAttachment();
        if (slotAttachment && slotIndex < oldSkin.attachments.length) {
          const dictionary = oldSkin.attachments[slotIndex];
          for (const key in dictionary) {
            const skinAttachment = dictionary[key];
            if (slotAttachment === skinAttachment) {
              const attachment = this.getAttachment(slotIndex, key);
              if (attachment) slot.pose.setAttachment(attachment);
              break;
            }
          }
        }
        slotIndex++;
      }
    }
  };

  // spine-core/src/SliderPose.ts
  var SliderPose = class {
    time = 0;
    mix = 0;
    set(pose) {
      this.time = pose.time;
      this.mix = pose.mix;
    }
  };

  // spine-core/src/Slider.ts
  var Slider = class _Slider extends Constraint {
    static offsets = [0, 0, 0, 0, 0, 0];
    bone = null;
    constructor(data, skeleton) {
      super(data, new SliderPose(), new SliderPose());
      if (!skeleton) throw new Error("skeleton cannot be null.");
      if (data.bone != null) this.bone = skeleton.bones[data.bone.index];
    }
    copy(skeleton) {
      var copy = new _Slider(this.data, skeleton);
      copy.pose.set(this.pose);
      return copy;
    }
    update(skeleton, physics) {
      const p = this.applied;
      if (p.mix === 0) return;
      const data = this.data, animation = data.animation, bone = this.bone;
      if (bone !== null) {
        if (!bone.active) return;
        if (data.local) bone.applied.validateLocalTransform(skeleton);
        p.time = data.offset + (data.property.value(skeleton, bone.applied, data.local, _Slider.offsets) - data.property.offset) * data.scale;
        if (data.loop)
          p.time = animation.duration + p.time % animation.duration;
        else
          p.time = Math.max(0, p.time);
      }
      const bones = skeleton.bones;
      const indices = animation.bones;
      for (let i = 0, n = animation.bones.length; i < n; i++)
        bones[indices[i]].applied.modifyLocal(skeleton);
      animation.apply(
        skeleton,
        p.time,
        p.time,
        data.loop,
        null,
        p.mix,
        data.additive ? 3 /* add */ : 2 /* replace */,
        0 /* in */,
        true
      );
    }
    sort(skeleton) {
      const bone = this.bone;
      const data = this.data;
      if (bone && data.local) skeleton.sortBone(bone);
      skeleton._updateCache.push(this);
      const bones = skeleton.bones;
      const indices = data.animation.bones;
      for (let i = 0, n = data.animation.bones.length; i < n; i++) {
        const bone2 = bones[indices[i]];
        bone2.sorted = false;
        skeleton.sortReset(bone2.children);
        skeleton.constrained(bone2);
      }
      const timelines = data.animation.timelines;
      const slots = skeleton.slots;
      const constraints = skeleton.constraints;
      const physics = skeleton.physics;
      const physicsCount = skeleton.physics.length;
      for (let i = 0, n = data.animation.timelines.length; i < n; i++) {
        const t = timelines[i];
        if (isSlotTimeline(t))
          skeleton.constrained(slots[t.slotIndex]);
        else if (t instanceof PhysicsConstraintTimeline) {
          if (t.constraintIndex === -1) {
            for (let ii = 0; ii < physicsCount; ii++)
              skeleton.constrained(physics[ii]);
          } else
            skeleton.constrained(constraints[t.constraintIndex]);
        } else if (isConstraintTimeline(t)) {
          const constraintIndex = t.constraintIndex;
          if (constraintIndex !== -1) skeleton.constrained(constraints[constraintIndex]);
        }
      }
    }
  };

  // spine-core/src/SliderData.ts
  var SliderData = class extends ConstraintData {
    animation;
    additive = false;
    loop = false;
    bone = null;
    property;
    scale = 0;
    offset = 0;
    local = false;
    constructor(name) {
      super(name, new SliderPose());
    }
    create(skeleton) {
      return new Slider(this, skeleton);
    }
  };

  // spine-core/src/SlotData.ts
  var SlotData = class extends PosedData {
    /** The index of the slot in {@link Skeleton.getSlots()}. */
    index = 0;
    /** The bone this slot belongs to. */
    boneData;
    /** The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible. */
    attachmentName = null;
    /** The blend mode for drawing the slot's attachment. */
    blendMode = 0 /* Normal */;
    // Nonessential.
    /** False if the slot was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = true;
    constructor(index, name, boneData) {
      super(name, new SlotPose());
      if (index < 0) throw new Error("index must be >= 0.");
      if (!boneData) throw new Error("boneData cannot be null.");
      this.index = index;
      this.boneData = boneData;
    }
  };
  var BlendMode = /* @__PURE__ */ ((BlendMode2) => {
    BlendMode2[BlendMode2["Normal"] = 0] = "Normal";
    BlendMode2[BlendMode2["Additive"] = 1] = "Additive";
    BlendMode2[BlendMode2["Multiply"] = 2] = "Multiply";
    BlendMode2[BlendMode2["Screen"] = 3] = "Screen";
    return BlendMode2;
  })(BlendMode || {});

  // spine-core/src/TransformConstraintPose.ts
  var TransformConstraintPose = class {
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotation. */
    mixRotate = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained translation X. */
    mixX = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained translation Y. */
    mixY = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained scale X. */
    mixScaleX = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained scale Y. */
    mixScaleY = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained shear Y. */
    mixShearY = 0;
    set(pose) {
      this.mixRotate = pose.mixRotate;
      this.mixX = pose.mixX;
      this.mixY = pose.mixY;
      this.mixScaleX = pose.mixScaleX;
      this.mixScaleY = pose.mixScaleY;
      this.mixShearY = pose.mixShearY;
    }
  };

  // spine-core/src/TransformConstraint.ts
  var TransformConstraint = class _TransformConstraint extends Constraint {
    /** The bones that will be modified by this transform constraint. */
    bones;
    /** The bone whose world transform will be copied to the constrained bones. */
    source;
    constructor(data, skeleton) {
      super(data, new TransformConstraintPose(), new TransformConstraintPose());
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.bones = [];
      for (const boneData of data.bones)
        this.bones.push(skeleton.bones[boneData.index].constrained);
      const source = skeleton.bones[data.source.index];
      if (source == null) throw new Error("source cannot be null.");
      this.source = source;
    }
    copy(skeleton) {
      var copy = new _TransformConstraint(this.data, skeleton);
      copy.pose.set(this.pose);
      return copy;
    }
    update(skeleton, physics) {
      const p = this.applied;
      if (p.mixRotate === 0 && p.mixX === 0 && p.mixY === 0 && p.mixScaleX === 0 && p.mixScaleY === 0 && p.mixShearY === 0) return;
      const data = this.data;
      const localSource = data.localSource, localTarget = data.localTarget, additive = data.additive, clamp = data.clamp;
      const offsets = data.offsets;
      const source = this.source.applied;
      if (localSource) source.validateLocalTransform(skeleton);
      const fromItems = data.properties;
      const fn = data.properties.length, update = skeleton._update;
      const bones = this.bones;
      for (let i = 0, n = this.bones.length; i < n; i++) {
        const bone = bones[i];
        if (localTarget)
          bone.modifyLocal(skeleton);
        else
          bone.modifyWorld(update);
        for (let f = 0; f < fn; f++) {
          const from = fromItems[f];
          const value = from.value(skeleton, source, localSource, offsets) - from.offset;
          const toItems = from.to;
          for (let t = 0, tn = from.to.length; t < tn; t++) {
            const to = toItems[t];
            if (to.mix(p) !== 0) {
              let clamped = to.offset + value * to.scale;
              if (clamp) {
                if (to.offset < to.max)
                  clamped = MathUtils.clamp(clamped, to.offset, to.max);
                else
                  clamped = MathUtils.clamp(clamped, to.max, to.offset);
              }
              to.apply(skeleton, p, bone, clamped, localTarget, additive);
            }
          }
        }
      }
    }
    sort(skeleton) {
      if (!this.data.localSource) skeleton.sortBone(this.source);
      const bones = this.bones;
      const boneCount = this.bones.length;
      const worldTarget = !this.data.localTarget;
      if (worldTarget) {
        for (let i = 0; i < boneCount; i++)
          skeleton.sortBone(bones[i].bone);
      }
      skeleton._updateCache.push(this);
      for (let i = 0; i < boneCount; i++) {
        const bone = bones[i].bone;
        skeleton.sortReset(bone.children);
        skeleton.constrained(bone);
      }
      for (let i = 0; i < boneCount; i++)
        bones[i].bone.sorted = worldTarget;
    }
    isSourceActive() {
      return this.source.active;
    }
  };

  // spine-core/src/TransformConstraintData.ts
  var TransformConstraintData = class _TransformConstraintData extends ConstraintData {
    static ROTATION = 0;
    static X = 1;
    static Y = 2;
    static SCALEX = 3;
    static SCALEY = 4;
    static SHEARY = 5;
    /** The bones that will be modified by this transform constraint. */
    bones = [];
    /** The bone whose world transform will be copied to the constrained bones. */
    set source(source) {
      this._source = source;
    }
    get source() {
      if (!this._source) throw new Error("BoneData not set.");
      else return this._source;
    }
    _source = null;
    offsets = [0, 0, 0, 0, 0, 0];
    /** An offset added to the constrained bone X translation. */
    offsetX = 0;
    /** An offset added to the constrained bone Y translation. */
    offsetY = 0;
    /** Reads the source bone's local transform instead of its world transform. */
    localSource = false;
    /** Sets the constrained bones' local transforms instead of their world transforms. */
    localTarget = false;
    /** Adds the source bone transform to the constrained bones instead of setting it absolutely. */
    additive = false;
    /** Prevents constrained bones from exceeding the ranged defined by {@link ToProperty.offset} and {@link ToProperty.max}. */
    clamp = false;
    /** The mapping of transform properties to other transform properties. */
    properties = [];
    constructor(name) {
      super(name, new TransformConstraintPose());
    }
    create(skeleton) {
      return new TransformConstraint(this, skeleton);
    }
    /** An offset added to the constrained bone rotation. */
    getOffsetRotation() {
      return this.offsets[_TransformConstraintData.ROTATION];
    }
    setOffsetRotation(offsetRotation) {
      this.offsets[_TransformConstraintData.ROTATION] = offsetRotation;
    }
    /** An offset added to the constrained bone X translation. */
    getOffsetX() {
      return this.offsets[_TransformConstraintData.X];
    }
    setOffsetX(offsetX) {
      this.offsets[_TransformConstraintData.X] = offsetX;
    }
    /** An offset added to the constrained bone Y translation. */
    getOffsetY() {
      return this.offsets[_TransformConstraintData.Y];
    }
    setOffsetY(offsetY) {
      this.offsets[_TransformConstraintData.Y] = offsetY;
    }
    /** An offset added to the constrained bone scaleX. */
    getOffsetScaleX() {
      return this.offsets[_TransformConstraintData.SCALEX];
    }
    setOffsetScaleX(offsetScaleX) {
      this.offsets[_TransformConstraintData.SCALEX] = offsetScaleX;
    }
    /** An offset added to the constrained bone scaleY. */
    getOffsetScaleY() {
      return this.offsets[_TransformConstraintData.SCALEY];
    }
    setOffsetScaleY(offsetScaleY) {
      this.offsets[_TransformConstraintData.SCALEY] = offsetScaleY;
    }
    /** An offset added to the constrained bone shearY. */
    getOffsetShearY() {
      return this.offsets[_TransformConstraintData.SHEARY];
    }
    setOffsetShearY(offsetShearY) {
      this.offsets[_TransformConstraintData.SHEARY] = offsetShearY;
    }
  };
  var FromProperty = class {
    /** The value of this property that corresponds to {@link ToProperty#offset}. */
    offset = 0;
    /** Constrained properties. */
    to = [];
  };
  var ToProperty = class {
    /** The value of this property that corresponds to {@link FromProperty#offset}. */
    offset = 0;
    /** The maximum value of this property when {@link TransformConstraintData#clamp clamped}. */
    max = 0;
    /** The scale of the {@link FromProperty} value in relation to this property. */
    scale = 0;
  };
  var FromRotate = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      if (local) return source.rotation + offsets[TransformConstraintData.ROTATION];
      const sx = skeleton.scaleX, sy = skeleton.scaleY;
      let value = Math.atan2(source.c / sy, source.a / sx) * MathUtils.radDeg + ((source.a * source.d - source.b * source.c) * sx * sy > 0 ? offsets[TransformConstraintData.ROTATION] : -offsets[TransformConstraintData.ROTATION]);
      if (value < 0) value += 360;
      return value;
    }
  };
  var ToRotate = class extends ToProperty {
    mix(pose) {
      return pose.mixRotate;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local)
        bone.rotation += (additive ? value : value - bone.rotation) * pose.mixRotate;
      else {
        const sx = skeleton.scaleX, sy = skeleton.scaleY, ix = 1 / sx, iy = 1 / sy;
        const a = bone.a * ix, b = bone.b * ix, c = bone.c * iy, d = bone.d * iy;
        value *= MathUtils.degRad;
        if (!additive) value -= Math.atan2(c, a);
        if (value > MathUtils.PI)
          value -= MathUtils.PI2;
        else if (value < -MathUtils.PI)
          value += MathUtils.PI2;
        value *= pose.mixRotate;
        const cos = Math.cos(value), sin = Math.sin(value);
        bone.a = (cos * a - sin * c) * sx;
        bone.b = (cos * b - sin * d) * sx;
        bone.c = (sin * a + cos * c) * sy;
        bone.d = (sin * b + cos * d) * sy;
      }
    }
  };
  var FromX = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      return local ? source.x + offsets[TransformConstraintData.X] : (offsets[TransformConstraintData.X] * source.a + offsets[TransformConstraintData.Y] * source.b + source.worldX) / skeleton.scaleX;
    }
  };
  var ToX = class extends ToProperty {
    mix(pose) {
      return pose.mixX;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local)
        bone.x += (additive ? value : value - bone.x) * pose.mixX;
      else {
        if (!additive) value -= bone.worldX / skeleton.scaleX;
        bone.worldX += value * pose.mixX * skeleton.scaleX;
      }
    }
  };
  var FromY = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      return local ? source.y + offsets[TransformConstraintData.Y] : (offsets[TransformConstraintData.X] * source.c + offsets[TransformConstraintData.Y] * source.d + source.worldY) / skeleton.scaleY;
    }
  };
  var ToY = class extends ToProperty {
    mix(pose) {
      return pose.mixY;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local)
        bone.y += (additive ? value : value - bone.y) * pose.mixY;
      else {
        if (!additive) value -= bone.worldY / skeleton.scaleY;
        bone.worldY += value * pose.mixY * skeleton.scaleY;
      }
    }
  };
  var FromScaleX = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      if (local) return source.scaleX + offsets[TransformConstraintData.SCALEX];
      const a = source.a / skeleton.scaleX, c = source.c / skeleton.scaleY;
      return Math.sqrt(a * a + c * c) + offsets[TransformConstraintData.SCALEX];
    }
  };
  var ToScaleX = class extends ToProperty {
    mix(pose) {
      return pose.mixScaleX;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local) {
        if (additive)
          bone.scaleX *= 1 + (value - 1) * pose.mixScaleX;
        else if (bone.scaleX !== 0)
          bone.scaleX += (value - bone.scaleX) * pose.mixScaleX;
      } else if (additive) {
        const s = 1 + (value - 1) * pose.mixScaleX;
        bone.a *= s;
        bone.c *= s;
      } else {
        let a = bone.a / skeleton.scaleX, c = bone.c / skeleton.scaleY, s = Math.sqrt(a * a + c * c);
        if (s !== 0) {
          s = 1 + (value - s) * pose.mixScaleX / s;
          bone.a *= s;
          bone.c *= s;
        }
      }
    }
  };
  var FromScaleY = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      if (local) return source.scaleY + offsets[TransformConstraintData.SCALEY];
      const b = source.b / skeleton.scaleX, d = source.d / skeleton.scaleY;
      return Math.sqrt(b * b + d * d) + offsets[TransformConstraintData.SCALEY];
    }
  };
  var ToScaleY = class extends ToProperty {
    mix(pose) {
      return pose.mixScaleY;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local) {
        if (additive)
          bone.scaleY *= 1 + (value - 1) * pose.mixScaleY;
        else if (bone.scaleY !== 0)
          bone.scaleY += (value - bone.scaleY) * pose.mixScaleY;
      } else if (additive) {
        const s = 1 + (value - 1) * pose.mixScaleY;
        bone.b *= s;
        bone.d *= s;
      } else {
        let b = bone.b / skeleton.scaleX, d = bone.d / skeleton.scaleY, s = Math.sqrt(b * b + d * d);
        if (s !== 0) {
          s = 1 + (value - s) * pose.mixScaleY / s;
          bone.b *= s;
          bone.d *= s;
        }
      }
    }
  };
  var FromShearY = class extends FromProperty {
    value(skeleton, source, local, offsets) {
      if (local) return source.shearY + offsets[TransformConstraintData.SHEARY];
      const ix = 1 / skeleton.scaleX, iy = 1 / skeleton.scaleY;
      return (Math.atan2(source.d * iy, source.b * ix) - Math.atan2(source.c * iy, source.a * ix)) * MathUtils.radDeg - 90 + offsets[TransformConstraintData.SHEARY];
    }
  };
  var ToShearY = class extends ToProperty {
    mix(pose) {
      return pose.mixShearY;
    }
    apply(skeleton, pose, bone, value, local, additive) {
      if (local) {
        if (!additive) value -= bone.shearY;
        bone.shearY += value * pose.mixShearY;
      } else {
        const sx = skeleton.scaleX, sy = skeleton.scaleY, b = bone.b / sx, d = bone.d / sy, by = Math.atan2(d, b);
        value = (value + 90) * MathUtils.degRad;
        if (additive)
          value -= MathUtils.PI / 2;
        else {
          value -= by - Math.atan2(bone.c / sx, bone.a / sy);
          if (value > MathUtils.PI)
            value -= MathUtils.PI2;
          else if (value < -MathUtils.PI)
            value += MathUtils.PI2;
        }
        value = by + value * pose.mixShearY;
        const s = Math.sqrt(b * b + d * d);
        bone.b = Math.cos(value) * s * sy;
        bone.d = Math.sin(value) * s * sx;
      }
    }
  };

  // spine-core/src/SkeletonBinary.ts
  var SkeletonBinary = class {
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    attachmentLoader;
    linkedMeshes = [];
    constructor(attachmentLoader) {
      this.attachmentLoader = attachmentLoader;
    }
    readSkeletonData(binary) {
      const scale = this.scale;
      const skeletonData = new SkeletonData();
      skeletonData.name = "";
      const input = new BinaryInput(binary);
      const lowHash = input.readInt32();
      const highHash = input.readInt32();
      skeletonData.hash = highHash === 0 && lowHash === 0 ? null : highHash.toString(16) + lowHash.toString(16);
      skeletonData.version = input.readString();
      skeletonData.x = input.readFloat();
      skeletonData.y = input.readFloat();
      skeletonData.width = input.readFloat();
      skeletonData.height = input.readFloat();
      skeletonData.referenceScale = input.readFloat() * scale;
      const nonessential = input.readBoolean();
      if (nonessential) {
        skeletonData.fps = input.readFloat();
        skeletonData.imagesPath = input.readString();
        skeletonData.audioPath = input.readString();
      }
      let n = 0;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        const str = input.readString();
        if (!str) throw new Error("String in string table must not be null.");
        input.strings.push(str);
      }
      const bones = skeletonData.bones;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        const name = input.readString();
        if (!name) throw new Error("Bone name must not be null.");
        const parent = i === 0 ? null : bones[input.readInt(true)];
        const data = new BoneData(i, name, parent);
        const setup = data.setup;
        setup.rotation = input.readFloat();
        setup.x = input.readFloat() * scale;
        setup.y = input.readFloat() * scale;
        setup.scaleX = input.readFloat();
        setup.scaleY = input.readFloat();
        setup.shearX = input.readFloat();
        setup.shearY = input.readFloat();
        setup.inherit = input.readByte();
        data.length = input.readFloat() * scale;
        data.skinRequired = input.readBoolean();
        if (nonessential) {
          Color.rgba8888ToColor(data.color, input.readInt32());
          data.icon = input.readString() ?? void 0;
          data.visible = input.readBoolean();
        }
        bones.push(data);
      }
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        const slotName = input.readString();
        if (!slotName) throw new Error("Slot name must not be null.");
        const boneData = bones[input.readInt(true)];
        const data = new SlotData(i, slotName, boneData);
        Color.rgba8888ToColor(data.setup.color, input.readInt32());
        const darkColor = input.readInt32();
        if (darkColor !== -1) Color.rgb888ToColor(data.setup.darkColor = new Color(), darkColor);
        data.attachmentName = input.readStringRef();
        data.blendMode = input.readInt(true);
        if (nonessential) data.visible = input.readBoolean();
        skeletonData.slots.push(data);
      }
      const constraints = skeletonData.constraints;
      const constraintCount = input.readInt(true);
      for (let i = 0; i < constraintCount; i++) {
        const name = input.readString();
        if (!name) throw new Error("Constraint data name must not be null.");
        let nn;
        switch (input.readByte()) {
          case CONSTRAINT_IK: {
            const data = new IkConstraintData(name);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
              data.bones.push(bones[input.readInt(true)]);
            data.target = bones[input.readInt(true)];
            const flags = input.readByte();
            data.skinRequired = (flags & 1) !== 0;
            data.uniform = (flags & 2) !== 0;
            const setup = data.setup;
            setup.bendDirection = (flags & 4) !== 0 ? -1 : 1;
            setup.compress = (flags & 8) !== 0;
            setup.stretch = (flags & 16) !== 0;
            if ((flags & 32) !== 0) setup.mix = (flags & 64) !== 0 ? input.readFloat() : 1;
            if ((flags & 128) !== 0) setup.softness = input.readFloat() * scale;
            constraints.push(data);
            break;
          }
          case CONSTRAINT_TRANSFORM: {
            const data = new TransformConstraintData(name);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
              data.bones.push(bones[input.readInt(true)]);
            data.source = bones[input.readInt(true)];
            let flags = input.readUnsignedByte();
            data.skinRequired = (flags & 1) !== 0;
            data.localSource = (flags & 2) !== 0;
            data.localTarget = (flags & 4) !== 0;
            data.additive = (flags & 8) !== 0;
            data.clamp = (flags & 16) !== 0;
            nn = flags >> 5;
            for (let ii = 0, tn; ii < nn; ii++) {
              let fromScale = 1;
              let from;
              switch (input.readByte()) {
                case 0:
                  from = new FromRotate();
                  break;
                case 1: {
                  fromScale = scale;
                  from = new FromX();
                  break;
                }
                case 2: {
                  fromScale = scale;
                  from = new FromY();
                  break;
                }
                case 3:
                  from = new FromScaleX();
                  break;
                case 4:
                  from = new FromScaleY();
                  break;
                case 5:
                  from = new FromShearY();
                  break;
                default:
                  from = null;
              }
              if (!from) continue;
              from.offset = input.readFloat() * fromScale;
              tn = input.readByte();
              for (let t = 0; t < tn; t++) {
                let toScale = 1;
                let to;
                switch (input.readByte()) {
                  case 0:
                    to = new ToRotate();
                    break;
                  case 1: {
                    toScale = scale;
                    to = new ToX();
                    break;
                  }
                  case 2: {
                    toScale = scale;
                    to = new ToY();
                    break;
                  }
                  case 3:
                    to = new ToScaleX();
                    break;
                  case 4:
                    to = new ToScaleY();
                    break;
                  case 5:
                    to = new ToShearY();
                    break;
                  default:
                    to = null;
                }
                if (!to) continue;
                to.offset = input.readFloat() * toScale;
                to.max = input.readFloat() * toScale;
                to.scale = input.readFloat() * toScale / fromScale;
                from.to[t] = to;
              }
              data.properties[ii] = from;
            }
            flags = input.readByte();
            if ((flags & 1) !== 0) data.offsets[TransformConstraintData.ROTATION] = input.readFloat();
            if ((flags & 2) !== 0) data.offsets[TransformConstraintData.X] = input.readFloat() * scale;
            if ((flags & 4) !== 0) data.offsets[TransformConstraintData.Y] = input.readFloat() * scale;
            if ((flags & 8) !== 0) data.offsets[TransformConstraintData.SCALEX] = input.readFloat();
            if ((flags & 16) !== 0) data.offsets[TransformConstraintData.SCALEY] = input.readFloat();
            if ((flags & 32) !== 0) data.offsets[TransformConstraintData.SHEARY] = input.readFloat();
            flags = input.readByte();
            const setup = data.setup;
            if ((flags & 1) !== 0) setup.mixRotate = input.readFloat();
            if ((flags & 2) !== 0) setup.mixX = input.readFloat();
            if ((flags & 4) !== 0) setup.mixY = input.readFloat();
            if ((flags & 8) !== 0) setup.mixScaleX = input.readFloat();
            if ((flags & 16) !== 0) setup.mixScaleY = input.readFloat();
            if ((flags & 32) !== 0) setup.mixShearY = input.readFloat();
            constraints.push(data);
            break;
          }
          case CONSTRAINT_PATH: {
            const data = new PathConstraintData(name);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
              data.bones.push(bones[input.readInt(true)]);
            data.slot = skeletonData.slots[input.readInt(true)];
            const flags = input.readByte();
            data.skinRequired = (flags & 1) !== 0;
            data.positionMode = flags >> 1 & 2;
            data.spacingMode = flags >> 2 & 3;
            data.rotateMode = flags >> 4 & 3;
            if ((flags & 128) !== 0) data.offsetRotation = input.readFloat();
            const setup = data.setup;
            setup.position = input.readFloat();
            if (data.positionMode === 0 /* Fixed */) setup.position *= scale;
            setup.spacing = input.readFloat();
            if (data.spacingMode === 0 /* Length */ || data.spacingMode === 1 /* Fixed */) setup.spacing *= scale;
            setup.mixRotate = input.readFloat();
            setup.mixX = input.readFloat();
            setup.mixY = input.readFloat();
            constraints.push(data);
            break;
          }
          case CONSTRAINT_PHYSICS: {
            const data = new PhysicsConstraintData(name);
            data.bone = bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) !== 0;
            if ((flags & 2) !== 0) data.x = input.readFloat();
            if ((flags & 4) !== 0) data.y = input.readFloat();
            if ((flags & 8) !== 0) data.rotate = input.readFloat();
            if ((flags & 16) !== 0) data.scaleX = input.readFloat();
            if ((flags & 32) !== 0) data.shearX = input.readFloat();
            data.limit = ((flags & 64) !== 0 ? input.readFloat() : 5e3) * scale;
            data.step = 1 / input.readUnsignedByte();
            const setup = data.setup;
            setup.inertia = input.readFloat();
            setup.strength = input.readFloat();
            setup.damping = input.readFloat();
            setup.massInverse = (flags & 128) !== 0 ? input.readFloat() : 1;
            setup.wind = input.readFloat();
            setup.gravity = input.readFloat();
            flags = input.readByte();
            if ((flags & 1) !== 0) data.inertiaGlobal = true;
            if ((flags & 2) !== 0) data.strengthGlobal = true;
            if ((flags & 4) !== 0) data.dampingGlobal = true;
            if ((flags & 8) !== 0) data.massGlobal = true;
            if ((flags & 16) !== 0) data.windGlobal = true;
            if ((flags & 32) !== 0) data.gravityGlobal = true;
            if ((flags & 64) !== 0) data.mixGlobal = true;
            setup.mix = (flags & 128) !== 0 ? input.readFloat() : 1;
            constraints.push(data);
            break;
          }
          case CONSTRAINT_SLIDER: {
            const data = new SliderData(name);
            const flags = input.readByte();
            data.skinRequired = (flags & 1) !== 0;
            data.loop = (flags & 2) !== 0;
            data.additive = (flags & 4) !== 0;
            if ((flags & 8) !== 0) data.setup.time = input.readFloat();
            if ((flags & 16) !== 0) data.setup.mix = (flags & 32) !== 0 ? input.readFloat() : 1;
            if ((flags & 64) !== 0) {
              data.local = (flags & 128) !== 0;
              data.bone = bones[input.readInt(true)];
              const offset = input.readFloat();
              let propertyScale = 1;
              switch (input.readByte()) {
                case 0:
                  data.property = new FromRotate();
                  break;
                case 1: {
                  propertyScale = scale;
                  data.property = new FromX();
                  break;
                }
                case 2: {
                  propertyScale = scale;
                  data.property = new FromY();
                  break;
                }
                case 3:
                  data.property = new FromScaleX();
                  break;
                case 4:
                  data.property = new FromScaleY();
                  break;
                case 5:
                  data.property = new FromShearY();
                  break;
                default:
                  continue;
              }
              ;
              data.property.offset = offset * propertyScale;
              data.offset = input.readFloat();
              data.scale = input.readFloat() / propertyScale;
            }
            constraints.push(data);
            break;
          }
        }
      }
      const defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
      if (defaultSkin) {
        skeletonData.defaultSkin = defaultSkin;
        skeletonData.skins.push(defaultSkin);
      }
      {
        let i = skeletonData.skins.length;
        Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));
        for (; i < n; i++) {
          const skin = this.readSkin(input, skeletonData, false, nonessential);
          if (!skin) throw new Error("readSkin() should not have returned null.");
          skeletonData.skins[i] = skin;
        }
      }
      n = this.linkedMeshes.length;
      for (let i = 0; i < n; i++) {
        const linkedMesh = this.linkedMeshes[i];
        const skin = skeletonData.skins[linkedMesh.skinIndex];
        if (!linkedMesh.parent) throw new Error("Linked mesh parent must not be null");
        const parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (!parent) throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
        linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent);
        if (linkedMesh.mesh.region != null) linkedMesh.mesh.updateRegion();
      }
      this.linkedMeshes.length = 0;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        const eventName = input.readString();
        if (!eventName) throw new Error("Event data name must not be null");
        const data = new EventData(eventName);
        data.intValue = input.readInt(false);
        data.floatValue = input.readFloat();
        data.stringValue = input.readString();
        data.audioPath = input.readString();
        if (data.audioPath) {
          data.volume = input.readFloat();
          data.balance = input.readFloat();
        }
        skeletonData.events.push(data);
      }
      const animations = skeletonData.animations;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        const animationName = input.readString();
        if (!animationName) throw new Error("Animation name must not be null.");
        animations.push(this.readAnimation(input, animationName, skeletonData));
      }
      for (let i = 0; i < constraintCount; i++) {
        const constraint = constraints[i];
        if (constraint instanceof SliderData) constraint.animation = animations[input.readInt(true)];
      }
      return skeletonData;
    }
    readSkin(input, skeletonData, defaultSkin, nonessential) {
      let skin = null;
      let slotCount = 0;
      if (defaultSkin) {
        slotCount = input.readInt(true);
        if (slotCount === 0) return null;
        skin = new Skin("default");
      } else {
        const skinName = input.readString();
        if (!skinName) throw new Error("Skin name must not be null.");
        skin = new Skin(skinName);
        if (nonessential) Color.rgba8888ToColor(skin.color, input.readInt32());
        let n = input.readInt(true);
        let from = skeletonData.bones, to = skin.bones;
        for (let i = 0; i < n; i++)
          to[i] = from[input.readInt(true)];
        n = input.readInt(true);
        from = skeletonData.constraints;
        to = skin.constraints;
        for (let i = 0; i < n; i++)
          to[i] = from[input.readInt(true)];
        slotCount = input.readInt(true);
      }
      for (let i = 0; i < slotCount; i++) {
        const slotIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const name = input.readStringRef();
          if (!name)
            throw new Error("Attachment name must not be null");
          const attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
          if (attachment) skin.setAttachment(slotIndex, name, attachment);
        }
      }
      return skin;
    }
    readAttachment(input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
      const scale = this.scale;
      const flags = input.readByte();
      const name = (flags & 8) !== 0 ? input.readStringRef() : attachmentName;
      if (!name) throw new Error("Attachment name must not be null");
      switch (flags & 7) {
        // BUG?
        case 0 /* Region */: {
          let path = (flags & 16) !== 0 ? input.readStringRef() : null;
          const color = (flags & 32) !== 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) !== 0 ? this.readSequence(input) : null;
          const rotation = (flags & 128) !== 0 ? input.readFloat() : 0;
          const x = input.readFloat();
          const y = input.readFloat();
          const scaleX = input.readFloat();
          const scaleY = input.readFloat();
          const width = input.readFloat();
          const height = input.readFloat();
          if (!path) path = name;
          const region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
          if (!region) return null;
          region.path = path;
          region.x = x * scale;
          region.y = y * scale;
          region.scaleX = scaleX;
          region.scaleY = scaleY;
          region.rotation = rotation;
          region.width = width * scale;
          region.height = height * scale;
          Color.rgba8888ToColor(region.color, color);
          region.sequence = sequence;
          if (region.region != null) region.updateRegion();
          return region;
        }
        case 1 /* BoundingBox */: {
          const vertices = this.readVertices(input, (flags & 16) !== 0);
          const color = nonessential ? input.readInt32() : 0;
          const box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
          if (!box) return null;
          box.worldVerticesLength = vertices.length;
          box.vertices = vertices.vertices;
          box.bones = vertices.bones;
          if (nonessential) Color.rgba8888ToColor(box.color, color);
          return box;
        }
        case 2 /* Mesh */: {
          let path = (flags & 16) !== 0 ? input.readStringRef() : name;
          const color = (flags & 32) !== 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) !== 0 ? this.readSequence(input) : null;
          const hullLength = input.readInt(true);
          const vertices = this.readVertices(input, (flags & 128) !== 0);
          const uvs = this.readFloatArray(input, vertices.length, 1);
          const triangles = this.readShortArray(input, (vertices.length - hullLength - 2) * 3);
          let edges = [];
          let width = 0, height = 0;
          if (nonessential) {
            edges = this.readShortArray(input, input.readInt(true));
            width = input.readFloat();
            height = input.readFloat();
          }
          if (!path) path = name;
          const mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          Color.rgba8888ToColor(mesh.color, color);
          mesh.bones = vertices.bones;
          mesh.vertices = vertices.vertices;
          mesh.worldVerticesLength = vertices.length;
          mesh.triangles = triangles;
          mesh.regionUVs = uvs;
          if (mesh.region != null) mesh.updateRegion();
          mesh.hullLength = hullLength << 1;
          mesh.sequence = sequence;
          if (nonessential) {
            mesh.edges = edges;
            mesh.width = width * scale;
            mesh.height = height * scale;
          }
          return mesh;
        }
        case 3 /* LinkedMesh */: {
          const path = (flags & 16) !== 0 ? input.readStringRef() : name;
          if (path == null) throw new Error("Path of linked mesh must not be null");
          const color = (flags & 32) !== 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) !== 0 ? this.readSequence(input) : null;
          const inheritTimelines = (flags & 128) !== 0;
          const skinIndex = input.readInt(true);
          const parent = input.readStringRef();
          let width = 0, height = 0;
          if (nonessential) {
            width = input.readFloat();
            height = input.readFloat();
          }
          const mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          Color.rgba8888ToColor(mesh.color, color);
          mesh.sequence = sequence;
          if (nonessential) {
            mesh.width = width * scale;
            mesh.height = height * scale;
          }
          this.linkedMeshes.push(new LinkedMesh(mesh, skinIndex, slotIndex, parent, inheritTimelines));
          return mesh;
        }
        case 4 /* Path */: {
          const closed = (flags & 16) !== 0;
          const constantSpeed = (flags & 32) !== 0;
          const vertices = this.readVertices(input, (flags & 64) !== 0);
          const lengths = Utils.newArray(vertices.length / 6, 0);
          for (let i = 0, n = lengths.length; i < n; i++)
            lengths[i] = input.readFloat() * scale;
          const color = nonessential ? input.readInt32() : 0;
          const path = this.attachmentLoader.newPathAttachment(skin, name);
          if (!path) return null;
          path.closed = closed;
          path.constantSpeed = constantSpeed;
          path.worldVerticesLength = vertices.length;
          path.vertices = vertices.vertices;
          path.bones = vertices.bones;
          path.lengths = lengths;
          if (nonessential) Color.rgba8888ToColor(path.color, color);
          return path;
        }
        case 5 /* Point */: {
          const rotation = input.readFloat();
          const x = input.readFloat();
          const y = input.readFloat();
          const color = nonessential ? input.readInt32() : 0;
          const point = this.attachmentLoader.newPointAttachment(skin, name);
          if (!point) return null;
          point.x = x * scale;
          point.y = y * scale;
          point.rotation = rotation;
          if (nonessential) Color.rgba8888ToColor(point.color, color);
          return point;
        }
        case 6 /* Clipping */: {
          const endSlotIndex = input.readInt(true);
          const vertices = this.readVertices(input, (flags & 16) !== 0);
          const color = nonessential ? input.readInt32() : 0;
          const clip = this.attachmentLoader.newClippingAttachment(skin, name);
          if (!clip) return null;
          clip.endSlot = skeletonData.slots[endSlotIndex];
          clip.worldVerticesLength = vertices.length;
          clip.vertices = vertices.vertices;
          clip.bones = vertices.bones;
          if (nonessential) Color.rgba8888ToColor(clip.color, color);
          return clip;
        }
      }
    }
    readSequence(input) {
      const sequence = new Sequence(input.readInt(true));
      sequence.start = input.readInt(true);
      sequence.digits = input.readInt(true);
      sequence.setupIndex = input.readInt(true);
      return sequence;
    }
    readVertices(input, weighted) {
      const scale = this.scale;
      const vertexCount = input.readInt(true);
      const length = vertexCount << 1;
      if (!weighted)
        return new Vertices(null, this.readFloatArray(input, length, scale), length);
      const weights = [];
      const bonesArray = [];
      for (let i = 0; i < vertexCount; i++) {
        const boneCount = input.readInt(true);
        bonesArray.push(boneCount);
        for (let ii = 0; ii < boneCount; ii++) {
          bonesArray.push(input.readInt(true));
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat());
        }
      }
      return new Vertices(bonesArray, Utils.toFloatArray(weights), length);
    }
    readFloatArray(input, n, scale) {
      const array = [];
      if (scale === 1) {
        for (let i = 0; i < n; i++)
          array[i] = input.readFloat();
      } else {
        for (let i = 0; i < n; i++)
          array[i] = input.readFloat() * scale;
      }
      return array;
    }
    readShortArray(input, n) {
      const array = [];
      for (let i = 0; i < n; i++)
        array[i] = input.readInt(true);
      return array;
    }
    readAnimation(input, name, skeletonData) {
      input.readInt(true);
      const timelines = [];
      const scale = this.scale;
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const slotIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const timelineType = input.readByte();
          const frameCount = input.readInt(true);
          const frameLast = frameCount - 1;
          switch (timelineType) {
            case SLOT_ATTACHMENT: {
              const timeline = new AttachmentTimeline(frameCount, slotIndex);
              for (let frame = 0; frame < frameCount; frame++)
                timeline.setFrame(frame, input.readFloat(), input.readStringRef());
              timelines.push(timeline);
              break;
            }
            case SLOT_RGBA: {
              const bezierCount = input.readInt(true);
              const timeline = new RGBATimeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let a = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, a);
                if (frame === frameLast) break;
                const time2 = input.readFloat();
                const r2 = input.readUnsignedByte() / 255;
                const g2 = input.readUnsignedByte() / 255;
                const b2 = input.readUnsignedByte() / 255;
                const a2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, a2, 1);
                }
                time = time2;
                r = r2;
                g = g2;
                b = b2;
                a = a2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGB: {
              const bezierCount = input.readInt(true);
              const timeline = new RGBTimeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b);
                if (frame === frameLast) break;
                const time2 = input.readFloat();
                const r2 = input.readUnsignedByte() / 255;
                const g2 = input.readUnsignedByte() / 255;
                const b2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                }
                time = time2;
                r = r2;
                g = g2;
                b = b2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGBA2: {
              const bezierCount = input.readInt(true);
              const timeline = new RGBA2Timeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let a = input.readUnsignedByte() / 255;
              let r2 = input.readUnsignedByte() / 255;
              let g2 = input.readUnsignedByte() / 255;
              let b2 = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, a, r2, g2, b2);
                if (frame === frameLast) break;
                const time2 = input.readFloat();
                const nr = input.readUnsignedByte() / 255;
                const ng = input.readUnsignedByte() / 255;
                const nb = input.readUnsignedByte() / 255;
                const na = input.readUnsignedByte() / 255;
                const nr2 = input.readUnsignedByte() / 255;
                const ng2 = input.readUnsignedByte() / 255;
                const nb2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, na, 1);
                    setBezier(input, timeline, bezier++, frame, 4, time, time2, r2, nr2, 1);
                    setBezier(input, timeline, bezier++, frame, 5, time, time2, g2, ng2, 1);
                    setBezier(input, timeline, bezier++, frame, 6, time, time2, b2, nb2, 1);
                }
                time = time2;
                r = nr;
                g = ng;
                b = nb;
                a = na;
                r2 = nr2;
                g2 = ng2;
                b2 = nb2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGB2: {
              const bezierCount = input.readInt(true);
              const timeline = new RGB2Timeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let r2 = input.readUnsignedByte() / 255;
              let g2 = input.readUnsignedByte() / 255;
              let b2 = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, r2, g2, b2);
                if (frame === frameLast) break;
                const time2 = input.readFloat();
                const nr = input.readUnsignedByte() / 255;
                const ng = input.readUnsignedByte() / 255;
                const nb = input.readUnsignedByte() / 255;
                const nr2 = input.readUnsignedByte() / 255;
                const ng2 = input.readUnsignedByte() / 255;
                const nb2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, r2, nr2, 1);
                    setBezier(input, timeline, bezier++, frame, 4, time, time2, g2, ng2, 1);
                    setBezier(input, timeline, bezier++, frame, 5, time, time2, b2, nb2, 1);
                }
                time = time2;
                r = nr;
                g = ng;
                b = nb;
                r2 = nr2;
                g2 = ng2;
                b2 = nb2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_ALPHA: {
              const timeline = new AlphaTimeline(frameCount, input.readInt(true), slotIndex);
              let time = input.readFloat(), a = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, a);
                if (frame === frameLast) break;
                const time2 = input.readFloat();
                const a2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, a, a2, 1);
                }
                time = time2;
                a = a2;
              }
              timelines.push(timeline);
            }
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const boneIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true);
          if (type === BONE_INHERIT) {
            const timeline = new InheritTimeline(frameCount, boneIndex);
            for (let frame = 0; frame < frameCount; frame++) {
              timeline.setFrame(frame, input.readFloat(), input.readByte());
            }
            timelines.push(timeline);
            continue;
          }
          const bezierCount = input.readInt(true);
          switch (type) {
            case BONE_ROTATE:
              readTimeline(input, timelines, new RotateTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_TRANSLATE:
              readTimeline(input, timelines, new TranslateTimeline(frameCount, bezierCount, boneIndex), scale);
              break;
            case BONE_TRANSLATEX:
              readTimeline(input, timelines, new TranslateXTimeline(frameCount, bezierCount, boneIndex), scale);
              break;
            case BONE_TRANSLATEY:
              readTimeline(input, timelines, new TranslateYTimeline(frameCount, bezierCount, boneIndex), scale);
              break;
            case BONE_SCALE:
              readTimeline(input, timelines, new ScaleTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_SCALEX:
              readTimeline(input, timelines, new ScaleXTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_SCALEY:
              readTimeline(input, timelines, new ScaleYTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_SHEAR:
              readTimeline(input, timelines, new ShearTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_SHEARX:
              readTimeline(input, timelines, new ShearXTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
            case BONE_SHEARY:
              readTimeline(input, timelines, new ShearYTimeline(frameCount, bezierCount, boneIndex), 1);
              break;
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
        const timeline = new IkConstraintTimeline(frameCount, input.readInt(true), index);
        let flags = input.readByte();
        let time = input.readFloat(), mix = (flags & 1) !== 0 ? (flags & 2) !== 0 ? input.readFloat() : 1 : 0;
        let softness = (flags & 4) !== 0 ? input.readFloat() * scale : 0;
        for (let frame = 0, bezier = 0; ; frame++) {
          timeline.setFrame(frame, time, mix, softness, (flags & 8) !== 0 ? 1 : -1, (flags & 16) !== 0, (flags & 32) !== 0);
          if (frame === frameLast) break;
          flags = input.readByte();
          const time2 = input.readFloat(), mix2 = (flags & 1) !== 0 ? (flags & 2) !== 0 ? input.readFloat() : 1 : 0;
          const softness2 = (flags & 4) !== 0 ? input.readFloat() * scale : 0;
          if ((flags & 64) !== 0) {
            timeline.setStepped(frame);
          } else if ((flags & 128) !== 0) {
            setBezier(input, timeline, bezier++, frame, 0, time, time2, mix, mix2, 1);
            setBezier(input, timeline, bezier++, frame, 1, time, time2, softness, softness2, scale);
          }
          time = time2;
          mix = mix2;
          softness = softness2;
        }
        timelines.push(timeline);
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
        const timeline = new TransformConstraintTimeline(frameCount, input.readInt(true), index);
        let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat(), mixScaleX = input.readFloat(), mixScaleY = input.readFloat(), mixShearY = input.readFloat();
        for (let frame = 0, bezier = 0; ; frame++) {
          timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
          if (frame === frameLast) break;
          const time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat(), mixScaleX2 = input.readFloat(), mixScaleY2 = input.readFloat(), mixShearY2 = input.readFloat();
          switch (input.readByte()) {
            case CURVE_STEPPED:
              timeline.setStepped(frame);
              break;
            case CURVE_BEZIER:
              setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
              setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
              setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
              setBezier(input, timeline, bezier++, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
              setBezier(input, timeline, bezier++, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
              setBezier(input, timeline, bezier++, frame, 5, time, time2, mixShearY, mixShearY2, 1);
          }
          time = time2;
          mixRotate = mixRotate2;
          mixX = mixX2;
          mixY = mixY2;
          mixScaleX = mixScaleX2;
          mixScaleY = mixScaleY2;
          mixShearY = mixShearY2;
        }
        timelines.push(timeline);
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true);
        const data = skeletonData.constraints[index];
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true), bezierCount = input.readInt(true);
          switch (type) {
            case PATH_POSITION:
              readTimeline(
                input,
                timelines,
                new PathConstraintPositionTimeline(frameCount, bezierCount, index),
                data.positionMode === 0 /* Fixed */ ? scale : 1
              );
              break;
            case PATH_SPACING:
              readTimeline(
                input,
                timelines,
                new PathConstraintSpacingTimeline(frameCount, bezierCount, index),
                data.spacingMode === 0 /* Length */ || data.spacingMode === 1 /* Fixed */ ? scale : 1
              );
              break;
            case PATH_MIX: {
              const timeline = new PathConstraintMixTimeline(frameCount, bezierCount, index);
              let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat();
              for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
                timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                if (frame === frameLast) break;
                const time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat();
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                }
                time = time2;
                mixRotate = mixRotate2;
                mixX = mixX2;
                mixY = mixY2;
              }
              timelines.push(timeline);
            }
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true) - 1;
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true);
          if (type === PHYSICS_RESET) {
            const timeline = new PhysicsConstraintResetTimeline(frameCount, index);
            for (let frame = 0; frame < frameCount; frame++)
              timeline.setFrame(frame, input.readFloat());
            timelines.push(timeline);
            continue;
          }
          const bezierCount = input.readInt(true);
          switch (type) {
            case PHYSICS_INERTIA:
              readTimeline(input, timelines, new PhysicsConstraintInertiaTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_STRENGTH:
              readTimeline(input, timelines, new PhysicsConstraintStrengthTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_DAMPING:
              readTimeline(input, timelines, new PhysicsConstraintDampingTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_MASS:
              readTimeline(input, timelines, new PhysicsConstraintMassTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_WIND:
              readTimeline(input, timelines, new PhysicsConstraintWindTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_GRAVITY:
              readTimeline(input, timelines, new PhysicsConstraintGravityTimeline(frameCount, bezierCount, index), 1);
              break;
            case PHYSICS_MIX:
              readTimeline(input, timelines, new PhysicsConstraintMixTimeline(frameCount, bezierCount, index), 1);
              break;
            default:
              throw new Error("Unknown physics timeline type.");
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true), bezierCount = input.readInt(true);
          switch (type) {
            case SLIDER_TIME:
              readTimeline(input, timelines, new SliderTimeline(frameCount, bezierCount, index), 1);
              break;
            case SLIDER_MIX:
              readTimeline(input, timelines, new SliderMixTimeline(frameCount, bezierCount, index), 1);
              break;
            default:
              throw new Error(`Uknown slider type: ${type}`);
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const skin = skeletonData.skins[input.readInt(true)];
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const slotIndex = input.readInt(true);
          for (let iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
            const attachmentName = input.readStringRef();
            if (!attachmentName) throw new Error("attachmentName must not be null.");
            const attachment = skin.getAttachment(slotIndex, attachmentName);
            const timelineType = input.readByte();
            const frameCount = input.readInt(true);
            const frameLast = frameCount - 1;
            switch (timelineType) {
              case ATTACHMENT_DEFORM: {
                const vertexAttachment = attachment;
                const weighted = vertexAttachment.bones;
                const vertices = vertexAttachment.vertices;
                const deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                const bezierCount = input.readInt(true);
                const timeline = new DeformTimeline(frameCount, bezierCount, slotIndex, vertexAttachment);
                let time = input.readFloat();
                for (let frame = 0, bezier = 0; ; frame++) {
                  let deform;
                  let end = input.readInt(true);
                  if (end === 0)
                    deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                  else {
                    deform = Utils.newFloatArray(deformLength);
                    const start = input.readInt(true);
                    end += start;
                    if (scale === 1) {
                      for (let v = start; v < end; v++)
                        deform[v] = input.readFloat();
                    } else {
                      for (let v = start; v < end; v++)
                        deform[v] = input.readFloat() * scale;
                    }
                    if (!weighted) {
                      for (let v = 0, vn = deform.length; v < vn; v++)
                        deform[v] += vertices[v];
                    }
                  }
                  timeline.setFrame(frame, time, deform);
                  if (frame === frameLast) break;
                  const time2 = input.readFloat();
                  switch (input.readByte()) {
                    case CURVE_STEPPED:
                      timeline.setStepped(frame);
                      break;
                    case CURVE_BEZIER:
                      setBezier(input, timeline, bezier++, frame, 0, time, time2, 0, 1, 1);
                  }
                  time = time2;
                }
                timelines.push(timeline);
                break;
              }
              case ATTACHMENT_SEQUENCE: {
                const timeline = new SequenceTimeline(frameCount, slotIndex, attachment);
                for (let frame = 0; frame < frameCount; frame++) {
                  const time = input.readFloat();
                  const modeAndIndex = input.readInt32();
                  timeline.setFrame(
                    frame,
                    time,
                    SequenceModeValues[modeAndIndex & 15],
                    modeAndIndex >> 4,
                    input.readFloat()
                  );
                }
                timelines.push(timeline);
                break;
              }
            }
          }
        }
      }
      const drawOrderCount = input.readInt(true);
      if (drawOrderCount > 0) {
        const timeline = new DrawOrderTimeline(drawOrderCount);
        const slotCount = skeletonData.slots.length;
        for (let i = 0; i < drawOrderCount; i++) {
          const time = input.readFloat();
          const offsetCount = input.readInt(true);
          const drawOrder = Utils.newArray(slotCount, 0);
          for (let ii = slotCount - 1; ii >= 0; ii--)
            drawOrder[ii] = -1;
          const unchanged = Utils.newArray(slotCount - offsetCount, 0);
          let originalIndex = 0, unchangedIndex = 0;
          for (let ii = 0; ii < offsetCount; ii++) {
            const slotIndex = input.readInt(true);
            while (originalIndex !== slotIndex)
              unchanged[unchangedIndex++] = originalIndex++;
            drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
          }
          while (originalIndex < slotCount)
            unchanged[unchangedIndex++] = originalIndex++;
          for (let ii = slotCount - 1; ii >= 0; ii--)
            if (drawOrder[ii] === -1) drawOrder[ii] = unchanged[--unchangedIndex];
          timeline.setFrame(i, time, drawOrder);
        }
        timelines.push(timeline);
      }
      const eventCount = input.readInt(true);
      if (eventCount > 0) {
        const timeline = new EventTimeline(eventCount);
        for (let i = 0; i < eventCount; i++) {
          const time = input.readFloat();
          const eventData = skeletonData.events[input.readInt(true)];
          const event = new Event(time, eventData);
          event.intValue = input.readInt(false);
          event.floatValue = input.readFloat();
          event.stringValue = input.readString();
          if (event.stringValue == null) event.stringValue = eventData.stringValue;
          if (event.data.audioPath) {
            event.volume = input.readFloat();
            event.balance = input.readFloat();
          }
          timeline.setFrame(i, event);
        }
        timelines.push(timeline);
      }
      let duration = 0;
      for (let i = 0, n = timelines.length; i < n; i++)
        duration = Math.max(duration, timelines[i].getDuration());
      return new Animation(name, timelines, duration);
    }
  };
  var BinaryInput = class {
    constructor(data, strings = [], index = 0, buffer = new DataView(data instanceof ArrayBuffer ? data : data.buffer)) {
      this.strings = strings;
      this.index = index;
      this.buffer = buffer;
    }
    readByte() {
      return this.buffer.getInt8(this.index++);
    }
    readUnsignedByte() {
      return this.buffer.getUint8(this.index++);
    }
    readShort() {
      const value = this.buffer.getInt16(this.index);
      this.index += 2;
      return value;
    }
    readInt32() {
      const value = this.buffer.getInt32(this.index);
      this.index += 4;
      return value;
    }
    readInt(optimizePositive) {
      let b = this.readByte();
      let result = b & 127;
      if ((b & 128) !== 0) {
        b = this.readByte();
        result |= (b & 127) << 7;
        if ((b & 128) !== 0) {
          b = this.readByte();
          result |= (b & 127) << 14;
          if ((b & 128) !== 0) {
            b = this.readByte();
            result |= (b & 127) << 21;
            if ((b & 128) !== 0) {
              b = this.readByte();
              result |= (b & 127) << 28;
            }
          }
        }
      }
      return optimizePositive ? result : result >>> 1 ^ -(result & 1);
    }
    readStringRef() {
      const index = this.readInt(true);
      return index === 0 ? null : this.strings[index - 1];
    }
    readString() {
      let byteCount = this.readInt(true);
      switch (byteCount) {
        case 0:
          return null;
        case 1:
          return "";
      }
      byteCount--;
      let chars = "";
      for (let i = 0; i < byteCount; ) {
        const b = this.readUnsignedByte();
        switch (b >> 4) {
          case 12:
          case 13:
            chars += String.fromCharCode((b & 31) << 6 | this.readByte() & 63);
            i += 2;
            break;
          case 14:
            chars += String.fromCharCode((b & 15) << 12 | (this.readByte() & 63) << 6 | this.readByte() & 63);
            i += 3;
            break;
          default:
            chars += String.fromCharCode(b);
            i++;
        }
      }
      return chars;
    }
    readFloat() {
      const value = this.buffer.getFloat32(this.index);
      this.index += 4;
      return value;
    }
    readBoolean() {
      return this.readByte() !== 0;
    }
  };
  var LinkedMesh = class {
    parent;
    skinIndex;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skinIndex, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skinIndex = skinIndex;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritTimeline = inheritDeform;
    }
  };
  var Vertices = class {
    constructor(bones = null, vertices, length = 0) {
      this.bones = bones;
      this.vertices = vertices;
      this.length = length;
    }
  };
  function readTimeline(input, timelines, timeline, scale) {
    if (timeline instanceof CurveTimeline1)
      readTimeline1(input, timelines, timeline, scale);
    else
      readTimeline2(input, timelines, timeline, scale);
  }
  function readTimeline1(input, timelines, timeline, scale) {
    let time = input.readFloat(), value = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
      timeline.setFrame(frame, time, value);
      if (frame === frameLast) break;
      const time2 = input.readFloat(), value2 = input.readFloat() * scale;
      switch (input.readByte()) {
        case CURVE_STEPPED:
          timeline.setStepped(frame);
          break;
        case CURVE_BEZIER:
          setBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
      }
      time = time2;
      value = value2;
    }
    timelines.push(timeline);
  }
  function readTimeline2(input, timelines, timeline, scale) {
    let time = input.readFloat(), value1 = input.readFloat() * scale, value2 = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
      timeline.setFrame(frame, time, value1, value2);
      if (frame === frameLast) break;
      const time2 = input.readFloat(), nvalue1 = input.readFloat() * scale, nvalue2 = input.readFloat() * scale;
      switch (input.readByte()) {
        case CURVE_STEPPED:
          timeline.setStepped(frame);
          break;
        case CURVE_BEZIER:
          setBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
          setBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
      }
      time = time2;
      value1 = nvalue1;
      value2 = nvalue2;
    }
    timelines.push(timeline);
  }
  function setBezier(input, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    timeline.setBezier(bezier, frame, value, time1, value1, input.readFloat(), input.readFloat() * scale, input.readFloat(), input.readFloat() * scale, time2, value2);
  }
  var BONE_ROTATE = 0;
  var BONE_TRANSLATE = 1;
  var BONE_TRANSLATEX = 2;
  var BONE_TRANSLATEY = 3;
  var BONE_SCALE = 4;
  var BONE_SCALEX = 5;
  var BONE_SCALEY = 6;
  var BONE_SHEAR = 7;
  var BONE_SHEARX = 8;
  var BONE_SHEARY = 9;
  var BONE_INHERIT = 10;
  var SLOT_ATTACHMENT = 0;
  var SLOT_RGBA = 1;
  var SLOT_RGB = 2;
  var SLOT_RGBA2 = 3;
  var SLOT_RGB2 = 4;
  var SLOT_ALPHA = 5;
  var CONSTRAINT_IK = 0;
  var CONSTRAINT_PATH = 1;
  var CONSTRAINT_TRANSFORM = 2;
  var CONSTRAINT_PHYSICS = 3;
  var CONSTRAINT_SLIDER = 4;
  var ATTACHMENT_DEFORM = 0;
  var ATTACHMENT_SEQUENCE = 1;
  var PATH_POSITION = 0;
  var PATH_SPACING = 1;
  var PATH_MIX = 2;
  var PHYSICS_INERTIA = 0;
  var PHYSICS_STRENGTH = 1;
  var PHYSICS_DAMPING = 2;
  var PHYSICS_MASS = 4;
  var PHYSICS_WIND = 5;
  var PHYSICS_GRAVITY = 6;
  var PHYSICS_MIX = 7;
  var PHYSICS_RESET = 8;
  var SLIDER_TIME = 0;
  var SLIDER_MIX = 1;
  var CURVE_STEPPED = 1;
  var CURVE_BEZIER = 2;

  // spine-core/src/SkeletonBounds.ts
  var SkeletonBounds = class {
    /** The left edge of the axis aligned bounding box. */
    minX = 0;
    /** The bottom edge of the axis aligned bounding box. */
    minY = 0;
    /** The right edge of the axis aligned bounding box. */
    maxX = 0;
    /** The top edge of the axis aligned bounding box. */
    maxY = 0;
    /** The visible bounding boxes. */
    boundingBoxes = [];
    /** The world vertices for the bounding box polygons. */
    polygons = [];
    polygonPool = new Pool(() => {
      return Utils.newFloatArray(16);
    });
    /** Clears any previous polygons, finds all visible bounding box attachments, and computes the world vertices for each bounding
     * box's polygon.
     * @param updateAabb If true, the axis aligned bounding box containing all the polygons is computed. If false, the
     *           SkeletonBounds AABB methods will always return true. */
    update(skeleton, updateAabb) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      const boundingBoxes = this.boundingBoxes;
      const polygons = this.polygons;
      const polygonPool = this.polygonPool;
      const slots = skeleton.slots;
      const slotCount = slots.length;
      boundingBoxes.length = 0;
      polygonPool.freeAll(polygons);
      polygons.length = 0;
      for (let i = 0; i < slotCount; i++) {
        const slot = slots[i];
        if (!slot.bone.active) continue;
        const attachment = slot.applied.attachment;
        if (attachment instanceof BoundingBoxAttachment) {
          boundingBoxes.push(attachment);
          let polygon = polygonPool.obtain();
          if (polygon.length !== attachment.worldVerticesLength) {
            polygon = Utils.newFloatArray(attachment.worldVerticesLength);
          }
          polygons.push(polygon);
          attachment.computeWorldVertices(skeleton, slot, 0, attachment.worldVerticesLength, polygon, 0, 2);
        }
      }
      if (updateAabb) {
        this.aabbCompute();
      } else {
        this.minX = Number.POSITIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;
      }
    }
    aabbCompute() {
      let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
      const polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++) {
        const polygon = polygons[i];
        const vertices = polygon;
        for (let ii = 0, nn = polygon.length; ii < nn; ii += 2) {
          const x = vertices[ii];
          const y = vertices[ii + 1];
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    /** Returns true if the axis aligned bounding box contains the point. */
    aabbContainsPoint(x, y) {
      return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
    }
    /** Returns true if the axis aligned bounding box intersects the line segment. */
    aabbIntersectsSegment(x1, y1, x2, y2) {
      const minX = this.minX;
      const minY = this.minY;
      const maxX = this.maxX;
      const maxY = this.maxY;
      if (x1 <= minX && x2 <= minX || y1 <= minY && y2 <= minY || x1 >= maxX && x2 >= maxX || y1 >= maxY && y2 >= maxY)
        return false;
      const m = (y2 - y1) / (x2 - x1);
      let y = m * (minX - x1) + y1;
      if (y > minY && y < maxY) return true;
      y = m * (maxX - x1) + y1;
      if (y > minY && y < maxY) return true;
      let x = (minY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      x = (maxY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      return false;
    }
    /** Returns true if the axis aligned bounding box intersects the axis aligned bounding box of the specified bounds. */
    aabbIntersectsSkeleton(bounds) {
      return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
    }
    /** Returns the first bounding box attachment that contains the point, or null. When doing many checks, it is usually more
     * efficient to only call this method if {@link #aabbContainsPoint(float, float)} returns true. */
    containsPoint(x, y) {
      const polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++)
        if (this.containsPointPolygon(polygons[i], x, y)) return this.boundingBoxes[i];
      return null;
    }
    /** Returns true if the polygon contains the point. */
    containsPointPolygon(polygon, x, y) {
      const vertices = polygon;
      const nn = polygon.length;
      let prevIndex = nn - 2;
      let inside = false;
      for (let ii = 0; ii < nn; ii += 2) {
        const vertexY = vertices[ii + 1];
        const prevY = vertices[prevIndex + 1];
        if (vertexY < y && prevY >= y || prevY < y && vertexY >= y) {
          const vertexX = vertices[ii];
          if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x) inside = !inside;
        }
        prevIndex = ii;
      }
      return inside;
    }
    /** Returns the first bounding box attachment that contains any part of the line segment, or null. When doing many checks, it
     * is usually more efficient to only call this method if {@link #aabbIntersectsSegment()} returns
     * true. */
    intersectsSegment(x1, y1, x2, y2) {
      const polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++)
        if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2)) return this.boundingBoxes[i];
      return null;
    }
    /** Returns true if the polygon contains any part of the line segment. */
    intersectsSegmentPolygon(polygon, x1, y1, x2, y2) {
      const vertices = polygon;
      const nn = polygon.length;
      const width12 = x1 - x2, height12 = y1 - y2;
      const det1 = x1 * y2 - y1 * x2;
      let x3 = vertices[nn - 2], y3 = vertices[nn - 1];
      for (let ii = 0; ii < nn; ii += 2) {
        const x4 = vertices[ii], y4 = vertices[ii + 1];
        const det2 = x3 * y4 - y3 * x4;
        const width34 = x3 - x4, height34 = y3 - y4;
        const det3 = width12 * height34 - height12 * width34;
        const x = (det1 * width34 - width12 * det2) / det3;
        if ((x >= x3 && x <= x4 || x >= x4 && x <= x3) && (x >= x1 && x <= x2 || x >= x2 && x <= x1)) {
          const y = (det1 * height34 - height12 * det2) / det3;
          if ((y >= y3 && y <= y4 || y >= y4 && y <= y3) && (y >= y1 && y <= y2 || y >= y2 && y <= y1)) return true;
        }
        x3 = x4;
        y3 = y4;
      }
      return false;
    }
    /** Returns the polygon for the specified bounding box, or null. */
    getPolygon(boundingBox) {
      if (!boundingBox) throw new Error("boundingBox cannot be null.");
      const index = this.boundingBoxes.indexOf(boundingBox);
      return index === -1 ? null : this.polygons[index];
    }
    /** The width of the axis aligned bounding box. */
    getWidth() {
      return this.maxX - this.minX;
    }
    /** The height of the axis aligned bounding box. */
    getHeight() {
      return this.maxY - this.minY;
    }
  };

  // spine-core/src/Triangulator.ts
  var Triangulator = class _Triangulator {
    convexPolygons = [];
    convexPolygonsIndices = [];
    indicesArray = [];
    isConcaveArray = [];
    triangles = [];
    polygonPool = new Pool(() => {
      return [];
    });
    polygonIndicesPool = new Pool(() => {
      return [];
    });
    triangulate(verticesArray) {
      const vertices = verticesArray;
      let vertexCount = verticesArray.length >> 1;
      const indices = this.indicesArray;
      indices.length = 0;
      for (let i = 0; i < vertexCount; i++)
        indices[i] = i;
      const isConcave = this.isConcaveArray;
      isConcave.length = 0;
      for (let i = 0, n = vertexCount; i < n; ++i)
        isConcave[i] = _Triangulator.isConcave(i, vertexCount, vertices, indices);
      const triangles = this.triangles;
      triangles.length = 0;
      while (vertexCount > 3) {
        let previous = vertexCount - 1, i = 0, next = 1;
        while (true) {
          outer:
            if (!isConcave[i]) {
              const p1 = indices[previous] << 1, p2 = indices[i] << 1, p3 = indices[next] << 1;
              const p1x = vertices[p1], p1y = vertices[p1 + 1];
              const p2x = vertices[p2], p2y = vertices[p2 + 1];
              const p3x = vertices[p3], p3y = vertices[p3 + 1];
              for (let ii = (next + 1) % vertexCount; ii !== previous; ii = (ii + 1) % vertexCount) {
                if (!isConcave[ii]) continue;
                const v = indices[ii] << 1;
                const vx = vertices[v], vy = vertices[v + 1];
                if (_Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
                  if (_Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
                    if (_Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy)) break outer;
                  }
                }
              }
              break;
            }
          if (next === 0) {
            do {
              if (!isConcave[i]) break;
              i--;
            } while (i > 0);
            break;
          }
          previous = i;
          i = next;
          next = (next + 1) % vertexCount;
        }
        triangles.push(indices[(vertexCount + i - 1) % vertexCount]);
        triangles.push(indices[i]);
        triangles.push(indices[(i + 1) % vertexCount]);
        indices.splice(i, 1);
        isConcave.splice(i, 1);
        vertexCount--;
        const previousIndex = (vertexCount + i - 1) % vertexCount;
        const nextIndex = i === vertexCount ? 0 : i;
        isConcave[previousIndex] = _Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
        isConcave[nextIndex] = _Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
      }
      if (vertexCount === 3) {
        triangles.push(indices[2]);
        triangles.push(indices[0]);
        triangles.push(indices[1]);
      }
      return triangles;
    }
    decompose(verticesArray, triangles) {
      const vertices = verticesArray;
      const convexPolygons = this.convexPolygons;
      this.polygonPool.freeAll(convexPolygons);
      convexPolygons.length = 0;
      const convexPolygonsIndices = this.convexPolygonsIndices;
      this.polygonIndicesPool.freeAll(convexPolygonsIndices);
      convexPolygonsIndices.length = 0;
      let polygonIndices = this.polygonIndicesPool.obtain();
      polygonIndices.length = 0;
      let polygon = this.polygonPool.obtain();
      polygon.length = 0;
      let fanBaseIndex = -1, lastWinding = 0;
      for (let i = 0, n = triangles.length; i < n; i += 3) {
        const t1 = triangles[i] << 1, t2 = triangles[i + 1] << 1, t3 = triangles[i + 2] << 1;
        const x1 = vertices[t1], y1 = vertices[t1 + 1];
        const x2 = vertices[t2], y2 = vertices[t2 + 1];
        const x3 = vertices[t3], y3 = vertices[t3 + 1];
        let merged = false;
        if (fanBaseIndex === t1) {
          const o = polygon.length - 4;
          const winding1 = _Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
          const winding2 = _Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);
          if (winding1 === lastWinding && winding2 === lastWinding) {
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(t3);
            merged = true;
          }
        }
        if (!merged) {
          if (polygon.length > 0) {
            convexPolygons.push(polygon);
            convexPolygonsIndices.push(polygonIndices);
          } else {
            this.polygonPool.free(polygon);
            this.polygonIndicesPool.free(polygonIndices);
          }
          polygon = this.polygonPool.obtain();
          polygon.length = 0;
          polygon.push(x1);
          polygon.push(y1);
          polygon.push(x2);
          polygon.push(y2);
          polygon.push(x3);
          polygon.push(y3);
          polygonIndices = this.polygonIndicesPool.obtain();
          polygonIndices.length = 0;
          polygonIndices.push(t1);
          polygonIndices.push(t2);
          polygonIndices.push(t3);
          lastWinding = _Triangulator.winding(x1, y1, x2, y2, x3, y3);
          fanBaseIndex = t1;
        }
      }
      if (polygon.length > 0) {
        convexPolygons.push(polygon);
        convexPolygonsIndices.push(polygonIndices);
      }
      for (let i = 0, n = convexPolygons.length; i < n; i++) {
        polygonIndices = convexPolygonsIndices[i];
        if (polygonIndices.length === 0) continue;
        const firstIndex = polygonIndices[0];
        const lastIndex = polygonIndices[polygonIndices.length - 1];
        polygon = convexPolygons[i];
        const o = polygon.length - 4;
        let prevPrevX = polygon[o], prevPrevY = polygon[o + 1];
        let prevX = polygon[o + 2], prevY = polygon[o + 3];
        const firstX = polygon[0], firstY = polygon[1];
        const secondX = polygon[2], secondY = polygon[3];
        const winding = _Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);
        for (let ii = 0; ii < n; ii++) {
          if (ii === i) continue;
          const otherIndices = convexPolygonsIndices[ii];
          if (otherIndices.length !== 3) continue;
          const otherFirstIndex = otherIndices[0];
          const otherSecondIndex = otherIndices[1];
          const otherLastIndex = otherIndices[2];
          const otherPoly = convexPolygons[ii];
          const x3 = otherPoly[otherPoly.length - 2], y3 = otherPoly[otherPoly.length - 1];
          if (otherFirstIndex !== firstIndex || otherSecondIndex !== lastIndex) continue;
          const winding1 = _Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, x3, y3);
          const winding2 = _Triangulator.winding(x3, y3, firstX, firstY, secondX, secondY);
          if (winding1 === winding && winding2 === winding) {
            otherPoly.length = 0;
            otherIndices.length = 0;
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(otherLastIndex);
            prevPrevX = prevX;
            prevPrevY = prevY;
            prevX = x3;
            prevY = y3;
            ii = 0;
          }
        }
      }
      for (let i = convexPolygons.length - 1; i >= 0; i--) {
        polygon = convexPolygons[i];
        if (polygon.length === 0) {
          convexPolygons.splice(i, 1);
          this.polygonPool.free(polygon);
          polygonIndices = convexPolygonsIndices[i];
          convexPolygonsIndices.splice(i, 1);
          this.polygonIndicesPool.free(polygonIndices);
        }
      }
      return convexPolygons;
    }
    static isConcave(index, vertexCount, vertices, indices) {
      const previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
      const current = indices[index] << 1;
      const next = indices[(index + 1) % vertexCount] << 1;
      return !_Triangulator.positiveArea(
        vertices[previous],
        vertices[previous + 1],
        vertices[current],
        vertices[current + 1],
        vertices[next],
        vertices[next + 1]
      );
    }
    static positiveArea(p1x, p1y, p2x, p2y, p3x, p3y) {
      return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
    }
    static winding(p1x, p1y, p2x, p2y, p3x, p3y) {
      const px = p2x - p1x, py = p2y - p1y;
      return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
    }
  };

  // spine-core/src/SkeletonClipping.ts
  var SkeletonClipping = class _SkeletonClipping {
    triangulator = new Triangulator();
    clippingPolygon = [];
    clipOutput = [];
    clippedVertices = [];
    /** An empty array unless {@link clipTrianglesUnpacked} was used. **/
    clippedUVs = [];
    clippedTriangles = [];
    _clippedVerticesTyped = new Float32Array(1024);
    _clippedUVsTyped = new Float32Array(1024);
    _clippedTrianglesTyped = new Uint32Array(1024);
    clippedVerticesTyped = new Float32Array(0);
    clippedUVsTyped = new Float32Array(0);
    clippedTrianglesTyped = new Uint32Array(0);
    clippedVerticesLength = 0;
    clippedUVsLength = 0;
    clippedTrianglesLength = 0;
    scratch = [];
    clipAttachment = null;
    clippingPolygons = null;
    clipStart(skeleton, slot, clip) {
      if (this.clipAttachment) return 0;
      this.clipAttachment = clip;
      const n = clip.worldVerticesLength;
      const vertices = Utils.setArraySize(this.clippingPolygon, n);
      clip.computeWorldVertices(skeleton, slot, 0, n, vertices, 0, 2);
      const clippingPolygon = this.clippingPolygon;
      _SkeletonClipping.makeClockwise(clippingPolygon);
      const clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
      for (let i = 0, n2 = clippingPolygons.length; i < n2; i++) {
        const polygon = clippingPolygons[i];
        _SkeletonClipping.makeClockwise(polygon);
        polygon.push(polygon[0]);
        polygon.push(polygon[1]);
      }
      return clippingPolygons.length;
    }
    clipEnd(slot) {
      if (!this.clipAttachment) return;
      if (slot && this.clipAttachment.endSlot !== slot.data) return;
      this.clipAttachment = null;
      this.clippingPolygons = null;
      this.clippedVertices.length = 0;
      this.clippedTriangles.length = 0;
      this.clippingPolygon.length = 0;
      this.clippedVerticesLength = 0;
      this.clippedUVsLength = 0;
      this.clippedTrianglesLength = 0;
    }
    isClipping() {
      return this.clipAttachment != null;
    }
    clipTriangles(vertices, triangles, trianglesLength, uvs, light, dark, twoColor, stride) {
      return uvs && light && dark && typeof twoColor === "boolean" && typeof stride === "number" ? this.clipTrianglesRender(vertices, triangles, trianglesLength, uvs, light, dark, twoColor, stride) : this.clipTrianglesNoRender(vertices, triangles, trianglesLength);
    }
    clipTrianglesNoRender(vertices, triangles, trianglesLength) {
      const clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
      const clippedTriangles = this.clippedTriangles;
      const polygons = this.clippingPolygons;
      const polygonsCount = polygons.length;
      let index = 0;
      clippedVertices.length = 0;
      clippedTriangles.length = 0;
      let clipOutputItems = null;
      for (let i = 0; i < trianglesLength; i += 3) {
        let v = triangles[i] << 1;
        const x1 = vertices[v], y1 = vertices[v + 1];
        v = triangles[i + 1] << 1;
        const x2 = vertices[v], y2 = vertices[v + 1];
        v = triangles[i + 2] << 1;
        const x3 = vertices[v], y3 = vertices[v + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = clippedVertices.length;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            clipOutputItems = this.clipOutput;
            const clipOutputLength = clipOutput.length;
            if (clipOutputLength === 0) continue;
            let clipOutputCount = clipOutputLength >> 1;
            const clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * 2);
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += 2) {
              const x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
            }
            s = clippedTriangles.length;
            const clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            const clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * 2);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = x2;
            clippedVerticesItems[s + 3] = y2;
            clippedVerticesItems[s + 4] = x3;
            clippedVerticesItems[s + 5] = y3;
            s = clippedTriangles.length;
            const clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            break;
          }
        }
      }
      return clipOutputItems != null;
    }
    clipTrianglesRender(vertices, triangles, trianglesLength, uvs, light, dark, twoColor, stride) {
      const clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
      const clippedTriangles = this.clippedTriangles;
      const polygons = this.clippingPolygons;
      const polygonsCount = polygons.length;
      let index = 0;
      clippedVertices.length = 0;
      clippedTriangles.length = 0;
      let clipOutputItems = null;
      for (let i = 0; i < trianglesLength; i += 3) {
        let t = triangles[i];
        const u1 = uvs[t << 1], v1 = uvs[(t << 1) + 1];
        const x1 = vertices[t * stride], y1 = vertices[t * stride + 1];
        t = triangles[i + 1];
        const u2 = uvs[t << 1], v2 = uvs[(t << 1) + 1];
        const x2 = vertices[t * stride], y2 = vertices[t * stride + 1];
        t = triangles[i + 2];
        const u3 = uvs[t << 1], v3 = uvs[(t << 1) + 1];
        const x3 = vertices[t * stride], y3 = vertices[t * stride + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = clippedVertices.length;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            clipOutputItems = this.clipOutput;
            const clipOutputLength = clipOutput.length;
            if (clipOutputLength === 0) continue;
            const d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
            const d = 1 / (d0 * d2 + d1 * (y1 - y3));
            let clipOutputCount = clipOutputLength >> 1;
            const clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * stride);
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += stride) {
              const x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
              clippedVerticesItems[s + 2] = light.r;
              clippedVerticesItems[s + 3] = light.g;
              clippedVerticesItems[s + 4] = light.b;
              clippedVerticesItems[s + 5] = light.a;
              const c0 = x - x3, c1 = y - y3;
              const a = (d0 * c0 + d1 * c1) * d;
              const b = (d4 * c0 + d2 * c1) * d;
              const c = 1 - a - b;
              clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
              clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
              if (twoColor) {
                clippedVerticesItems[s + 8] = dark.r;
                clippedVerticesItems[s + 9] = dark.g;
                clippedVerticesItems[s + 10] = dark.b;
                clippedVerticesItems[s + 11] = dark.a;
              }
            }
            s = clippedTriangles.length;
            const clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            const clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * stride);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = light.r;
            clippedVerticesItems[s + 3] = light.g;
            clippedVerticesItems[s + 4] = light.b;
            clippedVerticesItems[s + 5] = light.a;
            if (!twoColor) {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = x2;
              clippedVerticesItems[s + 9] = y2;
              clippedVerticesItems[s + 10] = light.r;
              clippedVerticesItems[s + 11] = light.g;
              clippedVerticesItems[s + 12] = light.b;
              clippedVerticesItems[s + 13] = light.a;
              clippedVerticesItems[s + 14] = u2;
              clippedVerticesItems[s + 15] = v2;
              clippedVerticesItems[s + 16] = x3;
              clippedVerticesItems[s + 17] = y3;
              clippedVerticesItems[s + 18] = light.r;
              clippedVerticesItems[s + 19] = light.g;
              clippedVerticesItems[s + 20] = light.b;
              clippedVerticesItems[s + 21] = light.a;
              clippedVerticesItems[s + 22] = u3;
              clippedVerticesItems[s + 23] = v3;
            } else {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = dark.r;
              clippedVerticesItems[s + 9] = dark.g;
              clippedVerticesItems[s + 10] = dark.b;
              clippedVerticesItems[s + 11] = dark.a;
              clippedVerticesItems[s + 12] = x2;
              clippedVerticesItems[s + 13] = y2;
              clippedVerticesItems[s + 14] = light.r;
              clippedVerticesItems[s + 15] = light.g;
              clippedVerticesItems[s + 16] = light.b;
              clippedVerticesItems[s + 17] = light.a;
              clippedVerticesItems[s + 18] = u2;
              clippedVerticesItems[s + 19] = v2;
              clippedVerticesItems[s + 20] = dark.r;
              clippedVerticesItems[s + 21] = dark.g;
              clippedVerticesItems[s + 22] = dark.b;
              clippedVerticesItems[s + 23] = dark.a;
              clippedVerticesItems[s + 24] = x3;
              clippedVerticesItems[s + 25] = y3;
              clippedVerticesItems[s + 26] = light.r;
              clippedVerticesItems[s + 27] = light.g;
              clippedVerticesItems[s + 28] = light.b;
              clippedVerticesItems[s + 29] = light.a;
              clippedVerticesItems[s + 30] = u3;
              clippedVerticesItems[s + 31] = v3;
              clippedVerticesItems[s + 32] = dark.r;
              clippedVerticesItems[s + 33] = dark.g;
              clippedVerticesItems[s + 34] = dark.b;
              clippedVerticesItems[s + 35] = dark.a;
            }
            s = clippedTriangles.length;
            const clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            break;
          }
        }
      }
      return clipOutputItems != null;
    }
    clipTrianglesUnpacked(vertices, triangles, trianglesLength, uvs) {
      const clipOutput = this.clipOutput;
      let clippedVertices = this._clippedVerticesTyped, clippedUVs = this._clippedUVsTyped, clippedTriangles = this._clippedTrianglesTyped;
      const polygons = this.clippingPolygons;
      const polygonsCount = polygons.length;
      let index = 0;
      this.clippedVerticesLength = 0;
      this.clippedUVsLength = 0;
      this.clippedTrianglesLength = 0;
      this._clippedVerticesTyped;
      this._clippedUVsTyped;
      this._clippedTrianglesTyped;
      let clipped = false;
      for (let i = 0; i < trianglesLength; i += 3) {
        let v = triangles[i] << 1;
        const x1 = vertices[v], y1 = vertices[v + 1];
        const u1 = uvs[v], v1 = uvs[v + 1];
        v = triangles[i + 1] << 1;
        const x2 = vertices[v], y2 = vertices[v + 1];
        const u2 = uvs[v], v2 = uvs[v + 1];
        v = triangles[i + 2] << 1;
        const x3 = vertices[v], y3 = vertices[v + 1];
        const u3 = uvs[v], v3 = uvs[v + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = this.clippedVerticesLength;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            const clipOutputLength = clipOutput.length;
            if (clipOutputLength === 0) continue;
            clipped = true;
            const d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
            const d = 1 / (d0 * d2 + d1 * (y1 - y3));
            let clipOutputCount = clipOutputLength >> 1;
            const clipOutputItems = this.clipOutput;
            const newLength = s + clipOutputCount * 2;
            if (clippedVertices.length < newLength) {
              this._clippedVerticesTyped = new Float32Array(newLength * 2);
              this._clippedVerticesTyped.set(clippedVertices.subarray(0, s));
              this._clippedUVsTyped = new Float32Array(newLength * 2);
              this._clippedUVsTyped.set(clippedUVs.subarray(0, s));
              clippedVertices = this._clippedVerticesTyped;
              clippedUVs = this._clippedUVsTyped;
            }
            const clippedVerticesItems = clippedVertices;
            const clippedUVsItems = clippedUVs;
            this.clippedVerticesLength = newLength;
            this.clippedUVsLength = newLength;
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += 2) {
              const x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
              const c0 = x - x3, c1 = y - y3;
              const a = (d0 * c0 + d1 * c1) * d;
              const b = (d4 * c0 + d2 * c1) * d;
              const c = 1 - a - b;
              clippedUVsItems[s] = u1 * a + u2 * b + u3 * c;
              clippedUVsItems[s + 1] = v1 * a + v2 * b + v3 * c;
            }
            s = this.clippedTrianglesLength;
            const newLengthTriangles = s + 3 * (clipOutputCount - 2);
            if (clippedTriangles.length < newLengthTriangles) {
              this._clippedTrianglesTyped = new Uint32Array(newLengthTriangles * 2);
              this._clippedTrianglesTyped.set(clippedTriangles.subarray(0, s));
              clippedTriangles = this._clippedTrianglesTyped;
            }
            this.clippedTrianglesLength = newLengthTriangles;
            const clippedTrianglesItems = clippedTriangles;
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            let newLength = s + 3 * 2;
            if (clippedVertices.length < newLength) {
              this._clippedVerticesTyped = new Float32Array(newLength * 2);
              this._clippedVerticesTyped.set(clippedVertices.subarray(0, s));
              clippedVertices = this._clippedVerticesTyped;
            }
            clippedVertices[s] = x1;
            clippedVertices[s + 1] = y1;
            clippedVertices[s + 2] = x2;
            clippedVertices[s + 3] = y2;
            clippedVertices[s + 4] = x3;
            clippedVertices[s + 5] = y3;
            if (clippedUVs.length < newLength) {
              this._clippedUVsTyped = new Float32Array(newLength * 2);
              this._clippedUVsTyped.set(clippedUVs.subarray(0, s));
              clippedUVs = this._clippedUVsTyped;
            }
            clippedUVs[s] = u1;
            clippedUVs[s + 1] = v1;
            clippedUVs[s + 2] = u2;
            clippedUVs[s + 3] = v2;
            clippedUVs[s + 4] = u3;
            clippedUVs[s + 5] = v3;
            this.clippedVerticesLength = newLength;
            this.clippedUVsLength = newLength;
            s = this.clippedTrianglesLength;
            newLength = s + 3;
            if (clippedTriangles.length < newLength) {
              this._clippedTrianglesTyped = new Uint32Array(newLength * 2);
              this._clippedTrianglesTyped.set(clippedTriangles.subarray(0, s));
              clippedTriangles = this._clippedTrianglesTyped;
            }
            clippedTriangles[s] = index;
            clippedTriangles[s + 1] = index + 1;
            clippedTriangles[s + 2] = index + 2;
            index += 3;
            this.clippedTrianglesLength = newLength;
            break;
          }
        }
      }
      this.clippedVerticesTyped = this._clippedVerticesTyped.subarray(0, this.clippedVerticesLength);
      this.clippedUVsTyped = this._clippedUVsTyped.subarray(0, this.clippedUVsLength);
      this.clippedTrianglesTyped = this._clippedTrianglesTyped.subarray(0, this.clippedTrianglesLength);
      return clipped;
    }
    /** Clips the input triangle against the convex, clockwise clipping area. If the triangle lies entirely within the clipping
     * area, false is returned. The clipping area must duplicate the first vertex at the end of the vertices list. */
    clip(x1, y1, x2, y2, x3, y3, clippingArea, output) {
      const originalOutput = output;
      let clipped = false;
      let input;
      if (clippingArea.length % 4 >= 2) {
        input = output;
        output = this.scratch;
      } else
        input = this.scratch;
      input.length = 0;
      input.push(x1);
      input.push(y1);
      input.push(x2);
      input.push(y2);
      input.push(x3);
      input.push(y3);
      input.push(x1);
      input.push(y1);
      output.length = 0;
      const clippingVerticesLast = clippingArea.length - 4;
      const clippingVertices = clippingArea;
      for (let i = 0; ; i += 2) {
        const edgeX = clippingVertices[i], edgeY = clippingVertices[i + 1];
        const ex = edgeX - clippingVertices[i + 2], ey = edgeY - clippingVertices[i + 3];
        const outputStart = output.length;
        const inputVertices = input;
        for (let ii = 0, nn = input.length - 2; ii < nn; ) {
          const inputX = inputVertices[ii], inputY = inputVertices[ii + 1];
          ii += 2;
          const inputX2 = inputVertices[ii], inputY2 = inputVertices[ii + 1];
          const s2 = ey * (edgeX - inputX2) > ex * (edgeY - inputY2);
          const s1 = ey * (edgeX - inputX) - ex * (edgeY - inputY);
          if (s1 > 0) {
            if (s2) {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
            const ix = inputX2 - inputX, iy = inputY2 - inputY, t = s1 / (ix * ey - iy * ex);
            if (t >= 0 && t <= 1) {
              output.push(inputX + ix * t);
              output.push(inputY + iy * t);
            } else {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
          } else if (s2) {
            const ix = inputX2 - inputX, iy = inputY2 - inputY, t = s1 / (ix * ey - iy * ex);
            if (t >= 0 && t <= 1) {
              output.push(inputX + ix * t);
              output.push(inputY + iy * t);
              output.push(inputX2);
              output.push(inputY2);
            } else {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
          }
          clipped = true;
        }
        if (outputStart === output.length) {
          originalOutput.length = 0;
          return true;
        }
        output.push(output[0]);
        output.push(output[1]);
        if (i === clippingVerticesLast) break;
        const temp = output;
        output = input;
        output.length = 0;
        input = temp;
      }
      if (originalOutput !== output) {
        originalOutput.length = 0;
        for (let i = 0, n = output.length - 2; i < n; i++)
          originalOutput[i] = output[i];
      } else
        originalOutput.length = originalOutput.length - 2;
      return clipped;
    }
    static makeClockwise(polygon) {
      const vertices = polygon;
      const verticeslength = polygon.length;
      let area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1], p1x = 0, p1y = 0, p2x = 0, p2y = 0;
      for (let i = 0, n = verticeslength - 3; i < n; i += 2) {
        p1x = vertices[i];
        p1y = vertices[i + 1];
        p2x = vertices[i + 2];
        p2y = vertices[i + 3];
        area += p1x * p2y - p2x * p1y;
      }
      if (area < 0) return;
      for (let i = 0, lastX = verticeslength - 2, n = verticeslength >> 1; i < n; i += 2) {
        const x = vertices[i], y = vertices[i + 1];
        const other = lastX - i;
        vertices[i] = vertices[other];
        vertices[i + 1] = vertices[other + 1];
        vertices[other] = x;
        vertices[other + 1] = y;
      }
    }
  };

  // spine-core/src/SkeletonJson.ts
  var SkeletonJson = class {
    attachmentLoader;
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    linkedMeshes = [];
    constructor(attachmentLoader) {
      this.attachmentLoader = attachmentLoader;
    }
    // biome-ignore lint/suspicious/noExplicitAny: it is any until we define a schema
    readSkeletonData(json) {
      const scale = this.scale;
      const skeletonData = new SkeletonData();
      const root = typeof json === "string" ? JSON.parse(json) : json;
      const skeletonMap = root.skeleton;
      if (skeletonMap) {
        skeletonData.hash = skeletonMap.hash;
        skeletonData.version = skeletonMap.spine;
        skeletonData.x = skeletonMap.x;
        skeletonData.y = skeletonMap.y;
        skeletonData.width = skeletonMap.width;
        skeletonData.height = skeletonMap.height;
        skeletonData.referenceScale = getValue(skeletonMap, "referenceScale", 100) * scale;
        skeletonData.fps = skeletonMap.fps;
        skeletonData.imagesPath = skeletonMap.images ?? null;
        skeletonData.audioPath = skeletonMap.audio ?? null;
      }
      if (root.bones) {
        for (let i = 0; i < root.bones.length; i++) {
          const boneMap = root.bones[i];
          let parent = null;
          const parentName = getValue(boneMap, "parent", null);
          if (parentName) parent = skeletonData.findBone(parentName);
          const data = new BoneData(skeletonData.bones.length, boneMap.name, parent);
          data.length = getValue(boneMap, "length", 0) * scale;
          const setup = data.setup;
          setup.x = getValue(boneMap, "x", 0) * scale;
          setup.y = getValue(boneMap, "y", 0) * scale;
          setup.rotation = getValue(boneMap, "rotation", 0);
          setup.scaleX = getValue(boneMap, "scaleX", 1);
          setup.scaleY = getValue(boneMap, "scaleY", 1);
          setup.shearX = getValue(boneMap, "shearX", 0);
          setup.shearY = getValue(boneMap, "shearY", 0);
          setup.inherit = Utils.enumValue(Inherit, getValue(boneMap, "inherit", "Normal"));
          data.skinRequired = getValue(boneMap, "skin", false);
          const color = getValue(boneMap, "color", null);
          if (color) data.color.setFromString(color);
          skeletonData.bones.push(data);
        }
      }
      if (root.slots) {
        for (let i = 0; i < root.slots.length; i++) {
          const slotMap = root.slots[i];
          const slotName = slotMap.name;
          const boneData = skeletonData.findBone(slotMap.bone);
          if (!boneData) throw new Error(`Couldn't find bone ${slotMap.bone} for slot ${slotName}`);
          const data = new SlotData(skeletonData.slots.length, slotName, boneData);
          const color = getValue(slotMap, "color", null);
          if (color) data.setup.color.setFromString(color);
          const dark = getValue(slotMap, "dark", null);
          if (dark) data.setup.darkColor = Color.fromString(dark);
          data.attachmentName = getValue(slotMap, "attachment", null);
          data.blendMode = Utils.enumValue(BlendMode, getValue(slotMap, "blend", "normal"));
          data.visible = getValue(slotMap, "visible", true);
          skeletonData.slots.push(data);
        }
      }
      if (root.constraints) {
        for (const constraintMap of root.constraints) {
          const name = constraintMap.name;
          const skinRequired = getValue(constraintMap, "skin", false);
          switch (getValue(constraintMap, "type", false)) {
            case "ik": {
              const data = new IkConstraintData(name);
              data.skinRequired = skinRequired;
              for (let ii = 0; ii < constraintMap.bones.length; ii++) {
                const bone = skeletonData.findBone(constraintMap.bones[ii]);
                if (!bone) throw new Error(`Couldn't find bone ${constraintMap.bones[ii]} for IK constraint ${name}.`);
                data.bones.push(bone);
              }
              const targetName = constraintMap.target;
              const target = skeletonData.findBone(targetName);
              if (!target) throw new Error(`Couldn't find target bone ${targetName} for IK constraint ${name}.`);
              data.target = target;
              data.uniform = getValue(constraintMap, "uniform", false);
              const setup = data.setup;
              setup.mix = getValue(constraintMap, "mix", 1);
              setup.softness = getValue(constraintMap, "softness", 0) * scale;
              setup.bendDirection = getValue(constraintMap, "bendPositive", true) ? 1 : -1;
              setup.compress = getValue(constraintMap, "compress", false);
              setup.stretch = getValue(constraintMap, "stretch", false);
              skeletonData.constraints.push(data);
              break;
            }
            case "transform": {
              const data = new TransformConstraintData(name);
              data.skinRequired = skinRequired;
              for (let ii = 0; ii < constraintMap.bones.length; ii++) {
                const boneName = constraintMap.bones[ii];
                const bone = skeletonData.findBone(boneName);
                if (!bone) throw new Error(`Couldn't find bone ${boneName} for transform constraint ${constraintMap.name}.`);
                data.bones.push(bone);
              }
              const sourceName = constraintMap.source;
              const source = skeletonData.findBone(sourceName);
              if (!source) throw new Error(`Couldn't find source bone ${sourceName} for transform constraint ${constraintMap.name}.`);
              data.source = source;
              data.localSource = getValue(constraintMap, "localSource", false);
              data.localTarget = getValue(constraintMap, "localTarget", false);
              data.additive = getValue(constraintMap, "additive", false);
              data.clamp = getValue(constraintMap, "clamp", false);
              let rotate = false, x = false, y = false, scaleX = false, scaleY = false, shearY = false;
              const fromEntries = Object.entries(getValue(constraintMap, "properties", {}));
              for (const [name2, fromEntry] of fromEntries) {
                const from = this.fromProperty(name2);
                const fromScale = this.propertyScale(name2, scale);
                from.offset = getValue(fromEntry, "offset", 0) * fromScale;
                const toEntries = Object.entries(getValue(fromEntry, "to", {}));
                for (const [name3, toEntry] of toEntries) {
                  let toScale = 1;
                  let to;
                  switch (name3) {
                    case "rotate": {
                      rotate = true;
                      to = new ToRotate();
                      break;
                    }
                    case "x": {
                      x = true;
                      to = new ToX();
                      toScale = scale;
                      break;
                    }
                    case "y": {
                      y = true;
                      to = new ToY();
                      toScale = scale;
                      break;
                    }
                    case "scaleX": {
                      scaleX = true;
                      to = new ToScaleX();
                      break;
                    }
                    case "scaleY": {
                      scaleY = true;
                      to = new ToScaleY();
                      break;
                    }
                    case "shearY": {
                      shearY = true;
                      to = new ToShearY();
                      break;
                    }
                    default:
                      throw new Error(`Invalid transform constraint to property: ${name3}`);
                  }
                  to.offset = getValue(toEntry, "offset", 0) * toScale;
                  to.max = getValue(toEntry, "max", 1) * toScale;
                  to.scale = getValue(toEntry, "scale", 1) * toScale / fromScale;
                  from.to.push(to);
                }
                if (from.to.length > 0) data.properties.push(from);
              }
              data.offsets[TransformConstraintData.ROTATION] = getValue(constraintMap, "rotation", 0);
              data.offsets[TransformConstraintData.X] = getValue(constraintMap, "x", 0) * scale;
              data.offsets[TransformConstraintData.Y] = getValue(constraintMap, "y", 0) * scale;
              data.offsets[TransformConstraintData.SCALEX] = getValue(constraintMap, "scaleX", 0);
              data.offsets[TransformConstraintData.SCALEY] = getValue(constraintMap, "scaleY", 0);
              data.offsets[TransformConstraintData.SHEARY] = getValue(constraintMap, "shearY", 0);
              const setup = data.setup;
              if (rotate) setup.mixRotate = getValue(constraintMap, "mixRotate", 1);
              if (x) setup.mixX = getValue(constraintMap, "mixX", 1);
              if (y) setup.mixY = getValue(constraintMap, "mixY", setup.mixX);
              if (scaleX) setup.mixScaleX = getValue(constraintMap, "mixScaleX", 1);
              if (scaleY) setup.mixScaleY = getValue(constraintMap, "mixScaleY", setup.mixScaleX);
              if (shearY) setup.mixShearY = getValue(constraintMap, "mixShearY", 1);
              skeletonData.constraints.push(data);
              break;
            }
            case "path": {
              const data = new PathConstraintData(name);
              data.skinRequired = skinRequired;
              for (let ii = 0; ii < constraintMap.bones.length; ii++) {
                const boneName = constraintMap.bones[ii];
                const bone = skeletonData.findBone(boneName);
                if (!bone) throw new Error(`Couldn't find bone ${boneName} for path constraint ${constraintMap.name}.`);
                data.bones.push(bone);
              }
              const slotName = constraintMap.slot;
              const slot = skeletonData.findSlot(slotName);
              if (!slot) throw new Error(`Couldn't find slot ${slotName} for path constraint ${constraintMap.name}.`);
              data.slot = slot;
              data.positionMode = Utils.enumValue(PositionMode, getValue(constraintMap, "positionMode", "Percent"));
              data.spacingMode = Utils.enumValue(SpacingMode, getValue(constraintMap, "spacingMode", "Length"));
              data.rotateMode = Utils.enumValue(RotateMode, getValue(constraintMap, "rotateMode", "Tangent"));
              data.offsetRotation = getValue(constraintMap, "rotation", 0);
              const setup = data.setup;
              setup.position = getValue(constraintMap, "position", 0);
              if (data.positionMode === 0 /* Fixed */) setup.position *= scale;
              setup.spacing = getValue(constraintMap, "spacing", 0);
              if (data.spacingMode === 0 /* Length */ || data.spacingMode === 1 /* Fixed */) setup.spacing *= scale;
              setup.mixRotate = getValue(constraintMap, "mixRotate", 1);
              setup.mixX = getValue(constraintMap, "mixX", 1);
              setup.mixY = getValue(constraintMap, "mixY", setup.mixX);
              skeletonData.constraints.push(data);
              break;
            }
            case "physics": {
              const data = new PhysicsConstraintData(name);
              data.skinRequired = skinRequired;
              const boneName = constraintMap.bone;
              const bone = skeletonData.findBone(boneName);
              if (bone == null) throw new Error(`Physics bone not found: ${boneName}`);
              data.bone = bone;
              data.x = getValue(constraintMap, "x", 0);
              data.y = getValue(constraintMap, "y", 0);
              data.rotate = getValue(constraintMap, "rotate", 0);
              data.scaleX = getValue(constraintMap, "scaleX", 0);
              data.shearX = getValue(constraintMap, "shearX", 0);
              data.limit = getValue(constraintMap, "limit", 5e3) * scale;
              data.step = 1 / getValue(constraintMap, "fps", 60);
              const setup = data.setup;
              setup.inertia = getValue(constraintMap, "inertia", 0.5);
              setup.strength = getValue(constraintMap, "strength", 100);
              setup.damping = getValue(constraintMap, "damping", 0.85);
              setup.massInverse = 1 / getValue(constraintMap, "mass", 1);
              setup.wind = getValue(constraintMap, "wind", 0);
              setup.gravity = getValue(constraintMap, "gravity", 0);
              setup.mix = getValue(constraintMap, "mix", 1);
              data.inertiaGlobal = getValue(constraintMap, "inertiaGlobal", false);
              data.strengthGlobal = getValue(constraintMap, "strengthGlobal", false);
              data.dampingGlobal = getValue(constraintMap, "dampingGlobal", false);
              data.massGlobal = getValue(constraintMap, "massGlobal", false);
              data.windGlobal = getValue(constraintMap, "windGlobal", false);
              data.gravityGlobal = getValue(constraintMap, "gravityGlobal", false);
              data.mixGlobal = getValue(constraintMap, "mixGlobal", false);
              skeletonData.constraints.push(data);
              break;
            }
            case "slider": {
              const data = new SliderData(name);
              data.skinRequired = skinRequired;
              data.additive = getValue(constraintMap, "additive", false);
              data.loop = getValue(constraintMap, "loop", false);
              data.setup.time = getValue(constraintMap, "time", 0);
              data.setup.mix = getValue(constraintMap, "mix", 1);
              const boneName = constraintMap.bone;
              if (boneName) {
                data.bone = skeletonData.findBone(boneName);
                if (!data.bone) throw new Error(`Slider bone not found: ${boneName}`);
                const property = constraintMap.property;
                data.property = this.fromProperty(property);
                const propertyScale = this.propertyScale(property, scale);
                data.property.offset = getValue(constraintMap, "from", 0) * propertyScale;
                data.offset = getValue(constraintMap, "to", 0);
                data.scale = getValue(constraintMap, "scale", 1) / propertyScale;
                data.local = getValue(constraintMap, "local", false);
              }
              skeletonData.constraints.push(data);
              break;
            }
          }
        }
      }
      if (root.skins) {
        for (let i = 0; i < root.skins.length; i++) {
          const skinMap = root.skins[i];
          const skin = new Skin(skinMap.name);
          if (skinMap.bones) {
            for (let ii = 0; ii < skinMap.bones.length; ii++) {
              const boneName = skinMap.bones[ii];
              const bone = skeletonData.findBone(boneName);
              if (!bone) throw new Error(`Couldn't find bone ${boneName} for skin ${skinMap.name}.`);
              skin.bones.push(bone);
            }
          }
          if (skinMap.ik) {
            for (let ii = 0; ii < skinMap.ik.length; ii++) {
              const constraintName = skinMap.ik[ii];
              const constraint = skeletonData.findConstraint(constraintName, IkConstraintData);
              if (!constraint) throw new Error(`Couldn't find IK constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.transform) {
            for (let ii = 0; ii < skinMap.transform.length; ii++) {
              const constraintName = skinMap.transform[ii];
              const constraint = skeletonData.findConstraint(constraintName, TransformConstraintData);
              if (!constraint) throw new Error(`Couldn't find transform constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.path) {
            for (let ii = 0; ii < skinMap.path.length; ii++) {
              const constraintName = skinMap.path[ii];
              const constraint = skeletonData.findConstraint(constraintName, PathConstraintData);
              if (!constraint) throw new Error(`Couldn't find path constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.physics) {
            for (let ii = 0; ii < skinMap.physics.length; ii++) {
              const constraintName = skinMap.physics[ii];
              const constraint = skeletonData.findConstraint(constraintName, PhysicsConstraintData);
              if (!constraint) throw new Error(`Couldn't find physics constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.slider) {
            for (let ii = 0; ii < skinMap.slider.length; ii++) {
              const constraintName = skinMap.slider[ii];
              const constraint = skeletonData.findConstraint(constraintName, SliderData);
              if (!constraint) throw new Error(`Couldn't find slider constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          for (const slotName in skinMap.attachments) {
            const slot = skeletonData.findSlot(slotName);
            if (!slot) throw new Error(`Couldn't find slot ${slotName} for skin ${skinMap.name}.`);
            const slotMap = skinMap.attachments[slotName];
            for (const entryName in slotMap) {
              const attachment = this.readAttachment(slotMap[entryName], skin, slot.index, entryName, skeletonData);
              if (attachment) skin.setAttachment(slot.index, entryName, attachment);
            }
          }
          skeletonData.skins.push(skin);
          if (skin.name === "default") skeletonData.defaultSkin = skin;
        }
      }
      for (let i = 0, n = this.linkedMeshes.length; i < n; i++) {
        const linkedMesh = this.linkedMeshes[i];
        const skin = !linkedMesh.skin ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
        if (!skin) throw new Error(`Skin not found: ${linkedMesh.skin}`);
        const parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (!parent) throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
        linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent);
        if (linkedMesh.mesh.region != null) linkedMesh.mesh.updateRegion();
      }
      this.linkedMeshes.length = 0;
      if (root.events) {
        for (const eventName in root.events) {
          const eventMap = root.events[eventName];
          const data = new EventData(eventName);
          data.intValue = getValue(eventMap, "int", 0);
          data.floatValue = getValue(eventMap, "float", 0);
          data.stringValue = getValue(eventMap, "string", "");
          data.audioPath = getValue(eventMap, "audio", null);
          if (data.audioPath) {
            data.volume = getValue(eventMap, "volume", 1);
            data.balance = getValue(eventMap, "balance", 0);
          }
          skeletonData.events.push(data);
        }
      }
      if (root.animations) {
        for (const animationName in root.animations) {
          const animationMap = root.animations[animationName];
          this.readAnimation(animationMap, animationName, skeletonData);
        }
      }
      if (root.constraints) {
        for (const animationName in root.constraints) {
          const animationMap = root.constraints[animationName];
          if (animationMap.type === "slider") {
            const data = skeletonData.findConstraint(animationMap.name, SliderData);
            const animationName2 = animationMap.animation;
            const animation = skeletonData.findAnimation(animationName2);
            if (!animation) throw new Error(`Slider animation not found: ${animationName2}`);
            data.animation = animation;
          }
        }
      }
      return skeletonData;
    }
    fromProperty(type) {
      let from;
      switch (type) {
        case "rotate":
          from = new FromRotate();
          break;
        case "x":
          from = new FromX();
          break;
        case "y":
          from = new FromY();
          break;
        case "scaleX":
          from = new FromScaleX();
          break;
        case "scaleY":
          from = new FromScaleY();
          break;
        case "shearY":
          from = new FromShearY();
          break;
        default:
          throw new Error(`Invalid transform constraint from property: ${type}`);
      }
      return from;
    }
    propertyScale(type, scale) {
      switch (type) {
        case "x":
        case "y":
          return scale;
        default:
          return 1;
      }
    }
    // biome-ignore lint/suspicious/noExplicitAny: it is any until we define a schema
    readAttachment(map, skin, slotIndex, name, skeletonData) {
      const scale = this.scale;
      name = getValue(map, "name", name);
      switch (getValue(map, "type", "region")) {
        case "region": {
          const path = getValue(map, "path", name);
          const sequence = this.readSequence(getValue(map, "sequence", null));
          const region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
          if (!region) return null;
          region.path = path;
          region.x = getValue(map, "x", 0) * scale;
          region.y = getValue(map, "y", 0) * scale;
          region.scaleX = getValue(map, "scaleX", 1);
          region.scaleY = getValue(map, "scaleY", 1);
          region.rotation = getValue(map, "rotation", 0);
          region.width = map.width * scale;
          region.height = map.height * scale;
          region.sequence = sequence;
          const color = getValue(map, "color", null);
          if (color) region.color.setFromString(color);
          if (region.region != null) region.updateRegion();
          return region;
        }
        case "boundingbox": {
          const box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
          if (!box) return null;
          this.readVertices(map, box, map.vertexCount << 1);
          const color = getValue(map, "color", null);
          if (color) box.color.setFromString(color);
          return box;
        }
        case "mesh":
        case "linkedmesh": {
          const path = getValue(map, "path", name);
          const sequence = this.readSequence(getValue(map, "sequence", null));
          const mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          const color = getValue(map, "color", null);
          if (color) mesh.color.setFromString(color);
          mesh.width = getValue(map, "width", 0) * scale;
          mesh.height = getValue(map, "height", 0) * scale;
          mesh.sequence = sequence;
          const parent = getValue(map, "parent", null);
          if (parent) {
            this.linkedMeshes.push(new LinkedMesh2(mesh, getValue(map, "skin", null), slotIndex, parent, getValue(map, "timelines", true)));
            return mesh;
          }
          const uvs = map.uvs;
          this.readVertices(map, mesh, uvs.length);
          mesh.triangles = map.triangles;
          mesh.regionUVs = uvs;
          if (mesh.region != null) mesh.updateRegion();
          mesh.edges = getValue(map, "edges", null);
          mesh.hullLength = getValue(map, "hull", 0) * 2;
          return mesh;
        }
        case "path": {
          const path = this.attachmentLoader.newPathAttachment(skin, name);
          if (!path) return null;
          path.closed = getValue(map, "closed", false);
          path.constantSpeed = getValue(map, "constantSpeed", true);
          const vertexCount = map.vertexCount;
          this.readVertices(map, path, vertexCount << 1);
          const lengths = Utils.newArray(vertexCount / 3, 0);
          for (let i = 0; i < map.lengths.length; i++)
            lengths[i] = map.lengths[i] * scale;
          path.lengths = lengths;
          const color = getValue(map, "color", null);
          if (color) path.color.setFromString(color);
          return path;
        }
        case "point": {
          const point = this.attachmentLoader.newPointAttachment(skin, name);
          if (!point) return null;
          point.x = getValue(map, "x", 0) * scale;
          point.y = getValue(map, "y", 0) * scale;
          point.rotation = getValue(map, "rotation", 0);
          const color = getValue(map, "color", null);
          if (color) point.color.setFromString(color);
          return point;
        }
        case "clipping": {
          const clip = this.attachmentLoader.newClippingAttachment(skin, name);
          if (!clip) return null;
          const end = getValue(map, "end", null);
          if (end) clip.endSlot = skeletonData.findSlot(end);
          const vertexCount = map.vertexCount;
          this.readVertices(map, clip, vertexCount << 1);
          const color = getValue(map, "color", null);
          if (color) clip.color.setFromString(color);
          return clip;
        }
      }
      return null;
    }
    readSequence(map) {
      if (map == null) return null;
      const sequence = new Sequence(getValue(map, "count", 0));
      sequence.start = getValue(map, "start", 1);
      sequence.digits = getValue(map, "digits", 0);
      sequence.setupIndex = getValue(map, "setup", 0);
      return sequence;
    }
    // biome-ignore lint/suspicious/noExplicitAny: it is any until we define a schema
    readVertices(map, attachment, verticesLength) {
      const scale = this.scale;
      attachment.worldVerticesLength = verticesLength;
      const vertices = map.vertices;
      if (verticesLength === vertices.length) {
        const scaledVertices = Utils.toFloatArray(vertices);
        if (scale !== 1) {
          for (let i = 0, n = vertices.length; i < n; i++)
            scaledVertices[i] *= scale;
        }
        attachment.vertices = scaledVertices;
        return;
      }
      const weights = [];
      const bones = [];
      for (let i = 0, n = vertices.length; i < n; ) {
        const boneCount = vertices[i++];
        bones.push(boneCount);
        for (let nn = i + boneCount * 4; i < nn; i += 4) {
          bones.push(vertices[i]);
          weights.push(vertices[i + 1] * scale);
          weights.push(vertices[i + 2] * scale);
          weights.push(vertices[i + 3]);
        }
      }
      attachment.bones = bones;
      attachment.vertices = Utils.toFloatArray(weights);
    }
    // biome-ignore lint/suspicious/noExplicitAny: it is any untile we define a schema
    readAnimation(map, name, skeletonData) {
      const scale = this.scale;
      const timelines = [];
      if (map.slots) {
        for (const slotName in map.slots) {
          const slotMap = map.slots[slotName];
          const slot = skeletonData.findSlot(slotName);
          if (!slot) throw new Error(`Slot not found: ${slotName}`);
          const slotIndex = slot.index;
          for (const timelineName in slotMap) {
            const timelineMap = slotMap[timelineName];
            if (!timelineMap) continue;
            const frames = timelineMap.length;
            switch (timelineName) {
              case "attachment": {
                const timeline = new AttachmentTimeline(frames, slotIndex);
                for (let frame = 0; frame < frames; frame++) {
                  const keyMap = timelineMap[frame];
                  timeline.setFrame(frame, getValue(keyMap, "time", 0), getValue(keyMap, "name", null));
                }
                timelines.push(timeline);
                break;
              }
              case "rgba": {
                const timeline = new RGBATimeline(frames, frames << 2, slotIndex);
                let keyMap = timelineMap[0];
                let time = getValue(keyMap, "time", 0);
                let color = Color.fromString(keyMap.color);
                for (let frame = 0, bezier = 0; ; frame++) {
                  timeline.setFrame(frame, time, color.r, color.g, color.b, color.a);
                  const nextMap = timelineMap[frame + 1];
                  if (!nextMap) {
                    timeline.shrink(bezier);
                    break;
                  }
                  const time2 = getValue(nextMap, "time", 0);
                  const newColor = Color.fromString(nextMap.color);
                  const curve = keyMap.curve;
                  if (curve) {
                    bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color.a, newColor.a, 1);
                  }
                  time = time2;
                  color = newColor;
                  keyMap = nextMap;
                }
                timelines.push(timeline);
                break;
              }
              case "rgb": {
                const timeline = new RGBTimeline(frames, frames * 3, slotIndex);
                let keyMap = timelineMap[0];
                let time = getValue(keyMap, "time", 0);
                let color = Color.fromString(keyMap.color);
                for (let frame = 0, bezier = 0; ; frame++) {
                  timeline.setFrame(frame, time, color.r, color.g, color.b);
                  const nextMap = timelineMap[frame + 1];
                  if (!nextMap) {
                    timeline.shrink(bezier);
                    break;
                  }
                  const time2 = getValue(nextMap, "time", 0);
                  const newColor = Color.fromString(nextMap.color);
                  const curve = keyMap.curve;
                  if (curve) {
                    bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                  }
                  time = time2;
                  color = newColor;
                  keyMap = nextMap;
                }
                timelines.push(timeline);
                break;
              }
              case "alpha": {
                readTimeline12(timelines, timelineMap, new AlphaTimeline(frames, frames, slotIndex), 0, 1);
                break;
              }
              case "rgba2": {
                const timeline = new RGBA2Timeline(frames, frames * 7, slotIndex);
                let keyMap = timelineMap[0];
                let time = getValue(keyMap, "time", 0);
                let color = Color.fromString(keyMap.light);
                let color2 = Color.fromString(keyMap.dark);
                for (let frame = 0, bezier = 0; ; frame++) {
                  timeline.setFrame(frame, time, color.r, color.g, color.b, color.a, color2.r, color2.g, color2.b);
                  const nextMap = timelineMap[frame + 1];
                  if (!nextMap) {
                    timeline.shrink(bezier);
                    break;
                  }
                  const time2 = getValue(nextMap, "time", 0);
                  const newColor = Color.fromString(nextMap.light);
                  const newColor2 = Color.fromString(nextMap.dark);
                  const curve = keyMap.curve;
                  if (curve) {
                    bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color.a, newColor.a, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, color2.r, newColor2.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, color2.g, newColor2.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 6, time, time2, color2.b, newColor2.b, 1);
                  }
                  time = time2;
                  color = newColor;
                  color2 = newColor2;
                  keyMap = nextMap;
                }
                timelines.push(timeline);
                break;
              }
              case "rgb2": {
                const timeline = new RGB2Timeline(frames, frames * 6, slotIndex);
                let keyMap = timelineMap[0];
                let time = getValue(keyMap, "time", 0);
                let color = Color.fromString(keyMap.light);
                let color2 = Color.fromString(keyMap.dark);
                for (let frame = 0, bezier = 0; ; frame++) {
                  timeline.setFrame(frame, time, color.r, color.g, color.b, color2.r, color2.g, color2.b);
                  const nextMap = timelineMap[frame + 1];
                  if (!nextMap) {
                    timeline.shrink(bezier);
                    break;
                  }
                  const time2 = getValue(nextMap, "time", 0);
                  const newColor = Color.fromString(nextMap.light);
                  const newColor2 = Color.fromString(nextMap.dark);
                  const curve = keyMap.curve;
                  if (curve) {
                    bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color2.r, newColor2.r, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, color2.g, newColor2.g, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, color2.b, newColor2.b, 1);
                  }
                  time = time2;
                  color = newColor;
                  color2 = newColor2;
                  keyMap = nextMap;
                }
                timelines.push(timeline);
                break;
              }
              default:
                throw new Error(`Invalid timeline type for a slot: ${timelineMap.name} (${slotMap.name})`);
            }
          }
        }
      }
      if (map.bones) {
        for (const boneName in map.bones) {
          const boneMap = map.bones[boneName];
          const bone = skeletonData.findBone(boneName);
          if (!bone) throw new Error(`Bone not found: ${boneName}`);
          const boneIndex = bone.index;
          for (const timelineName in boneMap) {
            const timelineMap = boneMap[timelineName];
            const frames = timelineMap.length;
            if (frames === 0) continue;
            switch (timelineName) {
              case "rotate":
                readTimeline12(timelines, timelineMap, new RotateTimeline(frames, frames, boneIndex), 0, 1);
                break;
              case "translate":
                readTimeline22(timelines, timelineMap, new TranslateTimeline(frames, frames << 1, boneIndex), "x", "y", 0, scale);
                break;
              case "translatex":
                readTimeline12(timelines, timelineMap, new TranslateXTimeline(frames, frames, boneIndex), 0, scale);
                break;
              case "translatey":
                readTimeline12(timelines, timelineMap, new TranslateYTimeline(frames, frames, boneIndex), 0, scale);
                break;
              case "scale":
                readTimeline22(timelines, timelineMap, new ScaleTimeline(frames, frames << 1, boneIndex), "x", "y", 1, 1);
                break;
              case "scalex":
                readTimeline12(timelines, timelineMap, new ScaleXTimeline(frames, frames, boneIndex), 1, 1);
                break;
              case "scaley":
                readTimeline12(timelines, timelineMap, new ScaleYTimeline(frames, frames, boneIndex), 1, 1);
                break;
              case "shear":
                readTimeline22(timelines, timelineMap, new ShearTimeline(frames, frames << 1, boneIndex), "x", "y", 0, 1);
                break;
              case "shearx":
                readTimeline12(timelines, timelineMap, new ShearXTimeline(frames, frames, boneIndex), 0, 1);
                break;
              case "sheary":
                readTimeline12(timelines, timelineMap, new ShearYTimeline(frames, frames, boneIndex), 0, 1);
                break;
              case "inherit": {
                const timeline = new InheritTimeline(frames, bone.index);
                for (let frame = 0; frame < timelineMap.length; frame++) {
                  const aFrame = timelineMap[frame];
                  timeline.setFrame(frame, getValue(aFrame, "time", 0), Utils.enumValue(Inherit, getValue(aFrame, "inherit", "Normal")));
                }
                timelines.push(timeline);
                break;
              }
              default:
                throw new Error(`Invalid timeline type for a bone: ${timelineMap.name} (${boneMap.name})`);
            }
          }
        }
      }
      if (map.ik) {
        for (const constraintName in map.ik) {
          const constraintMap = map.ik[constraintName];
          let keyMap = constraintMap[0];
          if (!keyMap) continue;
          const constraint = skeletonData.findConstraint(constraintName, IkConstraintData);
          if (!constraint) throw new Error(`IK Constraint not found: ${constraintName}`);
          const timeline = new IkConstraintTimeline(
            constraintMap.length,
            constraintMap.length << 1,
            skeletonData.constraints.indexOf(constraint)
          );
          let time = getValue(keyMap, "time", 0);
          let mix = getValue(keyMap, "mix", 1);
          let softness = getValue(keyMap, "softness", 0) * scale;
          for (let frame = 0, bezier = 0; ; frame++) {
            timeline.setFrame(frame, time, mix, softness, getValue(keyMap, "bendPositive", true) ? 1 : -1, getValue(keyMap, "compress", false), getValue(keyMap, "stretch", false));
            const nextMap = constraintMap[frame + 1];
            if (!nextMap) {
              timeline.shrink(bezier);
              break;
            }
            const time2 = getValue(nextMap, "time", 0);
            const mix2 = getValue(nextMap, "mix", 1);
            const softness2 = getValue(nextMap, "softness", 0) * scale;
            const curve = keyMap.curve;
            if (curve) {
              bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mix, mix2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, softness, softness2, scale);
            }
            time = time2;
            mix = mix2;
            softness = softness2;
            keyMap = nextMap;
          }
          timelines.push(timeline);
        }
      }
      if (map.transform) {
        for (const constraintName in map.transform) {
          const timelineMap = map.transform[constraintName];
          let keyMap = timelineMap[0];
          if (!keyMap) continue;
          const constraint = skeletonData.findConstraint(constraintName, TransformConstraintData);
          if (!constraint) throw new Error(`Transform constraint not found: ${constraintName}`);
          const timeline = new TransformConstraintTimeline(
            timelineMap.length,
            timelineMap.length * 6,
            skeletonData.constraints.indexOf(constraint)
          );
          let time = getValue(keyMap, "time", 0);
          let mixRotate = getValue(keyMap, "mixRotate", 1);
          let mixX = getValue(keyMap, "mixX", 1), mixY = getValue(keyMap, "mixY", mixX);
          let mixScaleX = getValue(keyMap, "mixScaleX", 1), mixScaleY = getValue(keyMap, "mixScaleY", 1);
          const mixShearY = getValue(keyMap, "mixShearY", 1);
          for (let frame = 0, bezier = 0; ; frame++) {
            timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
            const nextMap = timelineMap[frame + 1];
            if (!nextMap) {
              timeline.shrink(bezier);
              break;
            }
            const time2 = getValue(nextMap, "time", 0);
            const mixRotate2 = getValue(nextMap, "mixRotate", 1);
            const mixX2 = getValue(nextMap, "mixX", 1), mixY2 = getValue(nextMap, "mixY", mixX2);
            const mixScaleX2 = getValue(nextMap, "mixScaleX", 1), mixScaleY2 = getValue(nextMap, "mixScaleY", 1);
            const mixShearY2 = getValue(nextMap, "mixShearY", 1);
            const curve = keyMap.curve;
            if (curve) {
              bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mixRotate, mixRotate2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, mixX, mixX2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, mixY, mixY2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, mixShearY, mixShearY2, 1);
            }
            time = time2;
            mixRotate = mixRotate2;
            mixX = mixX2;
            mixY = mixY2;
            mixScaleX = mixScaleX2;
            mixScaleY = mixScaleY2;
            mixScaleX = mixScaleX2;
            keyMap = nextMap;
          }
          timelines.push(timeline);
        }
      }
      if (map.path) {
        for (const constraintName in map.path) {
          const constraintMap = map.path[constraintName];
          const constraint = skeletonData.findConstraint(constraintName, PathConstraintData);
          if (!constraint) throw new Error(`Path constraint not found: ${constraintName}`);
          const index = skeletonData.constraints.indexOf(constraint);
          for (const timelineName in constraintMap) {
            const timelineMap = constraintMap[timelineName];
            let keyMap = timelineMap[0];
            if (!keyMap) continue;
            const frames = timelineMap.length;
            switch (timelineName) {
              case "position": {
                const timeline = new PathConstraintPositionTimeline(frames, frames, index);
                readTimeline12(timelines, timelineMap, timeline, 0, constraint.positionMode === 0 /* Fixed */ ? scale : 1);
                break;
              }
              case "spacing": {
                const timeline = new PathConstraintSpacingTimeline(frames, frames, index);
                readTimeline12(timelines, timelineMap, timeline, 0, constraint.spacingMode === 0 /* Length */ || constraint.spacingMode === 1 /* Fixed */ ? scale : 1);
                break;
              }
              case "mix": {
                const timeline = new PathConstraintMixTimeline(frames, frames * 3, index);
                let time = getValue(keyMap, "time", 0);
                let mixRotate = getValue(keyMap, "mixRotate", 1);
                let mixX = getValue(keyMap, "mixX", 1);
                let mixY = getValue(keyMap, "mixY", mixX);
                for (let frame = 0, bezier = 0; ; frame++) {
                  timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                  const nextMap = timelineMap[frame + 1];
                  if (!nextMap) {
                    timeline.shrink(bezier);
                    break;
                  }
                  const time2 = getValue(nextMap, "time", 0);
                  const mixRotate2 = getValue(nextMap, "mixRotate", 1);
                  const mixX2 = getValue(nextMap, "mixX", 1);
                  const mixY2 = getValue(nextMap, "mixY", mixX2);
                  const curve = keyMap.curve;
                  if (curve) {
                    bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, mixX, mixX2, 1);
                    bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, mixY, mixY2, 1);
                  }
                  time = time2;
                  mixRotate = mixRotate2;
                  mixX = mixX2;
                  mixY = mixY2;
                  keyMap = nextMap;
                }
                timelines.push(timeline);
                break;
              }
            }
          }
        }
      }
      if (map.physics) {
        for (const constraintName in map.physics) {
          const constraintMap = map.physics[constraintName];
          let index = -1;
          if (constraintName.length > 0) {
            const constraint = skeletonData.findConstraint(constraintName, PhysicsConstraintData);
            if (!constraint) throw new Error(`Physics constraint not found: ${constraintName}`);
            index = skeletonData.constraints.indexOf(constraint);
          }
          for (const timelineName in constraintMap) {
            const timelineMap = constraintMap[timelineName];
            let keyMap = timelineMap[0];
            if (!keyMap) continue;
            const frames = timelineMap.length;
            let timeline;
            let defaultValue = 0;
            if (timelineName === "reset") {
              const resetTimeline = new PhysicsConstraintResetTimeline(frames, index);
              for (let frame = 0; keyMap != null; keyMap = timelineMap[frame + 1], frame++)
                resetTimeline.setFrame(frame, getValue(keyMap, "time", 0));
              timelines.push(resetTimeline);
              continue;
            }
            switch (timelineName) {
              case "inertia":
                timeline = new PhysicsConstraintInertiaTimeline(frames, frames, index);
                break;
              case "strength":
                timeline = new PhysicsConstraintStrengthTimeline(frames, frames, index);
                break;
              case "damping":
                timeline = new PhysicsConstraintDampingTimeline(frames, frames, index);
                break;
              case "mass":
                timeline = new PhysicsConstraintMassTimeline(frames, frames, index);
                break;
              case "wind":
                timeline = new PhysicsConstraintWindTimeline(frames, frames, index);
                break;
              case "gravity":
                timeline = new PhysicsConstraintGravityTimeline(frames, frames, index);
                break;
              case "mix": {
                defaultValue = 1;
                timeline = new PhysicsConstraintMixTimeline(frames, frames, index);
                break;
              }
              default:
                continue;
            }
            readTimeline12(timelines, timelineMap, timeline, defaultValue, 1);
          }
        }
      }
      if (map.slider) {
        for (const constraintName in map.slider) {
          const constraintMap = map.slider[constraintName];
          const constraint = skeletonData.findConstraint(constraintName, SliderData);
          if (!constraint) throw new Error(`Slider not found: ${constraintName}`);
          const index = skeletonData.constraints.indexOf(constraint);
          for (const timelineName in constraintMap) {
            const timelineMap = constraintMap[timelineName];
            const keyMap = timelineMap[0];
            if (!keyMap) continue;
            const frames = timelineMap.length;
            switch (timelineName) {
              case "time":
                readTimeline12(timelines, timelineMap, new SliderTimeline(frames, frames, index), 1, 1);
                break;
              case "mix":
                readTimeline12(timelines, timelineMap, new SliderMixTimeline(frames, frames, index), 1, 1);
                break;
            }
          }
        }
      }
      if (map.attachments) {
        for (const attachmentsName in map.attachments) {
          const attachmentsMap = map.attachments[attachmentsName];
          const skin = skeletonData.findSkin(attachmentsName);
          if (!skin) throw new Error(`Skin not found: ${attachmentsName}`);
          for (const slotMapName in attachmentsMap) {
            const slotMap = attachmentsMap[slotMapName];
            const slot = skeletonData.findSlot(slotMapName);
            if (!slot) throw new Error(`Slot not found: ${slotMapName}`);
            const slotIndex = slot.index;
            for (const attachmentMapName in slotMap) {
              const attachmentMap = slotMap[attachmentMapName];
              const attachment = skin.getAttachment(slotIndex, attachmentMapName);
              if (!attachment) throw new Error(`Timeline attachment not found: ${attachmentMapName}`);
              for (const timelineMapName in attachmentMap) {
                const timelineMap = attachmentMap[timelineMapName];
                let keyMap = timelineMap[0];
                if (!keyMap) continue;
                if (timelineMapName === "deform") {
                  const weighted = attachment.bones;
                  const vertices = attachment.vertices;
                  const deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                  const timeline = new DeformTimeline(timelineMap.length, timelineMap.length, slotIndex, attachment);
                  let time = getValue(keyMap, "time", 0);
                  for (let frame = 0, bezier = 0; ; frame++) {
                    let deform;
                    const verticesValue = getValue(keyMap, "vertices", null);
                    if (!verticesValue)
                      deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                    else {
                      deform = Utils.newFloatArray(deformLength);
                      const start = getValue(keyMap, "offset", 0);
                      Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
                      if (scale !== 1) {
                        for (let i = start, n = i + verticesValue.length; i < n; i++)
                          deform[i] *= scale;
                      }
                      if (!weighted) {
                        for (let i = 0; i < deformLength; i++)
                          deform[i] += vertices[i];
                      }
                    }
                    timeline.setFrame(frame, time, deform);
                    const nextMap = timelineMap[frame + 1];
                    if (!nextMap) {
                      timeline.shrink(bezier);
                      break;
                    }
                    const time2 = getValue(nextMap, "time", 0);
                    const curve = keyMap.curve;
                    if (curve) bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, 0, 1, 1);
                    time = time2;
                    keyMap = nextMap;
                  }
                  timelines.push(timeline);
                } else if (timelineMapName === "sequence") {
                  const timeline = new SequenceTimeline(timelineMap.length, slotIndex, attachment);
                  let lastDelay = 0;
                  for (let frame = 0; frame < timelineMap.length; frame++) {
                    const delay = getValue(keyMap, "delay", lastDelay);
                    const time = getValue(keyMap, "time", 0);
                    const mode = SequenceMode[getValue(keyMap, "mode", "hold")];
                    const index = getValue(keyMap, "index", 0);
                    timeline.setFrame(frame, time, mode, index, delay);
                    lastDelay = delay;
                    keyMap = timelineMap[frame + 1];
                  }
                  timelines.push(timeline);
                }
              }
            }
          }
        }
      }
      if (map.drawOrder) {
        const timeline = new DrawOrderTimeline(map.drawOrder.length);
        const slotCount = skeletonData.slots.length;
        let frame = 0;
        for (let i = 0; i < map.drawOrder.length; i++, frame++) {
          const drawOrderMap = map.drawOrder[i];
          let drawOrder = null;
          const offsets = getValue(drawOrderMap, "offsets", null);
          if (offsets) {
            drawOrder = Utils.newArray(slotCount, -1);
            const unchanged = Utils.newArray(slotCount - offsets.length, 0);
            let originalIndex = 0, unchangedIndex = 0;
            for (let ii = 0; ii < offsets.length; ii++) {
              const offsetMap = offsets[ii];
              const slot = skeletonData.findSlot(offsetMap.slot);
              if (!slot) throw new Error(`Slot not found: ${slot}`);
              const slotIndex = slot.index;
              while (originalIndex !== slotIndex)
                unchanged[unchangedIndex++] = originalIndex++;
              drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
            }
            while (originalIndex < slotCount)
              unchanged[unchangedIndex++] = originalIndex++;
            for (let ii = slotCount - 1; ii >= 0; ii--)
              if (drawOrder[ii] === -1) drawOrder[ii] = unchanged[--unchangedIndex];
          }
          timeline.setFrame(frame, getValue(drawOrderMap, "time", 0), drawOrder);
        }
        timelines.push(timeline);
      }
      if (map.events) {
        const timeline = new EventTimeline(map.events.length);
        let frame = 0;
        for (let i = 0; i < map.events.length; i++, frame++) {
          const eventMap = map.events[i];
          const eventData = skeletonData.findEvent(eventMap.name);
          if (!eventData) throw new Error(`Event not found: ${eventMap.name}`);
          const event = new Event(Utils.toSinglePrecision(getValue(eventMap, "time", 0)), eventData);
          event.intValue = getValue(eventMap, "int", eventData.intValue);
          event.floatValue = getValue(eventMap, "float", eventData.floatValue);
          event.stringValue = getValue(eventMap, "string", eventData.stringValue);
          if (event.data.audioPath) {
            event.volume = getValue(eventMap, "volume", 1);
            event.balance = getValue(eventMap, "balance", 0);
          }
          timeline.setFrame(frame, event);
        }
        timelines.push(timeline);
      }
      let duration = 0;
      for (let i = 0, n = timelines.length; i < n; i++)
        duration = Math.max(duration, timelines[i].getDuration());
      skeletonData.animations.push(new Animation(name, timelines, duration));
    }
  };
  var LinkedMesh2 = class {
    parent;
    skin;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skin, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skin = skin;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritTimeline = inheritDeform;
    }
  };
  function readTimeline12(timelines, keys, timeline, defaultValue, scale) {
    let keyMap = keys[0];
    let time = keyMap.time ?? 0;
    let value = (keyMap.value ?? defaultValue) * scale;
    let bezier = 0;
    for (let frame = 0; ; frame++) {
      timeline.setFrame(frame, time, value);
      const nextMap = keys[frame + 1];
      if (!nextMap) {
        timeline.shrink(bezier);
        timelines.push(timeline);
        return;
      }
      const time2 = nextMap.time ?? 0;
      const value2 = (nextMap.value ?? defaultValue) * scale;
      if (keyMap.curve) bezier = readCurve(keyMap.curve, timeline, bezier, frame, 0, time, time2, value, value2, scale);
      time = time2;
      value = value2;
      keyMap = nextMap;
    }
  }
  function readTimeline22(timelines, keys, timeline, name1, name2, defaultValue, scale) {
    let keyMap = keys[0];
    let time = keyMap.time ?? 0;
    let value1 = (keyMap[name1] ?? defaultValue) * scale;
    let value2 = (keyMap[name2] ?? defaultValue) * scale;
    let bezier = 0;
    for (let frame = 0; ; frame++) {
      timeline.setFrame(frame, time, value1, value2);
      const nextMap = keys[frame + 1];
      if (!nextMap) {
        timeline.shrink(bezier);
        timelines.push(timeline);
        return;
      }
      const time2 = nextMap.time ?? 0;
      const nvalue1 = (nextMap[name1] ?? defaultValue) * scale;
      const nvalue2 = (nextMap[name2] ?? defaultValue) * scale;
      const curve = keyMap.curve;
      if (curve) {
        bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, value1, nvalue1, scale);
        bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, value2, nvalue2, scale);
      }
      time = time2;
      value1 = nvalue1;
      value2 = nvalue2;
      keyMap = nextMap;
    }
  }
  function readCurve(curve, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    if (curve === "stepped") {
      timeline.setStepped(frame);
      return bezier;
    }
    const i = value << 2;
    const cx1 = curve[i];
    const cy1 = curve[i + 1] * scale;
    const cx2 = curve[i + 2];
    const cy2 = curve[i + 3] * scale;
    timeline.setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2);
    return bezier + 1;
  }
  function getValue(map, property, defaultValue) {
    return map[property] !== void 0 ? map[property] : defaultValue;
  }

  // spine-core/src/SkeletonRendererCore.ts
  var SkeletonRendererCore = class {
    commandPool = new CommandPool();
    worldVertices = new Float32Array(12 * 1024);
    quadIndices = new Uint32Array([0, 1, 2, 2, 3, 0]);
    clipping = new SkeletonClipping();
    renderCommands = [];
    render(skeleton) {
      this.commandPool.reset();
      this.renderCommands.length = 0;
      const clipper = this.clipping;
      for (let i = 0; i < skeleton.slots.length; i++) {
        const slot = skeleton.drawOrder[i];
        const attachment = slot.applied.attachment;
        if (!attachment) {
          clipper.clipEnd(slot);
          continue;
        }
        const slotApplied = slot.applied;
        const color = slotApplied.color;
        const alpha = color.a;
        if ((alpha === 0 || !slot.bone.active) && !(attachment instanceof ClippingAttachment)) {
          clipper.clipEnd(slot);
          continue;
        }
        let vertices;
        let verticesCount;
        let uvs;
        let indices;
        let indicesCount;
        let attachmentColor;
        let texture;
        if (attachment instanceof RegionAttachment) {
          attachmentColor = attachment.color;
          if (attachmentColor.a === 0) {
            clipper.clipEnd(slot);
            continue;
          }
          attachment.computeWorldVertices(slot, this.worldVertices, 0, 2);
          vertices = this.worldVertices;
          verticesCount = 4;
          uvs = attachment.uvs;
          indices = this.quadIndices;
          indicesCount = 6;
          texture = attachment.region?.texture;
        } else if (attachment instanceof MeshAttachment) {
          attachmentColor = attachment.color;
          if (attachmentColor.a === 0) {
            clipper.clipEnd(slot);
            continue;
          }
          if (this.worldVertices.length < attachment.worldVerticesLength)
            this.worldVertices = new Float32Array(attachment.worldVerticesLength);
          attachment.computeWorldVertices(skeleton, slot, 0, attachment.worldVerticesLength, this.worldVertices, 0, 2);
          vertices = this.worldVertices;
          verticesCount = attachment.worldVerticesLength >> 1;
          uvs = attachment.uvs;
          indices = attachment.triangles;
          indicesCount = indices.length;
          texture = attachment.region?.texture;
        } else if (attachment instanceof ClippingAttachment) {
          clipper.clipStart(skeleton, slot, attachment);
          continue;
        } else {
          continue;
        }
        const skelColor = skeleton.color;
        const r = Math.floor(skelColor.r * slotApplied.color.r * attachmentColor.r * 255);
        const g = Math.floor(skelColor.g * slotApplied.color.g * attachmentColor.g * 255);
        const b = Math.floor(skelColor.b * slotApplied.color.b * attachmentColor.b * 255);
        const a = Math.floor(skelColor.a * slotApplied.color.a * attachmentColor.a * 255);
        let darkColor = 4278190080;
        if (slotApplied.darkColor) {
          const { r: r2, g: g2, b: b2 } = slotApplied.darkColor;
          darkColor = 4278190080 | Math.floor(r2 * 255) << 16 | Math.floor(g2 * 255) << 8 | Math.floor(b2 * 255);
        }
        if (clipper.isClipping()) {
          clipper.clipTrianglesUnpacked(vertices, indices, indicesCount, uvs);
          vertices = clipper.clippedVerticesTyped;
          verticesCount = clipper.clippedVerticesLength >> 1;
          uvs = clipper.clippedUVsTyped;
          indices = clipper.clippedTrianglesTyped;
          indicesCount = clipper.clippedTrianglesLength;
        }
        const cmd = this.commandPool.getCommand(verticesCount, indicesCount);
        cmd.blendMode = slot.data.blendMode;
        cmd.texture = texture;
        cmd.positions.set(vertices.subarray(0, verticesCount << 1));
        cmd.uvs.set(uvs.subarray(0, verticesCount << 1));
        for (let j = 0; j < verticesCount; j++) {
          cmd.colors[j] = a << 24 | r << 16 | g << 8 | b;
          cmd.darkColors[j] = darkColor;
        }
        if (indices instanceof Uint16Array) {
          cmd.indices.set(indices.subarray(0, indicesCount));
        } else {
          cmd.indices.set(indices.slice(0, indicesCount));
        }
        this.renderCommands.push(cmd);
        clipper.clipEnd(slot);
      }
      clipper.clipEnd();
      return this.batchCommands();
    }
    batchSubCommands(commands, first, last, numVertices, numIndices) {
      const firstCmd = commands[first];
      const batched = this.commandPool.getCommand(numVertices, numIndices);
      batched.blendMode = firstCmd.blendMode;
      batched.texture = firstCmd.texture;
      let positionsOffset = 0;
      let uvsOffset = 0;
      let colorsOffset = 0;
      let indicesOffset = 0;
      let vertexOffset = 0;
      for (let i = first; i <= last; i++) {
        const cmd = commands[i];
        batched.positions.set(cmd.positions, positionsOffset);
        positionsOffset += cmd.numVertices << 1;
        batched.uvs.set(cmd.uvs, uvsOffset);
        uvsOffset += cmd.numVertices << 1;
        batched.colors.set(cmd.colors, colorsOffset);
        batched.darkColors.set(cmd.darkColors, colorsOffset);
        colorsOffset += cmd.numVertices;
        for (let j = 0; j < cmd.numIndices; j++)
          batched.indices[indicesOffset + j] = cmd.indices[j] + vertexOffset;
        indicesOffset += cmd.numIndices;
        vertexOffset += cmd.numVertices;
      }
      return batched;
    }
    batchCommands() {
      if (this.renderCommands.length === 0) return void 0;
      let root;
      let last;
      let first = this.renderCommands[0];
      let startIndex = 0;
      let i = 1;
      let numVertices = first.numVertices;
      let numIndices = first.numIndices;
      while (i <= this.renderCommands.length) {
        const cmd = i < this.renderCommands.length ? this.renderCommands[i] : null;
        if (cmd && cmd.numVertices === 0 && cmd.numIndices === 0) {
          i++;
          continue;
        }
        const canBatch = cmd !== null && cmd.texture === first.texture && cmd.blendMode === first.blendMode && cmd.colors[0] === first.colors[0] && cmd.darkColors[0] === first.darkColors[0] && numIndices + cmd.numIndices < 65535;
        if (canBatch) {
          numVertices += cmd.numVertices;
          numIndices += cmd.numIndices;
        } else {
          const batched = this.batchSubCommands(
            this.renderCommands,
            startIndex,
            i - 1,
            numVertices,
            numIndices
          );
          if (!last) {
            root = last = batched;
          } else {
            last.next = batched;
            last = batched;
          }
          if (i === this.renderCommands.length) break;
          first = this.renderCommands[i];
          startIndex = i;
          numVertices = first.numVertices;
          numIndices = first.numIndices;
        }
        i++;
      }
      return root;
    }
  };
  var CommandPool = class {
    pool = [];
    inUse = [];
    getCommand(numVertices, numIndices) {
      let cmd;
      for (const c of this.pool) {
        if (c._positions.length >= numVertices << 1 && c._indices.length >= numIndices) {
          cmd = c;
          break;
        }
      }
      if (!cmd) {
        const _positions = new Float32Array(numVertices << 1);
        const _uvs = new Float32Array(numVertices << 1);
        const _colors = new Uint32Array(numVertices);
        const _darkColors = new Uint32Array(numVertices);
        const _indices = new Uint16Array(numIndices);
        cmd = {
          positions: _positions,
          uvs: _uvs,
          colors: _colors,
          darkColors: _darkColors,
          indices: _indices,
          _positions,
          _uvs,
          _colors,
          _darkColors,
          _indices,
          numVertices,
          numIndices,
          blendMode: 0 /* Normal */,
          texture: null
        };
      } else {
        this.pool.splice(this.pool.indexOf(cmd), 1);
        cmd.next = void 0;
        cmd.numVertices = numVertices;
        cmd.numIndices = numIndices;
        cmd.positions = cmd._positions.subarray(0, numVertices << 1);
        cmd.uvs = cmd._uvs.subarray(0, numVertices * 2);
        cmd.colors = cmd._colors.subarray(0, numVertices);
        cmd.darkColors = cmd._darkColors.subarray(0, numVertices);
        cmd.indices = cmd._indices.subarray(0, numIndices);
      }
      this.inUse.push(cmd);
      return cmd;
    }
    reset() {
      this.pool.push(...this.inUse);
      this.inUse.length = 0;
    }
  };

  // spine-construct3/spine-construct3-lib/src/C3Texture.ts
  var C3TextureEditor = class extends Texture {
    texture;
    renderer;
    constructor(image, renderer, page) {
      super(image);
      this.renderer = renderer;
      const options = {
        wrapX: toC3TextureWrap(page.uWrap),
        wrapY: toC3TextureWrap(page.vWrap),
        sampling: toC3Filter(page.minFilter),
        mipMap: toC3MipMap(page.minFilter)
      };
      this.texture = renderer.CreateDynamicTexture(image.width, image.height, options);
      this.renderer.UpdateTexture(image, this.texture, { premultiplyAlpha: !page.pma });
    }
    setFilters() {
    }
    setWraps() {
    }
    dispose() {
      this.renderer.DeleteTexture(this.texture);
    }
  };
  var C3Texture = class extends Texture {
    texture;
    renderer;
    constructor(image, renderer, page) {
      super(image);
      this.renderer = renderer;
      const options = {
        wrapX: toC3TextureWrap(page.uWrap),
        wrapY: toC3TextureWrap(page.vWrap),
        sampling: toC3Filter(page.minFilter),
        mipMap: toC3MipMap(page.minFilter)
      };
      this.texture = renderer.createDynamicTexture(image.width, image.height, options);
      this.renderer.updateTexture(image, this.texture, { premultiplyAlpha: !page.pma });
    }
    setFilters() {
    }
    setWraps() {
    }
    dispose() {
      this.renderer.deleteTexture(this.texture);
    }
  };
  function toC3TextureWrap(wrap) {
    if (wrap === 33071 /* ClampToEdge */) return "clamp-to-edge";
    else if (wrap === 33648 /* MirroredRepeat */) return "mirror-repeat";
    else if (wrap === 10497 /* Repeat */) return "repeat";
    else throw new Error(`Unknown texture wrap: ${wrap}`);
  }
  function toC3MipMap(filter) {
    switch (filter) {
      case 9987 /* MipMap */:
      case 9985 /* MipMapLinearNearest */:
      case 9986 /* MipMapNearestLinear */:
      case 9984 /* MipMapNearestNearest */:
        return true;
      case 9729 /* Linear */:
      case 9728 /* Nearest */:
        return false;
      default:
        throw new Error(`Unknown texture filter: ${filter}`);
    }
  }
  function toC3Filter(filter) {
    switch (filter) {
      case 9728 /* Nearest */:
      case 9984 /* MipMapNearestNearest */:
        return "nearest";
      case 9729 /* Linear */:
      case 9985 /* MipMapLinearNearest */:
      case 9986 /* MipMapNearestLinear */:
        return "bilinear";
      case 9987 /* MipMap */:
      case 9987 /* MipMapLinearLinear */:
        return "trilinear";
      default:
        throw new Error(`Unknown texture filter: ${filter}`);
    }
  }
  var BlendingModeSpineToC3 = {
    [0 /* Normal */]: "normal",
    [1 /* Additive */]: "additive",
    [2 /* Multiply */]: "multiply",
    [3 /* Screen */]: "screen"
  };

  // spine-construct3/spine-construct3-lib/src/AssetLoader.ts
  var AssetLoader = class _AssetLoader {
    async loadSkeletonEditor(sid, textureAtlas, scale = 1, instance) {
      const projectFile = instance.GetProject().GetProjectFileBySID(sid);
      if (!projectFile) return null;
      const blob = projectFile.GetBlob();
      const atlasLoader = new AtlasAttachmentLoader(textureAtlas);
      const isBinary = projectFile.GetName().endsWith(".skel");
      if (isBinary) {
        const skeletonFile2 = await blob.arrayBuffer();
        const skeletonLoader2 = new SkeletonBinary(atlasLoader);
        skeletonLoader2.scale = scale;
        return skeletonLoader2.readSkeletonData(skeletonFile2);
      }
      const skeletonFile = await blob.text();
      const skeletonLoader = new SkeletonJson(atlasLoader);
      skeletonLoader.scale = scale;
      return skeletonLoader.readSkeletonData(skeletonFile);
    }
    async loadAtlasEditor(sid, instance, renderer) {
      const projectFile = instance.GetProject().GetProjectFileBySID(sid);
      if (!projectFile) return null;
      const blob = projectFile.GetBlob();
      const content = await blob.text();
      const path = projectFile.GetPath();
      const basePath = path.substring(0, path.lastIndexOf("/") + 1);
      const textureAtlas = new TextureAtlas(content);
      await Promise.all(textureAtlas.pages.map(async (page) => {
        const texture = await this.loadSpineTextureEditor(basePath + page.name, page.pma, instance);
        if (texture) {
          const spineTexture = new C3TextureEditor(texture, renderer, page);
          page.setTexture(spineTexture);
        }
        return texture;
      }));
      return textureAtlas;
    }
    async loadSpineTextureEditor(pageName, pma = false, instance) {
      const projectFile = instance.GetProject().GetProjectFileByExportPath(pageName);
      if (!projectFile) {
        throw new Error(`An error occured while loading the texture: ${pageName}`);
      }
      const content = projectFile.GetBlob();
      return _AssetLoader.createImageBitmapFromBlob(content, pma);
    }
    async loadSkeletonRuntime(path, textureAtlas, scale = 1, instance) {
      const fullPath = await instance.assets.getProjectFileUrl(path);
      if (!fullPath) return null;
      const atlasLoader = new AtlasAttachmentLoader(textureAtlas);
      const isBinary = path.endsWith(".skel");
      if (isBinary) {
        const content2 = await instance.assets.fetchArrayBuffer(fullPath);
        if (!content2) return null;
        const skeletonLoader2 = new SkeletonBinary(atlasLoader);
        skeletonLoader2.scale = scale;
        return skeletonLoader2.readSkeletonData(content2);
      }
      const content = await instance.assets.fetchJson(fullPath);
      if (!content) return null;
      const skeletonLoader = new SkeletonJson(atlasLoader);
      skeletonLoader.scale = scale;
      return skeletonLoader.readSkeletonData(content);
    }
    async loadAtlasRuntime(path, instance, renderer) {
      const fullPath = await instance.assets.getProjectFileUrl(path);
      if (!fullPath) return null;
      const content = await instance.assets.fetchText(fullPath);
      if (!content) return null;
      const basePath = path.substring(0, path.lastIndexOf("/") + 1);
      const textureAtlas = new TextureAtlas(content);
      await Promise.all(textureAtlas.pages.map(async (page) => {
        const texture = await this.loadSpineTextureRuntime(basePath + page.name, page.pma, instance);
        if (texture) {
          const spineTexture = new C3Texture(texture, renderer, page);
          page.setTexture(spineTexture);
        }
        return texture;
      }));
      return textureAtlas;
    }
    async loadSpineTextureRuntime(pageName, pma = false, instance) {
      const fullPath = await instance.assets.getProjectFileUrl(pageName);
      if (!fullPath) return null;
      const content = await instance.assets.fetchBlob(fullPath);
      if (!content) return null;
      return _AssetLoader.createImageBitmapFromBlob(content, pma);
    }
    static async createImageBitmapFromBlob(blob, pma) {
      try {
        return createImageBitmap(blob, { premultiplyAlpha: pma ? "none" : "premultiply" });
      } catch (e) {
        console.error("Failed to create ImageBitmap from blob:", e);
        return null;
      }
    }
  };

  // spine-construct3/spine-construct3-lib/src/SpineBoundsProvider.ts
  var AABBRectangleBoundsProvider = class {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    calculateBounds() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    }
  };
  var SetupPoseBoundsProvider = class {
    /**
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(clipping = false) {
      this.clipping = clipping;
    }
    calculateBounds(gameObject) {
      if (!gameObject.skeleton) return { x: 0, y: 0, width: 0, height: 0 };
      const skeleton = new Skeleton(gameObject.skeleton.data);
      skeleton.setupPose();
      skeleton.updateWorldTransform(2 /* update */);
      const bounds = skeleton.getBoundsRect(this.clipping ? new SkeletonClipping() : void 0);
      return bounds.width === Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
    }
  };
  var SkinsAndAnimationBoundsProvider = class {
    /**
     * @param animation The animation to use for calculating the bounds. If null, the setup pose is used.
     * @param skins The skins to use for calculating the bounds. If empty, the default skin is used.
     * @param timeStep The time step to use for calculating the bounds. A smaller time step means more precision, but slower calculation.
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(animation, skins = [], timeStep = 0.05, clipping = false) {
      this.animation = animation;
      this.skins = skins;
      this.timeStep = timeStep;
      this.clipping = clipping;
    }
    calculateBounds(gameObject) {
      if (!gameObject.skeleton || !gameObject.state)
        return { x: 0, y: 0, width: 0, height: 0 };
      const animationState = new AnimationState(gameObject.state.data);
      const skeleton = new Skeleton(gameObject.skeleton.data);
      const clipper = this.clipping ? new SkeletonClipping() : void 0;
      const data = skeleton.data;
      if (this.skins.length > 0) {
        const customSkin = new Skin("custom-skin");
        for (const skinName of this.skins) {
          const skin = data.findSkin(skinName);
          if (skin == null) continue;
          customSkin.addSkin(skin);
        }
        skeleton.setSkin(customSkin);
      }
      skeleton.setupPose();
      const animation = this.animation != null ? data.findAnimation(this.animation) : null;
      if (animation == null) {
        skeleton.updateWorldTransform(2 /* update */);
        const bounds = skeleton.getBoundsRect(clipper);
        return bounds.width === Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
      } else {
        let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
        animationState.clearTracks();
        animationState.setAnimation(0, animation, false);
        const steps = Math.max(animation.duration / this.timeStep, 1);
        for (let i = 0; i < steps; i++) {
          const delta = i > 0 ? this.timeStep : 0;
          animationState.update(delta);
          animationState.apply(skeleton);
          skeleton.update(delta);
          skeleton.updateWorldTransform(2 /* update */);
          const bounds2 = skeleton.getBoundsRect(clipper);
          minX = Math.min(minX, bounds2.x);
          minY = Math.min(minY, bounds2.y);
          maxX = Math.max(maxX, bounds2.x + bounds2.width);
          maxY = Math.max(maxY, bounds2.y + bounds2.height);
        }
        const bounds = {
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
        return bounds.width === Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
      }
    }
  };
  return __toCommonJS(index_exports);
})();
if(!globalThis.spine)globalThis.spine=spine;
//# sourceMappingURL=spine-construct3-lib.js.map
