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

import {GREEN_PALETTE_COLORS} from 'palette-colors';
import {checkForValidStringMap} from 'unit-test/shared';

export const GREEN_HEXES: {hexString: string}[] = [
    {hexString: '#006F57'},
    {hexString: '#0FFF4F'},
    {hexString: '#23856D'}
];

describe('green palette colors', (): void => {
    test('valid string map: GREEN_PALETTE_COLORS', (): void => {
       checkForValidStringMap(GREEN_PALETTE_COLORS);
    });

    test.each(
        GREEN_HEXES
    )('$# successful addition of green color: $hexString',
        ({hexString}): void => {
            expect(GREEN_HEXES).toBeTruthy();
            expect(new Set<string>(GREEN_PALETTE_COLORS.keys)).toContain(hexString);
        }
    );
});
