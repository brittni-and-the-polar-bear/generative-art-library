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
import { PC_5F8661, PC_AEAED6, PC_B1C69F, PC_D6D6FF, PC_FAFBEF } from 'palette-colors';
import { ALL_PALETTES, FLOWER_PALETTES, NATURE_PALETTES } from 'palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="08679171490640973">new CoolorsPaletteWidget("08679171490640973", ["fafbef","b1c69f","5f8661","d6d6ff","aeaed6"],"white lily"); </script>
 *
 * @see {@link PC_FAFBEF}
 * @see {@link PC_B1C69F}
 * @see {@link PC_5F8661}
 * @see {@link PC_D6D6FF}
 * @see {@link PC_AEAED6}
 *
 * @category Palettes (Nature/Flowers)
 * @category Palettes (Nature)
 * @category Palettes (All)
 */
export const WHITE_LILY_PALETTE: Palette = {
    NAME: 'white lily',

    SOURCE: 'color-hex (user: adamcesco)',

    SOURCE_URL: 'https://www.color-hex.com/color-palette/1039504',

    IS_GRADIENT: false,

    COLORS: [
        PC_FAFBEF,
        PC_B1C69F,
        PC_5F8661,
        PC_D6D6FF,
        PC_AEAED6
    ],

    CONTRAST_MAP: {
        '#000000': [
            '#FAFBEF',
            '#B1C69F',
            '#5F8661',
            '#D6D6FF',
            '#AEAED6'
        ],
        '#FFFFFF': [],
        '#FAFBEF': ['#000000'],
        '#B1C69F': ['#000000'],
        '#5F8661': ['#000000'],
        '#D6D6FF': ['#000000'],
        '#AEAED6': ['#000000']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

FLOWER_PALETTES.setUndefinedKey(WHITE_LILY_PALETTE.NAME, WHITE_LILY_PALETTE);
NATURE_PALETTES.setUndefinedKey(WHITE_LILY_PALETTE.NAME, WHITE_LILY_PALETTE);
ALL_PALETTES.setUndefinedKey(WHITE_LILY_PALETTE.NAME, WHITE_LILY_PALETTE);
