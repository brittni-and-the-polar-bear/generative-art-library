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

import { P5Context } from '../../p5-context';
import { CanvasContext } from '../canvas-context';

// TODO - documentation
// TODO - release notes
/**
 * @category Sketch Context
 * @category Sketch Context: Canvas
 * @category Sketch Context: Drawing
 */
export class CoordinateMapper {
    // TODO - unit test
    // TODO - release notes
    /**
     * The center x-axis value of the canvas.
     */
    public static get centerX(): number {
        return CoordinateMapper.mapRatioToCanvasX(0.5);
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * The center y-axis value of the canvas.
     */
    public static get centerY(): number {
        return CoordinateMapper.mapRatioToCanvasY(0.5);
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * The maximum visible x-axis value of the canvas.
     */
    public static get maxX(): number {
        const p5: P5Lib = P5Context.p5;
        let max: number = p5.width;

        if (CanvasContext.isWebGL) {
            max = (p5.width / 2.0);
        }

        return max;
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * The maximum visible y-axis value of the canvas.
     */
    public static get maxY(): number {
        const p5: P5Lib = P5Context.p5;
        let max: number = p5.height;

        if (CanvasContext.isWebGL) {
            max = (p5.height / 2.0);
        }

        return max;
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * The minimum visible x-axis value of the canvas.
     */
    public static get minX(): number {
        const p5: P5Lib = P5Context.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.width / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * The minimum visible y-axis value of the canvas.
     */
    public static get minY(): number {
        const p5: P5Lib = P5Context.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.height / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - unit test
    // TODO - release notes
    // TODO - docs
    public static mapRatioToCanvas(ratioVector: P5Lib.Vector): P5Lib.Vector {
        const canvasX: number = this.mapRatioToCanvasX(ratioVector.x);
        const canvasY: number = this.mapRatioToCanvasY(ratioVector.y);
        return new P5Lib.Vector(canvasX, canvasY);
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * Map a percentage value to a value on the x-axis of the canvas.
     * A percentage value of 0.5 will be exactly in the middle of the x-axis,
     * regardless of canvas resolution or aspect ratio.
     *
     * @param ratio - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     */
    public static mapRatioToCanvasX(ratio: number): number {
        return P5Context.p5.map(ratio, 0, 1, CoordinateMapper.minX, CoordinateMapper.maxX);
    }

    // TODO - unit test
    // TODO - release notes
    /**
     * Map a percentage value to a value on the y-axis of the canvas.
     * A percentage value of 0.5 will be exactly in the middle of the y-axis,
     * regardless of canvas resolution or aspect ratio.
     *
     * @param ratio - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     */
    public static mapRatioToCanvasY(ratio: number): number {
        return P5Context.p5.map(ratio, 0, 1, CoordinateMapper.minY, CoordinateMapper.maxY);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests - are results constrained to 0 and 1?
    public static mapCanvasXToRatio(canvasX: number): number {
        return P5Context.p5.map(canvasX, CoordinateMapper.minX, CoordinateMapper.maxX, 0, 1);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests - are results constrained to 0 and 1?
    public static mapCanvasYToRatio(canvasY: number): number {
        return P5Context.p5.map(canvasY, CoordinateMapper.minY, CoordinateMapper.maxY, 0, 1);
    }

    // TODO - unit test
    // TODO - release notes
    // TODO - docs
    public static mapCanvasToRatio(canvasVector: P5Lib.Vector): P5Lib.Vector {
        const canvasX: number = this.mapCanvasXToRatio(canvasVector.x);
        const canvasY: number = this.mapCanvasYToRatio(canvasVector.y);
        return new P5Lib.Vector(canvasX, canvasY);
    }
}
