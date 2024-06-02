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

import {PURPLE_PALETTE_COLORS} from 'palette-colors';

import {PURPLE_HEXES, checkForValidStringMap} from 'unit-test/shared';

describe('purple palette colors', (): void => {
    test('valid string map: PURPLE_PALETTE_COLORS', (): void => {
       checkForValidStringMap(PURPLE_PALETTE_COLORS);
       expect(PURPLE_PALETTE_COLORS.size).toBe(PURPLE_HEXES.length);
    });

    test.each(
        PURPLE_HEXES
    )('$# successful addition of purple color: $hexString',
        ({hexString}): void => {
            expect(PURPLE_HEXES).toBeTruthy();
            expect(new Set<string>(PURPLE_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );

    test.todo('all color objects are in the map');

    test.todo('all keys match palette color hex');
});
