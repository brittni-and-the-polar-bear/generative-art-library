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

// #7dced8
// #7DCED8
// 187°, 54%, 67%
// 125, 206, 216
// spray
// luminance: 0.5346045524
// black pass

import {ColorNameManager} from 'color';
import {Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS} from '../palette-color-maps';

export const _7DCED8: PaletteColor = {
    HEX: '#7DCED8',
    RGB: {R: 125, G: 206, B: 216},
    HSL: {H: 187, S: 54, L: 67},
    NAME: 'spray',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(_7DCED8.HEX, _7DCED8);
ALL_PALETTE_COLORS.setUndefinedKey(_7DCED8.HEX, _7DCED8);
ColorNameManager.addColor(_7DCED8);
