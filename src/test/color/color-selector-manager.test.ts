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

import { Color, ColorSelector, ColorSelectorManager, DefaultColorSelector } from 'color';

import {
    blue,
    ColorComponents,
    colorToColorComponents,
    cyan,
    green,
    magenta,
    red,
    SampleSelector,
    yellow
} from '../shared/color';

describe('color selector manager tests', (): void => {
    function checkForValidColorSelectorManager(
        manager: ColorSelectorManager,
        selectors: ColorSelector[],
        colorComponents: ColorComponents[][]): void {
        const chosenSelector: ColorSelector = manager.getRandomColorSelector();
        expect(selectors).toContain(chosenSelector);
        const index: number = selectors.indexOf(chosenSelector);
        const expectedComponents: ColorComponents[] = colorComponents[index];

        for (let i: number = 0; i < expectedComponents.length * 2; i++) {
            expect(expectedComponents).toContainEqual(colorToColorComponents(chosenSelector.getColor()));
        }
    }

    test('color selector manager; no selectors', (): void => {
        const manager: ColorSelectorManager = new ColorSelectorManager();
        const selector: ColorSelector = manager.getRandomColorSelector();
        const expectedComponents: ColorComponents[] = [colorToColorComponents(new Color())];
        expect(selector).toBeInstanceOf(DefaultColorSelector);
        const selectedColor: Color = selector.getColor();
        expect(expectedComponents).toContainEqual(colorToColorComponents(selectedColor));
    });

    test('color selector manager; 1 selector', (): void => {
        const manager: ColorSelectorManager = new ColorSelectorManager();
        const colors: Color[][] = [[red, green, blue]];
        const expectedComponents: ColorComponents[][] = colors.map((colorList: Color[]) => {
            return colorList.map((color: Color) => colorToColorComponents(color));
        });
        const selectors: ColorSelector[] = colors.map((colorList: Color[]) => new SampleSelector(colorList));
        manager.addColorSelector(selectors[0]);
        checkForValidColorSelectorManager(manager, selectors, expectedComponents);
    });

    test('color selector manager; 2 selectors', (): void => {
        const manager: ColorSelectorManager = new ColorSelectorManager();
        const colors: Color[][] = [[red, green, blue], [cyan, magenta, yellow]];
        const expectedComponents: ColorComponents[][] = colors.map((colorList: Color[]) => {
            return colorList.map((color: Color) => colorToColorComponents(color));
        });
        const selectors: ColorSelector[] = colors.map((colorList: Color[]) => new SampleSelector(colorList));
        manager.addColorSelectors(selectors);
        checkForValidColorSelectorManager(manager, selectors, expectedComponents);
    });

    test('color selector manager; >2 selectors', (): void => {
        const manager: ColorSelectorManager = new ColorSelectorManager();
        const colors: Color[][] = [[red, green, blue], [cyan, magenta, yellow], [red], [yellow]];
        const expectedComponents: ColorComponents[][] = colors.map((colorList: Color[]) => {
            return colorList.map((color: Color) => colorToColorComponents(color));
        });
        const selectors: ColorSelector[] = colors.map((colorList: Color[]) => new SampleSelector(colorList));
        manager.addColorSelectors(selectors);
        checkForValidColorSelectorManager(manager, selectors, expectedComponents);
    });
});
