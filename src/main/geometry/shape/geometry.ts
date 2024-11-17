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

import { CanvasRedrawListener, CoordinateMode } from 'sketch-context';
import P5Lib from "p5";
import { GeometryStyle } from "../style";

export interface GeometryConfig {
    readonly coordinateMode: CoordinateMode;
    readonly style?: GeometryStyle;
}

export abstract class Geometry implements CanvasRedrawListener {
    #coordinateMode: CoordinateMode;
    #style: GeometryStyle;

    protected constructor(config: GeometryConfig) {
        this.#coordinateMode = config.coordinateMode;
        this.#style = config.style ?? (new GeometryStyle());
    }

    public abstract get position(): undefined;

    public abstract set position(position: P5Lib.Vector);

    public abstract get x(): number;

    public abstract set x(x: number);

    public abstract get y(): number;

    public abstract set y(y: number);

    public abstract canvasRedraw(): void;

    public abstract draw(): void;

    public get coordinateMode(): CoordinateMode {
        return this.#coordinateMode;
    }

    public set coordinateMode(mode: CoordinateMode) {
        this.#coordinateMode = mode;
    }

    public get style(): GeometryStyle {
        return this.#style;
    }

    public set style(style: GeometryStyle) {
        this.#style = style;
    }
}
