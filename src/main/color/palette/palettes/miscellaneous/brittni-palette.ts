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

import { Discriminators } from 'discriminator';
import { Palette } from 'palette';
import { PC_0437F1, PC_0FFF4F, PC_121212, PC_7A00F5, PC_FF6BB5 } from 'palette-colors';
import { ALL_PALETTES, MISCELLANEOUS_PALETTES } from 'palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="03724492652337519">new CoolorsPaletteWidget("03724492652337519", ["121212","0437f1","ff6bb5","0fff4f","7a00f5"],"brittni"); </script>
 *
 * @see {@link PC_121212}
 * @see {@link PC_0437F1}
 * @see {@link PC_FF6BB5}
 * @see {@link PC_0FFF4F}
 * @see {@link PC_7A00F5}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 */
export const BRITTNI_PALETTE: Palette = {
    NAME: 'brittni',

    SOURCE: 'brittni watkins',

    SOURCE_URL: 'https://github.com/blwatkins',

    IS_GRADIENT: false,

    COLORS: [
        PC_121212,
        PC_0437F1,
        PC_FF6BB5,
        PC_0FFF4F,
        PC_7A00F5
    ],

    CONTRAST_MAP: {
        '#000000': [
            '#0FFF4F',
            '#FF6BB5'
        ],
        '#FFFFFF': [
            '#121212',
            '#0437F1',
            '#7A00F5'
        ],
        '#121212': [
            '#FFFFFF',
            '#0FFF4F',
            '#FF6BB5'
        ],
        '#0437F1': [
            '#FFFFFF',
            '#0FFF4F'
        ],
        '#FF6BB5': [
            '#000000',
            '#121212'
        ],
        '#0FFF4F': [
            '#000000',
            '#121212',
            '#0437F1',
            '#7A00F5'
        ],
        '#7A00F5': [
            '#FFFFFF',
            '#0FFF4F'
        ]
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

ALL_PALETTES.setUndefinedKey(BRITTNI_PALETTE.NAME, BRITTNI_PALETTE);
MISCELLANEOUS_PALETTES.setUndefinedKey(BRITTNI_PALETTE.NAME, BRITTNI_PALETTE);
