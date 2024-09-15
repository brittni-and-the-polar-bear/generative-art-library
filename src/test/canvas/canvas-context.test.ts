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

import P5Lib from "p5";

import { AspectRatio, AspectRatioHandler, CanvasContext } from "canvas-context";
import { SketchContext } from "context";

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
            const aspectRatio: AspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
            CanvasContext.lockedCanvas = false;
            CanvasContext.buildCanvas(aspectRatio, resolution);
            expect(p5.width).toBe(expectedWidth);
            expect(p5.height).toBe(expectedHeight);
        }
    );

    test('CanvasContext.lockCanvas property', (): void => {
        const p5: P5Lib = SketchContext.p5;
        let widthRatio = 1;
        let heightRatio = 1;
        let resolution = 720;
        let expectedWidth = 720;
        let expectedHeight = 720;

        let aspectRatio: AspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        CanvasContext.buildCanvas(aspectRatio, resolution, true);
        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);

        widthRatio = 3;
        heightRatio = 4;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        CanvasContext.buildCanvas(aspectRatio, resolution, false);
        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
        CanvasContext.lockedCanvas = false;

        widthRatio = 2;
        heightRatio = 3;
        resolution = 1080;
        expectedWidth = 1080;
        expectedHeight = 1620;
        aspectRatio = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
        CanvasContext.buildCanvas(aspectRatio, resolution, false);
        expect(p5.width).toBe(expectedWidth);
        expect(p5.height).toBe(expectedHeight);
    });
});
