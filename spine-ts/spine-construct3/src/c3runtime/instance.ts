import type { AnimationState, AnimationStateListener, AssetLoader, Bone, Event, NumberArrayLike, RegionAttachment, Skeleton, SkeletonRendererCore, Skin, Slot, TextureAtlas, } from "@esotericsoftware/spine-construct3-lib";

const C3 = globalThis.C3;
const spine = globalThis.spine;

spine.Skeleton.yDown = true;

class SpineC3Instance extends globalThis.ISDKWorldInstanceBase {
	propAtlas = "";
	propSkel = "";
	propLoaderScale = 1;
	propSkin: string[] = [];
	propAnimation?: string;
	propOffsetX = 0;
	propOffsetY = 0;
	propOffsetAngle = 0;
	propScaleX = 1;
	propScaleY = 1;
	propDebugSkeleton = false;

	isFlippedX = false;
	isPlaying = true;
	animationSpeed = 1.0;
	physicsMode = spine.Physics.update;
	customSkins: Record<string, Skin> = {};

	textureAtlas?: TextureAtlas;
	renderer?: IRenderer;
	atlasLoaded = false;
	atlasLoading = false;
	skeletonLoaded = false;
	skeletonLoading = false;
	skeleton?: Skeleton;
	state?: AnimationState;

	public triggeredEventTrack = -1;
	public triggeredEventAnimation = "";
	public triggeredEventName = "";
	public triggeredEventData?: Event;

	private assetLoader: AssetLoader;
	private skeletonRenderer: SkeletonRendererCore;

	private a = 0;
	private b = 0;
	private c = 0;
	private d = 0;

	private tempVertices = new Float32Array(4096);
	private tempColors = new Float32Array(4096);
	private verticesTemp = spine.Utils.newFloatArray(2 * 1024);
	private tempPoint = new spine.Vector2();

	private boneFollowers = new Map<string, { uid: number, offsetX: number, offsetY: number, offsetAngle: number }>();

	private dragHandles = new Set<{
		slot?: Slot,
		bone: Bone,
		dragging?: boolean,
		debug: boolean,
		radius: number,
		offsetX: number,
		offsetY: number,
	}>();
	private prevLeftClickDown = false;

	constructor () {
		super();

		const properties = this._getInitProperties();
		if (properties) {
			console.log(properties);
			this.propAtlas = properties[0] as string;
			this.propSkel = properties[1] as string;
			this.propLoaderScale = properties[2] as number;
			const skinProp = properties[3] as string;
			this.propSkin = skinProp === "" ? [] : skinProp.split(",");
			this.propAnimation = properties[4] as string;
			this.propDebugSkeleton = properties[5] as boolean;

			this.propOffsetX = properties[8] as number;
			this.propOffsetY = properties[9] as number;
			this.propOffsetAngle = properties[10] as number;
			this.propScaleX = properties[11] as number;
			this.propScaleY = properties[12] as number;
		}

		this.assetLoader = new spine.AssetLoader();
		this.skeletonRenderer = new spine.SkeletonRendererCore();

		this._setTicking(true);
	}

	/*
	 *  Update, render, draw
	 */

	public play () {
		this.isPlaying = true;
	}

	public stop () {
		this.isPlaying = false;
	}

	_tick (): void {
		const { renderer } = this;

		if (!renderer) return;

		if (!this.atlasLoaded) {
			this.loadAtlas();
			return;
		}

		if (!this.skeletonLoaded) {
			this.loadSkeleton();
			return;
		}

		if (!this.isPlaying) return;

		this.update(this.dt);
		this.runtime.sdk.updateRender();
	}

