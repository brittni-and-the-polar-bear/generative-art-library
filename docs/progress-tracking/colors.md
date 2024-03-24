# Colors Tasks

## Split Color Configurations Out of Color Palettes Repository

## Split Palette Configurations Out of Color Palettes Repository

- [ ] holiday-christmas
- [ ] holiday-valentines
- [ ] all holidays (maybe?)
- [ ] miscellaneous
- [ ] nature

## Color Class

- [x] color class
- [ ] color transitions
  - [ ] fade
  - [ ] lerp

## Color Selection with Palettes

- [x] palette 1
- [x] palette 2
- [x] palette 3
- [x] palette 4
- [ ] palette 5
- [ ] color selection with weighted
  palettes ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_color-palettes/issues/19))
  - [ ] implement weighted palette class
  - [ ] implement weighted palette unit tests
  - [ ] implement weighted palette color selector
  - [ ] implement weighted palette color selector unit tests
  - [ ] create weighted palettes
    - [ ] palette 1
      - [ ] palette
      - [ ] unit tests
    - [ ] palette 2
      - [ ] palette
      - [ ] unit tests
    - [ ] palette 3
      - [ ] palette
      - [ ] unit tests

## Color Palettes (Always Going!) ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_color-palettes/issues/1))

## Color Selection with RBG ranges

- [x] set up new repository
  - [x] .gitignore
  - [x] README
  - [x] LICENSE
  - [x] .node-version
  - [x] node and npm
  - [x] branch protections
  - [x] tag protections
  - [x] issue templates
  - [x] GitHub Actions
    - [x] dependabot
    - [x] codeql
    - [x] node.js
    - [x] npm deprecate
    - [x] npm-publish
  - [x] rollup
  - [x] typescript
  - [x] eslint
  - [x] jest
- [ ] color selector type enum
- [ ] red
- [ ] green
- [ ] blue
- [ ] magenta
- [ ] yellow
- [ ] cyan
- [ ] black
- [ ] white
- [ ] random
- [ ] n colors or infinite colors

## Color Name Retrieval ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_color-palettes/issues/21))

- [ ] integrate getting color names into library
- [ ] test getting color names for colors
- [ ] get colors for palettes and generative color

## Color Selection with HSL ranges ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library/issues/10))

- [ ] set up new repository
  - [ ] .gitignore
  - [ ] README
  - [ ] LICENSE
  - [ ] .node-version
  - [ ] node and npm
  - [ ] branch protections
  - [ ] tag protections
  - [ ] issue templates
  - [ ] GitHub Actions
    - [ ] dependabot
    - [ ] codeql
    - [ ] node.js
    - [ ] npm deprecate
    - [ ] npm-publish
  - [ ] rollup
  - [ ] typescript
  - [ ] eslint
  - [ ] jest
- [ ] color selector type enum
- [ ] top
- [ ] bottom
- [ ] warm
- [ ] cool
- [ ] full range
- [ ] check old code for any other categories
- [ ] different color types
  - [ ] bright mode
  - [ ] saturated mode
  - [ ] darker color selection
    - med-high saturation, low lightness
  - [ ] pastel color selection
    - med-low saturation, low lightness
- [ ] n colors or infinite colors
- [ ] regular range (high saturation, 50% lightness)
- [ ] deep range (high saturation, low lightness)
- [ ] pastel range (low saturation, high lightness)
- [ ] single hue with full range of saturation and brightness
- [ ] range of hues with full range of saturation and brightness

## Background Color Selection ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library/issues/11))

The background color can be black, white, or chosen from the palette.
This is configurable and can have weights applied to it

## Color Contrast Checking ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_color-palettes/issues/20))

- [ ] install [color contrast](https://www.npmjs.com/package/color-contrast) package
- [ ] add methods to base library for evaluating contrast and WGAC compliance
  - [ ] contrast ratio
  - [ ] AA compliance
    - [ ] small text
    - [ ] large text
  - [ ] AAA compliance
    - [ ] large text
    - [ ] small text
- [ ] implement/add unit test for all palettes
  - [ ] passing if there is at least one AAA small text compliant pair in the palette
- [ ] decide what to do with palettes that do not pass
- [ ] add field to palettes to store valid AAA color contrast pairs (ratio > 7)
- [ ] implement/add unit test for all palettes
  - [ ] passing if all color contrast pairs are valid pairs (ratio > 7)

## Weighted Color Selector Manager ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_base/issues/40))

- [ ] Implement weighted color selector manager
- [ ] Test weighted color selector manager

## Add Poline to Color Scheme Generation ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library/issues/9))

- [ ] create adapter for poline
- [ ] test adapter

## Color Test Project

A project that accepts GET parameters to determine which color selector to use.

## Calendar and Time Based Color Scheme Probabilities ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library/issues/12))

I would like to implement color scheme probabilities so that the closer you are to certain holidays, the more likely you
are to generate a color scheme with a collection matching that holiday.

### [All Progress](./progress.md)
