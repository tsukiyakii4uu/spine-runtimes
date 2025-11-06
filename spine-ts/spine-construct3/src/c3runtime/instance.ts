import type { AnimationState, AnimationStateListener, AssetLoader, Event, Skeleton, SkeletonRendererCore, Skin, TextureAtlas, } from "@esotericsoftware/spine-construct3-lib";

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
	propFlipX = false;
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

	private assetLoader: AssetLoader;
	private skeletonRenderer: SkeletonRendererCore;

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

			this.propOffsetX = properties[7] as number;
			this.propOffsetY = properties[8] as number;
			this.propOffsetAngle = properties[9] as number;
			this.propScaleX = properties[10] as number;
			this.propScaleY = properties[11] as number;
		}

		this.assetLoader = new spine.AssetLoader();
		this.skeletonRenderer = new spine.SkeletonRendererCore();

		this._setTicking(true);
	}

	_tick (): void {
		const { renderer } = this;

		if (!renderer) return;

		if (!this.atlasLoaded) {
			this._loadAtlas();
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

	private async loadSkeleton () {
		if (this.skeletonLoading) return;
		if (!this.atlasLoaded) return;
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

			this.skeleton.scaleX = this.propFlipX ? -this.propScaleX : this.propScaleX;
			this.skeleton.scaleY = this.propScaleY;

			this.skeletonLoaded = true;
			this._trigger(C3.Plugins.EsotericSoftware_SpineConstruct3.Cnds.OnSkeletonLoaded);
		}
	}

	public triggeredEventTrack = -1;
	public triggeredEventAnimation = "";
	public triggeredEventName = "";
	public triggeredEventData?: Event;

	private triggetAnimationEvent (eventName: string, track: number, animation: string, event?: Event) {
		this.triggeredEventTrack = track;
		this.triggeredEventAnimation = animation;
		this.triggeredEventName = eventName;
		this.triggeredEventData = event;
		this._trigger(C3.Plugins.EsotericSoftware_SpineConstruct3.Cnds.OnAnimationEvent);
	}

	private makeTrackListener = (track: number, animation: string): AnimationStateListener => ({
		start: () => {
			this.triggetAnimationEvent("start", track, animation);
		},
		dispose: () => {
			this.triggetAnimationEvent("dispose", track, animation);
		},
		event: (_, event) => {
			this.triggetAnimationEvent("event", track, animation, event);
		},
		interrupt: () => {
			this.triggetAnimationEvent("interrupt", track, animation);
		},
		end: () => {
			this.triggetAnimationEvent("end", track, animation);
		},
		complete: () => {
			this.triggetAnimationEvent("complete", track, animation);
		},
	})

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

	public setSkin (skins: string[]) {
		this.propSkin = skins;
		this._setSkin();
	}

	public flipX (isFlippedX: boolean) {
		this.propFlipX = isFlippedX;
		if (this.skeleton) {
			this.skeleton.scaleX = isFlippedX ? -this.propScaleX : this.propScaleX;
		}
	}

	public play () {
		this.isPlaying = true;
	}

	public stop () {
		this.isPlaying = false;
	}

	public setEmptyAnimation (track: number, mixDuration = 0) {
		this.state?.setEmptyAnimation(track, mixDuration);
	}

	public setAttachment (slotName: string, attachmentName: string | null) {
		this.skeleton?.setAttachment(slotName, attachmentName);
	}

	public createCustomSkin (skinName: string) {
		if (!this.skeleton) return;

		if (this.customSkins[skinName]) {
			this.customSkins[skinName].clear();
		} else {
			this.customSkins[skinName] = new spine.Skin(skinName);
		}
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

	public setPhysicsMode (mode: 0 | 1 | 2 | 3) {
		switch (mode) {
			case 0: this.physicsMode = spine.Physics.none; break;
			case 1: this.physicsMode = spine.Physics.reset; break;
			case 2: this.physicsMode = spine.Physics.update; break;
			case 3: this.physicsMode = spine.Physics.pose; break;
			default: console.warn('[Spine] Invalid physics mode:', mode);
		}
	}

	public setSkeletonColor (color: string) {
		const { skeleton } = this;
		if (!skeleton) {
			console.warn('[Spine] setSkeletonColor: no skeleton');
			return;
		}

		skeleton.color.setFromString(color);
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

	private update (delta: number) {
		const { state, skeleton, animationSpeed, physicsMode } = this;

		if (!skeleton || !state) return;

		const adjustedDelta = delta * animationSpeed;
		state.update(adjustedDelta);
		skeleton.update(adjustedDelta);
		state.apply(skeleton);
		skeleton.updateWorldTransform(physicsMode);
	}

	private async _loadAtlas () {
		if (this.atlasLoading || !this.renderer) return;
		this.atlasLoading = true;

		const textureAtlas = await this.assetLoader.loadAtlasRuntime(this.propAtlas, this.plugin.runtime, this.renderer);
		if (!textureAtlas) return;

		this.textureAtlas = textureAtlas;
		this.atlasLoaded = true;
	}

	_release () {
		super._release();
	}

	private tempVertices = new Float32Array(4096);
	private tempColors = new Float32Array(4096);
	_draw (renderer: IRenderer) {
		this.renderer ||= renderer;

		if (!this.isVisible) return;
		if (!this.isOnScreen) return;
		if (!this.skeleton) return;

		let command = this.skeletonRenderer.render(this.skeleton);
		const inv255 = 1 / 255;
		const offsetX = this.x + this.propOffsetX;
		const offsetY = this.y + this.propOffsetY;
		const offsetAngle = this.angle + this.propOffsetAngle;

		let cos = 0;
		let sin = 0;
		if (offsetAngle) {
			cos = Math.cos(offsetAngle);
			sin = Math.sin(offsetAngle);
		}
		while (command) {
			const { numVertices, positions, uvs, colors, indices, numIndices, blendMode } = command;

			const vertices = this.tempVertices;
			const c3colors = this.tempColors;
			for (let i = 0; i < numVertices; i++) {
				const srcIndex = i * 2;
				const dstIndex = i * 3;
				const x = positions[srcIndex];
				const y = positions[srcIndex + 1];

				if (offsetAngle) {
					vertices[dstIndex] = x * cos - y * sin + offsetX;
					vertices[dstIndex + 1] = x * sin + y * cos + offsetY;
				} else {
					vertices[dstIndex] = x + offsetX;
					vertices[dstIndex + 1] = y + offsetY;
				}
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

	_saveToJson () {
		return {
			// data to be saved for savegames
		};
	}

	_loadFromJson (o: JSONValue) {
		// load state for savegames
	}

	_setTestProperty (n: number) {
		// this._testProperty = n;
	}

	_getTestProperty () {
		// return this._testProperty;
	}
};

C3.Plugins.EsotericSoftware_SpineConstruct3.Instance = SpineC3Instance;

export type { SpineC3Instance as SDKInstanceClass };
