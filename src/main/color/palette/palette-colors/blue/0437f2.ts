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

import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #0437F2;">
 *     <a href="https://coolors.co/0437f2" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">vibrant blue (#0437F2)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Blue)
 *
 * @source
 */
export const _0437F2: PaletteColor = {
    HEX: '#0437F2',
    RGB: {R: 4, G: 55, B: 241},
    HSL: {H: 227, S: 97, L: 48},
    NAME: 'vibrant blue'
};

BLUE_PALETTE_COLORS.setUndefinedKey(_0437F2.HEX, _0437F2);
ALL_PALETTE_COLORS.setUndefinedKey(_0437F2.HEX, _0437F2);
