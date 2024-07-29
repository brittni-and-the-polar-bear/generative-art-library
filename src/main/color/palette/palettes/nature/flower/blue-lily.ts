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
import {Discriminators} from "discriminator";
import {_1D90AF, _3B2212, _7DCED8, _F0F3F4, _FAFEFF} from "palette-colors";
import {FLOWER_PALETTES} from "../../palette-maps/nature-maps/flower-maps";
import {ALL_PALETTES, NATURE_PALETTES} from "../../palette-maps";

export const BLUE_LILY: Palette = {
    NAME: 'blue lily',

    SOURCE: 'https://www.color-hex.com/color-palette/1040636',

    IS_GRADIENT: false,

    COLORS: [
        _F0F3F4,
        _FAFEFF,
        _7DCED8,
        _1D90AF,
        _3B2212
    ],

    CONTRAST_MAP: {
        '#000000': ['#F0F3F4', '#FAFEFF', '#7DCED8', '#1D90AF'],
        '#FFFFFF': ['#3B2212'],
        '#F0F3F4': ['#000000', '#3B2212'],
        '#FAFEFF': ['#000000', '#3B2212'],
        '#7DCED8': ['#000000', '#3B2212'],
        '#1D90AF': ['#000000'],
        '#3B2212': ['#FFFFFF', '#F0F3F4', '#FAFEFF', '#7DCED8']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

FLOWER_PALETTES.setUndefinedKey(BLUE_LILY.NAME, BLUE_LILY);
NATURE_PALETTES.setUndefinedKey(BLUE_LILY.NAME, BLUE_LILY);
ALL_PALETTES.setUndefinedKey(BLUE_LILY.NAME, BLUE_LILY);
