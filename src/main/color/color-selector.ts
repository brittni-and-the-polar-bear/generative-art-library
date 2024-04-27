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
 * @category Color
 */
const enum ColorSelectorType {
    /**
     * Color selector that chooses colors from a pre-selected palette.
     */
    Palette = 'palette color selector',

    /**
     * Color selector that chooses color randomly from a range of RGB(A) values.
     */
    RGB = 'RGB color selector'
}

/**
 * ColorSelectors choose and return colors from some set list or criteria.
 * @category Color
 */
abstract class ColorSelector {
    /**
     * A set list of {@link Color} objects that the selector can choose from.
     */
    private readonly _colorChoices: Color[] = [];

    /**
     * A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `true`, {@link selectColorFromChoices} will select colors
     * from {@link _colorChoices} in a random order.<br/>
     * When `false`, {@link selectColorFromChoices} will select colors
     * list order.
     */
    private readonly _randomOrder: boolean;

    /**
     * The current index of {@link _colorChoices} being chosen
     * when colors are selected in list order (i.e. {@link _randomOrder} is `false`).
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
     * Select and return a {@link Color} object.
     */
    public abstract getColor(): Color;

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     */
    public abstract get name(): string;

    /**
     * @returns A list of the names of the colors the selector
     * is choosing from.
     */
    public abstract get colorNames(): string[];

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     */
    public abstract get type(): ColorSelectorType;

    /**
     * @returns The selected {@link Color} from the {@link _colorChoices} list.<br/>
     * If {@link _colorChoices} is empty, a default {@link Color}
     * object (black) will be returned.
     */
    public selectColorFromChoices(): Color {
        let col: Color = new Color();

        if (this._randomOrder) {
            col =  Random.randomElement(this._colorChoices) ?? (new Color());
        } else {
            if (this._currentIndex < this._colorChoices.length) {
                col = this._colorChoices[this._currentIndex];
                this.incrementCurrentIndex();
            }
        }

        return col;
    }

    /**
     * Add a {@link Color} to the {@link _colorChoices} list.
     * @param color -
     */
    protected addColorChoice(color: Color): void {
        this._colorChoices.push(color);
    }

    /**
     * Increment {@link _currentIndex} to select the next
     * {@link Color} element in the {@link _colorChoices} list.
     * @see {@link _randomOrder}
     */
    private incrementCurrentIndex(): void {
        const length: number = this._colorChoices.length;

        if (length > 0) {
            this._currentIndex = (this._currentIndex + 1) % length;
        }
    }
}

export {ColorSelector, ColorSelectorType};
