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

import { AspectRatio } from './aspect-ratio';

/**
 * An AspectRatioHandler provides the proper width and height of a canvas
 * given an {@link AspectRatio} and resolution.
 *
 * @category Sketch Context
 * @category Sketch Context: Canvas
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

    /**
     * @param aspectRatio - If this aspect ratio has a
     * {@link AspectRatio.WIDTH_RATIO width ratio} less than 1 or a
     * {@link AspectRatio.HEIGHT_RATIO height ratio} less than 1,
     * then {@link width} and {@link height} will both return 0.
     *
     * @param baseResolution - If this values is less than or equal to 0,
     * {@link width} and {@link height} will both return 0.
     */
    public constructor(aspectRatio: AspectRatio, baseResolution: number) {
        if (aspectRatio.WIDTH_RATIO < 1 || aspectRatio.HEIGHT_RATIO < 1 || baseResolution <= 0) {
            this._width = undefined;
            this._height = undefined;
        } else {
            const unit: number = this.calculateUnit(aspectRatio, baseResolution);
            this._width = Math.floor(unit * aspectRatio.WIDTH_RATIO);
            this._height = Math.floor(unit * aspectRatio.HEIGHT_RATIO);
        }
    }

    /**
     * The calculated canvas width.
     */
    public get width(): number {
        let w: number = 0;

        if (this._width) {
            w = this._width;
        }

        return w;
    }

    /**
     * The calculated canvas height.
     */
    public get height(): number {
        let h: number = 0;

        if (this._height) {
            h = this._height;
        }

        return h;
    }

    /**
     * Creates an {@link AspectRatio} object with the given width ratio, height ratio, and name.
     *
     * @param widthRatio - If this value is less than 1, this method will return `undefined`.
     * @param heightRatio - If this value is less than 1, this method will return `undefined`.
     * @param name - If this value is not specified, the name of the AspectRatio object will be
     * derived from the {@link widthRatio} and {@link heightRatio} parameters.
     */
    public static buildAspectRatio(widthRatio: number,
                                   heightRatio: number,
                                   name?: string): AspectRatio | undefined {
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

    // TODO - docs
    // TODO - unit tests
    // TODO - release notes
    public static buildAspectRatioFromDimensions(width: number,
                                                 height: number,
                                                 name?: string): AspectRatio | undefined {
        if (width < 1 || height < 1) {
            return undefined;
        }

        const minDim: number = Math.min(width, height);
        const widthRatioCalculated: number = width / minDim;
        const heightRatioCalculated: number = height / minDim;
        const widthRatio: number = parseFloat(widthRatioCalculated.toFixed(2));
        const heightRatio: number = parseFloat(heightRatioCalculated.toFixed(2));

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

    /**
     * @param aspectRatio
     * @param baseResolution
     * @return The base unit for the canvas given the desired resolution.
     */
    private calculateUnit(aspectRatio: AspectRatio, baseResolution: number): number {
        return baseResolution / Math.min(aspectRatio.WIDTH_RATIO, aspectRatio.HEIGHT_RATIO);
    }
}
