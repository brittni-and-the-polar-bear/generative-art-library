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

import {Random} from 'random';

import {Color} from './color';

/**
 * Enum for the different types of ColorSelectors.
 * @public
 * @category Color
 */
const enum ColorSelectorType {
    /**
     * Color selector chooses colors from a pre-selected palette.
     * @public
     */
    Palette = 'palette color selector',

    /**
     * Color selector chooses color randomly from a range of RGB(A) values.
     * @public
     */
    RGB = 'RGB color selector'
}

/**
 * ColorSelectors choose and return colors from some set list or criteria.
 * @public
 * @abstract
 */
abstract class ColorSelector {
    /**
     * A set list of {@link Color} objects that the selector can choose from.
     * @private
     * @readonly
     */
    private readonly _colorChoices: Color[] = [];

    /**
     * A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `true`, {@link selectColorFromChoices} will select colors
     * from {@link _colorChoices} in a random order.<br/>
     * When `false`, {@link selectColorFromChoices} will select colors
     * list order.
     * @private
     * @readonly
     */
    private readonly _randomOrder: boolean;

    /**
     * The current index of {@link _colorChoices} being chosen
     * when colors are selected in list order (i.e. {@link _randomOrder} is `false`).
     * @private
     */
    private _currentIndex: number = 0;

    /**
     * @param randomOrder A flag that determines the color selection order
     * of {@link selectColorFromChoices}.
     * @see {@link _randomOrder}
     */
    protected constructor(randomOrder?: boolean) {
        this._randomOrder = randomOrder ?? Random.randomBoolean();
    }

    /**
     * Select and return a {@link Color}.
     * @returns A {@link Color} object.
     * @public
     * @abstract
     */
    public abstract getColor(): Color;

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     * @public
     * @abstract
     */
    public abstract get name(): string;

    /**
     * @returns A list of the names of the colors the selector
     * is choosing from.
     * @public
     * @abstract
     */
    public abstract get colorNames(): string[];

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     * @public
     * @abstract
     */
    public abstract get type(): ColorSelectorType;

    // TODO - you are here. finish documentation. add unit tests.
    public selectColorFromChoices(): Color {
        let col: Color;

        if (this._randomOrder) {
            col =  Random.randomElement(this._colorChoices) ?? (new Color());
        } else {
            col = this._colorChoices[this._currentIndex];
            this.incrementCurrentIndex();
        }

        return col;
    }

    protected addColorChoice(color: Color): void {
        this._colorChoices.push(color);
    }

    private incrementCurrentIndex(): void {
        this._currentIndex = (this._currentIndex + 1) % this._colorChoices.length;
    }
}

export {ColorSelector, ColorSelectorType};
