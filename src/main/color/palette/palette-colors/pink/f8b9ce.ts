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
 * <div class="color-block" style="background: #F8B9CE;">
 *     <a href="https://coolors.co/f8b9ce" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">christy's smile (#F8B9CE)</h2>
 *     </a>
 * </div>
 *
 * @see {@link GLITTER}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 */
export const _F8B9CE: PaletteColor = {
    HEX: '#F8B9CE',
    RGB: {R: 248, G: 185, B: 206},
    HSL: {H: 340, S: 82, L: 85},
    NAME: "christy's smile",
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PINK_PALETTE_COLORS.setUndefinedKey(_F8B9CE.HEX, _F8B9CE);
ALL_PALETTE_COLORS.setUndefinedKey(_F8B9CE.HEX, _F8B9CE);
ColorNameManager.addColor(_F8B9CE);
