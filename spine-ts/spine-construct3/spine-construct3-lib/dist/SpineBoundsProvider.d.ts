import { AnimationState, Skeleton } from "@esotericsoftware/spine-core";
interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface GameObject {
    skeleton?: Skeleton;
    state?: AnimationState;
}
export interface SpineBoundsProvider {
    /** Returns the bounding box for the skeleton, in skeleton space. */
    calculateBounds(gameObject: GameObject): Rectangle;
}
export declare class AABBRectangleBoundsProvider implements SpineBoundsProvider {
    private x;
    private y;
    private width;
    private height;
    constructor(x: number, y: number, width: number, height: number);
    calculateBounds(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export declare class SetupPoseBoundsProvider implements SpineBoundsProvider {
    private clipping;
    /**
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(clipping?: boolean);
    calculateBounds(gameObject: GameObject): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export declare class SkinsAndAnimationBoundsProvider implements SpineBoundsProvider {
    private animation?;
    private skins;
    private timeStep;
    private clipping;
    /**
     * @param animation The animation to use for calculating the bounds. If null, the setup pose is used.
     * @param skins The skins to use for calculating the bounds. If empty, the default skin is used.
     * @param timeStep The time step to use for calculating the bounds. A smaller time step means more precision, but slower calculation.
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(animation?: string | undefined, skins?: string[], timeStep?: number, clipping?: boolean);
    calculateBounds(gameObject: GameObject): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
export {};
