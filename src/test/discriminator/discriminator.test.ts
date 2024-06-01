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

import {Discriminator, Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';
import {_0FFF4F} from 'palette-colors';

describe('discriminator tests', (): void => {
    describe('discriminator tests: isPaletteColor', (): void => {
        test('PaletteColor discriminator method: null', (): void => {
            expect(Discriminator.isPaletteColor(null)).toBeFalsy();
        });

        test('PaletteColor discriminator method: undefined', (): void => {
            expect(Discriminator.isPaletteColor(undefined)).toBeFalsy();
        });

        test('PaletteColor discriminator method: number', (): void => {
            expect(Discriminator.isPaletteColor(10)).toBeFalsy();
        });

        test('PaletteColor discriminator method: string', (): void => {
            expect(Discriminator.isPaletteColor('my test string')).toBeFalsy();
        });

        test('PaletteColor discriminator method: boolean', (): void => {
            expect(Discriminator.isPaletteColor(true)).toBeFalsy();
        });

        test('PaletteColor discriminator method: other object', (): void => {
            const myObject: {KEY: string} = {
                KEY: 'the key'
            }

            expect(Discriminator.isPaletteColor(myObject)).toBeFalsy();
        });

        test('PaletteColor discriminator method: other object with discriminator', (): void => {
            const myObject: {KEY: string, DISCRIMINATOR: 'other'} = {
                KEY: 'the key',
                DISCRIMINATOR: 'other'
            }

            expect(Discriminator.isPaletteColor(myObject)).toBeFalsy();
        });

        test('PaletteColor discriminator method: PaletteColor', (): void => {
            expect(Discriminator.isPaletteColor(_0FFF4F)).toBeTruthy();
        });

        test('PaletteColor discriminator method: Fake PaletteColor', (): void => {
            const fakeColor: PaletteColor = {
                RGB: {R: 0, G: 0, B: 0},
                HSL: {H: 0, S: 0, L: 0},
                HEX: '#000000',
                NAME: 'test fake color',
                DISCRIMINATOR: Discriminators.PALETTE_COLOR
            };

            expect(Discriminator.isPaletteColor(fakeColor)).toBeTruthy();
        });
    });
});
