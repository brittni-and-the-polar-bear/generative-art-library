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

import {ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #007058;">
 *     <a href="https://coolors.co/007058" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">teal dark green (#007058)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Green)
 */
export const _007058: PaletteColor = {
    HEX: '#007058',
    RGB: {
        R: 0,
        G: 112,
        B: 88
    },
    HSL: {
        H: 167,
        S: 100,
        L: 22
    },
    NAME: 'teal dark green',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(_007058.HEX, _007058);
GREEN_PALETTE_COLORS.setUndefinedKey(_007058.HEX, _007058);
ColorNameManager.addColor(_007058);