	private update (delta: number) {
		const { state, skeleton, animationSpeed, physicsMode } = this;

		if (!skeleton || !state) return;

		const adjustedDelta = delta * animationSpeed;
		state.update(adjustedDelta);
		skeleton.update(adjustedDelta);
		state.apply(skeleton);

		const cos = Math.cos(this.angle + this.propOffsetAngle);
		const sin = Math.sin(this.angle + this.propOffsetAngle);
		this.a = cos;
		this.b = sin;
		this.c = -sin;
		this.d = cos;

		skeleton.updateWorldTransform(physicsMode);

		this.updateHandles(skeleton);
		this.updateBoneFollowers();
	}

	_draw (renderer: IRenderer) {
		this.renderer ||= renderer;

		if (!this.isVisible) return;
		if (!this.isOnScreen) return;

		const { skeleton } = this;
		if (!skeleton) return;

		this.renderSkeleton(renderer, skeleton);
		this.renderDragHandles(renderer);
		this.renderDebugSkeleton(renderer, skeleton);
	}

	private renderSkeleton (renderer: IRenderer, skeleton: Skeleton) {
		let command = this.skeletonRenderer.render(skeleton);
		const inv255 = 1 / 255;
		while (command) {
			const { numVertices, positions, uvs, colors, indices, numIndices, blendMode } = command;

			const vertices = this.tempVertices.length < numVertices * 3
				? (this.tempVertices = new Float32Array(numVertices * 3))
				: this.tempVertices;

			const c3colors = this.tempColors.length < numVertices * 4
				? (this.tempColors = new Float32Array(numVertices * 4))
				: this.tempColors;

			for (let i = 0; i < numVertices; i++) {
				const srcIndex = i * 2;
				const { x, y } = this.skeletonToC3WorldCoordinates(positions[srcIndex], positions[srcIndex + 1]);

				const dstIndex = i * 3;
				vertices[dstIndex] = x;
				vertices[dstIndex + 1] = y;
				vertices[dstIndex + 2] = 0;

				// there's something wrong with the hand after adding the colors on spineboy portal animation
				const color = colors[i];
				const colorDst = i * 4;
				c3colors[colorDst] = (color >>> 16 & 0xFF) * inv255;
				c3colors[colorDst + 1] = (color >>> 8 & 0xFF) * inv255;
				c3colors[colorDst + 2] = (color & 0xFF) * inv255;
				c3colors[colorDst + 3] = (color >>> 24 & 0xFF) * inv255 * this.opacity;
			}

			renderer.setTexture(command.texture.texture);
			renderer.setBlendMode(spine.BlendingModeSpineToC3[blendMode]);
			renderer.drawMesh(
				vertices.subarray(0, numVertices * 3),
				uvs.subarray(0, numVertices * 2),
				indices.subarray(0, numIndices),
				c3colors.subarray(0, numVertices * 4),
			);

			command = command.next;
		}
	}

	private renderDragHandles (renderer: IRenderer) {
		for (const { bone, radius, debug } of this.dragHandles) {
			if (!debug) continue;
			const boneApplied = bone.applied;
			const { x: x1, y: y1 } = this.skeletonToC3WorldCoordinates(boneApplied.worldX, boneApplied.worldY);
			renderer.setColorFillMode();
			renderer.setColor([1, 0, 0, .2]);
			renderer.convexPoly(this.circle(x1, y1, radius));
		}
	}

	private renderDebugSkeleton (renderer: IRenderer, skeleton: Skeleton) {
		if (!this.propDebugSkeleton) return;

		const bones = skeleton.bones;
		for (let i = 0, n = bones.length; i < n; i++) {
			const bone = bones[i];
			if (!bone.parent) continue;
			const boneApplied = bone.applied;
			const { x: x1, y: y1 } = this.skeletonToC3WorldCoordinates(boneApplied.worldX, boneApplied.worldY);
			const x2 = bone.data.length * boneApplied.a + x1;
			const y2 = bone.data.length * boneApplied.c + y1;

			renderer.setColor([1, 0, 0, 1]);
			renderer.setColorFillMode();

			const t = this.tempPoint.set(y2 - y1, x1 - x2);
			t.normalize();
			const width = 1 * 0.5;
			const tx = t.x * width;
			const ty = t.y * width;
			renderer.convexPoly([
				x1 + tx, y1 + ty,
				x1 - tx, y1 - ty,
				x2 + tx, y2 + ty,
				x2 - tx, y2 - ty,
				x2 + tx, y2 + ty,
				x1 - tx, y1 - ty,
			]);

			renderer.setColor([0, 1, 0, 1]);
			renderer.convexPoly(this.circle(x1, y1, 2));
		}

		// debug bounds
		renderer.setAlphaBlendMode();
		renderer.setColorFillMode();
		renderer.setColorRgba(0.25, 0, 0, 0.25);
		renderer.lineQuad(this.getBoundingQuad(false));
		renderer.line(this.x, this.y, this.x + this.propOffsetX, this.y + this.propOffsetY);
	}

