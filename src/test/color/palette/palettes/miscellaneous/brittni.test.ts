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

import { PaletteColor } from 'palette';
import { _0437F1, _0FFF4F, _121212, _7A00F5, _FF6BB5 } from 'palette-colors';
import { BRITTNI } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'BRITTNI';

describe('BRITTNI palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        _121212,
        _0437F1,
        _0FFF4F,
        _7A00F5,
        _FF6BB5
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(BRITTNI, expectedColors);
    });
});
