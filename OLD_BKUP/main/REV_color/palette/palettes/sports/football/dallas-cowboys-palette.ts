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
// import { PC_003494, PC_041E43, PC_7E9594, PC_869498, PC_FFFFFF } from 'palette-colors';
//
// import { ALL_PALETTES, FOOTBALL_PALETTES, SPORTS_PALETTES } from '../../../palette-maps';
//
// /**
//  * <!-- Coolors Palette Widget -->
//  * <script src="https://coolors.co/palette-widget/widget.js"></script>
//  * <script data-id="009411858208226276">new CoolorsPaletteWidget("009411858208226276", ["041e43","869498","ffffff","7e9594","003494"],"dallas cowboys"); </script>
//  *
//  * @see {@link PC_041E43}
//  * @see {@link PC_869498}
//  * @see {@link PC_FFFFFF}
//  * @see {@link PC_7E9594}
//  * @see {@link PC_003494}
//  *
//  * @category Palettes (Sports/Football)
//  * @category Palettes (Sports)
//  * @category Palettes (All)
//  */
// export const DALLAS_COWBOYS_PALETTE: Palette = {
//     NAME: 'dallas cowboys',
//
//     SOURCE: 'TEAM COLOR CODES - Dallas Cowboys Color Codes',
//
//     SOURCE_URL: 'https://teamcolorcodes.com/dallas-cowboys-color-codes/',
//
//     IS_GRADIENT: false,
//
//     COLORS: [
//         PC_041E43,
//         PC_869498,
//         PC_FFFFFF,
//         PC_7E9594,
//         PC_003494
//     ],
//
//     CONTRAST_MAP: {
//         '#000000': [
//             '#869498',
//             '#FFFFFF',
//             '#7E9594'
//         ],
//         '#041E43': [
//             '#869498',
//             '#FFFFFF',
//             '#7E9594'
//         ],
//         '#869498': [
//             '#000000',
//             '#041E43'
//         ],
//         '#FFFFFF': [
//             '#000000',
//             '#041E43',
//             '#003494'
//         ],
//         '#7E9594': [
//             '#041E43'
//         ],
//         '#003494': [
//             '#FFFFFF'
//         ]
//     },
//
//     DISCRIMINATOR: Discriminators.PALETTE
// };
//
// FOOTBALL_PALETTES.setUndefinedKey(DALLAS_COWBOYS_PALETTE.NAME, DALLAS_COWBOYS_PALETTE);
// SPORTS_PALETTES.setUndefinedKey(DALLAS_COWBOYS_PALETTE.NAME, DALLAS_COWBOYS_PALETTE);
// ALL_PALETTES.setUndefinedKey(DALLAS_COWBOYS_PALETTE.NAME, DALLAS_COWBOYS_PALETTE);
