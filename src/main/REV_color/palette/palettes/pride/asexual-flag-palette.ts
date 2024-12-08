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
import { Discriminators } from 'discriminator';
import { PC_000000, PC_80007F, PC_A3A3A3, PC_FFFFFF } from 'palette-colors';

import { ALL_PALETTES, PRIDE_PALETTES } from '../../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="08264250835324647">new CoolorsPaletteWidget("08264250835324647", ["000000","a3a3a3","ffffff","80007f"],"asexual flag"); </script>
 *
 * @see {@link PC_000000}
 * @see {@link PC_A3A3A3}
 * @see {@link PC_FFFFFF}
 * @see {@link PC_80007F}
 *
 * @category Palettes (All)
 * @category Palettes (Pride)
 */
export const ASEXUAL_FLAG_PALETTE: Palette = {
    NAME: 'asexual flag',
    SOURCE: 'flagcolorcodes: Asexual Flag Color Codes',
    SOURCE_URL: 'https://www.flagcolorcodes.com/asexual',
    IS_GRADIENT: false,
    DISCRIMINATOR: Discriminators.PALETTE,

    COLORS: [
        PC_000000,
        PC_A3A3A3,
        PC_FFFFFF,
        PC_80007F
    ],

    CONTRAST_MAP: {
        '#000000': ['#A3A3A3', '#FFFFFF'],
        '#A3A3A3': ['#000000'],
        '#FFFFFF': ['#000000', '#80007F'],
        '#80007F': ['#FFFFFF']
    }
};

ALL_PALETTES.setUndefinedKey(ASEXUAL_FLAG_PALETTE.NAME, ASEXUAL_FLAG_PALETTE);
PRIDE_PALETTES.setUndefinedKey(ASEXUAL_FLAG_PALETTE.NAME, ASEXUAL_FLAG_PALETTE);
