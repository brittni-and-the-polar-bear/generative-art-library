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

import {PaletteColor} from "palette";
import {Discriminators} from "discriminator";
import {ALL_PALETTE_COLORS, PINK_PALETTE_COLORS} from "../palette-color-maps";
import {ColorNameManager} from "color";

// #ec417a
// #EC417A
// 340°, 82%, 59%
// 236, 65, 122
// radishical

export const _EC417A: PaletteColor = {
    HEX: '#EC417A',
    RGB: {R: 236, G: 65, B: 122},
    HSL: {H: 340, S: 82, L: 59},
    NAME: 'radishical',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PINK_PALETTE_COLORS.setUndefinedKey(_EC417A.HEX, _EC417A);
ALL_PALETTE_COLORS.setUndefinedKey(_EC417A.HEX, _EC417A);
ColorNameManager.addColor(_EC417A);
