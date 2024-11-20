/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

// #ffa852
// #FFA852
// pumpkin vapour
// black-pass
// luminance: 0.4987445986

// TODO - current step: Step 5: Add the Color to the `PaletteColor` Maps

import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

export const PC_FFA852: PaletteColor = {
    HEX: '#FFA852',
    RGB: { R: 255, G: 168, B: 82 },
    HSL: { H: 30, S: 100, L: 66 },
    NAME: 'pumpkin vapour',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};
