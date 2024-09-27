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

import { AspectRatio, AspectRatioHandler } from 'canvas-context';

describe('AspectRatioHandler tests', (): void => {
    test('AspectRatioHandler.buildAspectRatio', (): void => {
        const expectedWidth: number = 3;
        const expectedHeight: number = 5;
        const expectedName: string = 'test ratio';
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(expectedWidth,
                                                                                         expectedHeight,
                                                                                         expectedName);
        expect(aspectRatio).toBeTruthy();
        expect(aspectRatio?.WIDTH_RATIO).toBe(expectedWidth);
        expect(aspectRatio?.HEIGHT_RATIO).toBe(expectedHeight);
        expect(aspectRatio?.NAME).toBe(expectedName);
    });

    test('AspectRatioHandler.buildAspectRatio - no name', (): void => {
        const expectedWidth: number = 7;
        const expectedHeight: number = 3;
        const expectedName: string = '7:3';
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(expectedWidth, expectedHeight);
        expect(aspectRatio).toBeTruthy();
        expect(aspectRatio?.WIDTH_RATIO).toBe(expectedWidth);
        expect(aspectRatio?.HEIGHT_RATIO).toBe(expectedHeight);
        expect(aspectRatio?.NAME).toBe(expectedName);
    });

    test('AspectRatioHandler.buildAspectRatio - width ratio < 1', (): void => {
        const width: number = 0.5;
        const height: number = 2;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });

    test('AspectRatioHandler.buildAspectRatio - negative width ratio', (): void => {
        const width: number = -3;
        const height: number = 3;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });

    test('AspectRatioHandler.buildAspectRatio - height ratio < 1', (): void => {
        const width: number = 3;
        const height: number = 0.9999;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });

    test('AspectRatioHandler.buildAspectRatio - negative height ratio', (): void => {
        const width: number = 5;
        const height: number = -2;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });

    test('AspectRatioHandler.buildAspectRatio - width and height ratios < 1', (): void => {
        const width: number = 0.2;
        const height: number = 0.89;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });

    test('AspectRatioHandler.buildAspectRatio - negative width and height ratios', (): void => {
        const width: number = -1.3;
        const height: number = -4.2;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
        expect(aspectRatio).toBeUndefined();
    });
});
