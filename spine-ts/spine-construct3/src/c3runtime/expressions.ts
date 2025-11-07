
import type { SDKInstanceClass } from "./instance.ts";

const C3 = globalThis.C3;

C3.Plugins.EsotericSoftware_SpineConstruct3.Exps =
{
	Double (this: SDKInstanceClass, num: number) {
		return num * 2;
	},

	SlotAttachment (this: SDKInstanceClass, slotName: string) {
		if (!this.skeleton) return "";
		const slot = this.skeleton.findSlot(slotName);
		if (!slot) return "";
		const attachment = slot.pose.getAttachment();
		return attachment ? attachment.name : "";
	},

	BoneX (this: SDKInstanceClass, boneName: string) {
		return this.getBoneX(boneName);
	},

	BoneY (this: SDKInstanceClass, boneName: string) {
		return this.getBoneY(boneName);
	},

	BoneRotation (this: SDKInstanceClass, boneName: string) {
		return this.getBoneRotation(boneName);
	},

	CurrentSkin (this: SDKInstanceClass) {
		return this.getCurrentSkin();
	},

	CurrentAnimation (this: SDKInstanceClass, trackIndex: number) {
		return this.getCurrentAnimation(trackIndex);
	}
};

