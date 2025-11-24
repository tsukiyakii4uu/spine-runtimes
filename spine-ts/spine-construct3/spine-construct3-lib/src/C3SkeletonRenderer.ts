/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated April 5, 2025. Replaces all prior versions.
 *
 * Copyright (c) 2013-2025, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software
 * or otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THE SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/

import { type BlendMode, type Bone, MathUtils, type Skeleton, SkeletonRendererCore, Vector2 } from "@esotericsoftware/spine-core";
import type { C3Matrix } from "./C3Matrix";
import { BlendingModeSpineToC3, type C3TextureEditor, type C3TextureRuntime } from "./C3Texture";

type C3Renderer = IRenderer | SDK.Gfx.IWebGLRenderer;
type C3Texture = C3TextureRuntime | C3TextureEditor;
type C3Quad = DOMQuad | SDK.Quad;

abstract class C3SkeletonRenderer<
	Renderer extends C3Renderer,
	Texture extends C3Texture,
> extends SkeletonRendererCore {

	private tempVertices = new Float32Array(4096);
	private tempColors = new Float32Array(4096);
	private tempPoint = new Vector2();
	private inv255 = 1 / 255;

	constructor (
		protected renderer: Renderer,
		private skeleton: Skeleton,
		protected matrix: C3Matrix,
	) {
		super();
	}

	draw (opacity = 1) {
		const { skeleton, matrix, inv255 } = this;

		let command = this.render(skeleton);
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
				const { x, y } = matrix.skeletonToGame(positions[srcIndex], positions[srcIndex + 1]);

				const dstIndex = i * 3;
				vertices[dstIndex] = x;
				vertices[dstIndex + 1] = y;
				vertices[dstIndex + 2] = 0;

				const color = colors[i];
				const colorDst = i * 4;
				const alpha = (color >>> 24 & 0xFF) * inv255 * opacity;
				const alphaInverse = inv255 * alpha;
				c3colors[colorDst] = (color >>> 16 & 0xFF) * alphaInverse;
				c3colors[colorDst + 1] = (color >>> 8 & 0xFF) * alphaInverse;
				c3colors[colorDst + 2] = (color & 0xFF) * alphaInverse;
				c3colors[colorDst + 3] = alpha;
			}

			this.renderSkeleton(
				vertices.subarray(0, numVertices * 3),
				uvs.subarray(0, numVertices * 2),
				indices.subarray(0, numIndices),
				c3colors.subarray(0, numVertices * 4),
				command.texture,
				blendMode)
			command = command.next;
		}
	}

	drawDebug (x: number, y: number, quad: C3Quad) {
		const { skeleton, matrix } = this;

		const bones = skeleton.bones;
		for (let i = 0, n = bones.length; i < n; i++) {
			const bone = bones[i];
			if (!bone.parent) continue;
			const boneApplied = bone.applied;
			const { x: x1, y: y1 } = matrix.skeletonToGame(boneApplied.worldX, boneApplied.worldY);
			const x2 = bone.data.length * boneApplied.a + x1;
			const y2 = bone.data.length * boneApplied.c + y1;

			this.setColor(1, 0, 0, 1);
			this.setColorFillMode();

			const t = this.tempPoint.set(y2 - y1, x1 - x2);
			t.normalize();
			const width = 1 * 0.5;
			const tx = t.x * width;
			const ty = t.y * width;
			this.poly([
				x1 + tx, y1 + ty,
				x1 - tx, y1 - ty,
				x2 + tx, y2 + ty,
				x2 - tx, y2 - ty,
				x2 + tx, y2 + ty,
				x1 - tx, y1 - ty,
			]);

			this.setColor(0, 1, 0, 1);
			this.poly(this.circle(x1, y1, 2));
		}

		this.renderGameObjectBounds(x, y, quad);
	}

	protected abstract setColor (r: number, g: number, b: number, a: number): void;
	protected abstract setColorFillMode (): void;
	protected abstract poly (points: number[]): void;

	protected abstract renderSkeleton (vertices: Float32Array, uvs: Float32Array, indices: Uint16Array, colors: Float32Array, texture: Texture, blendMode: BlendMode): void;
	public abstract renderGameObjectBounds (x: number, y: number, quad: DOMQuad | SDK.Quad): void;

	protected circle (x: number, y: number, radius: number) {
		let segments = Math.max(1, (6 * MathUtils.cbrt(radius)) | 0);
		if (segments <= 0) throw new Error("segments must be > 0.");
		const angle = 2 * MathUtils.PI / segments;
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
}

export class C3RendererRuntime extends C3SkeletonRenderer<IRenderer, C3TextureRuntime> {
	constructor (renderer: IRenderer, skeleton: Skeleton, matrix: C3Matrix) {
		super(renderer, skeleton, matrix);
	}

	protected setColor (r: number, g: number, b: number, a: number): void {
		this.renderer.setColor([r, g, b, a]);
	}

	protected setColorFillMode (): void {
		this.renderer.setColorFillMode();
	}

	protected poly (points: number[]): void {
		this.renderer.convexPoly(points);
	}

	protected renderSkeleton (vertices: Float32Array, uvs: Float32Array, indices: Uint16Array, colors: Float32Array, texture: C3TextureRuntime, blendMode: BlendMode) {
		this.renderer.setTexture(texture.texture);
		this.renderer.setBlendMode(BlendingModeSpineToC3[blendMode]);
		this.renderer.drawMesh(vertices, uvs, indices, colors);
	};

	public renderDragHandles (bone: Bone, radius: number) {
		const boneApplied = bone.applied;
		const { x: x1, y: y1 } = this.matrix.skeletonToGame(boneApplied.worldX, boneApplied.worldY);
		this.renderer.setColorFillMode();
		this.renderer.setColor([1, 0, 0, .2]);
		this.renderer.convexPoly(this.circle(x1, y1, radius));
	}

	public renderGameObjectBounds (x: number, y: number, quad: DOMQuad) {
		const { renderer, matrix } = this;
		renderer.setAlphaBlendMode();
		renderer.setColorFillMode();
		renderer.setColorRgba(0.25, 0, 0, 0.25);
		renderer.lineQuad(quad);
		renderer.line(x, y, matrix.tx, matrix.ty);
	};
}

export class C3RendererEditor extends C3SkeletonRenderer<SDK.Gfx.IWebGLRenderer, C3TextureEditor> {
	protected setColor (r: number, g: number, b: number, a: number): void {
		this.renderer.SetColorRgba(r, g, b, a);
	}

	protected setColorFillMode (): void {
		this.renderer.SetColorFillMode();
	}

	protected poly (points: number[]): void {
		this.renderer.ConvexPoly(points);
	}

	protected renderSkeleton (vertices: Float32Array, uvs: Float32Array, indices: Uint16Array, colors: Float32Array, texture: C3TextureEditor, blendMode: BlendMode) {
		this.renderer.ResetColor();
		this.renderer.SetBlendMode(BlendingModeSpineToC3[blendMode]);
		this.renderer.SetTextureFillMode();
		this.renderer.SetTexture(texture.texture);
		this.renderer.DrawMesh(vertices, uvs, indices, colors);
	};

	public renderGameObjectBounds (x: number, y: number, quad: SDK.Quad): void {
		const { renderer, matrix } = this;
		renderer.SetAlphaBlend();
		renderer.SetColorFillMode();
		renderer.SetColorRgba(0.25, 0, 0, 0.25);
		renderer.LineQuad(quad);
		renderer.Line(x, y, matrix.tx, matrix.ty);
	}
}