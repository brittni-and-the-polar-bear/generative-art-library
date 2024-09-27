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

import P5Lib from 'p5';

import { AspectRatio, ASPECT_RATIOS, AspectRatioHandler, CanvasContext } from 'canvas-context';
import { SketchContext } from 'context';

describe('CanvasContext tests', (): void => {
    test.each(
        [
            { widthRatio: 1, heightRatio: 1, resolution: 720, expectedWidth: 720, expectedHeight: 720 },
            { widthRatio: 1, heightRatio: 1.5, resolution: 720, expectedWidth: 720, expectedHeight: 1080 },
            { widthRatio: 1.5, heightRatio: 1, resolution: 720, expectedWidth: 1080, expectedHeight: 720 },
            { widthRatio: 1, heightRatio: 2, resolution: 720, expectedWidth: 720, expectedHeight: 1440 },
            { widthRatio: 2, heightRatio: 1, resolution: 720, expectedWidth: 1440, expectedHeight: 720 },
            { widthRatio: 3, heightRatio: 4, resolution: 720, expectedWidth: 720, expectedHeight: 960 },
            { widthRatio: 4, heightRatio: 3, resolution: 720, expectedWidth: 960, expectedHeight: 720 },
            { widthRatio: 7, heightRatio: 10, resolution: 720, expectedWidth: 720, expectedHeight: 1028 },
            { widthRatio: 10, heightRatio: 7, resolution: 720, expectedWidth: 1028, expectedHeight: 720 },
            { widthRatio: 1, heightRatio: 1, resolution: 1080, expectedWidth: 1080, expectedHeight: 1080 },
            { widthRatio: 1, heightRatio: 1.5, resolution: 1080, expectedWidth: 1080, expectedHeight: 1620 },
            { widthRatio: 1.5, heightRatio: 1, resolution: 1080, expectedWidth: 1620, expectedHeight: 1080 },
            { widthRatio: 1, heightRatio: 2, resolution: 1080, expectedWidth: 1080, expectedHeight: 2160 },
            { widthRatio: 2, heightRatio: 1, resolution: 1080, expectedWidth: 2160, expectedHeight: 1080 },
            { widthRatio: 3, heightRatio: 4, resolution: 1080, expectedWidth: 1080, expectedHeight: 1440 },
            { widthRatio: 4, heightRatio: 3, resolution: 1080, expectedWidth: 1440, expectedHeight: 1080 },
            { widthRatio: 7, heightRatio: 10, resolution: 1080, expectedWidth: 1080, expectedHeight: 1542 },
            { widthRatio: 10, heightRatio: 7, resolution: 1080, expectedWidth: 1542, expectedHeight: 1080 }
        ]
    )('$# CanvasContext.buildCanvas() method: $widthRatio:$heightRatio; $resolution',
        ({ widthRatio, heightRatio, resolution, expectedWidth, expectedHeight }): void => {
            const p5: P5Lib = SketchContext.p5;
            const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
            expect(aspectRatio).toBeTruthy();
            CanvasContext.unlockCanvas();

            if (aspectRatio) {
                CanvasContext.buildCanvas(aspectRatio, resolution);
            }

            expect(p5.width).toBe(expectedWidth);
            expect(p5.height).toBe(expectedHeight);
        }
    );

    test('CanvasContext.lockCanvas property', (): void => {
        const p5: P5Lib = SketchContext.p5;
        let widthRatio: number = 1;
        let heightRatio: number = 1;
        let resolution: number = 720;
        let expectedWidth: number = 720;
        let expectedHeight: number = 720;

        let aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        expect(aspectRatio).toBeTruthy();

        CanvasContext.unlockCanvas();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution, true);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        widthRatio = 3;
        heightRatio = 4;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        expect(aspectRatio).toBeTruthy();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution, false);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
        CanvasContext.unlockCanvas();

        widthRatio = 2;
        heightRatio = 3;
        resolution = 1080;
        expectedWidth = 1080;
        expectedHeight = 1620;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        expect(aspectRatio).toBeTruthy();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution, false);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
    });

    test('CanvasContext.maxHeight and CanvasContext.minHeight properties', (): void => {
        const multiplier: number = 2;
        let resolution: number = 720;
        let expectedMaxHeight: number = resolution * multiplier;
        const expectedMinHeight: number = 0;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(1, multiplier);
        expect(aspectRatio).toBeTruthy();
        CanvasContext.unlockCanvas();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(CanvasContext.minHeight).toBe(expectedMinHeight);
        expect(CanvasContext.maxHeight).toBe(expectedMaxHeight);

        resolution = 1080;
        expectedMaxHeight = resolution * multiplier;

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(CanvasContext.minHeight).toBe(expectedMinHeight);
        expect(CanvasContext.maxHeight).toBe(expectedMaxHeight);
    });

    test('CanvasContext.maxWidth and CanvasContext.minWidth properties', (): void => {
        const multiplier: number = 2.5;
        let resolution: number = 720;
        let expectedMaxWidth: number = resolution * multiplier;
        const expectedMinWidth: number = 0;
        const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(multiplier, 1);
        expect(aspectRatio).toBeTruthy();
        CanvasContext.unlockCanvas();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(CanvasContext.minWidth).toBe(expectedMinWidth);
        expect(CanvasContext.maxWidth).toBe(expectedMaxWidth);

        resolution = 1080;
        expectedMaxWidth = resolution * multiplier;

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(CanvasContext.minWidth).toBe(expectedMinWidth);
        expect(CanvasContext.maxWidth).toBe(expectedMaxWidth);
    });

    test('CanvasContext.defaultStroke property', (): void => {
        let resolution: number = 500;
        CanvasContext.unlockCanvas();
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, resolution);
        expect(CanvasContext.defaultStroke).toBe(1);

        resolution = 1080;
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, resolution);
        expect(CanvasContext.defaultStroke).toBe(2.16);

        resolution = 4320;
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, resolution);
        expect(CanvasContext.defaultStroke).toBe(8.64);
    });

    test('CanvasContext.updateAspectRatio() method', (): void => {
        const p5: P5Lib = SketchContext.p5;
        const resolution: number = 720;
        let widthRatio: number = 1;
        let heightRatio: number = 1;
        let expectedWidth: number = 720;
        let expectedHeight: number = 720;
        let aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        expect(aspectRatio).toBeTruthy();
        CanvasContext.unlockCanvas();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        widthRatio = 3;
        heightRatio = 4;
        expectedWidth = 720;
        expectedHeight = 960;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);

        if (aspectRatio) {
            CanvasContext.updateAspectRatio(aspectRatio);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        widthRatio = 16;
        heightRatio = 9;
        expectedWidth = 1280;
        expectedHeight = 720;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);

        if (aspectRatio) {
            CanvasContext.updateAspectRatio(aspectRatio);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
    });

    test('CanvasContext.updateResolution() method', (): void => {
        const p5: P5Lib = SketchContext.p5;
        let resolution: number = 720;
        let widthRatio: number = 1;
        let heightRatio: number = 1;
        let expectedWidth: number = 720;
        let expectedHeight: number = 720;
        let aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        expect(aspectRatio).toBeTruthy();
        CanvasContext.unlockCanvas();

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        resolution = 1080;
        expectedWidth = 1080;
        expectedHeight = 1080;
        CanvasContext.updateResolution(resolution);
        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        widthRatio = 4;
        heightRatio = 3;
        resolution = 720;
        expectedWidth = 960;
        expectedHeight = 720;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);

        if (aspectRatio) {
            CanvasContext.buildCanvas(aspectRatio, resolution);
        }

        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        resolution = 1080;
        expectedWidth = 1440;
        expectedHeight = 1080;
        CanvasContext.updateResolution(resolution);
        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
    });
});
