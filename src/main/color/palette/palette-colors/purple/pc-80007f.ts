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

// #80007f
// #80007F
// 300°, 100%, 25%
// 128, 0, 127
// philippine violet
// white-pass
// 0.061215003

// TODO - next step - documentation

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS } from '../palette-color-maps';

export const PC_80007F: PaletteColor = {
    HEX: '#80007F',
    HSL: { H: 300, S: 100, L: 25 },
    RGB: { R: 128, G: 0, B: 127 },
    NAME: 'philippine violet',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_80007F.HEX, PC_80007F);
PURPLE_PALETTE_COLORS.setUndefinedKey(PC_80007F.HEX, PC_80007F);
ColorNameManager.addColor(PC_80007F);
