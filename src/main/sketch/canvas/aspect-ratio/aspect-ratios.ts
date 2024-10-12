/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import { AspectRatio } from './aspect-ratio';

/**
 * Pre-set {@link AspectRatio} objects for easy access.
 *
 * @category Sketch Context
 * @category Sketch Context: Canvas
 */
export const ASPECT_RATIOS: Record<string, AspectRatio> = {
    MATCH: {
        NAME: 'match',
        WIDTH_RATIO: 0,
        HEIGHT_RATIO: 0
    },
    INITIAL: {
      NAME: 'initial',
      WIDTH_RATIO: 0,
      HEIGHT_RATIO: 0
    },
    PINTEREST_PIN: {
        NAME: '2:3',
        WIDTH_RATIO: 2,
        HEIGHT_RATIO: 3
    },
    RATIO_21_9: {
        NAME: '21:9',
        WIDTH_RATIO: 64,
        HEIGHT_RATIO: 27
    },
    SOCIAL_VIDEO: {
        NAME: '9:16',
        WIDTH_RATIO: 9,
        HEIGHT_RATIO: 16
    },
    SQUARE: {
        NAME: 'square',
        WIDTH_RATIO: 1,
        HEIGHT_RATIO: 1
    },
    TIKTOK_PHOTO: {
        NAME: '3:4',
        WIDTH_RATIO: 3,
        HEIGHT_RATIO: 4
    }
};
