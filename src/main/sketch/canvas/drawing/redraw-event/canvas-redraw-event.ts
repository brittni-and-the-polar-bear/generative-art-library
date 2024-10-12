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

import { CanvasRedrawListener } from './canvas-redraw-listener';

// TODO - release notes
// TODO - docs
/**
 * @category Sketch Context
 * @category Sketch Context: Drawing
 * @category Sketch Context: Events
 */
export class CanvasRedrawEvent {
    private static readonly _LISTENERS: Set<CanvasRedrawListener> = new Set<CanvasRedrawListener>();

    // TODO - release notes
    // TODO - docs
    public static addListener(listener: CanvasRedrawListener): void {
        CanvasRedrawEvent._LISTENERS.add(listener);
    }

    // TODO - release notes
    // TODO - docs
    public static publishRedraw(): void {
        console.log('CanvasRedrawEvent.publishRedraw');
        CanvasRedrawEvent._LISTENERS.forEach((listener: CanvasRedrawListener): void => {
            listener.canvasRedraw();
        });
    }
}
