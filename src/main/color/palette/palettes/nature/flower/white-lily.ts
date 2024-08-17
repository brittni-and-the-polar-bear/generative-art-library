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
import { _5F8661, _AEAED6, _B1C69F, _D6D6FF, _FAFBEF } from 'palette-colors';

export const WHITE_LILY: Palette = {
    NAME: 'white lily',

    SOURCE: 'https://www.color-hex.com/color-palette/1039504',

    IS_GRADIENT: false,

    COLORS: [
        _FAFBEF,
        _B1C69F,
        _5F8661,
        _D6D6FF,
        _AEAED6
    ],

    CONTRAST_MAP: {
        '#000000': ['#FAFBEF', '#B1C69F', '#5F8661', '#D6D6FF', '#AEAED6'],
        '#FFFFFF': [],
        '#FAFBEF': ['#000000'],
        '#B1C69F': ['#000000'],
        '#5F8661': ['#000000'],
        '#D6D6FF': ['#000000'],
        '#AEAED6': ['#000000']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};
