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
import {RED_PALETTE_COLORS} from 'palette-colors';

import {
    RED_HEXES,
    checkForValidStringMap,
    checkForValidHexColorString,
    checkForValidPaletteColor
} from 'unit-test/shared';

describe('red palette colors', (): void => {
    test('valid string map: RED_PALETTE_COLORS', (): void => {
        checkForValidStringMap(RED_PALETTE_COLORS);
        expect(RED_PALETTE_COLORS.size).toBe(RED_HEXES.length);
    });

    test.each(
        RED_HEXES
    )('$# successful addition of red color: $hexString',
        ({hexString}): void => {
            expect(RED_HEXES).toBeTruthy();
            expect(new Set<string>(RED_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );

    test.each(
        RED_HEXES
    )('$# - successful addition of red color: $hexString',
        ({hexString}): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = RED_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                expect(pc.HEX).toBe(hexString);
            }
        }
    );

    test.each(
        RED_HEXES
    )('$# - valid red color: $hexString',
        ({hexString}): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = RED_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                checkForValidPaletteColor(pc);
            }
        }
    );
});
