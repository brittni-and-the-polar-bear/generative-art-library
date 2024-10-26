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

import { Range } from 'math';
import { Random } from 'random';
import { CoordinateMapper, P5Context } from 'sketch-context';

import { CoordinateMode, Shape } from './shape';

// TODO - documentation
// TODO - release notes
// TODO - unit tests?
export class Point extends Shape {
    private _posRatio: P5Lib.Vector;
    private _pos: P5Lib.Vector;

    public constructor(position: P5Lib.Vector);
    public constructor(x: number, y: number);
    public constructor();
    public constructor(arg1?: P5Lib.Vector | number, arg2?: number) {
        super();

        if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            this._posRatio = this.getPosRatio(arg1, arg2);
        } else if (arg1 && arg1 instanceof P5Lib.Vector) {
            this._posRatio = this.getPosRatioFromVector(arg1);
        } else {
            const x: number = Random.randomFloatInRange(new Range(CoordinateMapper.minX, CoordinateMapper.maxX));
            const y: number = Random.randomFloatInRange(new Range(CoordinateMapper.minY, CoordinateMapper.maxY));
            this._posRatio = new P5Lib.Vector(x ,y);
        }

        this.fill = null;
        this._pos = CoordinateMapper.mapRatioToCanvas(this._posRatio);
    }

    public override draw(): void {
        const p5: P5Lib = P5Context.p5;
        this.selectStroke();
        p5.point(this._pos);
    }

    public override canvasRedraw(): void {
        this._pos = CoordinateMapper.mapRatioToCanvas(this._posRatio);
    }

    private getPosRatio(x: number, y: number): P5Lib.Vector {
        let xRatio: number;
        let yRatio: number;

        if (Shape.coordinateMode == CoordinateMode.CANVAS) {
            xRatio = CoordinateMapper.mapCanvasXToRatio(x);
            yRatio = CoordinateMapper.mapCanvasYToRatio(y);
        } else {
            xRatio = x;
            yRatio = y;
        }

        return (new P5Lib.Vector(xRatio, yRatio));
    }

    private getPosRatioFromVector(pos: P5Lib.Vector): P5Lib.Vector {
        let xRatio: number;
        let yRatio: number;

        if (Shape.coordinateMode == CoordinateMode.CANVAS) {
            xRatio = CoordinateMapper.mapCanvasXToRatio(pos.x);
            yRatio = CoordinateMapper.mapCanvasYToRatio(pos.y);
        } else {
            xRatio = pos.x;
            yRatio = pos.y;
        }

        return (new P5Lib.Vector(xRatio, yRatio));
    }

    protected override get pos(): P5Lib.Vector {
        return this._pos;
    }

    protected override get posRatio(): P5Lib.Vector {
        return this._posRatio;
    }

    protected override set pos(pos: P5Lib.Vector) {
        this._pos = pos;
        this._posRatio = CoordinateMapper.mapCanvasToRatio(this._pos);
    }

    protected override set posRatio(posRatio: P5Lib.Vector) {
        this._posRatio = posRatio;
        this._pos = CoordinateMapper.mapRatioToCanvas(this._posRatio);
    }
}
