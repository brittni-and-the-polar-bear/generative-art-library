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

import {Palette} from 'palette';
import {CHRISTMAS_PALETTES, MUTED_CHRISTMAS} from 'palettes';

import {checkForPaletteInMap, checkForValidStringMap} from 'unit-test/shared';

const EXPECTED_PALETTES: {palette: Palette}[] = [
    {palette: MUTED_CHRISTMAS}
]

const MAP_NAME: string = 'CHRISTMAS_PALETTES';

describe('christmas palettes map test', (): void => {
    test(`valid string map: ${MAP_NAME}`, (): void => {
        checkForValidStringMap(CHRISTMAS_PALETTES, EXPECTED_PALETTES.length);
    });

    test.each(
        EXPECTED_PALETTES
    )(`$# palette successfully added to ${MAP_NAME} map: $palette.NAME`,
        ({palette}): void => {
            checkForPaletteInMap(palette, CHRISTMAS_PALETTES);
        }
    );
});
