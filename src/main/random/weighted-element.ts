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

import { Discriminable, Discriminators } from 'discriminator';

/**
 * A structure for specifying weights of different values
 * when selecting elements in an uneven distribution.
 * The greater the weight, the more likely the element will be chosen.
 *
 * @category Random
 */
export interface WeightedElement<Type> extends Discriminable {
    /**
     * @deprecated Replaced with {@link VALUE}. To be removed in v3.0.0.
     */
    readonly value: Type;

    /**
     * The value returned if this element is selected.
     */
    readonly VALUE: Type;

    /**
     * @deprecated Replaced with {@link WEIGHT}. To be removed in v3.0.0.
     */
    readonly weight: number;

    /**
     * The weight associated with this element.
     * The greater the weight, the more likely the element will be selected.
     */
    readonly WEIGHT: number;

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT;
}
