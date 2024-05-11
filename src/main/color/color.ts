/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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

import {SketchContext} from 'context';

const p5: P5Lib = SketchContext.p5;

// TODO - add name field
// TODO - build color from PaletteColor -> intersection type with p5.Color in constructor and set color
// TODO - get name from PaletteColor
// TODO - if name is falsy -> use nearest color -> do not set name since rgb values can change between calls

/**
 * Color information and functionality.
 * Colors are stored in RGBA format.
 * @category Color
 */
class Color {
    /**
     * The color's red component. Ranges in value from 0-255.
     */
    private _red: number;

    /**
     * The color's green component. Ranges in value from 0-255.
     */
    private _green: number;

    /**
     * The color's blue component. Ranges in value from 0-255.
     */
    private _blue: number;

    /**
     * The color's alpha component. Ranges in value from 0-255.
     */
    private _alpha: number; // 0-255

    /**
     * @param color - A {@link !P5Lib.Color | p5.js Color} object.
     * The color's RGBA components will become the values of
     * {@link red}, {@link green}, {@link blue}, and {@link alpha}.
     */
    public constructor(color?: P5Lib.Color) {
        this._red = 0;
        this._green = 0;
        this._blue = 0;
        this._alpha = 255;

        if (color) {
            this.setColorValues(color);
        }
    }

    /**
     * @param h - Some number between 0 and 360.
     * @param s - Some number between 0 and 100.
     * @param l - Some number between 0 and 100.
     * @param a - Some number between 0 and 1.
     * @returns A {@link !P5Lib.Color | p5.js Color} object matching the color specified
     * by the given {@link h}{@link s}{@link l}{@link a} values.
     */
    public static getHSLColor(h: number, s: number, l: number, a?: number): P5Lib.Color {
        let color: P5Lib.Color;
        h = Math.floor(p5.constrain(h, 0, 360));
        s = Math.floor(p5.constrain(s, 0, 100));
        l = Math.floor(p5.constrain(l, 0, 100));

        if (a) {
            a = p5.constrain(a, 0, 1);
            color = p5.color(`hsla(${h}, ${s}%, ${l}%, ${a})`);
        } else {
            color = p5.color(`hsl(${h}, ${s}%, ${l}%)`);
        }

        return color;
    }

    /**
     * @param h - Some number between 0 and 360.
     * @param s - Some number between 0 and 100.
     * @param l - Some number between 0 and 100.
     * @param a - Some number between 0 and 1.
     * @returns A {@link !P5Lib.Color | p5.js Color} object matching the color specified
     * by the given {@link h}{@link s}{@link l}{@link a} values.
     */
    public static getHSLAColor(h: number, s: number, l: number, a: number): P5Lib.Color {
        return Color.getHSLColor(h, s, l, a);
    }

    /**
     * @returns A {@link !P5Lib.Color | p5.js Color} object matching the current
     * {@link red}, {@link green}, {@link blue}, and {@link alpha} values.
     */
    public get color(): P5Lib.Color {
        p5.colorMode(p5.RGB);
        return p5.color(this.red, this.green, this.blue, this.alpha);
    }

    /**
     * Set the current color.
     * @param c - A {@link !P5Lib.Color | p5.js Color} object.
     * The color's RGBA components will become the new values of
     * {@link red}, {@link green}, {@link blue}, and {@link alpha}.
     */
    public set color(c: P5Lib.Color) {
        this.setColorValues(c);
    }

    /**
     * @returns The current red component value (0-255).
     */
    public get red(): number {
        return this._red;
    }

    /**
     * Set the value of the {@link red} component.
     * @param r -
     */
    public set red(r: number) {
        this._red = Math.floor(p5.constrain(r, 0, 255));
    }

    /**
     * @returns The current green component value (0-255).
     */
    public get green(): number {
        return this._green;
    }

    /**
     * Set the value of the {@link green} component.
     * @param g -
     */
    public set green(g: number) {
        this._green = Math.floor(p5.constrain(g, 0, 255));
    }

    /**
     * @returns The current blue component value (0-255).
     */
    public get blue(): number {
        return this._blue;
    }

    /**
     * Set the value of the {@link blue} component.
     * @param b -
     */
    public set blue(b: number) {
        this._blue = Math.floor(p5.constrain(b, 0, 255));
    }

    /**
     * @returns The current alpha component value (0-255).
     */
    public get alpha(): number {
        return this._alpha;
    }

    /**
     * Set the value of the {@link alpha} component.
     * @param a -
     */
    public set alpha(a: number) {
        this._alpha = Math.floor(p5.constrain(a, 0, 255));
    }

    /**
     * @returns The hex color string for the RGB
     * ({@link red}, {@link green}, {@link blue})
     * components of the color (#RRGGBB).
     */
    public get hex(): string {
        return this.getRGBHex(false);
    }

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     *
     * @param withAlpha - if `true`, an alpha component will be included in the hex
     * string (#RRGGBBAA).<br/>
     * If `false`, only the RGB components will be included (#RRGGBB).
     */
    public getRGBHex(withAlpha: boolean): string {
        let hex: string = '#';
        hex = hex + this.red.toString(16).padStart(2, '0');
        hex = hex + this.green.toString(16).padStart(2, '0');
        hex = hex + this.blue.toString(16).padStart(2, '0');

        if (withAlpha) {
            hex = hex + this.alpha.toString(16).padStart(2, '0');
        }

        return hex.toUpperCase();
    }

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     */
    public getRGBAHex(): string {
        return this.getRGBHex(true);
    }

    /**
     * Set the color values.
     * @param color - A {@link !P5Lib.Color | p5.js Color} object.
     * The color's RGBA components will become the new values of
     * {@link red}, {@link green}, {@link blue}, and {@link alpha}.
     */
    private setColorValues(color: P5Lib.Color): void {
        this.red = p5.red(color);
        this.green = p5.green(color);
        this.blue = p5.blue(color);
        this.alpha = p5.alpha(color);
    }
}

export {Color};
