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

    private _coordRatio_A: P5Lib.Vector = new P5Lib.Vector();
    private _coordRatio_B: P5Lib.Vector = new P5Lib.Vector();
    private _centerRatio: P5Lib.Vector = new P5Lib.Vector();
    private _coordinates: P5Lib.Vector[] = [];

    private _strokeMultiplier: number = 1;
    private _fill: Color | null;
    private _stroke: Color | null;

    // TODO - build circle with center and diameter
    // TODO - build circle with center (random diameter)
    // TODO - build circle with coordA and coordB

    // TODO - set fill
    // TODO - set stroke
    // TODO - set stroke multiplier

    // TODO - setFill builder method
    // TODO - setStroke builder method
    // TODO - setStrokeMultiplier builder method

    // TODO - docs
    // TODO - unit tests
    public constructor() {
        const p5: P5Lib = SketchContext.p5;
        this.randomizePosition();
        this.calculateCoordinates();
        this._fill = new Color(p5.color(255, 0, 0));
        this._stroke = new Color(p5.color(0, 0, 255));
        CanvasRedrawEvent.addListener(this);
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
            p5.strokeWeight(CanvasContext.defaultStroke * this._strokeMultiplier);
        } else {
            p5.noStroke();
        }

        p5.beginShape();

        for (let i: number = 0; i < this._coordinates.length; i++) {
            const coord: P5Lib.Vector = this._coordinates[i];
            p5.vertex(coord.x, coord.y);
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

        // calculate coordinate A
        const x_A: number = Random.randomFloatInRange(xRange);
        const y_A: number = Random.randomFloatInRange(yRange);
        this._coordRatio_A = CoordinateMapper.mapCanvasToRatio(new P5Lib.Vector(x_A, y_A));

        // calculate angle and distance
        const theta: number = Random.randomFloatInRange(new Range(0, p5.TWO_PI));
        const diameter: number = Random.randomFloatInRange(new Range(Circle._minDiameter, Circle._maxDiameter));

        // calculate coordinate B
        const x_B: number = x_A + (diameter * Math.cos(theta));
        const y_B: number = y_A + (diameter * Math.sin(theta));
        this._coordRatio_B = CoordinateMapper.mapCanvasToRatio(new P5Lib.Vector(x_B, y_B));

        const centerRatio_X: number = (this._coordRatio_A.x + this._coordRatio_B.x) / 2.0;
        const centerRatio_Y: number = (this._coordRatio_A.y + this._coordRatio_B.y) / 2.0;
        this._centerRatio = new P5Lib.Vector(centerRatio_X, centerRatio_Y);
    }

    // TODO - docs
    // TODO - unit tests
    private calculateCoordinates(): void {
        this._coordinates = [];
        const p5: P5Lib = SketchContext.p5;
        let theta: number = 0;

        const coordA: P5Lib.Vector = CoordinateMapper.mapRatioToCanvas(this._coordRatio_A);
        const coordB: P5Lib.Vector = CoordinateMapper.mapRatioToCanvas(this._coordRatio_B);
        const center: P5Lib.Vector = CoordinateMapper.mapRatioToCanvas(this._centerRatio);
        const radius: number = coordA.dist(coordB) / 2.0;


        for (let i: number = 0; i < Circle._pointCount; i++) {
            const x: number = center.x + (radius * Math.cos(theta));
            const y: number = center.y + (radius * Math.sin(theta));
            this._coordinates.push(new P5Lib.Vector(x, y));
            theta += p5.TWO_PI / Circle._pointCount;
        }
    }
}
