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

import {Palette, PaletteColorSelector} from 'palette';
import {_0437F2, _0FFF4F, _121212, _7A00F5, _FF6BB5} from 'palette-colors';
import {Discriminators} from 'discriminator';
import {
    checkForValidColorSelector,
    checkForValidInOrderSelector,
    checkForValidRandomSelector,
    getColorsArray
} from "unit-test/shared";

// palette order, some colors, random
// palette order, 2 colors, not random
// palette order, 2 colors, random
// palette order, 1 color, not random
// palette order, 1 color, random

// not palette order, all colors, not random
// not palette order, all colors, random
// not palette order, some colors, not random
// not palette order, some colors, random
// not palette order, 2 colors, not random
// not palette order, 2 colors, random
// not palette order, 1 color, not random
// not palette order, 1 color, random

const TEST_PALETTE_A: Palette = {
    NAME: 'test A palette',
    SOURCE: 'test a source',
    COLORS: [
        _7A00F5,
        _121212,
        _0437F2,
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

describe('palette color selector tests', (): void => {
    test('test palette color selector names', (): void => {
        const selectorA: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_A);
        expect(selectorA).toBeTruthy();
        expect(selectorA.name).toBe('test a palette color selector');

        const selectorB: PaletteColorSelector = new PaletteColorSelector(TEST_PALETTE_B);
        expect(selectorB).toBeTruthy();
        expect(selectorB.name).toBe('test b palette color selector');
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

    // palette order, all colors, random
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
        checkForValidRandomSelector(selector,getColorsArray(TEST_PALETTE_A.COLORS), true);
    });

    test('test palette color selector: palette order build, 3 colors, not random order', (): void => {
        const colorCount: number = 3;
        const selector: PaletteColorSelector =
            new PaletteColorSelector(
                TEST_PALETTE_A,
                true,
                colorCount,
                false
            );
        expect(selector).toBeTruthy();
        checkForValidColorSelector(selector);
        checkForValidInOrderSelector(
            selector,
            getColorsArray(TEST_PALETTE_A.COLORS),
            true,
            false,
            colorCount
        );
    });
});
