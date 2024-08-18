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

import { Color } from 'color';
import { SketchContext } from 'context';
import { _0437F1, _0FFF4F, _7A00F5, _FF6BB5 } from 'palette-colors';

import {
    ColorComponents,
    checkForValidHexColorString,
    checkForValidHexColorStringWithAlpha,
    colorToColorComponents,
    p5ColorToColorComponents
} from 'unit-test/shared';

const defaultColorName: string = 'black';

describe('color tests', (): void => {
    test('Color.getHSLColor() method', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const h: number = 238;
        const s: number = 65;
        const l: number = 39;
        const expectedComponents: ColorComponents = { r: 34, g: 39, b: 164, a: 255 };
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);
        const cComponents: ColorComponents = p5ColorToColorComponents(c);

        p5.colorMode(p5.HSL, 360, 100, 100, 255);
        const hslColor: P5Lib.Color = p5.color(h, s, l);
        const hslComponents: ColorComponents = p5ColorToColorComponents(hslColor);

        expect(cComponents).toEqual(expectedComponents);
        expect(hslComponents).toEqual(expectedComponents);
    });

    test('Color.getHSLAColor() method', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const h: number = 134;
        const s: number = 82;
        const l: number = 15;
        const a: number = 0.25;
        const expectedComponents: ColorComponents = { r: 6, g: 69, b: 21, a: Math.floor(255 * a) };
        const c: P5Lib.Color = Color.getHSLAColor(h, s, l, a);
        const cComponents: ColorComponents = p5ColorToColorComponents(c);

        p5.colorMode(p5.HSL, 360, 100, 100, 255);
        const hslColor: P5Lib.Color = p5.color(h, s, l, Math.floor(255 * a));
        const hslComponents: ColorComponents = p5ColorToColorComponents(hslColor);

        expect(cComponents).toEqual(expectedComponents);
        expect(hslComponents).toEqual(expectedComponents);
    });

    test.each(
        [
            { color: new Color(SketchContext.p5.color(0)) },
            { color: new Color(SketchContext.p5.color(200)) },
            { color: new Color(SketchContext.p5.color(100, 0, 0)) },
            { color: new Color(SketchContext.p5.color(0, 100, 0)) },
            { color: new Color(SketchContext.p5.color(0, 0, 100)) },
            { color: new Color(SketchContext.p5.color(100, 0, 100)) },
            { color: new Color(SketchContext.p5.color(100, 0, 100, 50)) }
        ]
    )('$# Color.copy() method',
        ({ color }): void => {
            const built: Color = Color.copy(color);
            expect(built).toEqual(color);
            expect(built).not.toBe(color);
        }
    );

    test('default Color constructor', (): void => {
        const expected: ColorComponents = {
            r: 0, g: 0, b: 0, a: 255
        };

        const defaultColor: Color = new Color();
        expect(colorToColorComponents(defaultColor)).toEqual(expected);
        expect(p5ColorToColorComponents(defaultColor.color)).toEqual(expected);
        expect(defaultColor.name).toBe(defaultColorName);
    });

    test.each(
        [
            { paletteColor: _0437F1 },
            { paletteColor: _0FFF4F },
            { paletteColor: _7A00F5 },
            { paletteColor: _FF6BB5 }
        ]
    )('$# Color constructor with PaletteColor object: $paletteColor.HEX',
        ({ paletteColor }): void => {
            const expected: ColorComponents = {
                r: paletteColor.RGB.R, g: paletteColor.RGB.G, b: paletteColor.RGB.B, a: 255
            };

            const expectedName: string = paletteColor.NAME;

            const color: Color = new Color(paletteColor);
            expect(colorToColorComponents(color)).toEqual(expected);
            expect(p5ColorToColorComponents(color.color)).toEqual(expected);
            expect(color.name).toBe(expectedName);
        }
    );

    test('Color constructor with grayscale (c) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const w: number = 153;
        const c: P5Lib.Color = p5.color(w);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: 255
        };
        const expectedName: string = 'million grey';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with grayscale (c,a) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const w: number = 153;
        const a: number = 83;
        const c: P5Lib.Color = p5.color(w, a);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: a
        };
        const expectedName: string = 'million grey';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with rgb (r,g,b) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        };
        const expectedName: string = 'vivid cerise';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with rgb (r,g,b,a) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const a: number = 50;
        const c: P5Lib.Color = p5.color(r, g, b, a);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: a
        };
        const expectedName: string = 'vivid cerise';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with hsl (h,s,l) color', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: 255
        };
        const expectedName: string = 'blue enchantment';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with hsl (h,s,l,a) color', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const a: number = 0.47;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l, a);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: Math.floor(255 * a)
        };
        const expectedName: string = 'blue enchantment';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('Color constructor with hex color code', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 255;
        const g: number = 61;
        const b: number = 181;
        const c: P5Lib.Color = p5.color('#FF3DB5');
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        };
        const expectedName: string = '';

        const color: Color = new Color(c);
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(expectedName).toBe(expectedName);
    });

    test.each(
        [
            { color: new Color(SketchContext.p5.color(0)) },
            { color: new Color(SketchContext.p5.color(200)) },
            { color: new Color(SketchContext.p5.color(100, 0, 0)) },
            { color: new Color(SketchContext.p5.color(0, 100, 0)) },
            { color: new Color(SketchContext.p5.color(0, 0, 100)) },
            { color: new Color(SketchContext.p5.color(100, 0, 100)) },
            { color: new Color(SketchContext.p5.color(100, 0, 100, 50)) }
        ]
    )('$# Color constructor with Color object: $color',
        ({ color }): void => {
            const built: Color = new Color(color);
            expect(built).toEqual(color);
            expect(built).not.toBe(color);
        }
    );

    test('color setter with with grayscale (c) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const w: number = 153;
        const c: P5Lib.Color = p5.color(w);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: 255
        };
        const expectedName: string = 'million grey';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with grayscale (c,a) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const w: number = 153;
        const a: number = 83;
        const c: P5Lib.Color = p5.color(w, a);
        const expected: ColorComponents = {
            r: w, g: w, b: w, a: a
        };
        const expectedName: string = 'million grey';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with rgb (r,g,b) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        };
        const expectedName: string = 'vivid cerise';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with rgb (r,g,b,a) color', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 212;
        const g: number = 28;
        const b: number = 132;
        const c: P5Lib.Color = p5.color(r, g, b);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        };
        const expectedName: string = 'vivid cerise';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with hsl (h,s,l) color', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: 255
        };
        const expectedName: string = 'blue enchantment';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with hsl (h,s,l,a) color', (): void => {
        const h: number = 187;
        const s: number = 75;
        const l: number = 26;
        const a: number = 0.47;
        const c: P5Lib.Color = Color.getHSLColor(h, s, l, a);
        const expected: ColorComponents = {
            r: 16, g: 104, b: 116, a: Math.floor(255 * a)
        };
        const expectedName: string = 'blue enchantment';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
    });

    test('color setter with with hex color code', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const r: number = 113;
        const g: number = 130;
        const b: number = 185;
        const expectedHex: string = '#7182B9';
        const c: P5Lib.Color = p5.color(expectedHex);
        const expected: ColorComponents = {
            r: r, g: g, b: b, a: 255
        };
        const expectedName: string = 'orbital';

        const color: Color = new Color();
        expect(color.name).toBe(defaultColorName);
        color.color = c;
        expect(colorToColorComponents(color)).toEqual(expected);
        expect(p5ColorToColorComponents(color.color)).toEqual(expected);
        expect(color.name).toBe(expectedName);
        expect(color.hex).toBe(expectedHex);
    });

    test('set red to value > 255', (): void => {
        const expectedName: string = 'red';

        const color: Color = new Color();
        expect(color.red).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.red = 500;
        expect(color.red).toBe(255);
        expect(color.name).toBe(expectedName);
    });

    test('set red to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.red).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.red = -100;
        expect(color.red).toBe(0);
        expect(color.name).toBe(defaultColorName);
    });

    test('set red to valid value', (): void => {
        const value: number = 40;
        const expectedName: string = 'sepia black';

        const color: Color = new Color();
        expect(color.red).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.red = value;
        expect(color.red).toBe(value);
        expect(color.name).toBe(expectedName);
    });

    test('set green to value > 255', (): void => {
        const expectedName: string = 'green';

        const color: Color = new Color();
        expect(color.green).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.green = 500;
        expect(color.green).toBe(255);
        expect(color.name).toBe(expectedName);
    });

    test('set green to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.green).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.green = -100;
        expect(color.green).toBe(0);
        expect(color.name).toBe(defaultColorName);
    });

    test('set green to valid value', (): void => {
        const value: number = 40;
        const expectedName: string = 'tides of darkness';

        const color: Color = new Color();
        expect(color.green).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.green = value;
        expect(color.green).toBe(value);
        expect(color.name).toBe(expectedName);
    });

    test('set blue to value > 255', (): void => {
        const expectedName: string = 'blue';

        const color: Color = new Color();
        expect(color.blue).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.blue = 500;
        expect(color.blue).toBe(255);
        expect(color.name).toBe(expectedName);
    });

    test('set blue to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.blue).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.blue = -100;
        expect(color.blue).toBe(0);
        expect(color.name).toBe(defaultColorName);
    });

    test('set blue to valid value', (): void => {
        const value: number = 40;
        const expectedName: string = 'midnight';

        const color: Color = new Color();
        expect(color.blue).toBe(0);
        expect(color.name).toBe(defaultColorName);

        color.blue = value;
        expect(color.blue).toBe(value);
        expect(color.name).toBe(expectedName);
    });

    test('set alpha to value > 255', (): void => {
        const color: Color = new Color();
        expect(color.alpha).toBe(255);
        expect(color.name).toBe(defaultColorName);

        color.alpha = 500;
        expect(color.alpha).toBe(255);
        expect(color.name).toBe(defaultColorName);
    });

    test('set alpha to value < 0', (): void => {
        const color: Color = new Color();
        expect(color.alpha).toBe(255);
        expect(color.name).toBe(defaultColorName);

        color.alpha = -100;
        expect(color.alpha).toBe(0);
        expect(color.name).toBe(defaultColorName);
    });

    test('set alpha to valid value', (): void => {
        const value: number = 40;

        const color: Color = new Color();
        expect(color.alpha).toBe(255);
        expect(color.name).toBe(defaultColorName);

        color.alpha = value;
        expect(color.alpha).toBe(value);
        expect(color.name).toBe(defaultColorName);
    });

    test.each([
        { r: 0, g: 0, b: 0, a: undefined, hex: '#000000' },
        { r: 0, g: 0, b: 0, a: 0, hex: '#000000' },
        { r: 0, g: 0, b: 0, a: 255, hex: '#000000' },
        { r: 0, g: 0, b: 0, a: 100, hex: '#000000' },
        { r: 255, g: 0, b: 0, a: undefined, hex: '#FF0000' },
        { r: 255, g: 0, b: 0, a: 0, hex: '#FF0000' },
        { r: 255, g: 0, b: 0, a: 255, hex: '#FF0000' },
        { r: 255, g: 0, b: 0, a: 100, hex: '#FF0000' },
        { r: 132, g: 30, b: 228, a: undefined, hex: '#841EE4' },
        { r: 132, g: 30, b: 228, a: 0, hex: '#841EE4' },
        { r: 132, g: 30, b: 228, a: 255, hex: '#841EE4' },
        { r: 132, g: 30, b: 228, a: 100, hex: '#841EE4' },
        { r: 128, g: 43, b: 78, a: undefined, hex: '#802B4E' },
        { r: 128, g: 43, b: 78, a: 0, hex: '#802B4E' },
        { r: 128, g: 43, b: 78, a: 255, hex: '#802B4E' },
        { r: 128, g: 43, b: 78, a: 100, hex: '#802B4E' }
    ])('$# get hex: rgba($r, $g, $b, $a)',
        ({ r, g, b, a, hex }): void => {
            const p5: P5Lib = SketchContext.p5;
            let c: Color;

            if (a !== undefined) {
                c = new Color(p5.color(r, g, b, a));
            } else {
                c = new Color(p5.color(r, g, b));
            }

            checkForValidHexColorString(c.hex);
            expect(c.hex).toBe(hex);

            checkForValidHexColorString(c.getRGBHex(false));
            expect(c.getRGBHex(false)).toBe(hex);
        }
    );

    test.each([
        { r: 0, g: 0, b: 0, a: undefined, hex: '#000000FF' },
        { r: 0, g: 0, b: 0, a: 0, hex: '#00000000' },
        { r: 0, g: 0, b: 0, a: 255, hex: '#000000FF' },
        { r: 0, g: 0, b: 0, a: 100, hex: '#00000064' },
        { r: 255, g: 0, b: 0, a: undefined, hex: '#FF0000FF' },
        { r: 255, g: 0, b: 0, a: 0, hex: '#FF000000' },
        { r: 255, g: 0, b: 0, a: 255, hex: '#FF0000FF' },
        { r: 255, g: 0, b: 0, a: 100, hex: '#FF000064' },
        { r: 132, g: 30, b: 228, a: undefined, hex: '#841EE4FF' },
        { r: 132, g: 30, b: 228, a: 0, hex: '#841EE400' },
        { r: 132, g: 30, b: 228, a: 255, hex: '#841EE4FF' },
        { r: 132, g: 30, b: 228, a: 100, hex: '#841EE464' },
        { r: 128, g: 43, b: 78, a: undefined, hex: '#802B4EFF' },
        { r: 128, g: 43, b: 78, a: 0, hex: '#802B4E00' },
        { r: 128, g: 43, b: 78, a: 255, hex: '#802B4EFF' },
        { r: 128, g: 43, b: 78, a: 100, hex: '#802B4E64' }
    ])('$# get hex with alpha: rgba($r, $g, $b, $a)',
        ({ r, g, b, a, hex }): void => {
            const p5: P5Lib = SketchContext.p5;
            let c: Color;

            if (a !== undefined) {
                c = new Color(p5.color(r, g, b, a));
            } else {
                c = new Color(p5.color(r, g, b));
            }

            checkForValidHexColorStringWithAlpha(c.getRGBAHex());
            expect(c.getRGBAHex()).toBe(hex);

            checkForValidHexColorStringWithAlpha(c.getRGBHex(true));
            expect(c.getRGBHex(true)).toBe(hex);
        }
    );
});
