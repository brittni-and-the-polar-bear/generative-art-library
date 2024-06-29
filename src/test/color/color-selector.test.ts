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

import {Color, DefaultColorSelector} from 'color';

import {
    ColorComponents,
    SampleSelector,
    RANDOM_TEST_TRIES,
    blue,
    cyan,
    green,
    red,
    checkForValidColorSelector,
    checkForValidInOrderSelector,
    checkForValidRandomSelector,
    colorToColorComponents
} from 'unit-test/shared';
import {SketchContext} from "context";

describe('color selector tests', (): void => {
    test('test default color selector', (): void => {
        const selector: DefaultColorSelector = new DefaultColorSelector();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()], true, true);
    });

    test('color selector test: no colors; in order', (): void => {
        const selector: SampleSelector = new SampleSelector([], false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, [new Color()], true, true);
    });

    test('color selector test: no colors; random order', (): void => {
        const selector: SampleSelector = new SampleSelector([], true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()], true);
    });

    test('color selector test: no order provided', (): void => {
        const selector: SampleSelector = new SampleSelector([]);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, [new Color()], true);
    });

    test('color selector test: >2 colors; in order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('color selector test: >2 colors; random order', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('color selector test: >2 colors; no order provided', (): void => {
        const colors: Color[] = [red, green, blue, cyan];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('color selector test: 2 colors; in order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('color selector test: 2 colors; random order', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('color selector test: 2 colors; no order provided', (): void => {
        const colors: Color[] = [red, green];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('color selector test: 1 color; in order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, false);
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(selector, colors, true, true);
    });

    test('color selector test: 1 color; random order', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors, true);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('color selector test: 1 color; no order provided', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, colors, true);
    });

    test('test background color selection: all options', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(new Color(SketchContext.p5.color(255))),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0.33, 0.33, 0.34);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(3);
    });

    test('test background color selection: black only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(new Color());

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(1, 0, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background)
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('test background color selection: white only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(
            new Color(SketchContext.p5.color(255))
        );

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0, 1, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background)
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('test background color selection: color only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents = colorToColorComponents(red);

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0, 0, 1);
            const bgComponents: ColorComponents = colorToColorComponents(background)
            expect(bgComponents).toStrictEqual(expectedComponents);
        }
    });

    test('test background color selection: black or white only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(new Color(SketchContext.p5.color(255)))
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0.5, 0.5, 0);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });

    test('test background color selection: black or color only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color()),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0.5, 0, 0.5);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });

    test('test background color selection: white or color only', (): void => {
        const colors: Color[] = [red];
        const selector: SampleSelector = new SampleSelector(colors);
        const expectedComponents: ColorComponents[] = [
            colorToColorComponents(new Color(SketchContext.p5.color(255))),
            colorToColorComponents(red)
        ];
        const colorNames: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const background: Color = selector.chooseBackgroundColor(0, 0.5, 0.5);
            const bgComponents: ColorComponents = colorToColorComponents(background);
            colorNames.add(background.name);
            expect(expectedComponents).toContainEqual(bgComponents);
        }

        expect(colorNames.size).toBe(2);
    });
});
