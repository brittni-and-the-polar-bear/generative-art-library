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

import {Coordinate, CoordinateMode, P5Context} from 'sketch-context';

import {ShapeDisplay} from './shape-display';
import {ShapeStyle} from './style';

// TODO - how does a point display get its style?

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export class PointDisplay extends ShapeDisplay {
    readonly #STYLE: ShapeStyle = new ShapeStyle();
    readonly #COORDINATE: Coordinate;

    public constructor(position: Coordinate) {
        super();

        this.#COORDINATE = position;
        this.#STYLE.fill = null;
    }

    public override canvasRedraw(): void {
        this.#COORDINATE.remap();
    }

    // TODO - test that coordinate mode does not change after calling this method
    public override draw(): void {
        const p5: P5Lib = P5Context.p5;

        const originalMode: CoordinateMode = this.#COORDINATE.mode;
        this.#COORDINATE.mode = CoordinateMode.CANVAS;
        this.#STYLE.applyStyle();
        p5.point(this.#COORDINATE.x, this.#COORDINATE.y);
        this.#COORDINATE.mode = originalMode;
    }
}
