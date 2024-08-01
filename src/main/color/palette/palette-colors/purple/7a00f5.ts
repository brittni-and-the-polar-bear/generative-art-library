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

import {ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #7A00F5;">
 *     <a href="https://coolors.co/7a00f5" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">poison purple (#7A00F5)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Purple)
 */
export const _7A00F5: PaletteColor = {
    HEX: '#7A00F5',
    RGB: {R: 122, G: 0, B: 245},
    HSL: {H: 270, S: 100, L: 48},
    NAME: 'poison purple',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PURPLE_PALETTE_COLORS.setUndefinedKey(_7A00F5.HEX, _7A00F5);
ALL_PALETTE_COLORS.setUndefinedKey(_7A00F5.HEX, _7A00F5);
ColorNameManager.addColor(_7A00F5);
