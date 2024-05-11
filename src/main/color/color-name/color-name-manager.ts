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

interface ColorMatch {
    name: string,
    value: string,
    rgb: { r: number, g: number, b: number },
    distance: number
}

// TODO - documentation

/**
 * @category Color
 */
class ColorNameManager {
    private static _nearestColor: any;
    private static readonly _matchedColors: StringMap<string> = new StringMap<string>();

    public static getColorName(colorHex: string): string | undefined {
        colorHex = colorHex.toUpperCase();
        let match: string | undefined = undefined;

        if (this.hasMatch(colorHex)) {
            match = this._matchedColors.get(colorHex);
        } else {
            if (!this._nearestColor) {
                const colors = colorNames.reduce((o, {name, hex}) => Object.assign(o, {[name]: hex}), {});
                this._nearestColor = nearestColor.from(colors);
            }

            try {
                const result: ColorMatch | string = this._nearestColor(colorHex);

                if (result) {
                    if (typeof result === 'string') {
                        match = result;
                    } else {
                        match = result.name ?? undefined;
                    }
                }

                if (match) {
                    this._matchedColors.setUndefinedKey(colorHex, match);
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

    public static hasMatch(hex: string): boolean {
        return this._matchedColors.hasKey(hex);
    }
}

export {ColorNameManager};
