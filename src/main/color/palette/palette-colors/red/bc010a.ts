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

import {ALL_PALETTE_COLORS, RED_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #BC010A;">
 *     <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 *
 * @source
 */
export const _BC010A: PaletteColor = {
    HEX: '#BC010A',
    RGB: {R: 188, G: 1, B: 10},
    HSL: {H: 357, S: 99, L: 37},
    NAME: "bird's eye",
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
}

RED_PALETTE_COLORS.setUndefinedKey(_BC010A.HEX, _BC010A);
ALL_PALETTE_COLORS.setUndefinedKey(_BC010A.HEX, _BC010A);
ColorNameManager.addColor(_BC010A);
