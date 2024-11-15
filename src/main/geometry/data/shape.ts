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

import P5Lib from "p5";

import { CanvasRedrawListener, CoordinateMode } from 'sketch-context';

import { ShapeDisplay } from '../display';

export interface ShapeConfig {
    readonly coordinateMode: CoordinateMode;
    readonly display: ShapeDisplay;
}

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export abstract class Shape implements CanvasRedrawListener {
    #shapeDisplay: ShapeDisplay | null = null;
    #coordinateMode: CoordinateMode = CoordinateMode.CANVAS;

    public abstract get position(): undefined;

    public abstract set position(position: P5Lib.Vector);

    public abstract get x(): number;

    public abstract set x(x: number);

    public abstract get y(): number;

    public abstract set y(y: number);

    public get coordinateMode(): CoordinateMode {
        return this.#coordinateMode;
    }

    public set coordinateMode(mode: CoordinateMode) {
        this.#coordinateMode = mode;
    }

    public canvasRedraw(): void {
        this.#shapeDisplay?.canvasRedraw();
    }

    public draw(): void {
        this.#shapeDisplay?.draw();
    }

    protected set shapeDisplay(display: ShapeDisplay) {
        this.#shapeDisplay = display;
    }
}
