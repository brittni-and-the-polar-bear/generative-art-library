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

import {Color} from 'color';
import {ColorContrastAssessor, ContrastFontSize, ContrastStandard} from 'color-contrast';
import {SketchContext} from 'context';
import {_0437F1, _0FFF4F, _121212, _FF6BB5} from 'palette-colors';
import P5Lib from 'p5';

const {p5} = SketchContext;

describe('color contrast assessor tests', (): void => {
    test.each([
        {
            colorA: new Color(_0437F1),
            colorB: new Color(_0437F1),
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: new Color(_0437F1),
            colorB: new Color(_0FFF4F),
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: new Color(_0437F1),
            colorB: new Color(_121212),
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: new Color(_FF6BB5),
            colorB: new Color(_121212),
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        },
        {
            colorA: new Color(p5.color('#61CE51')),
            colorB: new Color(p5.color('#A02DAE')),
            AA_normal: false,
            AA_large: true,
            AAA_normal: false,
            AAA_large: false
        }
    ])(
        '$# contrast: Colors - $colorA._name and $colorB._name',
        ({
             colorA,
             colorB,
             AA_normal,
             AA_large,
             AAA_normal,
             AAA_large
         }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );

    test.each([
        {
            colorA: _0437F1,
            colorB: _0437F1,
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: _0437F1,
            colorB: _0FFF4F,
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: _0437F1,
            colorB: _121212,
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: _FF6BB5,
            colorB: _121212,
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        }
    ])(
        '$# contrast: PaletteColors - $colorA.HEX and $colorB.HEX',
        ({
             colorA,
             colorB,
             AA_normal,
             AA_large,
             AAA_normal,
             AAA_large
         }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );

    test.each([
        {
            colorA: '#0437F2',
            colorB: '#0437F2',
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: '#0437F2',
            colorB: '#0FFF4F',
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: '#0437F2',
            colorB: '#121212',
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: '#FF6BB5',
            colorB: '#121212',
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        },
        {
            colorA: '#61CE51',
            colorB: '#A02DAE',
            AA_normal: false,
            AA_large: true,
            AAA_normal: false,
            AAA_large: false
        }
    ])(
        '$# contrast: hex strings - $colorA and $colorB',
        ({
             colorA,
             colorB,
             AA_normal,
             AA_large,
             AAA_normal,
             AAA_large
         }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean
                = ColorContrastAssessor.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );
});
