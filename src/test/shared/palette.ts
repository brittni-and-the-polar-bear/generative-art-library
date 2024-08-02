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

import { Color } from 'color';
import { ColorContrastAssessor, ContrastFontSize, ContrastStandard } from 'color-contrast';
import { Discriminators } from 'discriminator';
import { StringMap } from 'map';
import { Palette, PaletteColor } from 'palette';

import { checkForValidHexColorString, ColorComponents } from './color';
import { checkForValidStringMap } from './map';
import { checkNumberWithinAmount } from './math';

export function getColorsArray(colors: PaletteColor[]): Color[] {
    return colors.map((color: PaletteColor) => {
        return new Color(color);
    });
}

export function checkComponents(components: ColorComponents, paletteColor: PaletteColor): void {
    checkNumberWithinAmount(components.r, paletteColor.RGB.R, 1);
    checkNumberWithinAmount(components.g, paletteColor.RGB.G, 1);
    checkNumberWithinAmount(components.b, paletteColor.RGB.B, 1);
}

function checkForValidContrastMap(palette: Palette): void {
    const validHexes: string[] = palette.COLORS.map((color: PaletteColor): string => {
        return color.HEX;
    });

    expect(palette.CONTRAST_MAP).toBeTruthy();

    if (palette.CONTRAST_MAP) {
        if (!validHexes.includes('#000000')) {
            expect(palette.CONTRAST_MAP['#FFFFFF']).not.toContain('#000000');
            validHexes.push('#000000');
        }

        if (!validHexes.includes('#FFFFFF')) {
            expect(palette.CONTRAST_MAP['#000000']).not.toContain('#FFFFFF');
            validHexes.push('#FFFFFF');
        }

        for (const key in palette.CONTRAST_MAP) {
            checkForValidHexColorString(key);
            expect(validHexes).toContain(key);

            for (const hex of palette.CONTRAST_MAP[key]) {
                checkForValidHexColorString(hex);
                expect(validHexes).toContain(hex);

                const meetsNormalRatio: boolean =
                    ColorContrastAssessor.meetsContrastStandard(
                        key,
                        hex,
                        ContrastStandard.AA,
                        ContrastFontSize.NORMAL
                    );
                const meetsLargeRatio: boolean =
                    ColorContrastAssessor.meetsContrastStandard(
                        key,
                        hex,
                        ContrastStandard.AA,
                        ContrastFontSize.LARGE
                    );
                expect(meetsNormalRatio && meetsLargeRatio).toBeTruthy();
            }
        }
    }
}

export function checkForValidPalette(palette: Palette, expectedColors?: PaletteColor[]): void {
    expect(palette).toBeTruthy();
    expect(palette.NAME).toBeTruthy();
    expect(palette.NAME.toLowerCase()).toBe(palette.NAME);
    expect(palette.COLORS).toBeTruthy();
    expect(palette.COLORS.length).toBeGreaterThanOrEqual(2);
    expect(palette.DISCRIMINATOR).toBe(Discriminators.PALETTE);

    if (expectedColors) {
        expect(palette.COLORS).toEqual(expectedColors);
    }

    if (palette.CONTRAST_MAP) {
        checkForValidContrastMap(palette);
    }
}

export function checkForPaletteInMap(palette: Palette, map: StringMap<Palette>): void {
    checkForValidStringMap(map);
    checkForValidPalette(palette);
    const actualPalette: Palette | undefined = map.get(palette.NAME);
    expect(actualPalette).toBeTruthy();
    expect(actualPalette).toEqual(palette);
}
