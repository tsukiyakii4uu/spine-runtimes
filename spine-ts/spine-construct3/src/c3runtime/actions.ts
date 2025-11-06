
import type { SDKInstanceClass } from "./instance.ts";

const C3 = globalThis.C3;

C3.Plugins.EsotericSoftware_SpineConstruct3.Acts =
{
	Alert (this: SDKInstanceClass) {
		alert(`Test property = ${this._getTestProperty()}`);
	},

	SetSkin (this: SDKInstanceClass, skinList: string) {
		this.setSkin(skinList.split(","));
	},

	FlipX (this: SDKInstanceClass, isFlippedX: boolean) {
		this.flipX(isFlippedX);
	},

	SetAnimation (this: SDKInstanceClass, track: number, animation: string, loop = false) {
		this.setAnimation(track, animation, loop);
	},

	AddAnimation (this: SDKInstanceClass, track: number, animation: string, loop = false, delay = 0) {
		this.addAnimation(track, animation, loop, delay);
	},

	Play (this: SDKInstanceClass) {
		this.play();
	},

	Stop (this: SDKInstanceClass) {
		this.stop();
	},

	SetEmptyAnimation (this: SDKInstanceClass, track: number, mixDuration: number) {
		this.setEmptyAnimation(track, mixDuration);
	},

	SetAttachment (this: SDKInstanceClass, slotName: string, attachmentName: string) {
		this.setAttachment(slotName, attachmentName === "" ? null : attachmentName);
	},

	CreateCustomSkin (this: SDKInstanceClass, skinName: string) {
		this.createCustomSkin(skinName);
	},

	AddCustomSkin (this: SDKInstanceClass, customSkinName: string, skinToAddName: string) {
		this.addCustomSkin(customSkinName, skinToAddName);
	},

	SetCustomSkin (this: SDKInstanceClass, skinName: string) {
		this.setCustomSkin(skinName);
	},

	SetAnimationSpeed (this: SDKInstanceClass, speed: number) {
		this.setAnimationSpeed(speed);
	},

	SetAnimationTime (this: SDKInstanceClass, units: 0 | 1, time: number, track: number) {
		this.setAnimationTime(units, time, track);
	},

	SetAnimationMix (this: SDKInstanceClass, fromName: string, toName: string, duration: number) {
		this.setAnimationMix(fromName, toName, duration);
	},

	SetPhysicsMode (this: SDKInstanceClass, mode: 0 | 1 | 2 | 3) {
		this.setPhysicsMode(mode);
	}

};
