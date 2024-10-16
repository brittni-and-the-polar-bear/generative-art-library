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

// #a3a3a3
// #A3A3A3
// 0°, 0%, 64%
// 163, 163, 163
// dark souls
// black-pass
// luminance - 0.3662525956

import {PaletteColor} from "palette";
import {Discriminators} from "discriminator";
import {ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS} from "../palette-color-maps";
import {ColorNameManager} from "color";

export const PC_A3A3A3: PaletteColor = {
    HEX: '#A3A3A3',
    RGB: { R: 163, G: 163, B: 163 },
    HSL: { H: 0, S: 0, L: 64 },
    NAME: 'dark souls',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_A3A3A3.HEX, PC_A3A3A3);
GRAY_PALETTE_COLORS.setUndefinedKey(PC_A3A3A3.HEX, PC_A3A3A3);
ColorNameManager.addColor(PC_A3A3A3);
