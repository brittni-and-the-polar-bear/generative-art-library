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

import {Random} from './random';

/**
 * A class for randomly selecting elements from a given list.
 * This class assumes an equal distribution for all elements of the list.
 * @category Random
 */
class RandomSelector<Type> {
    /**
     * @param _elements - The elements that {@link randomElement} and
     * {@link getRandomElementAndRemove} can select from.
     */
    public constructor(private readonly _elements: Type[]) {
    }

    /**
     * Selects random element from {@link _elements}.<br/>
     * This method assumes an equal distribution for all elements of the list.<br/>
     * If {@link _elements} is empty, the function will return {@link !undefined}.
     */
    public randomElement(): Type | undefined {
        return Random.randomElement(this._elements);
    }

    /**
     * Selects random element from {@link _elements}, then removes that element from the list.<br/>
     * This method assumes an equal distribution for all elements of the list.<br/>
     * If {@link _elements} is empty, the function will return {@link !undefined}.
     */
    public getRandomElementAndRemove(): Type | undefined {
        let element: Type | undefined = undefined;
        const size: number = this._elements.length;

        if (size > 0) {
            const index: number = Random.randomInt(0, size);

            if (index < size) {
                element = this._elements[index];
                this._elements.splice(index, 1);
            }
        }

        return element;
    }
}

export {RandomSelector};
