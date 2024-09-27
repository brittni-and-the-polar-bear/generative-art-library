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

import { AspectRatio } from './aspect-ratio';

// TODO - add to release notes
/**
 * An AspectRatioHandler provides the proper width and height of a canvas
 * given an {@link AspectRatio} and resolution.
 *
 * @category Canvas Context
 */
export class AspectRatioHandler {
    /**
     * The calculated canvas width.
     */
    private readonly _width: number | undefined;

    /**
     * The calculated canvas height.
     */
    private readonly _height: number | undefined;

    // TODO - docs
    // TODO - unit test
    public constructor(aspectRatio: AspectRatio, baseResolution: number) {
        if (aspectRatio.WIDTH_RATIO < 1 || aspectRatio.HEIGHT_RATIO < 1) {
            this._width = undefined;
            this._height = undefined;
        } else {
            const unit: number = this.calculateUnit(aspectRatio, baseResolution);
            this._width = Math.floor(unit * aspectRatio.WIDTH_RATIO);
            this._height = Math.floor(unit * aspectRatio.HEIGHT_RATIO);
        }
    }

    // TODO - docs
    // TODO - unit test
    public static buildAspectRatio(widthRatio: number, heightRatio: number, name?: string): AspectRatio | undefined {
        if (widthRatio < 1 || heightRatio < 1) {
            return undefined;
        }

        let ratioName: string;

        if (name) {
            ratioName = name;
        } else {
            ratioName = `${widthRatio}:${heightRatio}`;
        }

        return {
            NAME: ratioName,
            WIDTH_RATIO: widthRatio,
            HEIGHT_RATIO: heightRatio
        };
    }

    // TODO - documentation
    private calculateUnit(aspectRatio: AspectRatio, baseResolution: number): number {
        return baseResolution / Math.min(aspectRatio.WIDTH_RATIO, aspectRatio.HEIGHT_RATIO);
    }

    // TODO - docs
    // TODO - unit test
    public get width(): number {
        let w: number = 0;

        if (this._width) {
            w = this._width;
        }

        return w;
    }

    // TODO - docs
    // TODO - unit test
    public get height(): number {
        let h: number = 0;

        if (this._height) {
            h = this._height;
        }

        return h;
    }
}
