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

import { Color } from 'color';
import { CanvasContext, CanvasRedrawListener, P5Context } from 'sketch-context';

// TODO - documentation
// TODO - release notes
// TODO - unit tests?
export abstract class Shape implements CanvasRedrawListener {
    private _strokeMultiplier: number = 1;
    private _stroke: Color | null;
    private _fill: Color | null;

    protected constructor() {
        this._stroke = new Color();
        this._fill = new Color(255, 255, 255);
    }

    public abstract get x(): number;

    public abstract set x(x: number);

    public abstract get y(): number;

    public abstract set y(y: number);

    public abstract set position(position: P5Lib.Vector);

    public abstract get position(): undefined;

    public abstract canvasRedraw(): void;

    public abstract draw(): void;

    public abstract move(delta: P5Lib.Vector): void;

    public set fill(color: Color | null) {
        this._fill = color;
    }

    public set stroke(color: Color | null) {
        this._stroke = color;
    }

    public get strokeMultiplier(): number {
        return this._strokeMultiplier;
    }

    public set strokeMultiplier(stroke: number) {
        this._strokeMultiplier = stroke;
    }

    protected selectFill(): void {
        const p5: P5Lib = P5Context.p5;

        if (this._fill) {
            p5.fill(this._fill.color);
        } else {
            p5.noFill();
        }
    }

    protected selectStroke(): void {
        const p5: P5Lib = P5Context.p5;

        if (this._stroke) {
            p5.strokeWeight(CanvasContext.defaultStroke * this._strokeMultiplier);
            p5.stroke(this._stroke.color);
        } else {
            p5.noStroke();
        }
    }
}
