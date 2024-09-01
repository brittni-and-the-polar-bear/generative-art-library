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
import {
    PC_003494,
    PC_041E43,
    PC_7E9594,
    PC_869498,
    PC_FFFFFF
} from 'palette-colors';
import { DALLAS_COWBOYS_PALETTE } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'DALLAS_COWBOYS_PALETTE';

describe('DALLAS_COWBOYS_PALETTE palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        PC_041E43,
        PC_869498,
        PC_FFFFFF,
        PC_7E9594,
        PC_003494
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(DALLAS_COWBOYS_PALETTE, expectedColors);
    });
});
