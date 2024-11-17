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

import {Geometry, GeometryConfig} from "./geometry";
import {Coordinate, CoordinateMode, P5Context} from "sketch-context";
import P5Lib from "p5";
import {Random} from "random";

// TODO - unit tests
// TODO - documentation
export interface PointConfig extends GeometryConfig {
    readonly position?: P5Lib.Vector | { x: number, y: number };
}

// TODO - unit tests
// TODO - documentation
export class Point extends Geometry {
    readonly #COORDINATE: Coordinate = new Coordinate();

    public constructor(config: PointConfig) {
        super(config);

        if (config.position) {
            if (config.position instanceof P5Lib.Vector) {
                this.#COORDINATE.position = config.position;
            } else {
                this.#COORDINATE.x = config.position.x;
                this.#COORDINATE.y = config.position.y;
            }
        } else {
            this.#COORDINATE.mode = CoordinateMode.RATIO;
            this.#COORDINATE.x = Random.randomFloat(0, 1);
            this.#COORDINATE.y = Random.randomFloat(0, 1);
            this.#COORDINATE.mode = config.coordinateMode;
        }
    }

    public override set coordinateMode(mode: CoordinateMode) {
        super.coordinateMode = mode;
        this.#COORDINATE.mode = mode;
    }

    public override get position(): undefined {
        return undefined;
    }

    public override set position(position: P5Lib.Vector) {
        this.#COORDINATE.position = position;
    }

    public override get x(): number {
        return this.#COORDINATE.x;
    }

    public override set x(x: number) {
        this.#COORDINATE.x = x;
    }

    public override get y(): number {
        return this.#COORDINATE.y
    }

    public override set y(y: number) {
        this.#COORDINATE.y = y;
    }

    public override canvasRedraw(): void {
        this.#COORDINATE.remap();
    }

    public override draw(): void {
        const p5: P5Lib = P5Context.p5;
        const originalMode: CoordinateMode = this.coordinateMode;
        this.coordinateMode = CoordinateMode.CANVAS;
        this.style.applyStyle();
        p5.point(this.#COORDINATE.x, this.#COORDINATE.y);
        this.coordinateMode = originalMode;
    }
}
