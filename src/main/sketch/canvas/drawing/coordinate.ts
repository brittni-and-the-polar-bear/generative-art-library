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

import { CoordinateMode } from './coordinate-mode';
import { CoordinateMapper } from './coordinate-mapper';

// TODO - unit tests
// TODO - documentation
export class Coordinate {
    readonly #CANVAS: P5Lib.Vector;
    readonly #RATIO: P5Lib.Vector;

    public constructor() {
        this.#CANVAS = new P5Lib.Vector();
        this.#RATIO = new P5Lib.Vector();
    }

    public getX(mode: CoordinateMode): number {
        if (mode === CoordinateMode.RATIO) {
            return this.#RATIO.x;
        } else {
            return this.#CANVAS.x;
        }
    }

    public setX(x: number, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#RATIO.x = x;
            this.remap();
        } else {
            this.#CANVAS.x = x;
            this.#RATIO.x = CoordinateMapper.mapCanvasXToRatio(this.#CANVAS.x);
        }
    }

    public getY(mode: CoordinateMode): number {
        if (mode === CoordinateMode.RATIO) {
            return this.#RATIO.y;
        } else {
            return this.#CANVAS.y;
        }
    }

    public setY(y: number, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#RATIO.y = y;
            this.remap();
        } else {
            this.#CANVAS.y = y;
            this.#RATIO.y = CoordinateMapper.mapCanvasYToRatio(this.#CANVAS.y);
        }
    }

    public setPosition(position: P5Lib.Vector, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#ratio = position;
        } else {
            this.#canvas = position;
        }
    }

    public remap(): void {
        this.#CANVAS.set(CoordinateMapper.mapRatioToCanvas(this.#RATIO));
    }

    get #canvas(): undefined {
        return undefined;
    }

    set #canvas(position: P5Lib.Vector) {
        this.#CANVAS.set(position);
        this.#RATIO.set(CoordinateMapper.mapCanvasToRatio(this.#CANVAS));
    }

    get #ratio(): undefined {
        return undefined;
    }

    set #ratio(position: P5Lib.Vector) {
        this.#RATIO.set(position);
        this.remap();
    }
}
