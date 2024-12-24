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

import { P5Context } from 'p5-context';

describe('P5Context tests', (): void => {
    test('P5Context.p5 default context', (): void => {
        expect(P5Context.p5).toBeTruthy();
        expect(P5Context.p5.width).toBe(0);
        expect(P5Context.p5.height).toBe(0);
        expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    });

    test.todo('P5Context.p5 initialized context');

    // test('P5Context.p5 initialized context', (): void => {
    //     const canvasSize: number = 250;
    //     expect(P5Context.p5).toBeTruthy();
    //     P5Context.initialize(new P5Lib((p: P5Lib): void => {
    //         p.setup = (): void => {
    //             p.createCanvas(canvasSize, canvasSize);
    //             p.noLoop();
    //         };
    //     }));
    //
    //     expect(P5Context.p5.width).toBe(canvasSize);
    //     expect(P5Context.p5.height).toBe(canvasSize);
    //     expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    // });

    test.todo('P5Context.p5 singleton');

    // test('P5Context.p5 singleton', (): void => {
    //     const canvasSize: number = 100;
    //     expect(P5Context.p5).toBeTruthy();
    //     P5Context.initialize(new P5Lib((p: P5Lib): void => {
    //         p.setup = (): void => {
    //             p.createCanvas(canvasSize, canvasSize);
    //             p.noLoop();
    //         };
    //     }));
    //     expect(P5Context.p5.width).toBe(canvasSize);
    //     expect(P5Context.p5.height).toBe(canvasSize);
    //     expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    //
    //     const newCanvasSize: number = 500;
    //     expect(P5Context.p5).toBeTruthy();
    //     P5Context.initialize(new P5Lib((p: P5Lib) => {
    //         p.setup = (): void => {
    //             p.createCanvas(newCanvasSize, newCanvasSize);
    //         };
    //     }));
    //     expect(P5Context.p5.width).toBe(canvasSize);
    //     expect(P5Context.p5.height).toBe(canvasSize);
    //     expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    // });
});
