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

import colorNames from 'color-name-list/dist/colornames.json';
import nearestColor from 'nearest-color';

import {StringMap} from 'map';

interface NearestColorMatch {
    name: string,
    value: string,
    rgb: { r: number, g: number, b: number },
    distance: number
}

// TODO - After palette colors have been created, add all palette color names to the manager
// TODO - function should accept a list of palette colors to 'load' names from

const _COLORS = colorNames.reduce((o, {name, hex}) => Object.assign(o, {[name]: hex}), {});
const _NEAREST_COLOR = nearestColor.from(_COLORS);

/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value.
 * @category Color
 */
class ColorNameManager {
    /**
     * A map of colors whose names have already been retrieved from the
     * nearest color method.
     * @private
     * @static
     * @readonly
     */
    private static readonly _MATCHED_COLORS: StringMap<string> = new StringMap<string>();

    /**
     * Retrieves the name of the color represented by the given {@link colorHex}.
     * If the {@link colorHex} string is not well formatted or the nearest color function
     * encounters an error, the method will return {@link !undefined}.
     * @param colorHex - The hex string representation of the color whose
     * name is being retrieved (format: `#RRGGBB`).
     * @public
     * @static
     */
    public static getColorName(colorHex: string): string | undefined {
        if (!colorHex.startsWith('#')) {
            colorHex = '#' + colorHex;
        }

        colorHex = colorHex.toUpperCase();
        let match: string | undefined = undefined;

        if (this.hasMatch(colorHex)) {
            match = this._MATCHED_COLORS.get(colorHex);
        } else {
            try {
                const result: NearestColorMatch | null = _NEAREST_COLOR(colorHex);

                if (result) {
                    match = result.name;
                }

                if (match) {
                    this._MATCHED_COLORS.setUndefinedKey(colorHex, match);
                }
            } catch {
                match = undefined;
            }
        }

        if (match) {
            match = match.toLowerCase();
        }

        return match;
    }

    /**
     * Does the given {@link hex} string already have a color name match?
     * @param hex -
     * @return `true` if the {@link hex} has a direct color name match in the manager,
     * `false` if it does not.
     * @public
     * @static
     */
    public static hasMatch(hex: string): boolean {
        return this._MATCHED_COLORS.hasKey(hex);
    }
}

export {ColorNameManager};
