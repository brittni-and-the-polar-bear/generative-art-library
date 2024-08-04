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

import { PaletteColor } from 'palette';

import { Discriminators } from './discriminators';

interface CompatibleObject {
    DISCRIMINATOR?: string
}

/**
 * Methods for evaluating if objects implement various interfaces.
 *
 * @category Discriminator
 */
export class Discriminator {
    /**
     * Determines if the given object is a {@link PaletteColor}
     * (i.e. implements the PaletteColor interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link PaletteColor} interface, `false` if it does not.
     */
    public static isPaletteColor(object: any): object is PaletteColor {
        let hasMatch: boolean = false;

        if (object && typeof object === 'object') {
            hasMatch = (object as CompatibleObject).DISCRIMINATOR === Discriminators.PALETTE_COLOR;
        }

        return hasMatch;
    }
}
