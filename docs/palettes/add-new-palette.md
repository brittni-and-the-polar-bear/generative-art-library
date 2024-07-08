# How to Add a New Palette

# Table of Contents

# Step 1: [Add Any New Colors for the Palette](../colors/add-new-color.md)

[Table of Contents](#table-of-contents)

# Step 2: Categorize the Palette

Valid Categories:

* holiday
  * christmas
* miscellaneous

[Table of Contents](#table-of-contents)

# Step 3: Add the File for the Palette

The directory of the color file will be `/src/main/color/palette/palettes/<category>`.
Each nested category will be its own directory (e.g. `holiday/christmas`).

The filename of the palette file will be the name of the palette with all lowercase letters.
Separate words using a dash (`-`) character.

If there is already a file with that name, a palette with that name already exists in the library.
Verify that the palette does not already exist in the library, and use a new name for the new palette if it does not exist.

**Example:** `/src/main/color/palette/palettes/miscellaneous/brittni.ts`

[Table of Contents](#table-of-contents)

# Step 4: Create the `Palette` Object

## Step 4, Part A: Set Palette Name

The `NAME` property should be in all lowercase letters.<br/>
**Example:** `NAME: 'brittni'`

[Table of Contents](#table-of-contents)

## Step 4, Part B: Set Palette Source

The `SOURCE` property is an optional property.

The palette source should be a string describing the original source of the palette colors.

If the palette was inspired by or taken from a website, the `SOURCE` property should be the URL of the website.

[Table of Contents](#table-of-contents)

## Step 4, Part C: Set the `isGradient` Flag

If the palette is a gradient, the `isGradient` flag should be set to `true`.
Otherwise, it should be set to `false`.

[Table of Contents](#table-of-contents)

## Step 4, Part D: Set the Colors

The `COLORS` property of the palette will be an array of `PaletteColor` objects.
The colors array should be considered an ordered list.

[Table of Contents](#table-of-contents)

## Step 4, Part E: Create the Contrast Map

The `CONTRAST_MAP` property is an optional property.

The `CONTRAST_MAP` should contain information about colors in the palette that have a contrast value of 4.5 or higher.
Entries for black (`#000000`) and white (`#FFFFFF`) are required.

The keys in the object are the hex values of the colors.
The values in the object are lists of palette hex values that have a contrast value of 4.5 or greater when compared to the key.

Black (`#000000`) and white (`#FFFFFF`) can be added as contrast colors for any palette color.

All hex values should be written with capital letters.

### `CONTRAST_MAP` Example

```typescript
// type definition for example purposes only
type ContrastMap = {
    readonly '#000000': string[],
    readonly '#FFFFFF': string[],
    readonly [HEX: string]: string[]
}

// const object declaration for example purposes only
// CONTRAST_MAP will be a property of the new Palette object.
const CONTRAST_MAP: ContrastMap = {
    '#000000': ['#0FFF4F', '#FF6BB5'],
    '#FFFFFF': ['#121212', '#0437F1', '#7A00F5'],
    '#121212': ['#FFFFFF', '#0FFF4F', '#FF6BB5'],
    '#0437F1': ['#FFFFFF', '#0FFF4F'],
    '#0FFF4F': ['#000000', '#121212', '#0437F1', '#7A00F5'],
    '#7A00F5': ['#FFFFFF', '#0FFF4F'],
    '#FF6BB5': ['#000000', '#121212']
}
```

[Table of Contents](#table-of-contents)

## Step 4, Part F: Set the `DISCRIMINATOR` Property

The `DISCRIMINATOR` property should be `Discriminators.PALETTE`.<br/>
**Example:** `DISCRIMINATOR: Discriminators.PALETTE`

[Table of Contents](#table-of-contents)

# Full `PaletteColor` File Example

```typescript
import {Discriminators} from 'discriminator';
import {Palette} from 'palette';
import {_0437F1, _0FFF4F, _121212, _7A00F5, _FF6BB5} from 'palette-colors';

import {ALL_PALETTES, MISCELLANEOUS_PALETTES} from '../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
 *
 * @see {@link _121212}
 * @see {@link _0437F1}
 * @see {@link _0FFF4F}
 * @see {@link _7A00F5}
 * @see {@link _FF6BB5}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 */
export const BRITTNI: Palette = {
    NAME: 'brittni',

    IS_GRADIENT: false,

    COLORS: [
        _121212,
        _0437F1,
        _0FFF4F,
        _7A00F5,
        _FF6BB5
    ],

    CONTRAST_MAP: {
        '#000000': ['#0FFF4F', '#FF6BB5'],
        '#FFFFFF': ['#121212', '#0437F1', '#7A00F5'],
        '#121212': ['#FFFFFF', '#0FFF4F', '#FF6BB5'],
        '#0437F1': ['#FFFFFF', '#0FFF4F'],
        '#0FFF4F': ['#000000', '#121212', '#0437F1', '#7A00F5'],
        '#7A00F5': ['#FFFFFF', '#0FFF4F'],
        '#FF6BB5': ['#000000', '#121212']
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

ALL_PALETTES.setUndefinedKey(BRITTNI.NAME, BRITTNI);
MISCELLANEOUS_PALETTES.setUndefinedKey(BRITTNI.NAME, BRITTNI);
```

[Table of Contents](#table-of-contents)
