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

import P5Lib from 'p5';

import {Color, ColorSelector, ColorSelectorType} from 'color';
import {SketchContext} from 'context';

const p5: P5Lib = SketchContext.p5;

export const red: Color = new Color(p5.color(255, 0, 0));
export const green: Color = new Color(p5.color(0, 255, 0));
export const blue: Color = new Color(p5.color(0, 0, 255));
export const cyan: Color = new Color(p5.color(0, 255, 255));
export const magenta: Color = new Color(p5.color(255, 0, 255));
export const yellow: Color = new Color(p5.color(255, 255, 0));

export interface ColorComponents {
    readonly r: number,
    readonly g: number,
    readonly b: number,
    readonly a?: number,
}

export class SampleSelector extends ColorSelector {
    constructor(colors: Color[], randomOrder?: boolean) {
        super(randomOrder);
        for (const c of colors) {
            this.addColorChoice(c);
        }
    }

    get colorNames(): string[] {
        // TODO - get names of colors from system
        return ['name1', 'name2', 'name3'];
    }

    getColor(): Color {
        return this.selectColorFromChoices();
    }

    get name(): string {
        return 'sample color selector';
    }

    get type(): ColorSelectorType {
        return ColorSelectorType.Palette;
    }
}

export function colorToColorComponents(c: Color): ColorComponents {
    return {r: c.red, g: c.green, b: c.blue, a: c.alpha};
}

export function p5ColorToColorComponents(color: P5Lib.Color): ColorComponents {
    return {
        r: Math.floor(p5.red(color)),
        g: Math.floor(p5.green(color)),
        b: Math.floor(p5.blue(color)),
        a: Math.floor(p5.alpha(color))
    };
}
