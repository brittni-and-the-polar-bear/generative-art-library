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

import { Discriminators } from 'discriminator';
import { Palette, PaletteColorSelector } from 'palette';
import { PC_0437F1, _0FFF4F, PC_121212, _7A00F5, _FF6BB5 } from 'palette-colors';

import {
    checkForValidColorSelector,
    checkForValidInOrderSelector,
    checkForValidRandomSelector,
    getColorsArray, RANDOM_TEST_TRIES
} from 'unit-test/shared';
import { ColorSelectorType } from 'color';

const TEST_PALETTE_A: Palette = {
    NAME: 'test A palette',
    SOURCE: 'test a source',
    COLORS: [
        _7A00F5,
        PC_121212,
        PC_0437F1,
        _FF6BB5,
        _0FFF4F
    ],
    CONTRAST_MAP: {
        '#000000': [],
        '#FFFFFF': []
    },
    IS_GRADIENT: false,
    DISCRIMINATOR: Discriminators.PALETTE
};

const TEST_PALETTE_B: Palette = {
    NAME: 'test B',
    SOURCE: 'test b source',
    COLORS: [],
    CONTRAST_MAP: {
        '#000000': [],
        '#FFFFFF': []
    },
    IS_GRADIENT: false,
    DISCRIMINATOR: Discriminators.PALETTE
};

const MIN_COLOR_COUNT: number = 2;
const MAX_COLOR_COUNT_A: number = TEST_PALETTE_A.COLORS.length;

