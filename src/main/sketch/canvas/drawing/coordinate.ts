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

import {CoordinateMode} from './coordinate-mode';
import {CoordinateMapper} from './coordinate-mapper';

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export class Coordinate {
    static #coordinateMode: CoordinateMode = CoordinateMode.CANVAS;

    readonly #CANVAS: P5Lib.Vector;
    readonly #RATIO: P5Lib.Vector;

    public static set coordinateMode(mode: CoordinateMode) {
        Coordinate.#coordinateMode = mode;
    }

    public constructor() {
        this.#CANVAS = new P5Lib.Vector();
        this.#RATIO = new P5Lib.Vector();
    }

    public get x(): number {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            return this.#RATIO.x;
        } else {
            return this.#CANVAS.x;
        }
    }

    public set x(x: number) {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            this.#RATIO.x = x;
            this.remap();
        } else {
            this.#CANVAS.x = x;
            this.#RATIO.x = CoordinateMapper.mapCanvasXToRatio(this.#CANVAS.x);
        }
    }

    public get y(): number {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            return this.#RATIO.y;
        } else {
            return this.#CANVAS.y;
        }
    }

    public set y(y: number) {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            this.#RATIO.y = y;
            this.remap();
        } else {
            this.#CANVAS.y = y;
            this.#RATIO.y = CoordinateMapper.mapCanvasYToRatio(this.#CANVAS.y);
        }
    }

    public set position(position: P5Lib.Vector) {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            this.ratio = position;
        } else {
            this.canvas = position;
        }
    }

    private set canvas(position: P5Lib.Vector) {
        this.#CANVAS.set(position);
        this.#RATIO.set(CoordinateMapper.mapCanvasToRatio(this.#CANVAS));
    }

    private set ratio(position: P5Lib.Vector) {
        this.#RATIO.set(position);
        this.remap();
    }

    public move(delta: P5Lib.Vector) {
        if (Coordinate.#coordinateMode === CoordinateMode.RATIO) {
            this.ratio = P5Lib.Vector.add(this.ratio, delta);
        } else {
            this.canvas = P5Lib.Vector.add(this.canvas, delta);
        }
    }

    public remap(): void {
        this.#CANVAS.set(CoordinateMapper.mapRatioToCanvas(this.#RATIO));
    }
}
