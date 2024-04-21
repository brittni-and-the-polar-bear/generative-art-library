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

/**
 * Structure to handle a range of values,
 * where the range has a minimum value and a maximum value.
 * @public
 * @category Math
 * @category Random
 */
class Range {
    /**
     * @public
     * @param _min - The minimum value of the Range.
     * @param _max - The maximum value of the Range.
     */
    public constructor(private _min: number, private _max: number) {
        if (_max < _min) {
            const temp: number = _max;
            this._max = _min;
            this._min = temp;
        }
    }

    /**
     * @public
     * @returns The maximum value of the Range.
     */
    public get max(): number {
        return this._max;
    }

    /**
     * If the given {@link value} is less than the current {@link _min},
     * the fields {@link _min} and {@link _max} will be set so that {@link _min} is less than {@link _max}.
     * @param value - The new maximum value of the Range.
     */
    public set max(value: number) {
        if (value < this._min) {
            console.warn(`max (${value}) is less than current min (${this._min}). object fields will be set so that min is less than max.`);
            this._max = this._min;
            this._min = value;
        } else {
            this._max = value;
        }
    }

    /**
     * @public
     * @returns The minimum value of the Range.
     */
    public get min(): number {
        return this._min;
    }

    /**
     * If the given {@link value} is greater than the current {@link _max},
     * the fields {@link _min} and {@link _max} will be set so that {@link _min} is less than {@link _max}.
     * @param value - The new minimum value of the Range.
     */
    public set min(value: number) {
        if (value > this._max) {
            console.warn(`min (${value}) is greater than current max (${this._max}). object fields will be set so that min is less than max.`);
            this._min = this._max;
            this._max = value;
        } else {
            this._min = value;
        }
    }
}

export {Range};
