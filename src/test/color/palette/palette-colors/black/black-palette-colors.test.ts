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

import {BLACK_PALETTE_COLORS} from 'palette-colors';
import {BLACK_HEXES, checkForValidStringMap} from 'unit-test/shared';

describe('black palette colors', (): void => {
    test('valid string map: BLACK_PALETTE_COLORS', (): void => {
       checkForValidStringMap(BLACK_PALETTE_COLORS);
       expect(BLACK_PALETTE_COLORS.size).toBe(BLACK_HEXES.length);
    });

    test.each(
        BLACK_HEXES
    )('$# successful addition of black color: $hexString',
        ({hexString}): void => {
            expect(BLACK_HEXES).toBeTruthy();
            expect(new Set<string>(BLACK_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );
});
