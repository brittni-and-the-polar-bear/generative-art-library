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

// #f0f3f4
// #F0F3F4
// 195°, 15%, 95%
// 240, 243, 244
// zappy zebra
// luminance - 0.8915810279
// black-pass

import {ColorNameManager} from 'color';
import {Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #F0F3F4;">
 *     <a href="https://coolors.co/f0f3f4" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">zappy zebra (#F0F3F4)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Gray)
 *
 * @source
 */
export const _F0F3F4: PaletteColor = {
    HEX: '#F0F3F4',
    RGB: {R: 240, G: 243, B: 244},
    HSL: {H: 195, S: 15, L: 95},
    NAME: 'zappy zebra',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

GRAY_PALETTE_COLORS.setUndefinedKey(_F0F3F4.HEX, _F0F3F4);
ALL_PALETTE_COLORS.setUndefinedKey(_F0F3F4.HEX, _F0F3F4);
ColorNameManager.addColor(_F0F3F4);
