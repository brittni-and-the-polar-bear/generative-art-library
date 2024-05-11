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

import {ColorNameManager} from 'color';

describe('color name manager test', (): void => {
    test.each([
        {hex: 'this is not a hex', expectedName: undefined},
        {hex: '000000', expectedName: 'black'},
        {hex: '#000000', expectedName: 'black'}
        // random color lowercase
        // with hash
        // without hash
        // random color uppercase
        // with hash
        // without hash
    ])('$# get color name: $hex ($expectedName)',
        ({hex, expectedName}): void => {
            const name: string | undefined = ColorNameManager.getColorName(hex);
            expect(name).toBe(expectedName);
        }
    );

    //  test -> nearest color is only created once
    // test -> lowercase and capital hexes are only set once
});
