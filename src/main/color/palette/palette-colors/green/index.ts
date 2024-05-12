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

import {StringMap} from 'map'
import {addColor, PaletteColor} from 'palette';

/**
 * A map of hex values to {@link PaletteColor} objects for all
 * green palette colors.
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/all-colors.html#green target="_blank" rel="noopener noreferrer"">See the Colors</a>
 * @category Palette
 * @category Palette Color Collection
 * @category Palette Colors (Green)
 */
const GREEN_PALETTE_COLORS: StringMap<PaletteColor> = new StringMap<PaletteColor>();
const mapName: string = 'GREEN_PALETTE_COLORS';

import {_0FFF4F} from './0fff4f';
addColor(_0FFF4F, GREEN_PALETTE_COLORS, mapName);
export {_0FFF4F};

export {GREEN_PALETTE_COLORS};
