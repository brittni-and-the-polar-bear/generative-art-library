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

import { Palette } from 'palette';
import { GLITTER_PALETTE, GRADIENT_PALETTES } from 'palettes';

import { checkForPaletteInMap, checkForValidStringMap } from 'unit-test/shared';

const EXPECTED_PALETTES: { palette: Palette }[] = [
    { palette: GLITTER_PALETTE }
];

const MAP_NAME: string = 'GRADIENT_PALETTES';

describe('gradient palettes map test', (): void => {
    test(`valid string map: ${MAP_NAME}`, (): void => {
        checkForValidStringMap(GRADIENT_PALETTES, EXPECTED_PALETTES.length);
    });

    test.each(
        EXPECTED_PALETTES
    )(`$# palette successfully added to ${MAP_NAME} map: $palette.NAME`,
        ({ palette }): void => {
            checkForPaletteInMap(palette, GRADIENT_PALETTES);
            expect(palette.IS_GRADIENT).toBeTruthy();
        }
    );
});
