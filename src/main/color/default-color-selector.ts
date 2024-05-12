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

import {Color} from './color';
import {ColorSelector} from './color-selector';
import {ColorSelectorType} from './color-selector-type';

/**
 * Default color selector.
 * To be used when a valid color selector cannot be found.
 * @category Color
 */
class DefaultColorSelector extends ColorSelector {
    public constructor() {
        super(false);
    }

    /**
     * @returns `['black']`
     * @public
     */
    public get colorNames(): string[] {
        return ['black'];
    }

    /**
     * @returns A black color `#000000`.<br/>
     * <div class="color-block" style="background: #000000;"><h2 class="color-block white-pass">black (#000000)</h2></div>
     * @public
     */
    public getColor(): Color {
        return (new Color());
    }

    /**
     * @returns `'default color selector'`
     * @public
     */
    public get name(): string {
        return 'default color selector';
    }

    /**
     * @returns {@link ColorSelectorType.Default}
     * @public
     */
    public get type(): ColorSelectorType {
        return ColorSelectorType.Default;
    }
}

export {DefaultColorSelector};
