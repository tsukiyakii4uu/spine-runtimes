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

import { AtlasAttachmentLoader, SkeletonBinary, type SkeletonData, SkeletonJson, TextureAtlas, type TextureAtlasPage } from "@esotericsoftware/spine-core";
import { C3TextureEditor, C3TextureRuntime } from "./C3Texture";


interface CacheEntry<T> {
	data: T;
	refCount: number;
}

export class AssetLoader {

	private static CacheSkeleton = new Map<string, CacheEntry<SkeletonData>>();
	private static CacheAtlas = new Map<string, CacheEntry<TextureAtlas>>();
	private static CacheTexture = new Map<string, CacheEntry<C3TextureRuntime>>();

	public async loadSkeletonEditor (sid: number, textureAtlas: TextureAtlas, scale = 1, instance: SDK.IWorldInstance) {
		const projectFile = instance.GetProject().GetProjectFileBySID(sid);
		if (!projectFile) return null;

		const blob = projectFile.GetBlob();
		const atlasLoader = new AtlasAttachmentLoader(textureAtlas);

		const isBinary = projectFile.GetName().endsWith(".skel");
		if (isBinary) {
			const skeletonFile = await blob.arrayBuffer();
			const skeletonLoader = new SkeletonBinary(atlasLoader);
			skeletonLoader.scale = scale;
			return skeletonLoader.readSkeletonData(skeletonFile);
		}

		const skeletonFile = await blob.text();
		const skeletonLoader = new SkeletonJson(atlasLoader);
		skeletonLoader.scale = scale;
		return skeletonLoader.readSkeletonData(skeletonFile);
	}

	public async loadAtlasEditor (sid: number, instance: SDK.IWorldInstance, renderer: SDK.Gfx.IWebGLRenderer) {
		const projectFile = instance.GetProject().GetProjectFileBySID(sid);
		if (!projectFile) throw new Error(`Atlas file not found wit the given SID: ${sid}`);

		const blob = projectFile.GetBlob();
		const content = await blob.text();

		const path = projectFile.GetPath();
		const basePath = path.substring(0, path.lastIndexOf("/") + 1);
		const textureAtlas = new TextureAtlas(content);
		await Promise.all(textureAtlas.pages.map(async page => {
			const texture = await this.loadSpineTextureEditor(basePath + page.name, page.pma, instance);
			if (texture) {
				const spineTexture = new C3TextureEditor(texture, renderer, page);
				page.setTexture(spineTexture);
			}
			return texture;
		}));

		return { basePath, textureAtlas };
	}

	public async loadSpineTextureEditor (pageName: string, pma = false, instance: SDK.IWorldInstance) {
		const projectFile = instance.GetProject().GetProjectFileByExportPath(pageName);
		if (!projectFile) {
			throw new Error(`An error occured while loading the texture: ${pageName}`);
		}

		const content = projectFile.GetBlob();
		return AssetLoader.createImageBitmapFromBlob(content, pma);
	}

	public async loadSkeletonRuntime (path: string, textureAtlas: TextureAtlas, scale = 1, instance: IRuntime) {
		const cacheKey = `${path}|scale${scale}`;

		const fileInCache = this.getFromCache(AssetLoader.CacheSkeleton, cacheKey);
		if (fileInCache) return fileInCache;

		const fullPath = await instance.assets.getProjectFileUrl(path);
		if (!fullPath) return null;

		const atlasLoader = new AtlasAttachmentLoader(textureAtlas);

		let skeletonData: SkeletonData;
		const isBinary = path.endsWith(".skel");
		if (isBinary) {
			const content = await instance.assets.fetchArrayBuffer(fullPath);
			if (!content) return null;
			const skeletonLoader = new SkeletonBinary(atlasLoader);
			skeletonLoader.scale = scale;
			skeletonData = skeletonLoader.readSkeletonData(content);
		} else {
			const content = await instance.assets.fetchJson(fullPath);
			if (!content) return null;
			const skeletonLoader = new SkeletonJson(atlasLoader);
			skeletonLoader.scale = scale;
			skeletonData = skeletonLoader.readSkeletonData(content);
		}

		AssetLoader.CacheSkeleton.set(cacheKey, { data: skeletonData, refCount: 1 });

		return skeletonData;
	}

