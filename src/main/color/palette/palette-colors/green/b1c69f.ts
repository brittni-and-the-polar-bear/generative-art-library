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

// #b1c69f
// #B1C69F
// 92°, 25%, 70%
// 177, 198, 159
// wasabi peanut
// black-pass
// luminance - 0.5223848169

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #B1C69F;">
 *     <a href="https://coolors.co/b1c69f" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">wasabi peanut (#B1C69F)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Green)
 * @category Palette Colors (All)
 */
export const _B1C69F: PaletteColor = {
    HEX: '#B1C69F',
    RGB: { R: 177, G: 198, B: 159 },
    HSL: { H: 92, S: 25, L: 70 },
    NAME: 'wasabi peanut',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

GREEN_PALETTE_COLORS.setUndefinedKey(_B1C69F.HEX, _B1C69F);
ALL_PALETTE_COLORS.setUndefinedKey(_B1C69F.HEX, _B1C69F);
ColorNameManager.addColor(_B1C69F);
