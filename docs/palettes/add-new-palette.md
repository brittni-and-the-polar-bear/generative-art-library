# How to Add a New Palette to the Library (Developer Instructions)

# Table of Contents

[Step 1: Add Any New Colors for the Palette](#step-1-add-any-new-colors-for-the-palette)

[Step 2: Categorize the Palette](#step-2-categorize-the-palette)

[Step 3: Add the File for the Palette](#step-3-add-the-file-for-the-palette)

[Step 4: Create the `Palette` Object](#step-4-create-the-palette-object)
  * [Step 4, Part A: Set Palette Name](#step-4-part-a-set-palette-name)
  * [Step 4, Part B: Set Palette Source](#step-4-part-b-set-palette-source)
  * [Step 4, Part C: Set the `IS_GRADIENT` Flag](#step-4-part-c-set-the-is_gradient-flag)
  * [Step 4, Part D: Set the `DISCRIMINATOR` Property](#step-4-part-d-set-the-discriminator-property)
  * [Step 4, Part E: Set the Colors](#step-4-part-e-set-the-colors)
  * [Step 4, Part F: Create the Contrast Map](#step-4-part-f-create-the-contrast-map)

[Step 5: Export the Palette from the `index.ts` File](#step-5-export-the-palette-from-the-indexts-file)

[Step 6: Add the Palette to the `Palette` Maps](#step-6-add-the-palette-to-the-palette-maps)

[Step 7: Add the New Palette to the Palette Unit Tests](#step-7-add-the-new-palette-to-the-palette-unit-tests)

[Step 8: Add the New Palette to the Palette Category Unit Tests](#step-8-add-the-new-palette-to-the-palette-category-unit-tests)

[Step 9: Run the ALL_PALETTES Unit Test](#step-9-run-the-all_palettes-unit-test)

[Step 10: Add Documentation](#step-10-add-documentation)
  * [Step 10, Part A: Add the Coolors Palette Widget](#step-10-part-a-add-the-coolors-palette-widget)
  * [Step 10, Part B: Add the `@see` Annotations for Each `PaletteColor`](#step-10-part-b-add-the-see-annotations-for-each-palettecolor)
  * [Step 10, Part C: Add the `@see` Annotation to Each `PaletteColor`](#step-10-part-c-add-the-see-annotation-to-each-palettecolor)
  * [Step 10, Part D: Add the `@category` Annotations](#step-10-part-d-add-the-category-annotations)

[Step 11: Add the New Palette to the Palette Category Markdown Page](#step-11-add-the-new-palette-to-the-palette-category-markdown-page)

[Step 12: Add Palette to the Release Notes](#step-12-add-palette-to-the-release-notes)

[Full `PaletteColor` File Example](#full-palettecolor-file-example)

[Fin.](#fin)

----

# Step 1: [Add Any New Colors for the Palette](../colors/add-new-color.md)

[Table of Contents](#table-of-contents)

# Step 2: Categorize the Palette

Valid Categories:

* holiday
  * christmas
  * valentines-day
* miscellaneous
* nature
  * flower

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

## Step 4, Part C: Set the `IS_GRADIENT` Flag

If the palette is a gradient, the `IS_GRADIENT` flag should be set to `true`.
Otherwise, it should be set to `false`.

[Table of Contents](#table-of-contents)

## Step 4, Part D: Set the `DISCRIMINATOR` Property

The `DISCRIMINATOR` property should be `Discriminators.PALETTE`.<br/>
**Example:** `DISCRIMINATOR: Discriminators.PALETTE`

[Table of Contents](#table-of-contents)

## Step 4, Part E: Set the Colors

The `COLORS` property of the palette will be an array of `PaletteColor` objects.
The colors array should be considered an ordered list.

[Table of Contents](#table-of-contents)

## Step 4, Part F: Create the Contrast Map

The `CONTRAST_MAP` property is an optional property.

The `CONTRAST_MAP` should contain information about colors in the palette that have a contrast value of 4.5 or higher.
Entries for black (`#000000`) and white (`#FFFFFF`) are required.

The keys in the object are the hex values of the colors.
The values in the object are lists of palette hex values that have a contrast value of 4.5 or greater when compared to the key.

Black (`#000000`) and white (`#FFFFFF`) can be added as contrast colors for any palette color.

All hex values should be written with capital letters.

### `CONTRAST_MAP` Example

```typescript
// type definition included for example purposes only
type ContrastMap = {
    readonly '#000000': string[],
    readonly '#FFFFFF': string[],
    readonly [HEX: string]: string[]
}

// const object declaration included for example purposes only
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

# Step 5: Export the Palette from the `index.ts` File

In the `index.ts` file in the same category directory, add a statement to export the palette.<br/>
**Example:** `export * from './brittni';`

[Table of Contents](#table-of-contents)

# Step 6: Add the Palette to the `Palette` Maps

Add the color to the `Palette` map matching its category and any parent categories, using the `setUndefinedKey` method.
The key will be the `NAME` property, and the value will be the `Palette` object.

Add the color to the `Palette` map for all palettes, using the `setUndefinedKey` method.
The key will be the `NAME` property, and the value will be the `Palette` object.

If the palette is a gradient (i.e. the `IS_GRADIENT` property is set to `true`),
add the color to the `Palette` map for gradient palettes, using the `setUndefinedKey` method.
The key will be the `NAME` property, and the value will be the `Palette` object.

[Table of Contents](#table-of-contents)

# Step 7: Add the New Palette to the Palette Unit Tests

In the `src/test/palette/palettes/<category>` directory, create the unit test for the individual palette.
The purpose of these unit tests are to make sure that the palette only contains its expected colors and to make sure that the palette has a valid configuration (at least 2 colors, lowercase name, valid contrast map, etc.).
Each nested category will be its own directory (e.g. `holiday/christmas`).

Run the unit test to ensure that it passes.

## Individual Palette Unit Test Example

```typescript
import {PaletteColor} from 'palette';
import {PC_0437F1, PC_0FFF4F, PC_121212, PC_7A00F5, PC_FF6BB5} from 'palette-colors';
import {BRITTNI} from 'palettes';

import {checkForValidPalette} from 'unit-test/shared';

const PALETTE_NAME: string = 'BRITTNI';

describe('BRITTNI palette tests', (): void => {
    const expectedColors: PaletteColor[] = [
        PC_121212,
        PC_0437F1,
        PC_0FFF4F,
        PC_7A00F5,
        PC_FF6BB5
    ]

    test(`${PALETTE_NAME} palette is valid`, (): void => {
        checkForValidPalette(BRITTNI, expectedColors);
    });
});
```

[Table of Contents](#table-of-contents)

# Step 8: Add the New Palette to the Palette Category Unit Tests

Add the new palette to the `EXPECTED_PALETTES` list in each category unit test.
Run each category unit test to ensure that they pass.

If the palette is a gradient (i.e. the `IS_GRADIENT` property is set to `true`),
add the new palette to the `EXPECTED_PALETTES` list in the gradient palettes unit test.
Run the unit test to ensure that it passes.

[Table of Contents](#table-of-contents)

# Step 9: Run the ALL_PALETTES Unit Test

Run the unit test for the `ALL_PALETTES` palette map (`/src/test/color/palette/palettes/all-palettes.test.ts`).

If the "all palettes are unique" test fails, the new palettes color combination already exists in the library or a palette with the same name already exists in the library.

The colors in your palette may exist in a palette under a different name or in a different category.

You may need to change the name of your palette, if your color combination does not already exist in the library.

[Table of Contents](#table-of-contents)

# Step 10: Add Documentation

## Step 10, Part A: Add the Coolors Palette Widget

Go to <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer">https://coolors.co/</a>

Create a palette with all the colors of the new palette.
The palette color order should match how the colors are listed in the source code.

Export the palette for embedding and copy the provided HTML code.

Paste the HTML at the top of the palette documentation.

### Coolors Palette Widget Example

```html
<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>
<script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
```

[Table of Contents](#table-of-contents)

## Step 10, Part B: Add the `@see` Annotations for Each `PaletteColor`

Add a `@see` annotation with a `@link` for every `PaletteColor` object in the palette.

**Example:** `@see {@link PC_121212}`

[Table of Contents](#table-of-contents)

## Step 10, Part C: Add the `@see` Annotation to Each `PaletteColor`

Add a `@see` annotation with a `@link` to the palette in documentation of every `PaletteColor` object in the palette.

**Example:** `@see {@link BRITTNI}`

[Table of Contents](#table-of-contents)

## Step 10, Part D: Add the `@category` Annotations

Add `@category` annotations for the `Palettes (All)` category and each palette category of the new palette (e.g. `@category Palettes (Miscellaneous)`).

If the palette is a gradient (i.e. the `IS_GRADIENT` property is set to `true`),
add a `@category` annotation for the `Palettes (Gradient)` category.

[Table of Contents](#table-of-contents)

# Step 11: Add the New Palette to the Palette Category Markdown Page

Add an entry to the correct palette category markdown page for the new palette.
This entry will include the Coolors Palette Widget, TypeScript example,
and a link to the palette's source.

Be sure to add the new markdown section to the Table of Contents.

The palette should only be added to one category markdown file, preferably the most specific category.

If the palette is a gradient (i.e. the `IS_GRADIENT` property is set to `true`),
add an entry for the new palette to the gradient palettes markdown page.

## Palette Category Entry Example

````markdown
# classic christmas

<a href="https://coolors.co/palette/bb010b-cd1624-006f57-23856d-faf8f8" target="_blank" rel="noopener noreferrer">palette source: coolors</a>

<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>
<script data-id="048851888975141655">new CoolorsPaletteWidget("048851888975141655", ["bc010a","d01625","007058","23856d","fbf9f9"],"classic christmas"); </script>
<br/>

```typescript
import {CLASSIC_CHRISTMAS} from 'palettes';

let name: string = CLASSIC_CHRISTMAS.NAME;
```

[Table of Contents](#table-of-contents)
````

[Table of Contents](#table-of-contents)

# Step 12: Add Palette to the All Palettes on One Page Markdown Page

<!-- TODO: Put in instructions -->

# Step 12: Add Palette to the Release Notes

Add the palette as a new constant to the release notes draft markdown file.

## Release Notes Entry Example

````markdown
## `BRITTNI`

<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>
<script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
<br/>

```typescript
/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
 *
 * @see {@link PC_121212}
 * @see {@link PC_0437F1}
 * @see {@link PC_0FFF4F}
 * @see {@link PC_7A00F5}
 * @see {@link PC_FF6BB5}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 */
declare const BRITTNI: Palette;
```
````

[Table of Contents](#table-of-contents)

# Full `PaletteColor` File Example

```typescript
import {Discriminators} from 'discriminator';
import {Palette} from 'palette';
import {PC_0437F1, PC_0FFF4F, PC_121212, PC_7A00F5, PC_FF6BB5} from 'palette-colors';

import {ALL_PALETTES, MISCELLANEOUS_PALETTES} from '../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"]); </script>
 *
 * @see {@link PC_121212}
 * @see {@link PC_0437F1}
 * @see {@link PC_0FFF4F}
 * @see {@link PC_7A00F5}
 * @see {@link PC_FF6BB5}
 *
 * @category Palettes (All)
 * @category Palettes (Miscellaneous)
 */
export const BRITTNI: Palette = {
    NAME: 'brittni',

    IS_GRADIENT: false,

    COLORS: [
        PC_121212,
        PC_0437F1,
        PC_0FFF4F,
        PC_7A00F5,
        PC_FF6BB5
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

----

### Fin.

[Table of Contents](#table-of-contents)
