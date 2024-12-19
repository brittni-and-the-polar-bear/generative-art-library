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

----

# Updated Classes

## `WeightedElement`

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

### Fin.

[Table of Contents](#table-of-contents)
