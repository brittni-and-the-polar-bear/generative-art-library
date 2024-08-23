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

// #ffffff
// #FFFFFF
// 0°, 0%, 100%
// 255, 255, 255
// white
// black-pass
// luminance: 1.0

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS } from '../palette-color-maps';

export const PC_FFFFFF: PaletteColor = {
    HEX: '#FFFFFF',
    RGB: { R: 255, G: 255, B: 255 },
    HSL: { H: 0, S: 0, L: 100 },
    NAME: 'white',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

WHITE_PALETTE_COLORS.setUndefinedKey(PC_FFFFFF.HEX, PC_FFFFFF);
ALL_PALETTE_COLORS.setUndefinedKey(PC_FFFFFF.HEX, PC_FFFFFF);
ColorNameManager.addColor(PC_FFFFFF);
