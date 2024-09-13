/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import nearestColor from 'nearest-color';

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { StringMap } from 'map';
import { PaletteColor } from 'palette';

describe('color name manager test', (): void => {
    const nearestColorSpy = jest.spyOn(nearestColor, 'from');

    afterAll((): void => {
        expect(nearestColorSpy).not.toHaveBeenCalled();
        nearestColorSpy.mockRestore();
    });

    test.each([
        { hex: 'this is not a hex', expectedName: undefined },
        { hex: '#FF0000FF', expectedName: undefined },
        { hex: '#FF000000', expectedName: undefined },
        { hex: '000000', expectedName: 'black' },
        { hex: '#000000', expectedName: 'black' },
        { hex: 'A32B2A', expectedName: 'harissa red' },
        { hex: '#A32B2A', expectedName: 'harissa red' },
        { hex: 'a32b2a', expectedName: 'harissa red' },
        { hex: '#a32b2a', expectedName: 'harissa red' },
        { hex: '6E47C5', expectedName: 'purple rain' },
        { hex: '#6E47C5', expectedName: 'purple rain' },
        { hex: '6e47c5', expectedName: 'purple rain' },
        { hex: '#6e47c5', expectedName: 'purple rain' }
    ])('$# get color name: $hex ($expectedName)',
        ({ hex, expectedName }): void => {
            const name: string | undefined = ColorNameManager.getColorName(hex);
            expect(name).toBe(expectedName);
        }
    );

    /**
     * IMPORTANT: To maintain efficacy of this test, do not use color #99dcb5
     * in any other test in this file.
     */
    test('nearest color function is only created once', (): void => {
        const logSpy = jest.spyOn(StringMap.prototype, 'setUndefinedKey');
        const name: string = 'birthday king';
        let redName: string | undefined = ColorNameManager.getColorName('#99DCB5');
        expect(redName).toBe(name);
        redName = ColorNameManager.getColorName('#99dcb5');
        expect(redName).toBe(name);
        redName = ColorNameManager.getColorName('99dcb5');
        expect(redName).toBe(name);
        redName = ColorNameManager.getColorName('99DCB5');
        expect(redName).toBe(name);
        expect(logSpy).toHaveBeenCalledTimes(1);
        logSpy.mockRestore();
    });

    test('addColor(PaletteColor) method', (): void => {
        const fakeColor: PaletteColor = {
            RGB: { R: 0, G: 0, B: 0 },
            HSL: { H: 0, S: 0, L: 0 },
            HEX: '#000000',
            NAME: 'test fake color',
            DISCRIMINATOR: Discriminators.PALETTE_COLOR
        };

        const hex: string = fakeColor.HEX;
        const expectedOriginalName: string = 'black';
        const expectedNewName: string = fakeColor.NAME;

        const originalName: string | undefined = ColorNameManager.getColorName(hex);
        expect(originalName).toBe(expectedOriginalName);

        ColorNameManager.addColor(fakeColor);

        const newName: string | undefined = ColorNameManager.getColorName(hex);
        expect(newName).toBe(expectedNewName);
    });
});
