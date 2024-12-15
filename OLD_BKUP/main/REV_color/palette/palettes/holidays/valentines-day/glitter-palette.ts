// /*
//  * Copyright (C) 2024 brittni and the polar bear LLC.
//  *
//  * This file is a part of brittni and the polar bear's generative art library,
//  * which is released under the GNU Affero General Public License, Version 3.0.
//  * You may not use this file except in compliance with the license.
//  *
//  * You should have received a copy of the GNU Affero General Public License
//  * along with this program. See LICENSE or go to
//  * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//  * See the GNU Affero General Public License for more details.
//  */
//
// import { Discriminators } from 'discriminator';
// import { Palette } from 'palette';
// import { PC_EC417A, PC_F06090, PC_F490B1, PC_F8B9CE, PC_FCE3EC } from 'palette-colors';
//
// import { ALL_PALETTES, GRADIENT_PALETTES, HOLIDAYS_PALETTES, VALENTINES_PALETTES } from '../../../palette-maps';
//
// /**
//  * <!-- Coolors Palette Widget -->
//  * <script src="https://coolors.co/palette-widget/widget.js"></script>
//  * <script data-id="09635237276120507">new CoolorsPaletteWidget("09635237276120507", ["fce3ec","f8b9ce","f490b1","f06090","ec417a"],"glitter"); </script>
//  *
//  * @see {@link PC_FCE3EC}
//  * @see {@link PC_F8B9CE}
//  * @see {@link PC_F490B1}
//  * @see {@link PC_F06090}
//  * @see {@link PC_EC417A}
//  *
//  * @category Palettes (Holidays/Valentine's Day)
//  * @category Palettes (Holidays)
//  * @category Palettes (Gradient)
//  * @category Palettes (All)
//  */
// export const GLITTER_PALETTE: Palette = {
//     NAME: 'glitter',
//
//     SOURCE: 'culrs',
//
//     SOURCE_URL: 'https://culrs.com/palette/fce4ecf8bbd0f48fb1f06292ec407a',
//
//     IS_GRADIENT: true,
//
//     COLORS: [
//         PC_FCE3EC,
//         PC_F8B9CE,
//         PC_F490B1,
//         PC_F06090,
//         PC_EC417A
//     ],
//
//     CONTRAST_MAP: {
//         '#000000': [
//             '#FCE3EC',
//             '#F8B9CE',
//             '#F490B1',
//             '#F06090',
//             '#EC417A'
//         ],
//         '#FFFFFF': [],
//         '#FCE3EC': ['#000000'],
//         '#F8B9CE': ['#000000'],
//         '#F490B1': ['#000000'],
//         '#F06090': ['#000000'],
//         '#EC417A': ['#000000']
//     },
//
//     DISCRIMINATOR: Discriminators.PALETTE
// };
//
// VALENTINES_PALETTES.setUndefinedKey(GLITTER_PALETTE.NAME, GLITTER_PALETTE);
// HOLIDAYS_PALETTES.setUndefinedKey(GLITTER_PALETTE.NAME, GLITTER_PALETTE);
// ALL_PALETTES.setUndefinedKey(GLITTER_PALETTE.NAME, GLITTER_PALETTE);
//
// GRADIENT_PALETTES.setUndefinedKey(GLITTER_PALETTE.NAME, GLITTER_PALETTE);