	public async loadAtlasRuntime (path: string, instance: IRuntime, renderer: IRenderer) {
		const cacheKey = path;

		const fileInCache = this.getFromCache(AssetLoader.CacheAtlas, cacheKey);
		if (fileInCache) return fileInCache;

		const fullPath = await instance.assets.getProjectFileUrl(path);
		if (!fullPath) return null;

		const content = await instance.assets.fetchText(fullPath);
		if (!content) return null;

		const basePath = path.substring(0, path.lastIndexOf("/") + 1);
		const textureAtlas = new TextureAtlas(content);
		await Promise.all(textureAtlas.pages.map(async page => {
			const texture = await this.loadSpineTextureRuntime(basePath, page, instance, renderer);
			if (texture) page.setTexture(texture);
			return texture;
		}));

		AssetLoader.CacheAtlas.set(cacheKey, { data: textureAtlas, refCount: 1 });

		return textureAtlas;
	}

	public async loadSpineTextureRuntime (basePath: string, page: TextureAtlasPage, instance: IRuntime, renderer: IRenderer) {
		const cacheKey = basePath + page.name;

		const fileInCache = this.getFromCache(AssetLoader.CacheTexture, cacheKey);
		if (fileInCache) return fileInCache;

		const fullPath = await instance.assets.getProjectFileUrl(cacheKey);
		if (!fullPath) return null;

		const content = await instance.assets.fetchBlob(fullPath);
		if (!content) return null;

		const image = await AssetLoader.createImageBitmapFromBlob(content, page.pma);
		if (!image) return null;

		const spineTexture = new C3TextureRuntime(image, renderer, page);

		this.addToCache(AssetLoader.CacheTexture, cacheKey, spineTexture);

		return spineTexture;
	}

	public releaseInstanceResources (skeletonPath: string, atlasPath: string, loaderScale: number) {
		this.releaseResource(AssetLoader.CacheSkeleton, `${skeletonPath}|scale${loaderScale}`);

		const atlasEntry = AssetLoader.CacheAtlas.get(atlasPath);
		if (atlasEntry) {
			this.releaseResource(AssetLoader.CacheAtlas, atlasPath, () => {
				const basePath = atlasPath.substring(0, atlasPath.lastIndexOf("/") + 1);
				for (const page of atlasEntry.data.pages) {
					const textureKey = basePath + page.name;
					this.releaseResource(AssetLoader.CacheTexture, textureKey, (texture) => {
						texture.dispose();
					});
				}
			});
		}
	}

	private releaseResource<T> (cache: Map<string, CacheEntry<T>>, key: string, disposer?: (data: T) => void) {
		const entry = cache.get(key);
		if (!entry) return;

		entry.refCount--;

		if (entry.refCount <= 0) {
			if (disposer) disposer(entry.data);
			cache.delete(key);
		}
	}

	private addToCache<T> (cache: Map<string, CacheEntry<T>>, cacheKey: string, data: T) {
		cache.set(cacheKey, { data, refCount: 1 });
	}

	private getFromCache<T> (cache: Map<string, CacheEntry<T>>, cacheKey: string) {
		const fileInCache = cache.get(cacheKey);
		if (!fileInCache) return undefined;

		fileInCache.refCount++;
		return fileInCache.data;
	}

	static async createImageBitmapFromBlob (blob: Blob, pma: boolean): Promise<ImageBitmap | null> {
		try {
			return createImageBitmap(blob, { premultiplyAlpha: pma ? "none" : "premultiply" });
		} catch (e) {
			console.error("Failed to create ImageBitmap from blob:", e);
			return null;
		}
	}

}


