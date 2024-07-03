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

import {PaletteColor} from 'palette';
import {PINK_PALETTE_COLORS} from 'palette-colors';

import {
    PINK_HEXES,
    checkForValidStringMap,
    checkForValidHexColorString,
    checkForValidPaletteColor
} from 'unit-test/shared';

describe('pink palette colors', (): void => {
    test('valid string map: PINK_PALETTE_COLORS', (): void => {
        checkForValidStringMap(PINK_PALETTE_COLORS);
        expect(PINK_PALETTE_COLORS.size).toBe(PINK_HEXES.length);
    });

    test.each(
        PINK_HEXES
    )('$# successful addition of pink color: $hexString',
        ({hexString}): void => {
            expect(PINK_HEXES).toBeTruthy();
            expect(new Set<string>(PINK_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );

    test.each(
        PINK_HEXES
    )('$# - successful addition of pink color: $hexString',
        ({hexString}): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = PINK_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                expect(pc.HEX).toBe(hexString);
            }
        }
    );

    test.each(
        PINK_HEXES
    )('$# - valid pink color: $hexString',
        ({hexString}): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = PINK_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                checkForValidPaletteColor(pc);
            }
        }
    );
});
