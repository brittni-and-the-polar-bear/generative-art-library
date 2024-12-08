/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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

const noP5: P5Lib = new P5Lib((p: P5Lib): void => {
    p.setup = (): void => {
        p.createCanvas(0, 0);
        p.noLoop();
    };
});

/**
 * The P5Context provides static access to the p5.js sketch context.
 * This context allows access to all methods and variables of the p5.js library.
 *
 * @category Sketch Context
 * @category Sketch Context: p5.js
 */
export class P5Context {
    /**
     * The underlying p5.js sketch context object.
     */
    private static _p5?: P5Lib | null = null;

    /**
     * Initializes the sketch context to allow other accessors to have
     * accurate canvas, environment, and runtime information.
     *
     * @param p5 - The sketch context of the running p5.js script.
     */
    public static initialize(p5: P5Lib): void {
        if (!this._p5) {
            this._p5 = p5;
            noP5.noCanvas();
        }
    }

    /**
     * The current sketch context.<br/>
     * If no context has been initialized, the method will return
     * an "empty" sketch context (0x0 canvas; no loop).
     */
    public static get p5(): P5Lib {
        return this._p5 ?? noP5;
    }
}
