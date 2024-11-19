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

import nearestColor from 'nearest-color';

import { Discriminator } from 'discriminator';
import { StringMap } from 'map';
import { PaletteColor } from 'palette';
import { StringValidator } from 'string';

import colorNames from './colornames.json';

interface NearestColorMatch {
    name: string;
    value: string;
    rgb: { r: number; g: number; b: number; };
    distance: number;
}

const _COLORS = colorNames.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const _NEAREST_COLOR = nearestColor.from(_COLORS);

/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value.
 *
 * @category Color
 */
export class ColorNameManager {
    /**
     * A map of colors whose names have already been retrieved from the
     * nearest color method.
     */
    static readonly #MATCHED_COLORS: StringMap<string> = new StringMap<string>();

    /**
     * Retrieves the name of the color represented by the given {@link colorHex}.
     * If the {@link colorHex} string is not well formatted or the nearest color function
     * encounters an error, the method will return undefined.
     *
     * @param colorHex - The hex string representation of the color (format: `#RRGGBB`).
     */
    public static getColorName(colorHex: string): string | undefined {
        colorHex = ColorNameManager.#formatHex(colorHex);
        let match: string | undefined = undefined;

        if (ColorNameManager.hasMatch(colorHex)) {
            match = ColorNameManager.#MATCHED_COLORS.get(colorHex);
        } else {
            try {
                const result: NearestColorMatch | null = _NEAREST_COLOR(colorHex);

                if (result) {
                    match = result.name;
                }

                if (match) {
                    ColorNameManager.#MATCHED_COLORS.setUndefinedKey(colorHex, match);
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
     *
     * @param hex
     *
     * @return `true` if the {@link hex} has a direct color name match in the manager,
     * `false` if it does not.
     */
    public static hasMatch(hex: string): boolean {
        return ColorNameManager.#MATCHED_COLORS.hasKey(hex);
    }

    // TODO - release notes
    // TODO - unit tests
    /**
     * Map the given hex to the given name.
     *
     * @param hex
     * @param name
     */
    public static addColor(hex: string, name: string): void;
    /**
     * Map the given {@link PaletteColor.HEX} to the given {@link PaletteColor.NAME}.
     *
     * @param color
     */
    public static addColor(color: PaletteColor): void;
    public static addColor(color: PaletteColor | string, name?: string): void {
        if (typeof color === 'string' && name) {
            const hexColor: string = ColorNameManager.#formatHex(color);

            if (StringValidator.isHex(hexColor) && name) {
                ColorNameManager.#MATCHED_COLORS.setKey(hexColor, name);
            }
        } else if (Discriminator.isPaletteColor(color)) {
            const hex: string = ColorNameManager.#formatHex(color.HEX);
            ColorNameManager.#MATCHED_COLORS.setKey(hex, color.NAME);
        }
    }

    /**
     * Adds a hash symbol (#) to the beginning of the given string
     * if one is missing and returns the result with all uppercase
     * characters.
     *
     * @param original
     */
    static #formatHex(original: string): string {
        let hex: string = original;

        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }

        return hex.toUpperCase();
    }
}
