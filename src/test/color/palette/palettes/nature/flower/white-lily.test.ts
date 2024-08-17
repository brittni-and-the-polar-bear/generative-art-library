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
import { _5F8661, _AEAED6, _B1C69F, _D6D6FF, _FAFBEF } from 'palette-colors';
import { WHITE_LILY } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'WHITE_LILY';

describe('WHITE_LILY palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        _FAFBEF,
        _B1C69F,
        _5F8661,
        _D6D6FF,
        _AEAED6
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(WHITE_LILY, expectedColors);
    });
});