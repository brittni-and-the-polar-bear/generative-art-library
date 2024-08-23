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
import { PC_EC417A, PC_F06090, PC_F490B1, PC_F8B9CE, PC_FCE3EC } from 'palette-colors';
import { GLITTER_PALETTE } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'GLITTER';

describe('GLITTER_PALETTE palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        PC_FCE3EC,
        PC_F8B9CE,
        PC_F490B1,
        PC_F06090,
        PC_EC417A
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(GLITTER_PALETTE, expectedColors);
    });
});
