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
import { Coordinate, CoordinateMode } from 'sketch-context';

import {PointDisplay} from '../display';
import {Shape, ShapeConfig} from './shape';

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export interface PointConfig extends ShapeConfig {
    readonly display: PointDisplay; // TODO - should this be optional?
    readonly position?: P5Lib.Vector | { x: number, y: number };
    // display?: PointDisplay // Point Display Configuration Options
}

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export class Point extends Shape {
    readonly #COORDINATE: Coordinate = new Coordinate();

    public constructor(config: PointConfig) {
        super();

        this.coordinateMode = config.coordinateMode;

        if (config.position) {
            if (config.position instanceof P5Lib.Vector) {
                this.#COORDINATE.position = config.position;
            } else {
                this.#COORDINATE.position.x = config.position.x;
                this.#COORDINATE.position.y = config.position.y;
            }
        } else {
            this.coordinateMode = CoordinateMode.RATIO;
            this.#COORDINATE.position.x = Random.randomFloat(0, 1);
            this.#COORDINATE.position.y = Random.randomFloat(0, 1);
            this.coordinateMode = config.coordinateMode;
        }

        this.shapeDisplay = new PointDisplay(this.#COORDINATE);
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
        return this.#COORDINATE.y;
    }

    public override set y(y: number) {
        this.#COORDINATE.y = y;
    }

    public override set coordinateMode(mode: CoordinateMode) {
        super.coordinateMode = mode;
        this.#COORDINATE.mode = mode;
    }
}
