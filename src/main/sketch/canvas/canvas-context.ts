/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import P5Lib from 'p5';

import { P5Context } from '../p5-context';
import { ASPECT_RATIOS, AspectRatio, AspectRatioHandler } from './aspect-ratio';
import { CanvasRedrawEvent } from './drawing';

// TODO - Update release notes
// TODO - update unit tests
/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Sketch Context
 * @category Sketch Context: Canvas
 */
export class CanvasContext {
    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     * @defaultValue false
     */
    private static _lockedCanvas: boolean = false;

    /**
     * Is the canvas rendering mode set to WebGL?
     * @defaultValue false
     */
    private static _isWebGL: boolean = false;

    /**
     * Current {@link AspectRatio} of the canvas.
     * @defaultValue {@link ASPECT_RATIOS.SQUARE}
     */
    private static _aspectRatio: AspectRatio = ASPECT_RATIOS.SQUARE;

    /**
     * Current resolution of the canvas.
     * @defaultValue 1080
     */
    private static _resolution: number = 1080;

    // TODO - update release notes
    /**
     * Build a p5 canvas with the given aspect ratio, resolution, and canvas type.
     * If {@link lockedCanvas} is `true`, no canvas will be built.
     *
     * @param aspectRatio
     * @param resolution
     * @param lockCanvas - When `true`, the canvas will be locked after it has been created.
     * @param canvasType - can be WEBGL ("webgl") or P2D ("p2d")
     */
    public static buildCanvas(aspectRatio: AspectRatio,
                              resolution: number,
                              canvasType?: string,
                              lockCanvas?: boolean): void {
        if (!CanvasContext.lockedCanvas) {
            CanvasContext._aspectRatio = aspectRatio;
            CanvasContext._resolution = resolution;

            const p5: P5Lib = P5Context.p5;
            const ratioHandler: AspectRatioHandler =
                new AspectRatioHandler(CanvasContext._aspectRatio, CanvasContext._resolution);
            const width: number = ratioHandler.width;
            const height: number = ratioHandler.height;

            if (canvasType && canvasType === p5.WEBGL) {
                p5.createCanvas(width, height, p5.WEBGL);
                CanvasContext._isWebGL = true;
            } else {
                p5.createCanvas(width, height);
                CanvasContext._isWebGL = false;
            }

            CanvasContext.decorateCanvas();

            if (lockCanvas) {
                CanvasContext.lockCanvas();
            }
        }
    }

    /**
     * Is the canvas rendering mode set to WebGL?
     */
    public static get isWebGL(): boolean {
        return CanvasContext._isWebGL;
    }

    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     */
    public static get lockedCanvas(): boolean {
        return CanvasContext._lockedCanvas;
    }

    /**
     * The default stroke of the sketch.
     * Equivalent to a stroke of 1 in a 500x500 sketch.
     */
    public static get defaultStroke(): number {
        const p5: P5Lib = P5Context.p5;
        const maxDimension: number = Math.max(p5.width, p5.height);
        return maxDimension * 0.002;
    }

    /**
     * Locks the canvas. After this is called, {@link buildCanvas} will not create a new canvas.
     */
    public static lockCanvas(): void {
        CanvasContext._lockedCanvas = true;
    }

    /**
     * Unlocks the canvas. After this is called, {@link buildCanvas} will create a new canvas.
     */
    public static unlockCanvas(): void {
        CanvasContext._lockedCanvas = false;
    }

    /**
     * Resizes the canvas and decorates the canvas with the appropriate
     * updated attributes.
     */
    public static resizeCanvas(): void {
        CanvasContext.updateCanvas();
    }

    /**
     * Update the current aspect ratio of the canvas to the given aspect ratio.
     * This method will resize the canvas and decorate it with the appropriate
     * updated attributes.
     *
     * @param aspectRatio
     */
    public static updateAspectRatio(aspectRatio: AspectRatio): void {
        CanvasContext._aspectRatio = aspectRatio;

        const p5: P5Lib = P5Context.p5;
        const ratioHandler: AspectRatioHandler =
            new AspectRatioHandler(CanvasContext._aspectRatio,
                CanvasContext._resolution);
        const width: number = ratioHandler.width;
        const height: number = ratioHandler.height;

        p5.resizeCanvas(width, height);
        CanvasContext.updateCanvas();
    }

    /**
     * Update the current resolution of the canvas to the given resolution.
     * This method will resize the canvas and decorate it with the appropriate
     * updated attributes.
     *
     * @param resolution
     */
    public static updateResolution(resolution: number): void {
        CanvasContext._resolution = resolution;

        const p5: P5Lib = P5Context.p5;
        const ratioHandler: AspectRatioHandler =
            new AspectRatioHandler(CanvasContext._aspectRatio,
                CanvasContext._resolution);
        const width: number = ratioHandler.width;
        const height: number = ratioHandler.height;

        p5.resizeCanvas(width, height);
        CanvasContext.updateCanvas();
    }

    /**
     * Decorates the canvas with the proper attributes according to current canvas
     * size and aspect ratio and current browser window size.
     */
    private static decorateCanvas(): void {
        const p5: P5Lib = P5Context.p5;
        const canvas: P5Lib.Element | null = p5.select('canvas');

        if (canvas) {
            const goalRatio: number = CanvasContext._aspectRatio.WIDTH_RATIO / CanvasContext._aspectRatio.HEIGHT_RATIO;
            const actualRatio: number = p5.windowWidth / p5.windowHeight;

            if (goalRatio < actualRatio) {
                canvas.attribute('style', 'height: 100vh;');
            } else {
                canvas.attribute('style', 'width: 100vw;');
            }
        }
    }

    // TODO - docs
    // TODO - unit test
    private static updateCanvas(): void {
        CanvasContext.decorateCanvas();
        CanvasRedrawEvent.publishRedraw();
    }
}
