/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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

import {Color} from 'color';
import {SketchContext} from 'context';
import {PaletteColor} from 'palette';
import {ALL_PALETTE_COLORS} from 'palette-colors';

import {
    GREEN_HEXES,
    checkComponents,
    checkForValidStringMap,
    p5ColorToColorComponents,
    ColorComponents
} from 'unit-test/shared';

const p5: P5Lib = SketchContext.p5;

const ALL_HEXES: {hexString: string}[] = [];
ALL_HEXES.push(...GREEN_HEXES);

function buildTestColorsArray(): {c: PaletteColor}[] {
    const colors: {c: PaletteColor}[] = [];

    for (const color of ALL_PALETTE_COLORS.values) {
        colors.push({c: color});
    }

    return colors;
}

function makeHSLKey(HSL: {H: number, S: number, L: number}): string {
    let key: string = '';
    key += HSL.H.toString() + '.';
    key += HSL.S.toString() + '.';
    key += HSL.L.toString();
    return key;
}

function makeRGBKey(RGB: {R: number, G: number, B: number}): string {
    let key: string = '';
    key += RGB.R.toString() + '.';
    key += RGB.G.toString() + '.';
    key += RGB.B.toString();
    return key;
}

describe('all palette colors', (): void => {
    test('valid string map for all palettes', (): void => {
        checkForValidStringMap(ALL_PALETTE_COLORS);
    });

    test('all colors are unique', (): void => {
        const hexValues: Set<string> = new Set<string>();
        const hslValues: Set<string> = new Set<string>();
        const rgbValues: Set<string> = new Set<string>();
        const names: Set<string> = new Set<string>();

        for (const c of ALL_PALETTE_COLORS.values) {
            const hex: string = c.HEX.toLowerCase();
            expect(hexValues).not.toContain(hex);
            hexValues.add(hex);

            const hsl: string = makeHSLKey(c.HSL);
            expect(hslValues).not.toContain(hsl);
            hslValues.add(hsl);

            const rgb: string = makeRGBKey(c.RGB);
            expect(rgbValues).not.toContain(rgb);
            rgbValues.add(rgb);

            const name: string = c.NAME.toLowerCase();
            expect(names).not.toContain(name);
            names.add(name);
        }
    });

    test.each(
        buildTestColorsArray()
    )('$# consistent color: $c.HEX',
        ({c}): void => {
            const hsl: P5Lib.Color = Color.getHSLColor(c.HSL.H, c.HSL.S, c.HSL.L);
            const hslComponents: ColorComponents = p5ColorToColorComponents(hsl);
            checkComponents(hslComponents, c);

            const hex: P5Lib.Color = p5.color(c.HEX);
            const hexComponents: ColorComponents = p5ColorToColorComponents(hex);
            checkComponents(hexComponents, c);

            const rgb: P5Lib.Color = p5.color(c.RGB.R, c.RGB.G, c.RGB.B);
            const rgbComponents: ColorComponents = p5ColorToColorComponents(rgb);
            checkComponents(rgbComponents, c);
        }
    );

    test.each(
        ALL_HEXES
    )('$# successful addition of color: $hexString',
        ({hexString}): void => {
            expect(ALL_HEXES).toBeTruthy();
            expect(new Set<string>(ALL_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );
});
