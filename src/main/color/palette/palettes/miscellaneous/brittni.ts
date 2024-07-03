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

import {Discriminators} from 'discriminator';
import {Palette} from 'palette';
import {_0437F1, _0FFF4F, _121212, _7A00F5, _FF6BB5} from 'palette-colors';

import {ALL_PALETTES, MISCELLANEOUS_PALETTES} from '../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
 *
 * @see {@link _121212}
 * @see {@link _0437F1}
 * @see {@link _0FFF4F}
 * @see {@link _7A00F5}
 * @see {@link _FF6BB5}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 */
export const BRITTNI: Palette = {
    NAME: 'brittni',

    SOURCE: 'brittni',

    IS_GRADIENT: false,

    COLORS: [
        _121212,
        _0437F1,
        _0FFF4F,
        _7A00F5,
        _FF6BB5
    ],

    CONTRAST_MAP: {
        '#000000': ['#0FFF4F', '#FF6BB5'],
        '#FFFFFF': ['#121212', '#0437F1', '#7A00F5'],
        '#121212': ['#FFFFFF', '#0FFF4F', '#FF6BB5'],
        '#0437F1': ['#FFFFFF', '#0FFF4F'],
        '#0FFF4F': ['#000000', '#121212', '#0437F1', '#7A00F5'],
        '#7A00F5': ['#FFFFFF', '#0FFF4F'],
        '#FF6BB5': ['#000000', '#121212']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

ALL_PALETTES.setUndefinedKey(BRITTNI.NAME, BRITTNI);
MISCELLANEOUS_PALETTES.setUndefinedKey(BRITTNI.NAME, BRITTNI);
