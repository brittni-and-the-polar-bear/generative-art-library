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

import { CoordinateMode } from './coordinate-mode';
import { CoordinateMapper } from './coordinate-mapper';

// TODO - unit tests
// TODO - release notes
/**
 * Represents a coordinate in a 2D space with support for different coordinate modes.
 *
 * @see CoordinateMode
 */
export class Coordinate {
    /**
     * The canvas coordinate vector.
     * This vector represents the coordinate
     * in the canvas coordinate system.
     */
    readonly #CANVAS: P5Lib.Vector;

    /**
     * The ratio coordinate vector.
     * This vector represents the coordinate
     * as a ratio of the canvas width and height,
     * respectively.
     */
    readonly #RATIO: P5Lib.Vector;

    public constructor() {
        this.#CANVAS = new P5Lib.Vector();
        this.#RATIO = new P5Lib.Vector();
    }

    /**
     * @param mode -
     * @returns The x-axis coordinate for the given {@link CoordinateMode}.
     */
    public getX(mode: CoordinateMode): number {
        if (mode === CoordinateMode.RATIO) {
            return this.#RATIO.x;
        } else {
            return this.#CANVAS.x;
        }
    }

    /**
     * Sets the x-axis coordinate using the given
     * {@link CoordinateMode}.
     * Setting the x-axis coordinate in one mode will
     * automatically update the coordinate in all other modes.
     *
     * @param x -
     * @param mode -
     */
    public setX(x: number, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#RATIO.x = x;
            this.remap();
        } else {
            this.#CANVAS.x = x;
            this.#RATIO.x = CoordinateMapper.mapCanvasXToRatio(this.#CANVAS.x);
        }
    }

    /**
     * @param mode -
     * @returns The y-axis coordinate for the given {@link CoordinateMode}.
     */
    public getY(mode: CoordinateMode): number {
        if (mode === CoordinateMode.RATIO) {
            return this.#RATIO.y;
        } else {
            return this.#CANVAS.y;
        }
    }

    /**
     * Sets the y-axis coordinate using the given
     * {@link CoordinateMode}.
     * Setting the y-axis coordinate in one mode will
     * automatically update the coordinate in all other modes.
     *
     * @param y -
     * @param mode -
     */
    public setY(y: number, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#RATIO.y = y;
            this.remap();
        } else {
            this.#CANVAS.y = y;
            this.#RATIO.y = CoordinateMapper.mapCanvasYToRatio(this.#CANVAS.y);
        }
    }

    /**
     * Sets the position vector using the given {@link CoordinateMode}.
     * @param position -
     * @param mode -
     */
    public setPosition(position: P5Lib.Vector, mode: CoordinateMode): void {
        if (mode === CoordinateMode.RATIO) {
            this.#ratio = position;
        } else {
            this.#canvas = position;
        }
    }

    /**
     * Remaps the canvas coordinate according to the current ratio coordinate.
     * This method should be called when the resolution or aspect ratio of the canvas changes.
     */
    public remap(): void {
        this.#CANVAS.set(CoordinateMapper.mapRatioToCanvas(this.#RATIO));
    }

    /**
     * Sets the canvas position vector.
     * This method will update the ratio position vector accordingly.
     *
     * @param position -
     */
    set #canvas(position: P5Lib.Vector) {
        this.#CANVAS.set(position);
        this.#RATIO.set(CoordinateMapper.mapCanvasToRatio(this.#CANVAS));
    }

    /**
     * Sets the ratio position vector.
     * This method will update the canvas position vector accordingly.
     *
     * @param position -
     */
    set #ratio(position: P5Lib.Vector) {
        this.#RATIO.set(position);
        this.remap();
    }
}
