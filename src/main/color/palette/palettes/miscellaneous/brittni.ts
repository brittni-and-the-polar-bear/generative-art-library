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

import {Palette} from 'palette';
import {_0437F2, _0FFF4F, _121212, _7A00F5, _FF6BB5} from 'palette-colors';

import {MISCELLANEOUS_PALETTES} from '../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="02542825816779253">new CoolorsPaletteWidget("02542825816779253", ["121212","0437f2","ff6bb5","0fff4f","7a00f5"]); </script>
 *
 * @see {@link _121212}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 *
 * @source
 */
export const BRITTNI: Palette = {
    name: 'brittni',
    source: 'brittni',
    isGradient: false,
    colors: [
        _121212,
        _0437F2,
        _FF6BB5,
        _0FFF4F,
        _7A00F5
    ]
};

MISCELLANEOUS_PALETTES.setUndefinedKey(BRITTNI.name, BRITTNI);
