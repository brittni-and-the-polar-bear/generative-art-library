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
import { _1D90AF, _3B2212, _7DCED8, _F0F3F4, _FAFEFF } from 'palette-colors';
import { BLUE_LILY } from 'palettes';

import { checkForValidPalette } from 'unit-test/shared';

const PALETTE_NAME: string = 'BLUE_LILY';

describe('BLUE_LILY palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        _F0F3F4,
        _FAFEFF,
        _7DCED8,
        _1D90AF,
        _3B2212
    ];

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(BLUE_LILY, expectedColors);
    });
});
