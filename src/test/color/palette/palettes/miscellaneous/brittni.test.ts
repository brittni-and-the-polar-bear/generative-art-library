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

import { PaletteColor } from 'palette';
import { PC_0437F1, PC_0FFF4F, PC_121212, PC_7A00F5, PC_FF6BB5 } from 'palette-colors';
import { BRITTNI_PALETTE } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'BRITTNI';

describe('BRITTNI_PALETTE palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        PC_121212,
        PC_0437F1,
        PC_FF6BB5,
        PC_0FFF4F,
        PC_7A00F5
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(BRITTNI_PALETTE, expectedColors);
    });
});
