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

import P5Lib from 'p5';
import { SketchContext } from 'context';

describe('SketchContext tests', (): void => {
    test('test default context', (): void => {
        expect(SketchContext.p5).toBeTruthy();
        expect(SketchContext.p5.width).toBe(0);
        expect(SketchContext.p5.height).toBe(0);
        expect(SketchContext.p5.color(255, 0, 0)).toBeTruthy();
    });

    test('test initializing context', (): void => {
        const canvasSize: number = 100;
        expect(SketchContext.p5).toBeTruthy();
        SketchContext.initialize(new P5Lib((p: P5Lib) => {
            p.setup = (): void => {
                p.createCanvas(canvasSize, canvasSize);
            };
        }));
        expect(SketchContext.p5.width).toBe(canvasSize);
        expect(SketchContext.p5.height).toBe(canvasSize);
        expect(SketchContext.p5.color(255, 0, 0)).toBeTruthy();

        const newCanvasSize: number = 500;
        expect(SketchContext.p5).toBeTruthy();
        SketchContext.initialize(new P5Lib((p: P5Lib) => {
            p.setup = (): void => {
                p.createCanvas(newCanvasSize, newCanvasSize);
            };
        }));
        expect(SketchContext.p5.width).toBe(canvasSize);
        expect(SketchContext.p5.height).toBe(canvasSize);
        expect(SketchContext.p5.color(255, 0, 0)).toBeTruthy();
    });
});
