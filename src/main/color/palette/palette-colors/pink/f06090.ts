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

import {ColorNameManager} from 'color';
import {Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, PINK_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #F06090;">
 *     <a href="https://coolors.co/f06090" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">medium pink (#F06090)</h2>
 *     </a>
 * </div>
 *
 * @see {@link GLITTER}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 */
export const _F06090: PaletteColor = {
    HEX: '#F06090',
    RGB: {R: 240, G: 96, B: 144},
    HSL: {H: 340, S: 83, L: 66},
    NAME: 'medium pink',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PINK_PALETTE_COLORS.setUndefinedKey(_F06090.HEX, _F06090);
ALL_PALETTE_COLORS.setUndefinedKey(_F06090.HEX, _F06090);
ColorNameManager.addColor(_F06090);
