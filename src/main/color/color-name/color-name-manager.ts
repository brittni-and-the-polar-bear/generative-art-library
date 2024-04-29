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

// const list = require('color-name-list');

import nearestColor from "nearest-color";
// import {StringMap} from "map";
// import {Color} from "../color";

class ColorNameManager {
    // static from function
    // only create if null/undefined with full color structure -> map of name to hex
    // use to get closest colors
    // new issue, add all CSS colors to library
    // private static _closestColor = null;
    // private static readonly _colors: StringMap<string> = new StringMap<string>();
    //
    // public static addColor(color: Color): void {
    //
    // }

    public static getColorName(): void {

    }

    public static getColorNameWithExactMatch(): string {
        var things = [
            {name: 'yellow', 'source': '#ffff00', 'rgb': {r: 255, g: 255, b: 0}},
            {name: 'blue', 'source': '#0000ff', 'rgb': {r: 0, g: 0, b: 255}},
        ]

        let c = nearestColor('#FF0000', things);
        console.log(c);

        c = nearestColor('#aa774a');
        // let s: string = '#f80'
        console.log(c);

        // let hexs = ['#ffffff', '#00ffff'];
        // let other = {magenta: '#ff00ff', black: "#000000"}
        // let b = nearestColor.STANDARD_COLORS;
        let count = 0;
        for (const f in nearestColor.STANDARD_COLORS) {
            if (f) {
                count++;
            }
        }

        console.log(count);
        const cm = nearestColor.from(nearestColor.STANDARD_COLORS);
        let x = cm('#004582');
        console.log(x);
        return '';
    }
}

export {ColorNameManager};
