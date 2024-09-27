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

import { SketchContext } from 'context';

import { ASPECT_RATIOS, AspectRatio, AspectRatioHandler } from './aspect-ratio';

/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Canvas Context
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
                              lockCanvas?: boolean,
                              canvasType?: string): void {
        if (!CanvasContext.lockedCanvas) {
            CanvasContext._aspectRatio = aspectRatio;
            CanvasContext._resolution = resolution;

            const p5: P5Lib = SketchContext.p5;
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

    // TODO - rename maxY
    /**
     * The maximum visible height of the sketch.
     */
    public static get maxHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.height;

        if (CanvasContext.isWebGL) {
            max = (p5.height / 2.0);
        }

        return max;
    }

    /**
     * The maximum visible x-axis value of the sketch.
     */
    public static get maxX(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.width;

        if (CanvasContext.isWebGL) {
            max = (p5.width / 2.0);
        }

        return max;
    }

    // TODO - rename minY
    /**
     * The minimum visible height of the sketch.
     */
    public static get minHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.height / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The minimum visible x-axis value of the sketch.
     */
    public static get minX(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.width / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The default stroke of the sketch.
     * Equivalent to a stroke of 1 in a 500x500 sketch.
     */
    public static get defaultStroke(): number {
        const { p5 } = SketchContext;
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
        CanvasContext.decorateCanvas();
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

        const { p5 } = SketchContext;
        const ratioHandler: AspectRatioHandler =
            new AspectRatioHandler(CanvasContext._aspectRatio,
                CanvasContext._resolution);
        const width: number = ratioHandler.width;
        const height: number = ratioHandler.height;

        p5.resizeCanvas(width, height);
        CanvasContext.decorateCanvas();
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
        const { p5 } = SketchContext;
        const ratioHandler: AspectRatioHandler =
            new AspectRatioHandler(CanvasContext._aspectRatio,
                CanvasContext._resolution);
        const width: number = ratioHandler.width;
        const height: number = ratioHandler.height;

        p5.resizeCanvas(width, height);
        CanvasContext.decorateCanvas();
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * Map a percentage value to a value on the x-axis of the canvas.
     * A percentage value of 0.5 will be exactly in the middle of the x-axis,
     * regardless of canvas resolution or aspect ratio.
     *
     * @param percentage - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     */
    public static mapXPercentage(percentage: number): number {
        return SketchContext.p5.map(percentage, 0, 1, CanvasContext.minX, CanvasContext.maxX);
    }

    // TODO - implement mapYPercentage method

    /**
     * Decorates the canvas with the proper attributes according to current canvas
     * size and aspect ratio and current browser window size.
     */
    private static decorateCanvas(): void {
        const { p5 } = SketchContext;
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
}
