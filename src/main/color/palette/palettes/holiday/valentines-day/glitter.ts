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

import {Discriminators} from 'discriminator';
import {Palette} from 'palette';
import {_EC417A, _F06090, _F490B1, _F8B9CE, _FCE3EC} from 'palette-colors';

export const GLITTER: Palette = {
    NAME: 'glitter',

    SOURCE: 'https://culrs.com/palette/fce4ecf8bbd0f48fb1f06292ec407a',

    IS_GRADIENT: true,

    COLORS: [
        _FCE3EC,
        _F8B9CE,
        _F490B1,
        _F06090,
        _EC417A
    ],

    CONTRAST_MAP: {
        '#000000': ['#FCE3EC', '#F8B9CE', '#F490B1', '#F06090', '#EC417A'],
        '#FFFFFF': [],
        '#FCE3EC': ['#000000'],
        '#F8B9CE': ['#000000'],
        '#F490B1': ['#000000'],
        '#F06090': ['#000000'],
        '#EC417A': ['#000000']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};
