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

import {ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FBF9F9;">
 *     <a href="https://coolors.co/fbf9f9" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">doctor white (#FBF9F9)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (White)
 */
export const _FBF9F9: PaletteColor = {
    HEX: '#FBF9F9',
    RGB: {
        R: 251,
        G: 249,
        B: 249
    },
    HSL: {
        H: 0,
        S: 20,
        L: 98
    },
    NAME: 'doctor white',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(_FBF9F9.HEX, _FBF9F9);
WHITE_PALETTE_COLORS.setUndefinedKey(_FBF9F9.HEX, _FBF9F9);
ColorNameManager.addColor(_FBF9F9);