describe('palette color selector tests', (): void => {
    test('test palette color selector get name', (): void => {
        const selectorA: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selectorA).toBeTruthy();
        expect(selectorA.name).toBe('test a palette color selector');

        const selectorB: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_B);
        expect(selectorB).toBeTruthy();
        expect(selectorB.name).toBe('test b palette color selector');
    });

    test('test palette color selector get color', (): void => {
        const selectorA: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selectorA).toBeTruthy();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selectorA.getColor()).toBeTruthy();
        }

        const selectorB: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_B);
        expect(selectorB).toBeTruthy();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(selectorB.getColor()).toBeTruthy();
        }
    });

    test('test palette color selector get type', (): void => {
        const selectorA: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selectorA).toBeTruthy();
        expect(selectorA.type).toBe(ColorSelectorType.PALETTE);

        const selectorB: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_B);
        expect(selectorB).toBeTruthy();
        expect(selectorB.type).toBe(ColorSelectorType.PALETTE);
    });

    test('test palette color selector get color names', (): void => {
        const selectorA: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selectorA).toBeTruthy();
        expect(selectorA.colorNames.length).toBeGreaterThan(0);

        const selectorB: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_B);
        expect(selectorB).toBeTruthy();
        expect(selectorB.colorNames.length).toBe(0);
    });

    test('test palette color selector: palette only', (): void => {
        const selector: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, getColorsArray(TEST_PALETTE_A.COLORS), false);
    });

    test('test palette color selector: palette order build, all colors, not random order', (): void => {
        const selector: PaletteColorSelector =
            new PaletteColorSelector(
                TEST_PALETTE_A,
                true,
                TEST_PALETTE_A.COLORS.length,
                false
            );

        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(
            selector,
            getColorsArray(TEST_PALETTE_A.COLORS),
            true,
            true
        );
    });

    test('test palette color selector: palette order build, all colors, random order', (): void => {
        const selector: PaletteColorSelector =
            new PaletteColorSelector(
                TEST_PALETTE_A,
                true,
                TEST_PALETTE_A.COLORS.length,
                true
            );

        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, getColorsArray(TEST_PALETTE_A.COLORS), true);
    });

    test.each([
        { count: 10 },
        { count: 5 },
        { count: 4 },
        { count: 3 },
        { count: 2 },
        { count: 1 },
        { count: -10 }
    ])('$# test palette color selector: palette order build, $count color(s), not random order',
        ({ count }): void => {
            let expectedColorCount: number = count;

            if (expectedColorCount < MIN_COLOR_COUNT) {
                expectedColorCount = MIN_COLOR_COUNT;
            } else if (expectedColorCount > MAX_COLOR_COUNT_A) {
                expectedColorCount = MAX_COLOR_COUNT_A;
            }

            const selector: PaletteColorSelector =
                new PaletteColorSelector(
                    TEST_PALETTE_A,
                    true,
                    count,
                    false
                );

            expect(selector).toBeTruthy();
            checkForValidColorSelector(selector);
            checkForValidInOrderSelector(
                selector,
                getColorsArray(TEST_PALETTE_A.COLORS),
                true,
                false,
                expectedColorCount
            );
        }
    );

    test.each([
        { count: 10 },
        { count: 5 },
        { count: 4 },
        { count: 3 },
        { count: 2 },
        { count: 1 },
        { count: -10 }
    ])('$# test palette color selector: palette order build, $count color(s), random order',
        ({ count }): void => {
            let expectedColorCount: number = count;

            if (expectedColorCount < MIN_COLOR_COUNT) {
                expectedColorCount = MIN_COLOR_COUNT;
            } else if (expectedColorCount > MAX_COLOR_COUNT_A) {
                expectedColorCount = MAX_COLOR_COUNT_A;
            }

            const selector: PaletteColorSelector =
                new PaletteColorSelector(
                    TEST_PALETTE_A,
                    true,
                    count,
                    true
                );

            expect(selector).toBeTruthy();
            checkForValidColorSelector(selector);
            checkForValidRandomSelector(
                selector,
                getColorsArray(TEST_PALETTE_A.COLORS),
                false,
                expectedColorCount);
        }
    );

    test('test palette color selector: random build, all colors, not random order', (): void => {
        const selector: PaletteColorSelector =
            new PaletteColorSelector(
                TEST_PALETTE_A,
                false,
                TEST_PALETTE_A.COLORS.length,
                false
            );

        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(
            selector,
            getColorsArray(TEST_PALETTE_A.COLORS),
            false,
            true
        );
    });

    test('test palette color selector: random build, all colors, random order', (): void => {
        const selector: PaletteColorSelector =
            new PaletteColorSelector(
                TEST_PALETTE_A,
                false,
                TEST_PALETTE_A.COLORS.length,
                true
            );

        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidRandomSelector(selector, getColorsArray(TEST_PALETTE_A.COLORS), true);
    });

    test.each([
        { count: 10 },
        { count: 5 },
        { count: 4 },
        { count: 3 },
        { count: 2 },
        { count: 1 },
        { count: -10 }
    ])('$# test palette color selector: random build, $count color(s), not random order',
        ({ count }): void => {
            let expectedColorCount: number = count;

            if (expectedColorCount < MIN_COLOR_COUNT) {
                expectedColorCount = MIN_COLOR_COUNT;
            } else if (expectedColorCount > MAX_COLOR_COUNT_A) {
                expectedColorCount = MAX_COLOR_COUNT_A;
            }

            const selector: PaletteColorSelector =
                new PaletteColorSelector(
                    TEST_PALETTE_A,
                    false,
                    count,
                    false
                );

            expect(selector).toBeTruthy();
            checkForValidColorSelector(selector);
            checkForValidInOrderSelector(
                selector,
                getColorsArray(TEST_PALETTE_A.COLORS),
                false,
                false,
                expectedColorCount
            );
        }
    );

    test.each([
        { count: 10 },
        { count: 5 },
        { count: 4 },
        { count: 3 },
        { count: 2 },
        { count: 1 },
        { count: -10 }
    ])('$# test palette color selector: random build, $count color(s), random order',
        ({ count }): void => {
            let expectedColorCount: number = count;

            if (expectedColorCount < MIN_COLOR_COUNT) {
                expectedColorCount = MIN_COLOR_COUNT;
            } else if (expectedColorCount > MAX_COLOR_COUNT_A) {
                expectedColorCount = MAX_COLOR_COUNT_A;
            }

            const selector: PaletteColorSelector =
                new PaletteColorSelector(
                    TEST_PALETTE_A,
                    false,
                    count,
                    true
                );

            expect(selector).toBeTruthy();
            checkForValidColorSelector(selector);
            checkForValidRandomSelector(selector,
                getColorsArray(TEST_PALETTE_A.COLORS),
                false,
                expectedColorCount);
        }
    );
});
