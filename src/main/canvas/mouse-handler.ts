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

import { SketchContext } from 'context';

import { CanvasContext } from './canvas-context';

// TODO - remove mouse function from CanvasContext
// TODO - documentation
// TODO - release notes
export class MouseHandler {
    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests???
    public static get mouseX(): number {
        return MouseHandler.mapMouseXToCanvas(SketchContext.p5.mouseX);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests???
    public static get mouseY(): number {
        return MouseHandler.mapMouseYToCanvas(SketchContext.p5.mouseY);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests???
    public static get mouseXRatio(): number {
        return MouseHandler.mapMouseXToRatio(SketchContext.p5.mouseX);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests???
    public static get mouseYRatio(): number {
        return MouseHandler.mapMouseYToRatio(SketchContext.p5.mouseY);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests
    public static mapMouseXToCanvas(mouseX: number): number {
        const p5: P5Lib = SketchContext.p5;
        return p5.map(mouseX, 0, p5.width, CanvasContext.minX, CanvasContext.maxX);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests
    public static mapMouseYToCanvas(mouseY: number): number {
        const p5: P5Lib = SketchContext.p5;
        return p5.map(mouseY, 0, p5.height, CanvasContext.minY, CanvasContext.maxY);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests
    // TODO - other tests - can you click outside the canvas?
    public static mapMouseXToRatio(mouseX: number): number {
        const p5: P5Lib = SketchContext.p5;
        return p5.map(mouseX, 0, p5.width, 0, 1);
    }

    // TODO - documentation
    // TODO - release notes
    // TODO - unit tests
    // TODO - other tests - can you click outside the canvas?
    public static mapMouseYToRatio(mouseY: number): number {
        const p5: P5Lib = SketchContext.p5;
        return p5.map(mouseY, 0, p5.height, 0, 1);
    }
}
