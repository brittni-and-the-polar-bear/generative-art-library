<!--suppress JSUnresolvedLibraryURL -->
<!-- Coolors Palette Widget -->
<script src="https://coolors.co/palette-widget/widget.js"></script>

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

# v2.0.0 Release Notes

Released on TBD.

----

# Table of Contents

[Updated Classes](#updated-classes)
- [`WeightedElement`](#weightedelement)

[Updated Interfaces](#updated-interfaces)
- [`PaletteColor`](#palettecolor)

----

# Updated Classes

## `WeightedElement`

### Deprecated Properties
- `value: Type`
- `weight: number`

### New Properties
- `VALUE: Type`
- `WEIGHT: number`
- `DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT`

```typescript
declare interface WeightedElement<Type> extends Discriminable {
    /**
     * @deprecated Replaced with {@link VALUE}. To be removed in v3.0.0.
     */
    readonly value: Type;

    /**
     * The value returned if this element is selected.
     */
    readonly VALUE: Type;

    /**
     * @deprecated Replaced with {@link WEIGHT}. To be removed in v3.0.0.
     */
    readonly weight: number;

    /**
     * The weight associated with this element.
     * The greater the weight, the more likely the element will be selected.
     */
    readonly WEIGHT: number;

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT;
}
```

[Table of Contents](#table-of-contents)

----

# Updated Interfaces

## PaletteColor

`RGB` and `HSL` components are now optional.

```typescript
/**
 * A color to be used in a {@link Palette}.
 *
 * @category Palette
 */
declare interface PaletteColor extends Discriminable {
    /**
     * The hex string representation of the color (format: `#RRGGBB`).
     */
    readonly HEX: string;

    /**
     * The name of the color.
     */
    readonly NAME: string;

    /**
     * The RGB (red, green, blue) components of the color.
     */
    readonly RGB?: {
        /**
         * The red component (0-255).
         */
        readonly R: number;

        /**
         * The green component (0-255).
         */
        readonly G: number;

        /**
         * The blue component (0-255).
         */
        readonly B: number;
    };

    /**
     * The HSL (hue, saturation, lightness) components of the color.
     */
    readonly HSL?: {
        /**
         * The hue component (0-360).
         */
        readonly H: number;

        /**
         * The saturation component (0-100).
         */
        readonly S: number;

        /**
         * The lightness component (0-100).
         */
        readonly L: number;
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE_COLOR;
}
```

[Table of Contents](#table-of-contents)

----

### Fin.

[Table of Contents](#table-of-contents)
