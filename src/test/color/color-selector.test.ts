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
    SampleSelector,
    blue,
    cyan,
    green,
    red,
    checkForValidColorSelector,
    checkForValidInOrderSelector,
    checkForValidRandomSelector
} from 'unit-test/shared';



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
});
