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

import P5Lib from 'p5';

import { Color, ColorSelector, ColorSelectorType } from 'color';
import { Random, RandomSelector } from 'random';
import { P5Context } from 'sketch-context';

import { Palette } from './palette';
import { PaletteColor } from './palette-color';

/**
 * A basic {@link ColorSelector} that chooses colors from a given {@link Palette}.
 *
 * @category Palette
 * @category Color Selector
 */
export class PaletteColorSelector extends ColorSelector {
    /**
     * @param palette - The {@link Palette} from which colors will be selected.
     *
     * @param buildWithPaletteOrder - When `true`, colors will be chosen
     * in the order they appear in the {@link Palette.COLORS}
     * list. If buildWithPaletteOrder is `true` and {@link randomOrder} is `false`, the order
     * of colors from {@link getColor} will match the order of colors in the palette.
     *
     * @param colorCount - The number of colors available in the selector. This number
     * should be less than or equal to the number of colors in the given {@link palette}.
     *
     * @param randomOrder - A flag that determines the color selection order of {@link getColor}.
     * When `true`, colors will be chosen in a random order.
     * When `false`, colors will be chosen in the order they were initially selected.
     */
    constructor(
        palette: Palette,
        buildWithPaletteOrder?: boolean,
        colorCount?: number,
        randomOrder?: boolean
    ) {
        super(PaletteColorSelector.buildName(palette), randomOrder);
        const p5: P5Lib = P5Context.p5;

        let count: number = colorCount ?? Random.randomInt(PaletteColorSelector.MIN_COLOR_COUNT, palette.COLORS.length + 1);
        count = p5.constrain(
            count,
            PaletteColorSelector.MIN_COLOR_COUNT,
            palette.COLORS.length
        );

        const paletteOrder: boolean = buildWithPaletteOrder ?? Random.randomBoolean();

        this.choosePaletteColors(palette, paletteOrder, count);
    }

    /**
     * @returns {@link ColorSelectorType.PALETTE}
     */
    public override get type(): ColorSelectorType {
        return ColorSelectorType.PALETTE;
    }

    /**
     * @inheritdoc
     */
    public override getColor(): Color {
        return this.selectColorFromChoices();
    }

    /**
     * @returns 2
     */
    private static get MIN_COLOR_COUNT(): number {
        return 2;
    }

    /**
     * Build the name of the selector from the name
     * of the given {@link Palette}.
     *
     * @param palette
     */
    private static buildName(palette: Palette): string {
        let paletteName: string = palette.NAME.toLowerCase();

        if (!paletteName.endsWith(' palette')) {
            paletteName += ' palette';
        }

        paletteName += ' color selector';
        return paletteName;
    }

    /**
     * Choose the colors from the given {@link Palette} that will be available in the selector.
     *
     * @param palette
     *
     * @param buildWithPaletteOrder - When `true`, colors will be chosen from the palette
     * in the order they appear in the {@link Palette.COLORS} list. When `false`, colors will
     * be chosen from the palette in random order.
     *
     * @param colorCount - The number of colors to choose from the palette. This number
     * should be greater than or equal to {@link MIN_COLOR_COUNT} and less than or
     * equal to the number of colors in the given palette.
     */
    private choosePaletteColors(palette: Palette, buildWithPaletteOrder: boolean, colorCount: number): void {
        const p5: P5Lib = P5Context.p5;

        colorCount = p5.constrain(
            colorCount,
            PaletteColorSelector.MIN_COLOR_COUNT,
            palette.COLORS.length
        );

        if (palette.COLORS.length > 0) {
            if (buildWithPaletteOrder) {
                for (let i: number = 0; i < colorCount; i++) {
                    const pc: PaletteColor = palette.COLORS[i];
                    this.addColorChoice(new Color(pc));
                    this.COLOR_NAMES.add(pc.NAME);
                }
            } else {
                const selector: RandomSelector<PaletteColor> = new RandomSelector<PaletteColor>(palette.COLORS);

                for (let i: number = 0; i < colorCount; i++) {
                    const pc: PaletteColor | undefined = selector.getRandomElementAndRemove();

                    if (pc) {
                        this.addColorChoice(new Color(pc));
                        this.COLOR_NAMES.add(pc.NAME);
                    }
                }
            }
        }
    }
}
