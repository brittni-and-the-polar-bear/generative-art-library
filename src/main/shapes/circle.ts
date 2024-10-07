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
import { Random } from 'random';
import { CanvasContext, CanvasRedrawEvent, CanvasRedrawListener, CoordinateMapper } from 'canvas-context';
import { Range } from 'math';
import { SketchContext } from 'context';
import { Color } from 'color';

// TODO - release notes
// TODO - docs
// TODO - unit tests
export class Circle implements CanvasRedrawListener {
    private static _minDiameter: number = 5;
    private static _maxDiameter: number = 150;
    private static _pointCount: number = 50;

    private _posRatio_A: P5Lib.Vector = new P5Lib.Vector();
    private _posRatio_B: P5Lib.Vector = new P5Lib.Vector();
    private _coordinateRatios: P5Lib.Vector[] = [];
    private _fill: Color | null;
    private _stroke: Color | null;
    private _strokeWeight: number;

    // TODO - docs
    // TODO - unit tests
    public constructor() {
        const p5: P5Lib = SketchContext.p5;
        this.randomizePosition();
        this.calculateCoordinates();
        this._fill = new Color(p5.color(255, 0, 0));
        this._stroke = new Color(p5.color(0, 0, 255));
        this._strokeWeight = CanvasContext.defaultStroke;
        CanvasRedrawEvent.addSubscriber(this);
    }

    // TODO - docs
    // TODO - unit tests
    public static set maxDiameter(diameter: number) {
        Circle._maxDiameter = diameter;
    }

    // TODO - docs
    // TODO - unit tests
    public static set minDiameter(diameter: number) {
        Circle._minDiameter = diameter;
    }

    // TODO - docs
    // TODO - unit tests
    public draw(): void {
        const p5: P5Lib = SketchContext.p5;

        if (this._fill) {
            p5.fill(this._fill.color);
        } else {
            p5.noFill();
        }

        if (this._stroke) {
            p5.stroke(this._stroke.color);
            p5.strokeWeight(this._strokeWeight);
        } else {
            p5.noStroke();
        }

        p5.beginShape();

        for (let i: number = 0; i < this._coordinateRatios.length; i++) {
            const coordinate: P5Lib.Vector = this._coordinateRatios[i];
            const x: number = CoordinateMapper.mapRatioToCanvasX(coordinate.x);
            const y: number = CoordinateMapper.mapRatioToCanvasY(coordinate.y);
            p5.vertex(x, y);
        }

        p5.endShape(p5.CLOSE);
    }

    // TODO - docs
    // TODO - unit tests
    public canvasRedraw(): void {
        this.calculateCoordinates();
    }

    // TODO - docs
    // TODO - unit tests
    private randomizePosition(): void {
        const p5: P5Lib = SketchContext.p5;
        const xRange: Range = new Range(CoordinateMapper.minX, CoordinateMapper.maxX);
        const yRange: Range = new Range(CoordinateMapper.minY, CoordinateMapper.maxY);
        const x_A: number = Random.randomFloatInRange(xRange);
        const y_A: number = Random.randomFloatInRange(yRange);
        this._posRatio_A = new P5Lib.Vector(x_A / p5.width, y_A / p5.height);
        const theta: number = Random.randomFloatInRange(new Range(0, p5.TWO_PI));
        const diameter: number = Random.randomFloatInRange(new Range(Circle._minDiameter, Circle._maxDiameter));
        const x_B: number = x_A + (diameter * Math.cos(theta));
        const y_B: number = y_A + (diameter * Math.sin(theta));
        this._posRatio_B = new P5Lib.Vector(x_B / p5.width, y_B / p5.height);
    }

    // TODO - docs
    // TODO - unit tests
    private calculateCoordinates(): void {
        this._coordinateRatios = [];
        const p5: P5Lib = SketchContext.p5;
        const centerRatio_X: number = (this._posRatio_A.x + this._posRatio_B.x) / 2.0;
        const centerRatio_Y: number = (this._posRatio_A.y + this._posRatio_B.y) / 2.0;
        const radiusRatio: number = this._posRatio_A.dist(this._posRatio_B) / 2.0;
        let theta: number = 0;

        for (let i: number = 0; i < Circle._pointCount; i++) {
            const xRatio: number = centerRatio_X + (radiusRatio * Math.cos(theta));
            const yRatio: number = centerRatio_Y + (radiusRatio * Math.sin(theta));
            const ratioCoord: P5Lib.Vector = new P5Lib.Vector(xRatio, yRatio);
            this._coordinateRatios.push(ratioCoord);
            theta += p5.TWO_PI / Circle._pointCount;
        }
    }
}
