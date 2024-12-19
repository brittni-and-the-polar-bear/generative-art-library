/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's @batpb/genart algorithmic art library,
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

// import P5Lib from 'p5';
// import { P5Context } from '../p5-context';
// import { AspectRatio, AspectRatioHandler, ASPECT_RATIOS } from './aspect-ratio';
//
// export class Canvas {
//     /**
//      * Current {@link AspectRatio} of the canvas.
//      *
//      * @defaultValue {@link ASPECT_RATIOS.SQUARE}
//      */
//     #aspectRatio: AspectRatio = ASPECT_RATIOS.SQUARE;
//
//     /**
//      * Current resolution of the canvas.
//      *
//      * @defaultValue 720
//      */
//     #resolution: number = 720;
//
//     /**
//      * Should the {@link AspectRatio} of the canvas always
//      * match the aspect ratio of the browser window?
//      *
//      * @defaultValue false
//      */
//     #matchingWindowRatio: boolean = false;
//
//     public constructor(aspectRatio: AspectRatio,
//                        resolution: number,
//                        canvasType?: 'webgl' | 'p2d') {
//         const p5: P5Lib = P5Context.p5;
//         this.#aspectRatio = aspectRatio;
//         this.#resolution = resolution;
//         const ratioHandler: AspectRatioHandler = new AspectRatioHandler(aspectRatio, resolution);
//
//         if (canvasType && canvasType === 'webgl') {
//             p5.createCanvas(ratioHandler.width, ratioHandler.height, p5.WEBGL);
//             this.#isWebGL = true;
//         } else {
//             p5.createCanvas(ratioHandler.width, ratioHandler.height);
//             this.#isWebGL = false;
//         }
//     }
// }
