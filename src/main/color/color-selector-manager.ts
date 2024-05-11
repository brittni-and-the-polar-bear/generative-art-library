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

import {ColorSelector, DefaultColorSelector} from './color-selector';

/**
 * Manager to select a random {@link ColorSelector} from a {@link !Set}.
 * @category Color
 */
class ColorSelectorManager {
    /**
     * Underlying {@link !Set} of {@link ColorSelector} objects.
     */
    private readonly _colorSelectors: Set<ColorSelector> = new Set<ColorSelector>();

    /**
     * Select a random {@link ColorSelector} from the {@link _colorSelectors} set.
     * @returns A random {@link ColorSelector}. If a selector cannot be chosen,
     * a {@link DefaultColorSelector} object will be returned.
     */
    public getRandomColorSelector(): ColorSelector {
        const selectors: ColorSelector[] = Array.from(this._colorSelectors);
        return Random.randomElement(selectors) ?? (new DefaultColorSelector());
    }

    /**
     * Add a {@link ColorSelector} to the {@link _colorSelectors} set.
     * @param selector -
     */
    public addColorSelector(selector: ColorSelector): void {
        this._colorSelectors.add(selector);
    }

    /**
     * Add multiple {@link ColorSelector} objects to the {@link _colorSelectors} set.
     * @param selectors -
     */
    public addColorSelectors(selectors: Iterable<ColorSelector>): void {
        for (const selector of selectors) {
            this._colorSelectors.add(selector);
        }
    }
}

export {ColorSelectorManager};
