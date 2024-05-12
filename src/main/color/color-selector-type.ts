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

/**
 * Enum for the different types of ColorSelectors.
 * @category Color
 */
const enum ColorSelectorType {
    /**
     * Color selector that chooses colors from a pre-selected palette.
     */
    Palette = 'palette color selector',

    /**
     * Color selector that chooses color randomly from a range of RGB(A) values.
     */
    RGB = 'RGB color selector',

    /**
     * Default color selector. Should only be used in {@link DefaultColorSelector}.
     */
    Default = 'default color selector'
}

export {ColorSelectorType};
