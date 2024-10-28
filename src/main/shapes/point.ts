/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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
            Coordinate.coordinateMode = CoordinateMode.CANVAS;
            const x: number = Random.randomFloatInRange(new Range(CoordinateMapper.minX, CoordinateMapper.maxX));
            const y: number = Random.randomFloatInRange(new Range(CoordinateMapper.minY, CoordinateMapper.maxY));
            pos.set(x ,y);
        }

        this.fill = null;
        this.#coordinate.position = pos;
    }

    public override get position(): P5Lib.Vector {
        return this.#coordinate.position;
    }

    public override draw(): void {
        const p5: P5Lib = P5Context.p5;
        this.selectStroke();
        this.selectFill();
        Coordinate.coordinateMode = CoordinateMode.CANVAS;
        p5.point(this.#coordinate.x, this.#coordinate.y);
    }

    public override canvasRedraw(): void {
        this.#coordinate.remap();
    }

    public override move(delta: P5Lib.Vector): void {
        this.#coordinate.move(delta);
    }
}
