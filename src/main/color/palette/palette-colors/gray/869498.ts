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

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #869498;">
 *     <a href="https://coolors.co/869498" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">carrier pigeon blue (#869498)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Gray)
 * @category Palette Colors (All)
 */
export const _869498: PaletteColor = {
    HEX: '#869498',
    RGB: { R: 134, G: 148, B: 152 },
    HSL: { H: 193, S: 8, L: 56 },
    NAME: 'carrier pigeon blue',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

GRAY_PALETTE_COLORS.setUndefinedKey(_869498.HEX, _869498);
ALL_PALETTE_COLORS.setUndefinedKey(_869498.HEX, _869498);
ColorNameManager.addColor(_869498);