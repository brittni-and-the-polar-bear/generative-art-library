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
 * <div class="color-block" style="background: #F490B1;">
 *     <a href="https://coolors.co/f490b1" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">sachet pink (#F490B1)</h2>
 *     </a>
 * </div>
 *
 * @see {@link GLITTER}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 */
export const _F490B1: PaletteColor = {
    HEX: '#F490B1',
    RGB: {
        R: 244,
        G: 144,
        B: 177
    },
    HSL: {
        H: 340,
        S: 82,
        L: 76
    },
    NAME: 'sachet pink',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PINK_PALETTE_COLORS.setUndefinedKey(_F490B1.HEX, _F490B1);
ALL_PALETTE_COLORS.setUndefinedKey(_F490B1.HEX, _F490B1);
ColorNameManager.addColor(_F490B1);
