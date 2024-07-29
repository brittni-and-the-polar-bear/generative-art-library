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

import {SketchContext} from 'context';
import {Random, WeightedElement} from 'random';

import {Color} from './color';
import {ColorSelectorType} from './color-selector-type';

/**
 * ColorSelectors choose and return colors from some set list or criteria.
 *
 * @category Color
 * @category Color Selector
 */
export abstract class ColorSelector {
    /**
     * A list of {@link Color} objects that the selector can choose from.
     */
    private readonly _COLOR_CHOICES: Color[] = [];

    /**
     * A set of the names of the colors that can be
     * or have been chosen by the color selector.
     */
    private readonly _COLOR_NAMES: Set<string> = new Set<string>();

    /**
     * The name of the color selector.
     */
    private readonly _NAME: string;

    /**
     * A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `true`, {@link selectColorFromChoices} will select colors
     * from {@link _COLOR_CHOICES} in a random order.<br/>
     * When `false`, {@link selectColorFromChoices} will select colors
     * list order.
     */
    private readonly _RANDOM_ORDER: boolean;

    /**
     * The current index of {@link _COLOR_CHOICES} being chosen
     * when colors are selected in list order (i.e. {@link _RANDOM_ORDER} is `false`).
     */
    private _currentIndex: number = 0;

    /**
     * @param name - The name of the color selector.
     * @param randomOrder - A flag that determines the color selection order
     * of {@link selectColorFromChoices}.
     *
     * @see {@link _RANDOM_ORDER}
     */
    protected constructor(name: string, randomOrder?: boolean) {
        this._RANDOM_ORDER = randomOrder ?? Random.randomBoolean();
        this._NAME = name;
    }

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     */
    public abstract get type(): ColorSelectorType;

    /**
     * Select and return a {@link Color} object.
     */
    public abstract getColor(): Color;

    /**
     * @returns The names of the colors that can be or have been chosen
     * by the color selector.
     */
    public get colorNames(): string[] {
        return Array.from(this._COLOR_NAMES);
    }

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     */
    public get name(): string {
        return this._NAME;
    }

    /**
     * @returns The selected {@link Color} from the {@link _COLOR_CHOICES} list.<br/>
     * If {@link _COLOR_CHOICES} is empty, a default {@link Color}
     * object (black) will be returned.
     */
    public selectColorFromChoices(): Color {
        let col: Color = new Color();

        if (this._RANDOM_ORDER) {
            col = Random.randomElement(this._COLOR_CHOICES) ?? (new Color());
        } else {
            if (this._currentIndex < this._COLOR_CHOICES.length) {
                col = this._COLOR_CHOICES[this._currentIndex];
                this.incrementCurrentIndex();
            }
        }

        return col;
    }

    /**
     * Select and return a {@link Color} object to be used as a background.
     * The color will either be black (#000000), white (#FFFFFF), or a color
     * from the selector, chosen by the {@link getColor} method.<br/>
     * <b>IMPORTANT: The sum of chanceOfBlack, chanceOfWhite, and chanceOfColor
     * should be equal to 1.0.</b>
     *
     * @param chanceOfBlack - The percent (0-1) chance that the chosen color
     * will be black (#000000). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfWhite - The percent (0-1) chance that the chosen color
     * will be white (#FFFFFF). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfColor - The percent (0-1) chance that the chosen color
     * will be a color from the selector ({@link getColor}).
     * The sum of all percentages should be equal to 1.0.
     */
    public getBackgroundColor(chanceOfBlack: number,
                              chanceOfWhite: number,
                              chanceOfColor: number): Color {
        const weightedColors: WeightedElement<Color>[] = [
            {value: new Color(SketchContext.p5.color(0)), weight: chanceOfBlack},
            {value: new Color(SketchContext.p5.color(255)), weight: chanceOfWhite},
            {value: this.getColor(), weight: chanceOfColor}
        ];

        return Random.randomWeightedElement(weightedColors) ?? (new Color());
    }

    /**
     * @returns The {@link _COLOR_NAMES} set.
     */
    protected get COLOR_NAMES(): Set<string> {
        return this._COLOR_NAMES;
    }

    /**
     * Add a {@link Color} to the {@link _COLOR_CHOICES} list.
     * @param color -
     */
    protected addColorChoice(color: Color): void {
        this._COLOR_CHOICES.push(color);
    }

    /**
     * Increment {@link _currentIndex} to select the next
     * {@link Color} element in the {@link _COLOR_CHOICES} list.
     *
     * @see {@link _RANDOM_ORDER}
     */
    private incrementCurrentIndex(): void {
        const length: number = this._COLOR_CHOICES.length;

        if (length > 0) {
            this._currentIndex = (this._currentIndex + 1) % length;
        }
    }
}
