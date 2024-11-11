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

import {Range} from 'math';
import {Random} from 'random';
import {Coordinate, CoordinateMapper, CoordinateMode, P5Context} from 'sketch-context';

import {Shape} from './shape';

// TODO - documentation
// TODO - release notes
// TODO - unit tests?
export class Point extends Shape {
    #coordinate: Coordinate = new Coordinate();

    public constructor(position: P5Lib.Vector);
    public constructor(x: number, y: number);
    public constructor();
    public constructor(arg1?: P5Lib.Vector | number, arg2?: number) {
        super();
        const pos: P5Lib.Vector = new P5Lib.Vector();

        if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            pos.set(arg1, arg2);
        } else if (arg1 && arg1 instanceof P5Lib.Vector) {
            pos.set(arg1);
        } else {
            let x: number;
            let y: number;

            if (Coordinate.coordinateMode === CoordinateMode.RATIO) {
                x = Random.randomFloatInRange(new Range(0, 1));
                y = Random.randomFloatInRange(new Range(0, 1));
            } else {
                x = Random.randomFloatInRange(new Range(CoordinateMapper.minX, CoordinateMapper.maxX));
                y = Random.randomFloatInRange(new Range(CoordinateMapper.minY, CoordinateMapper.maxY))
            }

            pos.set(x ,y);
        }

        this.fill = null;
        this.#coordinate.position = pos;
    }

    get x(): number {
        return this.#coordinate.x;
    }

    get y(): number {
        return this.#coordinate.y;
    }

    override set x(x: number) {
        this.#coordinate.x = x;
    }

    public override set y(y: number) {
        this.#coordinate.y = y;
    }

    public override get position(): undefined {
        return undefined;
    }

    public override set position(position: P5Lib.Vector) {
        this.#coordinate.position = position;
    }

    public override draw(): void {
        const p5: P5Lib = P5Context.p5;
        Coordinate.coordinateMode = CoordinateMode.CANVAS;
        this.selectStroke();
        this.selectFill();
        p5.point(this.#coordinate.x, this.#coordinate.y);
    }

    public override canvasRedraw(): void {
        this.#coordinate.remap();
    }

    public override move(delta: P5Lib.Vector): void {
        this.#coordinate.move(delta);
    }
}
