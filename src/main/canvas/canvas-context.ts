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

/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Canvas Context
 */
export class CanvasContext {
    /**
     * Is the canvas rendering mode set to WebGL?
     */
    private static _isWebGL: boolean = false;

    /**
     * Is the canvas rendering mode set to WebGL?
     */
    public static get isWebGL(): boolean {
        return CanvasContext._isWebGL;
    }

    // TODO - docs
    // TODO - unit test
    public static get maxHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.height;

        if (CanvasContext.isWebGL) {
            max = (p5.height / 2.0);
        }

        return max;
    }

    // TODO - docs
    // TODO - unit tests
    public static get maxWidth(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.width;

        if (CanvasContext.isWebGL) {
            max = (p5.width / 2.0);
        }

        return max;
    }

    // TODO - docs
    // TODO - unit tests
    public static get minHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.height / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - docs
    // TODO - unit tests
    public static get minWidth(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.width / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - unit test
    // TODO - docs
    public static get defaultStroke(): number {
        const { p5 } = SketchContext;
        const maxDimension: number = Math.max(p5.width, p5.height);
        return maxDimension * 0.002;
    }
}
