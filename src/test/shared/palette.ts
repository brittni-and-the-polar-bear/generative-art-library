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

import { ColorComponents, checkForValidHexColorString } from './color';
import { checkForValidStringMap } from './map';
import { checkNumberWithinAmount } from './math';

export const getColorsArray = (colors: PaletteColor[]): Color[] => {
    'use strict';
    return colors.map((color: PaletteColor) => new Color(color));
};

export const checkComponents = (components: ColorComponents, paletteColor: PaletteColor): void => {
    'use strict';
    checkNumberWithinAmount(components.r, paletteColor.RGB.R, 1);
    checkNumberWithinAmount(components.g, paletteColor.RGB.G, 1);
    checkNumberWithinAmount(components.b, paletteColor.RGB.B, 1);
};

const checkForValidContrastMap = (palette: Palette): void => {
    'use strict';
    const validHexes: string[] = palette.COLORS.map((color: PaletteColor): string => color.HEX);

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
            if (Object.prototype.hasOwnProperty.call(palette.CONTRAST_MAP, key)) {
                checkForValidHexColorString(key);
                expect(validHexes).toContain(key);

                for (const hex of palette.CONTRAST_MAP[key]) {
                    checkForValidHexColorString(hex);
                    expect(validHexes).toContain(hex);

                    const meetsNormalRatio: boolean = ColorContrastAssessor.meetsContrastStandard(
                        key,
                        hex,
                        ContrastStandard.AA,
                        ContrastFontSize.NORMAL
                    );
                    const meetsLargeRatio: boolean = ColorContrastAssessor.meetsContrastStandard(
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
};

export const checkForValidPalette = (palette: Palette, expectedColors?: PaletteColor[]): void => {
    'use strict';
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
};

export const checkForPaletteInMap = (palette: Palette, map: StringMap<Palette>): void => {
    'use strict';
    checkForValidStringMap(map);
    checkForValidPalette(palette);
    const actualPalette: Palette | undefined = map.get(palette.NAME);
    expect(actualPalette).toBeTruthy();
    expect(actualPalette).toEqual(palette);
};
