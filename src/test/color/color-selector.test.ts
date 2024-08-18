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

import { Color, DefaultColorSelector } from 'color';
import { SketchContext } from 'context';

import {
    ColorComponents,
    RANDOM_TEST_TRIES,
    SampleSelector,
    blue,
    checkForValidColorSelector,
    checkForValidInOrderSelector,
    checkForValidRandomSelector,
    colorToColorComponents,
    cyan,
    green,
    red
} from 'unit-test/shared';

describe('ColorSelector tests', (): void => {
    test('DefaultColorSelector', (): void => {
        const selector: DefaultColorSelector = new DefaultColorSelector();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()], true, true);
    });

    test('ColorSelector: no colors; in order', (): void => {
        const selector: SampleSelector = new SampleSelector([], false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()], true, true);
    });

    test('ColorSelector: no colors; random order', (): void => {
        const selector: SampleSelector = new SampleSelector([], true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()], true);
    });

    test('ColorSelector: no order provided', (): void => {
        const selector: SampleSelector = new SampleSelector([]);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()], true);
    });

    test('ColorSelector: >2 colors; in order', (): void => {
        const colors: Color[] = [
            red,
            green,
            blue,
            cyan
        ];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('ColorSelector: >2 colors; random order', (): void => {
        const colors: Color[] = [
            red,
            green,
            blue,
            cyan
        ];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('ColorSelector: >2 colors; no order provided', (): void => {
        const colors: Color[] = [
            red,
            green,
            blue,
            cyan
        ];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('ColorSelector: 2 colors; in order', (): void => {
        const colors: Color[] = [
            red,
            green
        ];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('ColorSelector: 2 colors; random order', (): void => {
        const colors: Color[] = [
            red,
            green
        ];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('ColorSelector: 2 colors; no order provided', (): void => {
        const colors: Color[] = [
            red,
            green
        ];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('ColorSelector: 1 color; in order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('ColorSelector: 1 color; random order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('ColorSelector: 1 color; no order provided', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('getBackgroundColor() method: all options', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(new Color(p5.color(255))),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0.33, 0.33, 0.34);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(3);
    });

    test('getBackgroundColor() method: black only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(new Color());

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(1, 0, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('getBackgroundColor() method: white only', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(new Color(p5.color(255)));

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0, 1, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('getBackgroundColor() method: color only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(red);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0, 0, 1);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('getBackgroundColor() method: black or white only', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(new Color(p5.color(255)))
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0.5, 0.5, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });

    test('getBackgroundColor() method: black or color only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0.5, 0, 0.5);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });

    test('getBackgroundColor() method: white or color only', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color(p5.color(255))),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.getBackgroundColor(0, 0.5, 0.5);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });

    test('getBackgroundColor() method: incorrect weights', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(new Color());

        for (let i: number = 0; i < 10; i++) {
            const background: Color = selector.getBackgroundColor(0, 0.1, 0.1);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            expect(expectedComponents).toEqual(bgComponents);
        }
    });

    test('getColor() method should return a copy of the colors', (): void => {
        const colors: Color[] = [blue];
        const selected: Color[] = [...colors];
        const selector: SampleSelector = new SampleSelector(colors);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const c: Color = selector.getColor();
            expect(selected).not.toContain(c);
            selected.push(c);
        }
    });

    test('getBackgroundColor() method should return a copy of the colors', (): void => {
        const colors: Color[] = [blue];
        const selected: Color[] = [...colors];
        const selector: SampleSelector = new SampleSelector(colors);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const c: Color = selector.getBackgroundColor(0.3, 0.3, 0.4);
            expect(selected).not.toContain(c);
            selected.push(c);
        }
    });
});