	private circle (x: number, y: number, radius: number) {
		let segments = Math.max(1, (6 * spine.MathUtils.cbrt(radius)) | 0);
		if (segments <= 0) throw new Error("segments must be > 0.");
		const angle = 2 * spine.MathUtils.PI / segments;
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);
		let cx = radius, cy = 0;
		segments--;
		const poly = [];
		for (let i = 0; i < segments; i++) {
			poly.push(x, y);
			poly.push(x + cx, y + cy);
			const temp = cx;
			cx = cos * cx - sin * cy;
			cy = sin * temp + cos * cy;
			poly.push(x + cx, y + cy);
		}
		poly.push(x, y, x + cx, y + cy);
		cx = radius;
		cy = 0;
		poly.push(x + cx, y + cy);
		return poly;
	}

	/**********/


	/*
	 *  Drag handles
	 */

	public addDragHandle (type: 0 | 1, name: string, radius = 10, debug = false) {
		if (type === 0) {
			const bone = this.getBone(name);
			if (!bone) return;
			this.dragHandles.add({ bone, debug, radius, offsetX: 0, offsetY: 0 });
		} else {
			const slot = this.getSlot(name);
			if (!slot) return;
			this.dragHandles.add({ slot, bone: slot.bone, debug, radius, offsetX: 0, offsetY: 0 });
		}
	}

	public removeDragHandle (type: 0 | 1, name: string) {
		if (type === 0) {
			const bone = this.getBone(name);
			if (!bone) return;

			for (const handle of this.dragHandles) {
				if (handle.bone === bone && !handle.slot) {
					this.dragHandles.delete(handle);
					return;
				}
			}
		} else {
			const slot = this.getSlot(name);
			if (!slot) return;

			for (const handle of this.dragHandles) {
				if (handle.slot === slot) {
					this.dragHandles.delete(handle);
					return;
				}
			}
		}
	}

	private updateHandles (skeleton: Skeleton) {
		if (this.dragHandles.size === 0) return;

		// accessing mouse without having a mouse object will throw an error
		let mouse: IMouseObjectType;
		try {
			mouse = this.runtime.mouse;
		} catch (_) {
			return;
		}

		const isLeftClickDown = mouse.isMouseButtonDown(0);
		if (this.dragHandles.size <= 0) {
			this.prevLeftClickDown = isLeftClickDown;
			return;
		}

		if (!isLeftClickDown) {
			this.prevLeftClickDown = false;
			for (const handleObject of this.dragHandles) handleObject.dragging = false;
			return;
		}

		const [mx, my] = mouse.getMousePosition();
		for (const handleObject of this.dragHandles) {
			const bone = handleObject.bone;
			const boneApplied = bone.applied;

			if (handleObject.dragging) {
				if (bone.parent) {
					const { x, y } = this.c3WorldCoordinatesToBone(mx - handleObject.offsetX, my - handleObject.offsetY, bone);
					boneApplied.x = x;
					boneApplied.y = y;
				} else {
					const { x, y } = this.c3WorldCoordinatesToSkeleton(mx - handleObject.offsetX, my - handleObject.offsetY);
					boneApplied.x = x / skeleton.scaleX;
					boneApplied.y = -y / skeleton.scaleY * spine.Skeleton.yDir;
				}
			} else if (!this.prevLeftClickDown) {
				const { x, y } = this.c3WorldCoordinatesToSkeleton(mx, my);
				const inside = handleObject.slot
					? this.isInsideSlot(x, y, handleObject.slot, true)
					: this.inRadius(x, y, boneApplied.worldX, boneApplied.worldY, handleObject.radius);

				if (inside) {
					handleObject.dragging = true;
					handleObject.offsetX = x - boneApplied.worldX;
					handleObject.offsetY = y - boneApplied.worldY;
				}
			}
		}

		this.prevLeftClickDown = true;
	}

	public isInsideSlot (x: number, y: number, slotName: string | Slot, skeletonCoordinate = false) {
		const slot = this.getSlot(slotName);
		if (!slot || !slot.bone.active) return false;

		const attachment = slot.applied.attachment;
		if (!(attachment instanceof spine.RegionAttachment || attachment instanceof spine.MeshAttachment)) return false;

		const vertices = this.verticesTemp;
		let hullLength = 8;

		if (attachment instanceof spine.RegionAttachment) {
			const regionAttachment = <RegionAttachment>attachment;
			regionAttachment.computeWorldVertices(slot, vertices, 0, 2);
		} else if (attachment instanceof spine.MeshAttachment) {
			attachment.computeWorldVertices(this.skeleton as Skeleton, slot, 0, attachment.worldVerticesLength, vertices, 0, 2);
			hullLength = attachment.hullLength;
		}

		if (skeletonCoordinate) return this.isPointInPolygon(vertices, hullLength, x, y);

		const coords = this.c3WorldCoordinatesToSkeleton(x, y);
		return this.isPointInPolygon(vertices, hullLength, coords.x, coords.y);
	}

	private isPointInPolygon (vertices: NumberArrayLike, hullLength: number, px: number, py: number) {
		if (hullLength < 6) {
			throw new Error("A polygon must have at least 3 vertices (6 numbers in the array). ");
		}

		let isInside = false;

		for (let i = 0, j = hullLength - 2; i < hullLength; i += 2) {
			const xi = vertices[i], yi = vertices[i + 1];
			const xj = vertices[j], yj = vertices[j + 1];

			const intersects = ((yi > py) !== (yj > py)) &&
				(px < ((xj - xi) * (py - yi)) / (yj - yi) + xi);

			if (intersects) isInside = !isInside;

			j = i;
		}

		return isInside;
	}

	private inRadius (x1: number, y1: number, x2: number, y2: number, radius: number) {
		const dx = x1 - x2;
		const dy = y1 - y2;
		const distanceSquared = dx * dx + dy * dy;
		return distanceSquared <= radius * radius;
	}

	/**********/

	/*
	*  C3 Internals
	*/

	_saveToJson () {
		return {
			// data to be saved for savegames
		};
	}

	_loadFromJson (o: JSONValue) {
		// load state for savegames
	}

	_release () {
		super._release();
		this.assetLoader.releaseInstanceResources(this.propSkel, this.propAtlas, this.propLoaderScale);
		this.textureAtlas = undefined;
		this.renderer = undefined;
		this.skeleton = undefined;
		this.state = undefined;
	}

	/**********/

	/*
	*  Spine Internals
	*/

	private async loadAtlas () {
		if (this.atlasLoading || !this.renderer) return;
		this.atlasLoading = true;

		const textureAtlas = await this.assetLoader.loadAtlasRuntime(this.propAtlas, this.plugin.runtime, this.renderer);
		if (!textureAtlas) return;

		this.textureAtlas = textureAtlas;
		this.atlasLoaded = true;
	}

	private async loadSkeleton () {
		if (this.skeletonLoading || !this.atlasLoaded) return;
		this.skeletonLoading = true;

		const propValue = this.propSkel;

		if (this.atlasLoaded && this.textureAtlas) {
			const skeletonData = await this.assetLoader.loadSkeletonRuntime(propValue, this.textureAtlas, this.propLoaderScale, this.plugin.runtime);
			if (!skeletonData) return;

			this.skeleton = new spine.Skeleton(skeletonData);
			const animationStateData = new spine.AnimationStateData(skeletonData);
			this.state = new spine.AnimationState(animationStateData);

			if (this.propAnimation) {
				this.setAnimation(0, this.propAnimation, true);
			}

			this._setSkin();

			this.update(0);

			this.skeleton.scaleX = this.isFlippedX ? -this.propScaleX : this.propScaleX;
			this.skeleton.scaleY = this.propScaleY;

			this.skeletonLoaded = true;
			this._trigger(C3.Plugins.EsotericSoftware_SpineConstruct3.Cnds.OnSkeletonLoaded);
		}
	}
	/**********/

	/*
	*  Animations
	*/

	public setAnimation (track: number, animation: string, loop = false) {
		const trackEntry = this.state?.setAnimation(track, animation, loop);
		if (!trackEntry) return;
		trackEntry.listener = this.makeTrackListener(track, animation);
	}

	public addAnimation (track: number, animation: string, loop = false, delay = 0) {
		const trackEntry = this.state?.addAnimation(track, animation, loop, delay);
		if (!trackEntry) return;
		trackEntry.listener = this.makeTrackListener(track, animation);
	}

	public setEmptyAnimation (track: number, mixDuration = 0) {
		this.state?.setEmptyAnimation(track, mixDuration);
	}

	public getCurrentAnimation (trackIndex: number): string {
		if (!this.skeleton) return "";

		const { state } = this;
		if (!state) return "";

		const track = state.tracks[trackIndex];
		if (!track || !track.animation) return "";

		return track.animation.name;
	}

	public setAnimationSpeed (speed: number) {
		this.animationSpeed = speed;
	}

	public setAnimationTime (units: 0 | 1, time: number, track: number) {
		if (!this.state) return;

		const trackEntry = this.state.tracks[track];
		if (!trackEntry) return;

		if (units === 0) {
			if (time < trackEntry.animationStart || time > trackEntry.animationEnd) {
				console.warn(`[Spine] Animation time ${time} is out of bounds [${trackEntry.animationStart}, ${trackEntry.animationEnd}]`);
				return;
			}
			trackEntry.trackTime = time;
		} else {
			if (time < 0 || time > 1) {
				console.warn(`[Spine] Animation time ratio ${time} is out of bounds [0, 1]`);
				return;
			}
			trackEntry.trackTime = time * (trackEntry.animationEnd - trackEntry.animationStart);
		}
	}

	public setAnimationMix (fromName: string, toName: string, duration: number) {
		const stateData = this.state?.data;
		if (!stateData) return;

		try {
			stateData.setMix(fromName, toName, duration);
		} catch (error) {
			console.error('[Spine] setAnimationMix error:', error);
		}
	}

	public setTrackAlpha (alpha: number, trackIndex: number) {
		const { state } = this;
		if (!state) {
			console.warn('[Spine] setAlpha: no state');
			return;
		}

		const track = state.tracks[trackIndex];
		if (!track) {
			console.warn(`[Spine] setAlpha: track ${trackIndex} not found`);
			return;
		}

		track.alpha = spine.MathUtils.clamp(0, 1, alpha);
	}

	public setTrackMixBlend (mixBlend: 0 | 1 | 2 | 3, trackIndex: number) {
		const { state } = this;
		if (!state) {
			console.warn('[Spine] setMixBlend: no state');
			return;
		}

		const track = state.tracks[trackIndex];
		if (!track) {
			console.warn(`[Spine] setMixBlend: track ${trackIndex} not found`);
			return;
		}

		switch (mixBlend) {
			case 0: track.mixBlend = spine.MixBlend.setup; break;
			case 1: track.mixBlend = spine.MixBlend.first; break;
			case 2: track.mixBlend = spine.MixBlend.replace; break;
			case 3: track.mixBlend = spine.MixBlend.add; break;
			default: console.warn('[Spine] Invalid mix blend mode:', mixBlend);
		}
	}

	private triggetAnimationEvent (eventName: string, track: number, animation: string, event?: Event) {
		this.triggeredEventTrack = track;
		this.triggeredEventAnimation = animation;
		this.triggeredEventName = eventName;
		this.triggeredEventData = event;
		this._trigger(C3.Plugins.EsotericSoftware_SpineConstruct3.Cnds.OnAnimationEvent);
	}

	private makeTrackListener = (track: number, animation: string): AnimationStateListener => ({
		start: () => this.triggetAnimationEvent("start", track, animation),
		dispose: () => this.triggetAnimationEvent("dispose", track, animation),
		event: (_, event) => this.triggetAnimationEvent("event", track, animation, event),
		interrupt: () => this.triggetAnimationEvent("interrupt", track, animation),
		end: () => this.triggetAnimationEvent("end", track, animation),
		complete: () => this.triggetAnimationEvent("complete", track, animation),
	})

	/**********/

	/*
	*  Skins
	*/

	public setSkin (skins: string[]) {
		this.propSkin = skins;
		this._setSkin();
	}

	public getCurrentSkin (): string {
		if (!this.skeleton) return "";

		const skin = this.skeleton.skin;
		if (!skin) return "";

		return skin.name;
	}

	private _setSkin () {
		const { skeleton } = this;
		if (!skeleton) return;

		const skins = this.propSkin;

		if (skins.length === 0) {
			skeleton.skin = null;
		} else if (skins.length === 1) {
			const skinName = skins[0];
			const skin = skeleton.data.findSkin(skinName);
			if (!skin) {
				// TODO: signal error
				return;
			}
			skeleton.setSkin(skins[0]);
		} else {
			const customSkin = new spine.Skin(skins.join(","));
			for (const s of skins) {
				const skin = skeleton.data.findSkin(s)
				if (!skin) {
					// TODO: signal error
					return;
				}
				customSkin.addSkin(skin);
			}
			skeleton.setSkin(customSkin);
		}

		skeleton.setupPose();
		this.update(0);
	}

	public createCustomSkin (skinName: string) {
		if (!this.skeleton) return;

		if (this.customSkins[skinName])
			this.customSkins[skinName].clear();
		else
			this.customSkins[skinName] = new spine.Skin(skinName);
	}

	public addCustomSkin (customSkinName: string, skinToAddName: string) {
		if (!this.skeleton) return;

		if (!this.customSkins[customSkinName]) {
			console.warn(`[Spine] Custom skin "${customSkinName}" does not exist. Create it first.`);
			return;
		}

		const skinToAdd = this.skeleton.data.findSkin(skinToAddName);
		if (!skinToAdd) {
			console.warn(`[Spine] Skin "${skinToAddName}" not found in skeleton data.`);
			return;
		}

		this.customSkins[customSkinName].addSkin(skinToAdd);
	}

	public setCustomSkin (skinName: string) {
		if (!this.skeleton) return;

		if (!this.customSkins[skinName]) {
			console.warn(`[Spine] Custom skin "${skinName}" does not exist.`);
			return;
		}

		this.skeleton.setSkin(this.customSkins[skinName]);
		this.skeleton.setupPose();
	}

	/**********/

	/*
	*  Slot, skeleton color
	*/

	public setSkeletonColor (color: string) {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] setSkeletonColor: no skeleton');
			return;
		}

		skeleton.color.setFromString(color);
	}

	public setSlotColor (slotName: string, color: string) {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] setSlotColor: no skeleton');
			return;
		}

		const slot = skeleton.findSlot(slotName);
		if (!slot) {
			console.warn(`[Spine] setSlotColor: slot not found: ${slotName}`);
			return;
		}

		slot.pose.color.setFromString(color);
	}

	public resetSlotColors (slotName: string = "") {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] resetSlotColors: no skeleton');
			return;
		}

		if (slotName === "") {
			for (const slot of skeleton.slots)
				slot.pose.color.setFromColor(slot.data.setup.color);
		} else {
			const slot = skeleton.findSlot(slotName);
			if (!slot) {
				console.warn(`[Spine] resetSlotColors: slot not found: ${slotName}`);
				return;
			}
			slot.pose.color.setFromColor(slot.data.setup.color);
		}
	}

	/**********/

	/*
	*  Bone follower
	*/

	public attachInstanceToBone (uid: number, boneName: string, offsetX = 0, offsetY = 0, offsetAngle = 0) {
		if (!this.skeleton) return;

		const bone = this.skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] attachInstanceToBone: bone not found: ${boneName}`);
			return;
		}

		this.boneFollowers.set(boneName, { uid, offsetX, offsetY, offsetAngle });
	}

	public detachInstanceFromBone (boneName: string) {
		this.boneFollowers.delete(boneName);
	}

	private updateBoneFollowers () {
		if (this.boneFollowers.size === 0) return;

		for (const [boneName, follower] of this.boneFollowers) {
			const bone = this.skeleton?.findBone(boneName);
			if (!bone) continue;

			const instance = this.runtime.getInstanceByUid(follower.uid) as IWorldInstance;
			if (!instance) continue;

			const { x, y } = this.boneToC3WorldCoordinates(bone);
			const boneRotation = bone.applied.getWorldRotationX();

			// Apply rotation to offset
			const rotationRadians = boneRotation * Math.PI / 180;
			const cos = Math.cos(rotationRadians);
			const sin = Math.sin(rotationRadians);
			const rotatedOffsetX = follower.offsetX * cos - follower.offsetY * sin;
			const rotatedOffsetY = follower.offsetX * sin + follower.offsetY * cos;

			instance.x = x + rotatedOffsetX;
			instance.y = y + rotatedOffsetY;
			instance.angleDegrees = boneRotation + follower.offsetAngle;
		}
	}

	/**********/

	/*
	*  Coordinates transformation
	*/

	private c3WorldCoordinatesToSkeleton (x: number, y: number) {
		const tx = x - (this.x + this.propOffsetX);
		const ty = y - (this.y + this.propOffsetY);
		const { a: ta, b: tb, c: tc, d: td, tempPoint } = this;
		const delta = ta * td - tb * tc;
		tempPoint.x = (td * tx - tc * ty) / delta;
		tempPoint.y = (ta * ty - tb * tx) / delta;
		return this.tempPoint;
	}

	private c3WorldCoordinatesToBone (x: number, y: number, bone: Bone) {
		const point = this.c3WorldCoordinatesToSkeleton(x, y);
		if (bone.parent)
			return bone.parent.applied.worldToLocal(point);
		return bone.applied.worldToLocal(point);
	}

	private skeletonToC3WorldCoordinates (skeletonX: number, skeletonY: number) {
		const { a, b, c, d, tempPoint } = this;
		tempPoint.x = a * skeletonX + c * skeletonY + this.x + this.propOffsetX;
		tempPoint.y = b * skeletonX + d * skeletonY + this.y + this.propOffsetY;
		return tempPoint;
	}

	private boneToC3WorldCoordinates (bone: Bone) {
		const { applied } = bone;
		return this.skeletonToC3WorldCoordinates(applied.worldX, applied.worldY);
	}

	/**********/

	/*
	*  Bone
	*/

	public getBoneX (boneName: string): number {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] getBoneX: no skeleton');
			return 0;
		}

		const bone = skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] getBoneX: bone not found: ${boneName}`);
			return 0;
		}

		const x = bone.applied.worldX;
		const y = bone.applied.worldY;
		const offsetX = this.x + this.propOffsetX;
		const offsetAngle = this.angle + this.propOffsetAngle;

		if (offsetAngle) {
			const cos = Math.cos(offsetAngle);
			const sin = Math.sin(offsetAngle);
			return x * cos - y * sin + offsetX;
		}
		return x + offsetX;
	}

	public getBoneY (boneName: string): number {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] getBoneY: no skeleton');
			return 0;
		}

		const bone = skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] getBoneY: bone not found: ${boneName}`);
			return 0;
		}

		const x = bone.applied.worldX;
		const y = bone.applied.worldY;
		const offsetY = this.y + this.propOffsetY;
		const offsetAngle = this.angle + this.propOffsetAngle;

		if (offsetAngle) {
			const cos = Math.cos(offsetAngle);
			const sin = Math.sin(offsetAngle);
			return x * sin + y * cos + offsetY;
		}
		return y + offsetY;
	}

	public getBoneRotation (boneName: string): number {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] getBoneRotation: no skeleton');
			return 0;
		}

		const bone = skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] getBoneRotation: bone not found: ${boneName}`);
			return 0;
		}

		const boneRotation = bone.applied.getWorldRotationX();
		const offsetAngle = this.angle + this.propOffsetAngle;

		return boneRotation + (offsetAngle * 180 / Math.PI);
	}

	public getBoneWorldX (boneName: string): number {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] getBoneWorldX: no skeleton');
			return 0;
		}

		const bone = skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] getBoneWorldX: bone not found: ${boneName}`);
			return 0;
		}

		const point = this.boneToC3WorldCoordinates(bone);
		return point.x;
	}

	public getBoneWorldY (boneName: string): number {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] getBoneWorldY: no skeleton');
			return 0;
		}

		const bone = skeleton.findBone(boneName);
		if (!bone) {
			console.warn(`[Spine] getBoneWorldY: bone not found: ${boneName}`);
			return 0;
		}

		const point = this.boneToC3WorldCoordinates(bone);
		return point.y;
	}

	public updateBonePose (c3X: number, c3Y: number, boneName: string) {
		const bone = this.getBone(boneName);
		if (!bone) return;

		const { x, y } = this.c3WorldCoordinatesToBone(c3X, c3Y, bone);
		bone.applied.x = x;
		bone.applied.y = y;
	}

	private getBone (boneName: string | Bone) {
		if (boneName instanceof spine.Bone) return boneName;

		const { skeleton } = this;
		if (!skeleton) return;

		return skeleton.findBone(boneName);
	}

	/**********/


	/*
	*  Slot, attachments
	*/

	private getSlot (slotName: string | Slot) {
		if (slotName instanceof spine.Slot) return slotName;

		const { skeleton } = this;
		if (!skeleton) return;

		return skeleton.findSlot(slotName);
	}

	public setAttachment (slotName: string, attachmentName: string | null) {
		this.skeleton?.setAttachment(slotName, attachmentName);
	}

	/**********/

	/*
	*  Skeleton
	*/

	public flipX (isFlippedX: boolean) {
		this.isFlippedX = isFlippedX;

		const { skeleton } = this;
		if (skeleton) {
			skeleton.scaleX = isFlippedX ? -this.propScaleX : this.propScaleX;
		}
	}

	public setPhysicsMode (mode: 0 | 1 | 2 | 3) {
		switch (mode) {
			case 0: this.physicsMode = spine.Physics.none; break;
			case 1: this.physicsMode = spine.Physics.reset; break;
			case 2: this.physicsMode = spine.Physics.update; break;
			case 3: this.physicsMode = spine.Physics.pose; break;
			default: console.warn('[Spine] Invalid physics mode:', mode);
		}
	}

	/**********/

};

C3.Plugins.EsotericSoftware_SpineConstruct3.Instance = SpineC3Instance;

export type { SpineC3Instance as SDKInstanceClass };
