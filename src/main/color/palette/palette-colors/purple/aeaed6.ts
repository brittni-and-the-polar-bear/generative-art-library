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

// #aeaed6
// #AEAED6
// 240°, 33%, 76%
// 174, 174, 214
// pixie violet
// black-pass
// luminance: 0.4412581401

import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #AEAED6;">
 *     <a href="https://coolors.co/aeaed6" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">pixie violet (#AEAED6)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Purple)
 * @category Palette Colors (All)
 */
export const _AEAED6: PaletteColor = {
    HEX: '#AEAED6',
    RGB: { R: 174, G: 174, B: 214 },
    HSL: { H: 240, S: 33, L: 76 },
    NAME: 'pixie violet',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PURPLE_PALETTE_COLORS.setUndefinedKey(_AEAED6.HEX, _AEAED6);
ALL_PALETTE_COLORS.setUndefinedKey(_AEAED6.HEX, _AEAED6);
