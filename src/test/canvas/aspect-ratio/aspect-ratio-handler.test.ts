// /*
//  * Copyright (C) 2024 brittni and the polar bear LLC.
//  *
//  * This file is a part of brittni and the polar bear's generative art library,
//  * which is released under the GNU Affero General Public License, Version 3.0.
//  * You may not use this file except in compliance with the license.
//  *
//  * You should have received a copy of the GNU Affero General Public License
//  * along with this program. See LICENSE or go to
//  * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//  * See the GNU Affero General Public License for more details.
//  */
//
// import { AspectRatio, AspectRatioHandler } from 'sketch-context';
//
// describe('AspectRatioHandler tests', (): void => {
//     test('AspectRatioHandler.buildAspectRatio', (): void => {
//         const expectedWidth: number = 3;
//         const expectedHeight: number = 5;
//         const expectedName: string = 'test ratio';
//         const aspectRatio: AspectRatio | undefined =
//             AspectRatioHandler.buildAspectRatio(
//                 expectedWidth,
//                 expectedHeight,
//                 expectedName
//             );
//         expect(aspectRatio).toBeTruthy();
//         expect(aspectRatio?.WIDTH_RATIO).toBe(expectedWidth);
//         expect(aspectRatio?.HEIGHT_RATIO).toBe(expectedHeight);
//         expect(aspectRatio?.NAME).toBe(expectedName);
//     });
//
//     test('AspectRatioHandler.buildAspectRatio - no name', (): void => {
//         const expectedWidth: number = 7;
//         const expectedHeight: number = 3;
//         const expectedName: string = '7:3';
//         const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(expectedWidth, expectedHeight);
//         expect(aspectRatio).toBeTruthy();
//         expect(aspectRatio?.WIDTH_RATIO).toBe(expectedWidth);
//         expect(aspectRatio?.HEIGHT_RATIO).toBe(expectedHeight);
//         expect(aspectRatio?.NAME).toBe(expectedName);
//     });
//
//     test('AspectRatioHandler.buildAspectRatio - width ratio < 1', (): void => {
//         const width: number = 0.5;
//         const height: number = 2;
//         const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
//         expect(aspectRatio).toBeUndefined();
//     });
//
//     test('AspectRatioHandler.buildAspectRatio - height ratio < 1', (): void => {
//         const width: number = 3;
//         const height: number = 0.9999;
//         const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
//         expect(aspectRatio).toBeUndefined();
//     });
//
//     test('AspectRatioHandler.buildAspectRatio - width and height ratios < 1', (): void => {
//         const width: number = 0.2;
//         const height: number = 0.89;
//         const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(width, height);
//         expect(aspectRatio).toBeUndefined();
//     });
//
//     test.each(
//         [
//             { widthRatio: 1, heightRatio: 1, resolution: 720, expectedWidth: 720, expectedHeight: 720 },
//             { widthRatio: 1, heightRatio: 1.5, resolution: 720, expectedWidth: 720, expectedHeight: 1080 },
//             { widthRatio: 1.5, heightRatio: 1, resolution: 720, expectedWidth: 1080, expectedHeight: 720 },
//             { widthRatio: 1, heightRatio: 2, resolution: 720, expectedWidth: 720, expectedHeight: 1440 },
//             { widthRatio: 2, heightRatio: 1, resolution: 720, expectedWidth: 1440, expectedHeight: 720 },
//             { widthRatio: 3, heightRatio: 4, resolution: 720, expectedWidth: 720, expectedHeight: 960 },
//             { widthRatio: 4, heightRatio: 3, resolution: 720, expectedWidth: 960, expectedHeight: 720 },
//             { widthRatio: 7, heightRatio: 10, resolution: 720, expectedWidth: 720, expectedHeight: 1028 },
//             { widthRatio: 10, heightRatio: 7, resolution: 720, expectedWidth: 1028, expectedHeight: 720 },
//             { widthRatio: 1, heightRatio: 1, resolution: 1080, expectedWidth: 1080, expectedHeight: 1080 },
//             { widthRatio: 1, heightRatio: 1.5, resolution: 1080, expectedWidth: 1080, expectedHeight: 1620 },
//             { widthRatio: 1.5, heightRatio: 1, resolution: 1080, expectedWidth: 1620, expectedHeight: 1080 },
//             { widthRatio: 1, heightRatio: 2, resolution: 1080, expectedWidth: 1080, expectedHeight: 2160 },
//             { widthRatio: 2, heightRatio: 1, resolution: 1080, expectedWidth: 2160, expectedHeight: 1080 },
//             { widthRatio: 3, heightRatio: 4, resolution: 1080, expectedWidth: 1080, expectedHeight: 1440 },
//             { widthRatio: 4, heightRatio: 3, resolution: 1080, expectedWidth: 1440, expectedHeight: 1080 },
//             { widthRatio: 7, heightRatio: 10, resolution: 1080, expectedWidth: 1080, expectedHeight: 1542 },
//             { widthRatio: 10, heightRatio: 7, resolution: 1080, expectedWidth: 1542, expectedHeight: 1080 }
//         ]
//     )('width and height properties: $widthRatio:$heightRatio; $resolution',
//         ({ widthRatio, heightRatio, resolution, expectedWidth, expectedHeight }): void => {
//             const aspectRatio: AspectRatio | undefined = AspectRatioHandler.buildAspectRatio(widthRatio, heightRatio);
//             expect(aspectRatio).toBeTruthy();
//
//             if (aspectRatio) {
//                 const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//                 expect(handler.width).toBe(expectedWidth);
//                 expect(handler.height).toBe(expectedHeight);
//             }
//         }
//     );
//
//     test('width and height properties - zero resolution', (): void => {
//         const width: number = 3;
//         const height: number = 21;
//         const resolution: number = 0;
//         const aspectRatio: AspectRatio = { WIDTH_RATIO: width, HEIGHT_RATIO: height, NAME: 'test ratio' };
//         const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//         expect(handler.width).toBe(0);
//         expect(handler.height).toBe(0);
//     });
//
//     test('width and height properties - negative resolution', (): void => {
//         const width: number = 7;
//         const height: number = 9;
//         const resolution: number = -1080;
//         const aspectRatio: AspectRatio = { WIDTH_RATIO: width, HEIGHT_RATIO: height, NAME: 'test ratio' };
//         const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//         expect(handler.width).toBe(0);
//         expect(handler.height).toBe(0);
//     });
//
//     test('width and height properties - width ratio < 1', (): void => {
//         const width: number = 0.993;
//         const height: number = 2;
//         const resolution: number = 720;
//         const aspectRatio: AspectRatio = { WIDTH_RATIO: width, HEIGHT_RATIO: height, NAME: 'test ratio' };
//         const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//         expect(handler.width).toBe(0);
//         expect(handler.height).toBe(0);
//     });
//
//     test('width and height properties - height ratio < 1', (): void => {
//         const width: number = 3.2;
//         const height: number = 0.111;
//         const resolution: number = 720;
//         const aspectRatio: AspectRatio = { WIDTH_RATIO: width, HEIGHT_RATIO: height, NAME: 'test ratio' };
//         const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//         expect(handler.width).toBe(0);
//         expect(handler.height).toBe(0);
//     });
//
//     test('width and height properties - width and height ratios < 1', (): void => {
//         const width: number = 0.2;
//         const height: number = 0.333;
//         const resolution: number = 720;
//         const aspectRatio: AspectRatio = { WIDTH_RATIO: width, HEIGHT_RATIO: height, NAME: 'test ratio' };
//         const handler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//         expect(handler.width).toBe(0);
//         expect(handler.height).toBe(0);
//     });
// });
