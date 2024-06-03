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

import {Color, ColorSelector, ColorSelectorType} from 'color';
import {SketchContext} from 'context';
import {Random, RandomSelector} from 'random';

import {Palette} from './palette';
import {PaletteColor} from './palette-color';

const p5: P5Lib = SketchContext.p5;

// TODO - documentation
// TODO - update release notes
export class PaletteColorSelector extends ColorSelector {
    // TODO - documentation
    private readonly _NAME: string;

    // TODO - documentation
    private readonly _COLOR_NAMES: string[] = [];

    // TODO - documentation
    constructor(palette: Palette,
                buildWithPaletteOrder?: boolean,
                colorCount?: number,
                randomOrder?: boolean) {
        super(randomOrder);

        this._NAME = this.buildName(palette);

        let count: number = colorCount ?? Random.randomInt(PaletteColorSelector.MIN_COLOR_COUNT, palette.COLORS.length + 1);
        count = p5.constrain(count, PaletteColorSelector.MIN_COLOR_COUNT, palette.COLORS.length);

        const paletteOrder: boolean = buildWithPaletteOrder ?? Random.randomBoolean();

        this.choosePaletteColors(palette, paletteOrder, count);
    }

    // TODO - documentation
    // TODO - unit test
    public override get colorNames(): string[] {
        return this._COLOR_NAMES;
    }

    // TODO - documentation
    // TODO - unit test
    public override get name(): string {
        return this._NAME;
    }

    // TODO - documentation
    // TODO - unit test
    public override get type(): ColorSelectorType {
        return ColorSelectorType.PALETTE;
    }

    // TODO - documentation
    // TODO - unit test
    public override getColor(): Color {
        return this.selectColorFromChoices();
    }

    // TODO - documentation
    private static get MIN_COLOR_COUNT(): number {
        return 1;
    }

    // TODO - documentation
    private buildName(palette: Palette): string {
        let paletteName: string = palette.NAME.toLowerCase();

        if (!paletteName.endsWith(' palette')) {
            paletteName += ' palette';
        }

        paletteName += ' color selector';
        return paletteName;
    }

    // TODO - documentation
    private choosePaletteColors(palette: Palette, buildWithPaletteOrder: boolean, colorCount: number): void {
        colorCount = p5.constrain(colorCount, PaletteColorSelector.MIN_COLOR_COUNT, palette.COLORS.length);

        if (palette.COLORS.length > 0) {
            if (buildWithPaletteOrder) {
                for (let i: number = 0; i < colorCount; i++) {
                    const pc: PaletteColor = palette.COLORS[i];
                    this.addColorChoice(new Color(pc));
                    this._COLOR_NAMES.push(pc.NAME);
                }
            } else {
                const selector: RandomSelector<PaletteColor> = new RandomSelector<PaletteColor>(palette.COLORS);

                for (let i: number = 0; i < colorCount; i++) {
                    const pc: PaletteColor | undefined = selector.getRandomElementAndRemove();

                    if (pc) {
                        this.addColorChoice(new Color(pc));
                        this._COLOR_NAMES.push(pc.NAME);
                    }
                }
            }
        }
    }
}
