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
import { Discriminators } from 'discriminator';
import { Palette } from 'palette';
import { PC_007058, PC_23856D, _BC010A, _D01625, _FBF9F9 } from 'palette-colors';

import { ALL_PALETTES, CHRISTMAS_PALETTES, HOLIDAY_PALETTES } from '../../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="048851888975141655">new CoolorsPaletteWidget("048851888975141655", ["bc010a","d01625","007058","23856d","fbf9f9"],"classic christmas"); </script>
 *
 * @see {@link _BC010A}
 * @see {@link _D01625}
 * @see {@link PC_007058}
 * @see {@link PC_23856D}
 * @see {@link _FBF9F9}
 *
 * @category Palettes (Holiday/Christmas)
 * @category Palettes (Holiday)
 * @category Palettes (All)
 */
export const CLASSIC_CHRISTMAS: Palette = {
    NAME: 'classic christmas',

    SOURCE: 'https://coolors.co/palette/bb010b-cd1624-006f57-23856d-faf8f8',

    IS_GRADIENT: false,

    COLORS: [
        _BC010A,
        _D01625,
        PC_007058,
        PC_23856D,
        _FBF9F9
    ],

    CONTRAST_MAP: {
        '#000000': [
            '#23856D',
            '#FBF9F9'
        ],
        '#FFFFFF': [
            '#BC010A',
            '#D01625',
            '#007058',
            '#23856D'
        ],
        '#007058': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#23856D': [
            '#FFFFFF',
            '#000000'
        ],
        '#BC010A': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#D01625': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#FBF9F9': [
            '#BC010A',
            '#D01625',
            '#007058',
            '#000000'
        ]
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

CHRISTMAS_PALETTES.setUndefinedKey(CLASSIC_CHRISTMAS.NAME, CLASSIC_CHRISTMAS);
HOLIDAY_PALETTES.setUndefinedKey(CLASSIC_CHRISTMAS.NAME, CLASSIC_CHRISTMAS);
ALL_PALETTES.setUndefinedKey(CLASSIC_CHRISTMAS.NAME, CLASSIC_CHRISTMAS);
