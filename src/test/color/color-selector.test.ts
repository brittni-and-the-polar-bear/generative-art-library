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
import {StringMap} from 'map';

import {ColorComponents, colorToColorComponents} from '../shared/color';

const p5: P5Lib = SketchContext.p5;

describe('color selector tests', (): void => {
    class SampleSelector extends ColorSelector {
        constructor(randomOrder: boolean, colors: Color[]) {
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

    const red: Color = new Color(p5.color(255, 0, 0));
    const green: Color = new Color(p5.color(0, 255, 0));
    const blue: Color = new Color(p5.color(0, 0, 255));
    const cyan: Color = new Color(p5.color(0, 255, 255));

    function checkForValidColorSelector(selector: ColorSelector): void {
        expect(selector.type).toBeTruthy();
        expect(selector.name).toBeTruthy();
        expect(selector.colorNames).toBeTruthy();
        expect(selector.colorNames.length).toBeGreaterThan(0);
    }

    function checkForValidInOrderSelector(selector: ColorSelector, colors: Color[]): void {
        for (let i: number = 0; i < colors.length * 2; i++) {
            const selectedColor: Color = selector.getColor();
            const selectedComps: ColorComponents = colorToColorComponents(selectedColor);
            const expectedComps: ColorComponents = colorToColorComponents(colors[i % colors.length]);
            expect(selectedComps).toEqual(expectedComps);
        }
    }

    function checkForValidRandomSelector(selector: ColorSelector, colors: Color[]): void {
        const expectedComponents: ColorComponents[] = colors.map((c: Color): ColorComponents => colorToColorComponents(c));
        const colorMap: StringMap<ColorComponents> = new StringMap<ColorComponents>();

        for (let i: number = 0; i < 100; i++) {
            const components: ColorComponents = colorToColorComponents(selector.getColor());
            const key: string = components.r.toString() + '' + components.g.toString() + '' + components.b.toString();
            colorMap.setUndefinedKey(key, components);
        }

        expect(colorMap.size).toEqual(expectedComponents.length);

        for (const components of colorMap.values) {
            expect(expectedComponents).toContainEqual(components);
        }
    }

    test('color selector test: >2 colors; in order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(false, colors);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: >2 colors; random order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(true, colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 2 colors; in order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(false, colors);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: 2 colors; random order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(true, colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 1 color; in order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(false, colors);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: 1 color; random order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(true, colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });
});
