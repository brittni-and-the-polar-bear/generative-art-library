/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's @batpb/genart algorithmic art library,
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

import { ColorNames } from 'color';
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
 * @see {@link WHITE_LILY_PALETTE}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Purple)
 */
export const PC_AEAED6: PaletteColor = {
    HEX: '#AEAED6',
    RGB: { R: 174, G: 174, B: 214 },
    HSL: { H: 240, S: 33, L: 76 },
    NAME: 'pixie violet',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_AEAED6.HEX, PC_AEAED6);
PURPLE_PALETTE_COLORS.setUndefinedKey(PC_AEAED6.HEX, PC_AEAED6);
ColorNameManager.addColor(PC_AEAED6);
