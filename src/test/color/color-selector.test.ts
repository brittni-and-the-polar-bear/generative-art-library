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

import {Color, ColorSelector, DefaultColorSelector} from 'color';
import {StringMap} from 'map';

import {blue, ColorComponents, colorToColorComponents, cyan, green, red, SampleSelector} from '../shared/color';

describe('color selector tests', (): void => {
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

        for (let i: number = 0; i < 25; i++) {
            const components: ColorComponents = colorToColorComponents(selector.getColor());
            const key: string = components.r.toString() + '' + components.g.toString() + '' + components.b.toString();
            colorMap.setUndefinedKey(key, components);
        }

        expect(colorMap.size).toEqual(expectedComponents.length);

        for (const components of colorMap.values) {
            expect(expectedComponents).toContainEqual(components);
        }
    }

    test('test default color selector', (): void => {
        const selector: DefaultColorSelector = new DefaultColorSelector();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()]);
    });

    test('color selector test: no colors; in order', (): void => {
        const selector: SampleSelector = new SampleSelector([], false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()]);
    });

    test('color selector test: no colors; random order', (): void => {
        const selector: SampleSelector = new SampleSelector([], true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()]);
    });

    test('color selector test: no order provided', (): void => {
        const selector: SampleSelector = new SampleSelector([]);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()]);
    });

    test('color selector test: >2 colors; in order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: >2 colors; random order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: >2 colors; no order provided', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 2 colors; in order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: 2 colors; random order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 2 colors; no order provided', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 1 color; in order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors);
    });

    test('color selector test: 1 color; random order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });

    test('color selector test: 1 color; no order provided', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors);
    });
});
