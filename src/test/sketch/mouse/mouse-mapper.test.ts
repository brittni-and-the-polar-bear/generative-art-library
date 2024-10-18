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

import {ASPECT_RATIOS, CanvasContext, MouseMapper} from "sketch-context";

describe('MouseMapper', (): void => {
    const resolution: number = 720;
    const width: number = resolution;
    const height: number = resolution;

    beforeAll((): void => {
        CanvasContext.buildCanvas(ASPECT_RATIOS.SQUARE, 720, undefined, true);
    });

    test('MouseMapper.mouseX', (): void => {
        expect(MouseMapper.mouseX).toBe(0);
    });

    test('MouseMapper.mouseY', (): void => {
        expect(MouseMapper.mouseY).toBe(0);
    });

    test('MouseMapper.mouseXRatio', (): void => {
        expect(MouseMapper.mouseXRatio).toBe(0);
    });

    test('MouseMapper.mouseYRatio', (): void => {
        expect(MouseMapper.mouseYRatio).toBe(0);
    });

    test('MouseMapper.mapMouseXToCanvas', (): void => {
        expect(MouseMapper.mapMouseXToCanvas(0)).toBe(0);
        expect(MouseMapper.mapMouseXToCanvas(width)).toBe(width);
        expect(MouseMapper.mapMouseXToCanvas(-width)).toBe(-width);
        expect(MouseMapper.mapMouseXToCanvas(width * 2)).toBe(width * 2);
    });

    test('MouseMapper.mapMouseYToCanvas', (): void => {
        expect(MouseMapper.mapMouseYToCanvas(0)).toBe(0);
        expect(MouseMapper.mapMouseYToCanvas(height)).toBe(height);
        expect(MouseMapper.mapMouseYToCanvas(-height)).toBe(-height);
        expect(MouseMapper.mapMouseYToCanvas(height * 2)).toBe(height * 2);
    });

    test('MouseMapper.mapMouseXToRatio', (): void => {
        expect(MouseMapper.mapMouseXToRatio(0)).toBe(0);
        expect(MouseMapper.mapMouseXToRatio(width)).toBe(1);
        expect(MouseMapper.mapMouseXToRatio(-width)).toBe(-1);
        expect(MouseMapper.mapMouseXToRatio(width * 2)).toBe(2);
    });

    test('MouseMapper.mapMouseYToRatio', (): void => {
        expect(MouseMapper.mapMouseYToRatio(0)).toBe(0);
        expect(MouseMapper.mapMouseYToRatio(height)).toBe(1);
        expect(MouseMapper.mapMouseYToRatio(-height)).toBe(-1);
        expect(MouseMapper.mapMouseYToRatio(height * 2)).toBe(2);
    });
});


