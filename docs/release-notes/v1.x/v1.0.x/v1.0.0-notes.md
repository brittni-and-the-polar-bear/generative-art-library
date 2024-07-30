<!--suppress JSUnresolvedLibraryURL -->

<style>
  div.color-block {
      text-align: center;
  }

  .color-block {
      width: 100%;
      margin: 0;
      padding: 0.5em;
  }

  .black-pass {
      color: black;
  }

  .white-pass {
      color: white;
  }
</style>

<script src="https://coolors.co/palette-widget/widget.js"></script>

# v1.0.0 Release Notes

Released on Monday, July 29, 2024.

# Table of Contents

[Updated Classes](#updated-classes)

* [Updated Classes: `Color`](#updated-class-color)
* [Updated Classes: `DefaultColorSelector`](#updated-class-defaultcolorselector)
* [Updated Class: `StringMap`](#updated-class-stringmap)

[Updated Enums](#updated-enums)

* [Updated Enum: `ColorSelectorType`](#updated-enum-colorselectortype)

[New Interfaces](#new-interfaces)

* [New Interface: `Palette`](#new-interface-palette)
* [New Interface: `PaletteColor`](#new-interface-palettecolor)

[New Classes](#new-classes)

* [New Class: `ColorContrastAssessor`](#new-class-colorcontrastassessor)
* [New Class: `ColorNameManager`](#new-class-colornamemanager)
* [New Class: `ColorSelector`](#new-class-colorselector)
* [New Class: `Discriminator`](#new-class-discriminator)
* [New Class: `PaletteColorSelector`](#new-class-palettecolorselector)
* [New Class: `RandomSelector`](#new-class-randomselector)

[New Enums](#new-enums)

* [New Enum: `ContrastFontSize`](#new-enum-contrastfontsize)
* [New Enum: `ContrastStandard`](#new-enum-contraststandard)
* [New Enum: `Discriminators`](#new-enum-discriminators)

[New Constants](#new-constants)

* [New Palette Color Maps](#new-palette-color-maps)
  * [`ALL_PALETTE_COLORS`](#all_palette_colors)
  * [`BLACK_PALETTE_COLORS`](#black_palette_colors)
  * [`BLUE_PALETTE_COLORS`](#blue_palette_colors)
  * [`BROWN_PALETTE_COLORS`](#brown_palette_colors)
  * [`GRAY_PALETTE_COLORS`](#gray_palette_colors)
  * [`GREEN_PALETTE_COLORS`](#green_palette_colors)
  * [`PINK_PALETTE_COLORS`](#pink_palette_colors)
  * [`PURPLE_PALETTE_COLORS`](#purple_palette_colors)
  * [`RED_PALETTE_COLORS`](#red_palette_colors)
  * [`WHITE_PALETTE_COLORS`](#white_palette_colors)
* [New Palette Maps](#new-palette-maps)
  * [`ALL_PALETTES`](#all_palettes)
  * [`CHRISTMAS_PALETTES`](#christmas_palettes)
  * [`FLOWER_PALETTES`](#flower_palettes)
  * [`GRADIENT_PALETTES`](#gradient_palettes)
  * [`HOLIDAY_PALETTES`](#holiday_palettes)
  * [`MISCELLANEOUS_PALETTES`](#miscellaneous_palettes)
  * [`NATURE_PALETTES`](#nature_palettes)
  * [`VALENTINES_PALETTES`](#valentines_palettes)

* [New Colors](#new-colors)
  * [`_007058` (teal dark green)](#_007058-teal-dark-green)
  * [`_0437F1` (blue bouquet)](#_0437f1-blue-bouquet)
  * [`_0FFF4F` (cathode green)](#_0fff4f-cathode-green)
  * [`_121212` (dark tone ink)](#_121212-dark-tone-ink)
  * [`_1D90AF` (mediterranean sea)](#_1d90af-mediterranean-sea)
  * [`_23856D` (accent green blue)](#_23856d-accent-green-blue)
  * [`_3B2212` (délicieux au chocolat)](#_3b2212-délicieux-au-chocolat)
  * [`_7A00F5` (poison purple)](#_7a00f5-poison-purple)
  * [`_7DCED8` (spray)](#_7dced8-spray)
  * [`_BC010A` (bird's eye)](#_bc010a-birds-eye)
  * [`_D01625` (cartoon violence)](#_d01625-cartoon-violence)
  * [`_EC417A` (radishical)](#_ec417a-radishical)
  * [`_F06090` (medium pink)](#_f06090-medium-pink)
  * [`_F0F3F4` (zappy zebra)](#_f0f3f4-zappy-zebra)
  * [`_F490B1` (sachet pink)](#_f490b1-sachet-pink)
  * [`_F8B9CE` (christy's smile)](#_f8b9ce-christys-smile)
  * [`_FAFEFF` (polar bear in a blizzard)](#_fafeff-polar-bear-in-a-blizzard)
  * [`_FBF9F9` (doctor white)](#_fbf9f9-doctor-white)
  * [`_FCE3EC` (spun sugar)](#_fce3ec-spun-sugar)
  * [`_FF6BB5` (fen hong pink)](#_ff6bb5-fen-hong-pink)

[New Palettes](#new-palettes)

* [`BLUE_LILY`](#blue_lily)
* [`BRITTNI`](#brittni)
* [`CLASSIC_CHRISTMAS`](#classic_christmas)
* [`GLITTER`](#glitter)

[Fin.](#fin)

# Updated Classes

## Updated Class: `Color`

### Updated Methods

```typescript
/**
 * Color information and functionality.
 * Colors are stored in RGBA format.
 *
 * @category Color
 */
declare class Color {
    /**
     * @param color - A {@link !P5Lib.Color | p5.js Color} or {@link PaletteColor} object.
     * If given a {@link !P5Lib.Color | p5.js Color}, the color's RGBA components
     * will become the values of {@link red}, {@link green}, {@link blue}, and {@link alpha}.<br/>
     * If given a {@link PaletteColor}, the color's {@link PaletteColor.HEX HEX} value will be
     * used to build the color.
     */
    public constructor(color?: P5Lib.Color | PaletteColor);
}
```

### New Methods

```typescript
/**
 * Color information and functionality.
 * Colors are stored in RGBA format.
 *
 * @category Color
 */
declare class Color {
    /**
     * @returns The name of the color.
     */
    public get name(): string;
    
    /**
     * @returns The hex color string for the RGB
     * ({@link red}, {@link green}, {@link blue})
     * components of the color (#RRGGBB).
     */
    public get hex(): string;

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     *
     * @param withAlpha - if `true`, an alpha component will be included in the hex
     * string (#RRGGBBAA).<br/>
     * If `false`, only the RGB components will be included (#RRGGBB).
     */
    public getRGBHex(withAlpha: boolean): string;

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     */
    public getRGBAHex(): string;
}
```

[Table of Contents](#table-of-contents)

## Updated Class: `DefaultColorSelector`

```typescript
/**
 * Default color selector.
 * To be used when a valid color selector cannot be found.
 *
 * @category Color
 * @category Color Selector
 */
declare class DefaultColorSelector extends ColorSelector {
    public constructor();

    /**
     * @returns A black color `#000000`.<br/>
     * <div class="color-block" style="background: #000000;">
     *     <a href="https://coolors.co/000000" target="_blank" rel="noopener noreferrer">
     *         <h2 class="color-block white-pass">black (#000000)</h2>
     *     </a>
     * </div>
     */
    public getColor(): Color;

    /**
     * @returns {@link ColorSelectorType.DEFAULT}
     */
    public get type(): ColorSelectorType;
}
```

[Table of Contents](#table-of-contents)

## Updated Class: `StringMap`

### New Methods

```typescript
declare class StringMap<Type> {
    /**
     * Returns `true` if the map contains the given {@link key},
     * returns `false` if it does not.
     * @param key -
     */
    public hasKey(key: string): boolean;
}
```

[Table of Contents](#table-of-contents)

----

# Updated Enums

## Updated Enum: `ColorSelectorType`

### Updated Fields

```typescript
/**
 * Enum for the different types of {@link ColorSelector} classes.
 *
 * @category Color
 */
declare enum ColorSelectorType {
    /**
     * Color selector that chooses colors from a pre-selected palette.
     */
    PALETTE = 'palette color selector',

    /**
     * Color selector that chooses color randomly from a range of RGB(A) values.
     */
    RGB = 'RGB color selector',

    /**
     * Default color selector. Should only be used in {@link DefaultColorSelector}.
     */
    DEFAULT = 'default color selector'
}
```

[Table of Contents](#table-of-contents)

----

# New Interfaces

## New Interface: `Palette`

```typescript
/**
 * A collection of {@link PaletteColor} objects.
 * @category Palette
 */
declare interface Palette {
    /**
     * The name of the palette.
     */
    readonly NAME: string,

    /**
     * The source of the palette. May be the URL where the palette can be found.
     */
    readonly SOURCE: string,

    /**
     * A flag indicating if the palette is a gradient.
     */
    readonly IS_GRADIENT: boolean,

    /**
     * The list of {@link PaletteColor} objects that compose the palette.
     */
    readonly COLORS: PaletteColor[],

    /**
     * A map of hex color strings to arrays of hex colors,
     * where each color in the array passes the WCAG AA standard
     * with normal and large size text when compared to the key.<br/>
     * The only colors listed in this map should be the colors of the
     * palette, black (#000000), and white (#FFFFFF).
     */
    readonly CONTRAST_MAP: {
        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to black (#000000). This list should NOT contain
         * white (#FFFFFF) unless it is a color listed in the palette.
         */
        '#000000': string[],

        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to white (#FFFFFF). This list should NOT contain
         * black (#000000) unless it is a color listed in the palette.
         */
        '#FFFFFF': string[],

        [HEX: string]: string[]
    },

    /**
     * Discriminator for determining if an object is a Palette.
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE;
}
```

[Table of Contents](#table-of-contents)

## New Interface: `PaletteColor`

```typescript
/**
 * A color to be used in a {@link Palette}.
 *
 * @category Palette
 */
declare interface PaletteColor {
    /**
     * The RGB (red, green, blue) components of the color.
     */
    readonly RGB: {
        /**
         * The red component (0-255).
         */
        readonly R: number,

        /**
         * The green component (0-255).
         */
        readonly G: number,

        /**
         * The blue component (0-255).
         */
        readonly B: number
    },

    /**
     * The HSL (hue, saturation, lightness) components of the color.
     */
    readonly HSL: {
        /**
         * The hue component (0-360).
         */
        readonly H: number,

        /**
         * The saturation component (0-100).
         */
        readonly S: number,

        /**
         * The lightness component (0-100).
         */
        readonly L: number
    }

    /**
     * The hex string representation of the color (format: `#RRGGBB`).
     */
    readonly HEX: string,

    /**
     * The name of the color.
     */
    readonly NAME: string,

    /**
     * Discriminator for determining if an object is a PaletteColor.
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE_COLOR;
}
```

[Table of Contents](#table-of-contents)

----

# New Classes

## New Class: `ColorContrastAssessor`

```typescript
/**
 * Evaluates if two colors meet the AA or AAA contrast standard
 * of the Web Content Accessibility Guidelines (WCAG).<br/>
 * To learn more about WCAG, visit
 * <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">https://www.w3.org/WAI/standards-guidelines/wcag/</a>.
 *
 * @category Color
 * @category Color Contrast
 */
declare class ColorContrastAssessor {
    public static meetsContrastStandard(colorA: Color,
                                        colorB: Color): boolean;
    public static meetsContrastStandard(colorA: PaletteColor,
                                        colorB: PaletteColor): boolean;
    public static meetsContrastStandard(colorA: string,
                                        colorB: string): boolean;
    public static meetsContrastStandard(colorA: Color,
                                        colorB: Color,
                                        standard: ContrastStandard,
                                        fontSize: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: PaletteColor,
                                        colorB: PaletteColor,
                                        standard: ContrastStandard,
                                        fontSize: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: string,
                                        colorB: string,
                                        standard: ContrastStandard,
                                        fontSize: ContrastFontSize): boolean;
    /**
     * Evaluates if two colors have an appropriate contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize}.
     *
     * @param colorA
     * @param colorB
     * @param standard - If no standard is provided, {@link ContrastStandard.AA} will be used.
     * @param fontSize - If no font size is provided, {@link ContrastFontSize.NORMAL} will be used.
     */
    public static meetsContrastStandard(colorA: Color | PaletteColor | string,
                                        colorB: Color | PaletteColor | string,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean;

    /**
     * Do the given colors conform to guidelines for the given standard and font size?
     *
     * @param hexA
     * @param hexB
     * @param standard
     * @param fontSize
     *
     * @returns `true` if the two colors have an acceptable contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize},
     * `false` if they do not have an acceptable ratio.
     */
    private static haveAppropriateContrastRatio(hexA: string,
                                                hexB: string,
                                                standard: ContrastStandard,
                                                fontSize: ContrastFontSize): boolean;
}
```

[Table of Contents](#table-of-contents)

## New Class: `ColorNameManager`

```typescript
/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value.
 *
 * @category Color
 */
declare class ColorNameManager {
    /**
     * Retrieves the name of the color represented by the given {@link colorHex}.
     * If the {@link colorHex} string is not well formatted or the nearest color function
     * encounters an error, the method will return {@link !undefined}.
     *
     * @param colorHex - The hex string representation of the color whose
     * name is being retrieved (format: `#RRGGBB`).
     */
    public static getColorName(colorHex: string): string | undefined;

    /**
     * Does the given {@link hex} string already have a color name match?
     *
     * @param hex
     *
     * @return `true` if the {@link hex} has a direct color name match in the manager,
     * `false` if it does not.
     */
    public static hasMatch(hex: string): boolean;

    /**
     * Add the given {@link PaletteColor.HEX} and {@link PaletteColor.NAME}
     * to the {@link _MATCHED_COLORS} map.
     *
     * @param color
     */
    public static addColor(color: PaletteColor): void;
}
```

[Table of Contents](#table-of-contents)

## New Class: `ColorSelector`

```typescript
/**
 * ColorSelectors choose and return colors from some set list or criteria.
 *
 * @category Color
 * @category Color Selector
 */
declare abstract class ColorSelector {
    /**
     * @param name - The name of the color selector.
     * @param randomOrder - A flag that determines the color selection order
     * of {@link selectColorFromChoices}.
     *
     * @see {@link _RANDOM_ORDER}
     */
    protected constructor(name: string, randomOrder?: boolean);

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     */
    public abstract get type(): ColorSelectorType;

    /**
     * Select and return a {@link Color} object.
     */
    public abstract getColor(): Color;

    /**
     * @returns The names of the colors that can be or have been chosen
     * by the color selector.
     */
    public get colorNames(): string[];

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     */
    public get name(): string;

    /**
     * @returns The selected {@link Color} from the {@link _COLOR_CHOICES} list.<br/>
     * If {@link _COLOR_CHOICES} is empty, a default {@link Color}
     * object (black) will be returned.
     */
    public selectColorFromChoices(): Color;

    /**
     * Select and return a {@link Color} object to be used as a background.
     * The color will either be black (#000000), white (#FFFFFF), or a color
     * from the selector, chosen by the {@link getColor} method.<br/>
     * <b>IMPORTANT: The sum of chanceOfBlack, chanceOfWhite, and chanceOfColor
     * should be equal to 1.0.</b>
     *
     * @param chanceOfBlack - The percent (0-1) chance that the chosen color
     * will be black (#000000). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfWhite - The percent (0-1) chance that the chosen color
     * will be white (#FFFFFF). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfColor - The percent (0-1) chance that the chosen color
     * will be a color from the selector ({@link getColor}).
     * The sum of all percentages should be equal to 1.0.
     */
    public getBackgroundColor(chanceOfBlack: number,
                                 chanceOfWhite: number,
                                 chanceOfColor: number): Color;

    /**
     * @returns The {@link _COLOR_NAMES} set.
     */
    protected get COLOR_NAMES(): Set<string>;

    /**
     * Add a {@link Color} to the {@link _COLOR_CHOICES} list.
     * @param color -
     */
    protected addColorChoice(color: Color): void;
}
```

[Table of Contents](#table-of-contents)

## New Class: `Discriminator`

```typescript
/**
 * Methods for evaluating if objects implement various interfaces.
 *
 * @category Discriminator
 */
declare class Discriminator {
    /**
     * Determines if the given object is a {@link PaletteColor}
     * (i.e. implements the PaletteColor interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link PaletteColor} interface, `false` if it does not.
     */
    public static isPaletteColor(object: any): object is PaletteColor;
}
```

[Table of Contents](#table-of-contents)

## New Class: `PaletteColorSelector`

```typescript
/**
 * A basic {@link ColorSelector} that chooses colors from a given {@link Palette}.
 *
 * @category Palette
 * @category Color Selector
 */
declare class PaletteColorSelector extends ColorSelector {
    /**
     * @param palette - The {@link Palette} from which colors will be selected.
     *
     * @param buildWithPaletteOrder - When `true`, {@link choosePaletteColors} will choose
     * colors in the order they appear in the order they appear in the {@link Palette.COLORS}
     * list. If buildWithPaletteOrder is `true` and {@link randomOrder} is `false`, the order
     * of colors from {@link getColor} will match the order of colors in the palette.
     *
     * @param colorCount - The number of colors available in the selector. This number
     * should be greater than or equal to {@link MIN_COLOR_COUNT} and less than or
     * equal to the number of colors in the given {@link palette}.
     *
     * @param randomOrder - A flag that determines the color selection order of {@link getColor}.
     * When `true`, colors will be chosen in a random order.
     * When `false`, colors will be chosen in the order they were selected
     * in {@link choosePaletteColors}.
     */
    constructor(palette: Palette,
                buildWithPaletteOrder?: boolean,
                colorCount?: number,
                randomOrder?: boolean);

    /**
     * @returns {@link ColorSelectorType.PALETTE}
     */
    public override get type(): ColorSelectorType;

    /**
     * @inheritdoc
     */
    public override getColor(): Color;
}
```

[Table of Contents](#table-of-contents)

## New Class: `RandomSelector`

```typescript
/**
 * A class for randomly selecting elements from a given list.
 * This class assumes an equal distribution for all elements of the list.
 * @category Random
 */
declare class RandomSelector<Type> {
    public constructor(private readonly _elements: Type[]);

    /**
     * Get the number of elements in the elements list.
     */
    public get size(): number;

    /**
     * Selects random element from elements.
     * This method assumes an equal distribution for all elements of the list.
     * If elements is empty, the function will return `undefined`.
     */
    public getRandomElement(): Type | undefined;

    /**
     * Selects random element from elements, then removes that element from the list.
     * This method assumes an equal distribution for all elements of the list.
     * If elements is empty, the function will return `undefined`..
     */
    public getRandomElementAndRemove(): Type | undefined;
}
```

[Table of Contents](#table-of-contents)

----

# New Enums

## New Enum: `ContrastFontSize`

```typescript
/**
 * Font size category used to evaluate the accessibility standard.
 *
 * @category Color Contrast
 */
declare enum ContrastFontSize {
    /**
     * Normal font size.
     */
    NORMAL = 'normal',

    /**
     * Large font size.
     */
    LARGE = 'large'
}
```

[Table of Contents](#table-of-contents)

## New Enum: `ContrastStandard`

```typescript
/**
 * Web Content Accessibility Guidelines (WCAG) color contrast categories.<br/>
 * To learn more about WCAG, visit
 * <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">https://www.w3.org/WAI/standards-guidelines/wcag/</a>.
 *
 * @category Color Contrast
 */
declare enum ContrastStandard {
    /**
     * WCAG AA Standard (color contrast >= 4.5)
     */
    AA = 'AA',

    /**
     * WCAG AAA Standard (color contrast >= 7)
     */
    AAA = 'AAA'
}
```

[Table of Contents](#table-of-contents)

## New Enum: `Discriminators`

```typescript
/**
 * The collection of discriminator values for library interfaces.
 * All values should be unique.
 *
 * @category Discriminator
 */
declare enum Discriminators {
    /**
     * Discriminator for the {@link Palette} interface.
     */
    PALETTE = 'I_PALETTE',

    /**
     * Discriminator for the {@link WeightedElement} interface.
     */
    WEIGHTED_ELEMENT = 'I_WEIGHTED-ELEMENT',

    /**
     * Discriminator for the {@link PaletteColor} interface.
     */
    PALETTE_COLOR = 'I_PALETTE-COLOR'
}
```

[Table of Contents](#table-of-contents)

----

# New Constants

## New Palette Color Maps

### `ALL_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/all-colors.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (All)
 */
declare const ALL_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `BLACK_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * black palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/black/black-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Black)
 */
declare const BLACK_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `BLUE_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * blue palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/blue/blue-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Blue)
 */
declare const BLUE_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `BROWN_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * brown palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/brown/brown-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Brown)
 */
declare const BROWN_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `GRAY_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * gray palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/gray/gray-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Green)
 */
declare const GRAY_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `GREEN_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * green palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/green/green-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Green)
 */
declare const GREEN_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `PINK_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * pink palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/pink/pink-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Pink)
 */
declare const PINK_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `PURPLE_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * purple palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/purple/purple-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Purple)
 */
declare const PURPLE_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `RED_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * red palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/red/red-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (Red)
 */
declare const RED_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

### `WHITE_PALETTE_COLORS`

```typescript
/**
 * A map of hex values to {@link PaletteColor} objects for all
 * white palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/colors/white/white-colors-by-luminance.html" target="_blank" rel="noopener noreferrer">See the Colors</a>
 *
 * @category Palette Color Collections
 * @category Palette Colors (White)
 */
declare const WHITE_PALETTE_COLORS: StringMap<PaletteColor>;
```

[Table of Contents](#table-of-contents)

## New Palette Maps

### `ALL_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/all-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (All)
 */
declare const ALL_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `CHRISTMAS_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all Christmas palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/holiday/christmas/christmas-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Holiday/Christmas)
 * @category Palettes (Holiday)
 */
declare const CHRISTMAS_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `FLOWER_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all flower palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/nature/flower/flower-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Nature/Flower)
 * @category Palettes (Nature)
 */
declare const FLOWER_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `GRADIENT_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for gradient palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/gradient-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Gradient)
 */
declare const GRADIENT_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `HOLIDAY_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all Holiday palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/holiday/holiday-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Holiday)
 */
declare const HOLIDAY_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `MISCELLANEOUS_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all miscellaneous palettes.
 * 
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/miscellaneous-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Miscellaneous)
 */
declare const MISCELLANEOUS_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `NATURE_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all nature palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/nature/nature-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Nature)
 */
declare const NATURE_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

### `VALENTINES_PALETTES`

```typescript
/**
 * A map of palette names to {@link Palette} objects for all Valentine's Day palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/holiday/valentines-day/valentines-day-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Palette Collections
 * @category Palettes (Holiday/Valentine's Day)
 * @category Palettes (Holiday)
 */
declare const VALENTINES_PALETTES: StringMap<Palette>;
```

[Table of Contents](#table-of-contents)

----

# New Colors

## `_007058` (teal dark green)

<div class="color-block" style="background: #007058;">
  <a href="https://coolors.co/007058" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">teal dark green (#007058)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #007058;">
 *     <a href="https://coolors.co/007058" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">teal dark green (#007058)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Green)
 *
 * @source
 */
declare const _007058: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_0437F1` (blue bouquet)

<div class="color-block" style="background: #0437F1;">
  <a href="https://coolors.co/0437f1" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">blue bouquet (#0437F1)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #0437F1;">
 *     <a href="https://coolors.co/0437f1" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">blue bouquet (#0437F1)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Blue)
 *
 * @source
 */
declare const _0437F1: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_0FFF4F` (cathode green)

<div class="color-block" style="background: #0FFF4F;">
  <a href="https://coolors.co/0fff4f" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">cathode green (#0FFF4F)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #0FFF4F;">
 *     <a href="https://coolors.co/0fff4f" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">cathode green (#0FFF4F)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Green)
 *
 * @source
 */
declare const _0FFF4F: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_121212` (dark tone ink)

<div class="color-block" style="background: #121212;">
  <a href="https://coolors.co/121212" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">dark tone ink (#121212)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #121212;">
 *     <a href="https://coolors.co/121212" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">dark tone ink (#121212)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Black)
 *
 * @source
 */
declare const _121212: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_1D90AF` (mediterranean sea)

<div class="color-block" style="background: #1D90AF;">
  <a href="https://coolors.co/1d90af" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">mediterranean sea (#1D90AF)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #1D90AF;">
 *     <a href="https://coolors.co/1d90af" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">mediterranean sea (#1D90AF)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Blue)
 *
 * @source
 */
declare const _1D90AF: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_23856D` (accent green blue)

<div class="color-block" style="background: #23856D;">
  <a href="https://coolors.co/23856d" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">accent green blue (#23856D)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #23856D;">
 *     <a href="https://coolors.co/23856d" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">accent green blue (#23856D)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Green)
 *
 * @source
 */
declare const _23856D: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_3B2212` (délicieux au chocolat)

<div class="color-block" style="background: #3B2212;">
  <a href="https://coolors.co/3b2212" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">délicieux au chocolat (#3B2212)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #3B2212;">
 *     <a href="https://coolors.co/3b2212" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">délicieux au chocolat (#3B2212)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Brown)
 *
 * @source
 */
declare const _3B2212: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_7A00F5` (poison purple)

<div class="color-block" style="background: #7A00F5;">
  <a href="https://coolors.co/7a00f5" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">poison purple (#7A00F5)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #7A00F5;">
 *     <a href="https://coolors.co/7a00f5" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">poison purple (#7A00F5)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Purple)
 *
 * @source
 */
declare const _7A00F5: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_7DCED8` (spray)

<div class="color-block" style="background: #7DCED8;">
  <a href="https://coolors.co/7dced8" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">spray (#7DCED8)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #7DCED8;">
 *     <a href="https://coolors.co/7dced8" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">spray (#7DCED8)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Blue)
 *
 * @source
 */
declare const _7DCED8: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_BC010A` (bird's eye)

<div class="color-block" style="background: #BC010A;">
  <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #BC010A;">
 *     <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 *
 * @source
 */
declare const _BC010A: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_D01625` (cartoon violence)

<div class="color-block" style="background: #D01625;">
  <a href="https://coolors.co/d01625" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block white-pass">cartoon violence (#D01625)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #D01625;">
 *     <a href="https://coolors.co/d01625" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">cartoon violence (#D01625)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 *
 * @source
 */
declare const _D01625: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_EC417A` (radishical)

<div class="color-block" style="background: #EC417A;">
  <a href="https://coolors.co/ec417a" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">radishical (#EC417A)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #EC417A;">
 *     <a href="https://coolors.co/ec417a" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">radishical (#EC417A)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _EC417A: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_F06090` (medium pink)

<div class="color-block" style="background: #F06090;">
  <a href="https://coolors.co/f06090" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">medium pink (#F06090)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #F06090;">
 *     <a href="https://coolors.co/f06090" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">medium pink (#F06090)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _F06090: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_F0F3F4` (zappy zebra)

<div class="color-block" style="background: #F0F3F4;">
  <a href="https://coolors.co/f0f3f4" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">zappy zebra (#F0F3F4)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #F0F3F4;">
 *     <a href="https://coolors.co/f0f3f4" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">zappy zebra (#F0F3F4)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Gray)
 *
 * @source
 */
declare const _F0F3F4: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_F490B1` (sachet pink)

<div class="color-block" style="background: #F490B1;">
  <a href="https://coolors.co/f490b1" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">sachet pink (#F490B1)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #F490B1;">
 *     <a href="https://coolors.co/f490b1" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">sachet pink (#F490B1)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _F490B1: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_F8B9CE` (christy's smile)

<div class="color-block" style="background: #F8B9CE;">
  <a href="https://coolors.co/f8b9ce" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">christy's smile (#F8B9CE)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #F8B9CE;">
 *     <a href="https://coolors.co/f8b9ce" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">christy's smile (#F8B9CE)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _F8B9CE: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_FAFEFF` (polar bear in a blizzard)

<div class="color-block" style="background: #FAFEFF;">
  <a href="https://coolors.co/fafeff" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">polar bear in a blizzard (#FAFEFF)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #FAFEFF;">
 *     <a href="https://coolors.co/fafeff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">polar bear in a blizzard (#FAFEFF)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (White)
 *
 * @source
 */
declare const _FAFEFF: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_FBF9F9` (doctor white)

<div class="color-block" style="background: #FBF9F9;">
  <a href="https://coolors.co/fbf9f9" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">doctor white (#FBF9F9)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #FBF9F9;">
 *     <a href="https://coolors.co/fbf9f9" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">doctor white (#FBF9F9)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (White)
 *
 * @source
 */
declare const _FBF9F9: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_FCE3EC` (spun sugar)

<div class="color-block" style="background: #FCE3EC;">
  <a href="https://coolors.co/fce3ec" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">spun sugar (#FCE3EC)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #FCE3EC;">
 *     <a href="https://coolors.co/fce3ec" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">spun sugar (#FCE3EC)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _FCE3EC: PaletteColor;
```

[Table of Contents](#table-of-contents)

## `_FF6BB5` (fen hong pink)

<div class="color-block" style="background: #FF6BB5;">
  <a href="https://coolors.co/ff6bb5" target="_blank" rel="noopener noreferrer">
    <h2 class="color-block black-pass">fen hong pink (#FF6BB5)</h2>
  </a>
</div>
<br/>

```typescript
/**
 * <div class="color-block" style="background: #FF6BB5;">
 *     <a href="https://coolors.co/ff6bb5" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">fen hong pink (#FF6BB5)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Pink)
 *
 * @source
 */
declare const _FF6BB5: PaletteColor;
```

[Table of Contents](#table-of-contents)

----

# New Palettes

## `BLUE_LILY`

<!-- Coolors Palette Widget -->
<script data-id="05684644562469574">new CoolorsPaletteWidget("05684644562469574", ["f0f3f4","fafeff","7dced8","1d90af","3b2212"],"blue lily"); </script>
<br/>

```typescript
/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="05684644562469574">new CoolorsPaletteWidget("05684644562469574", ["f0f3f4","fafeff","7dced8","1d90af","3b2212"],"blue lily"); </script>
 *
 * @see {@link _F0F3F4}
 * @see {@link _FAFEFF}
 * @see {@link _7DCED8}
 * @see {@link _1D90AF}
 * @see {@link _3B2212}
 *
 * @category Palettes (Nature/Flower)
 * @category Palettes (Nature)
 * @category Palettes (All)
 */
declare const BLUE_LILY: Palette;
```

[Table of Contents](#table-of-contents)

## `BRITTNI`

<!-- Coolors Palette Widget -->
<script data-id="031196377224963245">new CoolorsPaletteWidget("031196377224963245", ["121212","0437f1","0fff4f","7a00f5","ff6bb5"],"brittni"); </script>
<br/>

```typescript
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
declare const BRITTNI: Palette;
```

[Table of Contents](#table-of-contents)

## `CLASSIC_CHRISTMAS`

<!-- Coolors Palette Widget -->
<script data-id="048851888975141655">new CoolorsPaletteWidget("048851888975141655", ["bc010a","d01625","007058","23856d","fbf9f9"],"classic christmas"); </script>
<br/>

```typescript
/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="048851888975141655">new CoolorsPaletteWidget("048851888975141655", ["bc010a","d01625","007058","23856d","fbf9f9"]); </script>
 *
 * @see {@link _BC010A}
 * @see {@link _D01625}
 * @see {@link _007058}
 * @see {@link _23856D}
 * @see {@link _FBF9F9}
 *
 * @category Palettes (All)
 * @category Palettes (Holiday)
 * @category Palettes (Christmas)
 */
declare const CLASSIC_CHRISTMAS: Palette;
```

[Table of Contents](#table-of-contents)

## `GLITTER`

<!-- Coolors Palette Widget -->
<script data-id="09635237276120507">new CoolorsPaletteWidget("09635237276120507", ["fce3ec","f8b9ce","f490b1","f06090","ec417a"],"glitter"); </script>
<br/>

```typescript
/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="09635237276120507">new CoolorsPaletteWidget("09635237276120507", ["fce3ec","f8b9ce","f490b1","f06090","ec417a"],"glitter"); </script>
 *
 * @see {@link _FCE3EC}
 * @see {@link _F8B9CE}
 * @see {@link _F490B1}
 * @see {@link _F06090}
 * @see {@link _EC417A}
 *
 * @category Palettes (Holiday/Valentine's Day)
 * @category Palettes (Holiday)
 * @category Palettes (Gradient)
 * @category Palettes (All)
 */
declare const GLITTER: Palette;
```

----

### Fin.

[Table of Contents](#table-of-contents)
