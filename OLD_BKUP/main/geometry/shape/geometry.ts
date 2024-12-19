/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's @batpb/genart algorithmic art library,
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

import { CanvasRedrawListener, CoordinateMode } from 'sketch-context';

import { GeometryStyle } from '../style';

export interface GeometryConfig {
    readonly coordinateMode: CoordinateMode;
    readonly style?: GeometryStyle;
}

export abstract class Geometry implements CanvasRedrawListener {
    #style: GeometryStyle;

    protected constructor(config: GeometryConfig) {
        this.#style = config.style ?? (new GeometryStyle());
    }

    public abstract setPosition(position: P5Lib.Vector, mode: CoordinateMode): void;

    public abstract getX(mode: CoordinateMode): number;

    public abstract setX(x: number, mode: CoordinateMode): void;

    public abstract getY(mode: CoordinateMode): number;

    public abstract setY(y: number, mode: CoordinateMode): void;

    public abstract canvasRedraw(): void;

    public abstract draw(): void;

    public get style(): GeometryStyle {
        return this.#style;
    }

    public set style(style: GeometryStyle) {
        this.#style = style;
    }
}
