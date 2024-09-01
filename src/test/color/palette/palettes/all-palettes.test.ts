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

import { StringMap } from 'map';
import { Palette, PaletteColor } from 'palette';
import {
    ALL_PALETTES,
    HOLIDAY_PALETTES,
    MISCELLANEOUS_PALETTES,
    NATURE_PALETTES,
    SPORTS_PALETTES
} from 'palettes';

import { checkForPaletteInMap, checkForValidStringMap } from 'unit-test/shared';

function getPaletteArray(map: StringMap<Palette>): { palette: Palette }[] {
    const palettes: Palette[] = Array.from(map.values);
    return palettes.map((p: Palette): { palette: Palette } => {
        return { palette: p };
    });
}

const EXPECTED_PALETTES: { palette: Palette }[] = [];
EXPECTED_PALETTES.push(
    ...(getPaletteArray(HOLIDAY_PALETTES)),
    ...(getPaletteArray(MISCELLANEOUS_PALETTES)),
    ...(getPaletteArray(NATURE_PALETTES)),
    ...(getPaletteArray(SPORTS_PALETTES))
);

describe('all palettes tests', (): void => {
    test('valid string map: ALL_PALETTES', (): void => {
        checkForValidStringMap(ALL_PALETTES, EXPECTED_PALETTES.length);
    });

    test.each(
        EXPECTED_PALETTES
    )('$# palette successfully added to ALL_PALETTES map: $palette.NAME',
        ({ palette }): void => {
            checkForPaletteInMap(palette, ALL_PALETTES);
        }
    );

    test('all palettes are unique', (): void => {
        const colorSets: Set<Set<string>> = new Set<Set<string>>();
        const names: Set<string> = new Set<string>();

        for (const palette of ALL_PALETTES.values) {
            const hexStrings: string[] = palette.COLORS.map((color: PaletteColor): string => {
                return color.HEX;
            });
            const hexSet: Set<string> = new Set<string>(hexStrings);

            expect(colorSets).not.toContainEqual(hexSet);
            expect(names).not.toContain(palette.NAME);

            colorSets.add(hexSet);
            names.add(palette.NAME);
        }
    });
});
