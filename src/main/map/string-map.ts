/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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
 * A map of string keys to some ValueType.
 * @category Maps
 */
class StringMap<ValueType> {
    /**
     * The underlying map object.
     */
    private readonly _map: Map<string, ValueType>;

    public constructor() {
        this._map = new Map<string, ValueType>();
    }

    /**
     * @returns All the keys of the map.
     */
    public get keys(): IterableIterator<string> {
        return this._map.keys();
    }

    /**
     * @returns All the values of the map.
     */
    public get values(): IterableIterator<ValueType> {
        return this._map.values();
    }

    /**
     * @returns The size of the map.
     */
    public get size(): number {
        return this._map.size;
    }

    /**
     * Retrieve the value associated with the given {@link key}.
     *
     * @param key - The key of the desired value in the map.
     */
    public get(key: string): ValueType | undefined {
        return this._map.get(key);
    }

    /**
     * Returns `true` if the map contains the given {@link key},
     * returns `false` if it does not.
     * @param key -
     */
    public hasKey(key: string): boolean {
        return this._map.has(key);
    }

    /**
     * Associate the given {@link key} with the given {@link value} in the map.
     *
     * @param key - Key to set in the map.
     * @param value - Value to be associated with the key.
     */
    public setKey(key: string, value: ValueType): void {
        this._map.set(key, value);
    }

    /**
     * Associate the given {@link key} with the given {@link value} in the map
     * only if the key has not been set in the map.
     *
     * @param key - Key to set in the map.
     * @param value - Value to be associated with the key.
     * @param errorMessage - Message to log if the key already has a value.
     * @returns `true` if the operation is successful, `false` if it is not.
     */
    public setUndefinedKey(key: string, value: ValueType, errorMessage?: string): boolean {
        let isSet: boolean;

        if (this._map.has(key)) {
            if (errorMessage) {
                console.warn(errorMessage);
            }

            isSet = false;
        } else {
            this.setKey(key, value);
            isSet = true;
        }

        return isSet;
    }
}

export {StringMap};
