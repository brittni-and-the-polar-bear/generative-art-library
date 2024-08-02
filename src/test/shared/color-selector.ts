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

import { Color, ColorSelector } from 'color';
import { StringMap } from 'map';

import { ColorComponents, colorToColorComponents } from './color';
import { RANDOM_TEST_TRIES } from './random';

export function checkForValidColorSelector(selector: ColorSelector): void {
    expect(selector.type).toBeTruthy();
    expect(selector.name).toBeTruthy();
    expect(selector.colorNames).toBeTruthy();
    expect(selector.colorNames.length).toBeGreaterThan(0);
}

export function checkForValidRandomSelector(
    selector: ColorSelector,
    colors: Color[],
    picksAllColors: boolean,
    colorCount?: number): void
{
    checkForValidColorSelector(selector);
    const expectedComponents: ColorComponents[] = colors.map((c: Color): ColorComponents => colorToColorComponents(c));
    const colorMap: StringMap<ColorComponents> = new StringMap<ColorComponents>();

    for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
        const components: ColorComponents = colorToColorComponents(selector.getColor());
        const key: string = components.r.toString() + '' + components.g.toString() + '' + components.b.toString();
        colorMap.setUndefinedKey(key, components);
    }

    if (picksAllColors) {
        expect(colorMap.size).toEqual(expectedComponents.length);
    } else if (colorCount) {
        expect(colorMap.size).toEqual(colorCount);
    }

    for (const components of colorMap.values) {
        expect(expectedComponents).toContainEqual(components);
    }
}

export function checkForValidInOrderSelector(
    selector: ColorSelector,
    colors: Color[],
    matchColorOrder: boolean,
    picksAllColors: boolean,
    colorCount?: number): void
{
    checkForValidColorSelector(selector);

    if (!colorCount || colorCount < 0) {
        colorCount = colors.length;
    }

    if (matchColorOrder && !picksAllColors) {
        colors = colors.slice(0, colorCount);
    }

    const expectedComponents: ColorComponents[] = colors.map((c: Color): ColorComponents => colorToColorComponents(c));
    const colorMap: StringMap<ColorComponents> = new StringMap<ColorComponents>();

    if (!matchColorOrder) {
        const inOrderColors: Color[] = [];

        for (let i: number = 0; i < colorCount; i++) {
            const c: Color = selector.getColor();
            const components: ColorComponents = colorToColorComponents(c);
            expect(expectedComponents).toContainEqual(components);
            inOrderColors.push(c);

            const key: string = components.r.toString() + '' + components.g.toString() + '' + components.b.toString();
            colorMap.setUndefinedKey(key, components);
        }

        for (let i: number = 0; i < colorCount; i++) {
            const c: Color = selector.getColor();
            const components: ColorComponents = colorToColorComponents(c);
            const expectedSelection: Color = inOrderColors[i];
            const expectedSelectionComponents: ColorComponents = colorToColorComponents(expectedSelection);
            expect(components).toEqual(expectedSelectionComponents);
        }
    } else {
        for (let i: number = 0; i < colors.length * 2; i++) {
            const selectedColor: Color = selector.getColor();
            const selectedComps: ColorComponents = colorToColorComponents(selectedColor);
            const expectedComps: ColorComponents = colorToColorComponents(colors[i % colors.length]);
            expect(selectedComps).toEqual(expectedComps);

            const key: string = selectedComps.r.toString() + '' + selectedComps.g.toString() + '' + selectedComps.b.toString();
            colorMap.setUndefinedKey(key, selectedComps);
        }
    }

    if (picksAllColors) {
        expect(colorMap.size).toEqual(expectedComponents.length);
    } else if (colorCount) {
        expect(colorMap.size).toEqual(colorCount);
    }

    for (const components of colorMap.values) {
        expect(expectedComponents).toContainEqual(components);
    }
}
