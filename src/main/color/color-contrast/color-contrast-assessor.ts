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

import {getContrastRatios, ResponseObject} from 'cococh';

import {Color} from 'color';
import {Discriminator} from 'discriminator';
import {PaletteColor} from 'palette';

//TODO - Documentation
// TODO - unit tests
// TODO - add to release notes
export const enum ContrastStandard {
    AA = 'AA',
    AAA = 'AAA'
}

//TODO - Documentation
// TODO - unit tests
// TODO - add to release notes
export const enum ContrastFontSize {
    NORMAL = 'normal',
    LARGE = 'large'
}

// TODO - Documentation
// TODO - unit tests
// TODO - add to release notes
export class ColorContrastAssessor {

    // TODO - Documentation
    // TODO - unit tests
    public static meetsContrastStandard(colorA: Color,
                                        colorB: Color,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: PaletteColor,
                                        colorB: PaletteColor,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: string, colorB: string,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: Color | PaletteColor | string,
                                        colorB: Color | PaletteColor | string,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean {
        let hexA: string = '#000000';
        let hexB: string = '#000000';

        if (colorA instanceof Color && colorB instanceof Color) {
            hexA = colorA.hex;
            hexB = colorB.hex;
        } else if (Discriminator.isPaletteColor(colorA) && Discriminator.isPaletteColor(colorB)) {
            hexA = colorA.HEX;
            hexB = colorB.HEX;
        } else if (typeof colorA === 'string' && typeof colorB === 'string') {
            // TODO - add class for StringValidation --> hex string
            // TODO - add unit tests for new class
            hexA = colorA;
            hexB = colorB;
        }

        return ColorContrastAssessor.getContrastResult(
            hexA,
            hexB,
            standard ?? ContrastStandard.AA,
            fontSize ?? ContrastFontSize.NORMAL
        );
    }

    // TODO - Documentation
    // TODO - unit tests
    private static getContrastResult(hexA: string,
                                      hexB: string,
                                      standard: ContrastStandard,
                                      fontSize: ContrastFontSize): boolean {
        const ratioResults: ResponseObject = getContrastRatios(hexA, hexB);
        return ratioResults[fontSize][standard];
    }
}
