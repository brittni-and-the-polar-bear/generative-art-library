# Canvas Tasks

## Canvas Context ([See the GitHub Issue](https://github.com/brittni-and-the-polar-bear/generative-art-library_base/issues/10))

- [ ] Create Basic Context Class
- [ ] Ability to Set Renderer Mode
- [ ] Get mouseX and mouseY properly depending on mode (translation)
- [ ] Get center of canvas coordinates
  - [ ] (0, 0) when using `WEBGL` renderer
  - [ ] (width / 2.0, height / 2.0) with default renderer
- [ ] Map from (0, width) to (-width / 2.0, width / 2.0) when using `WEBGL` renderer
- [ ] Map from (0, height) to (-height / 2.0, height / 2.0) when using `WEBGL` renderer
- [ ] min/max x and y
- [ ] x and y coordinate based on percentage of window

## Improve Scaling of Polygons

- Scaling should be almost exactly the same on reload and dynamic window size changes
- Scaling should be almost exactly the same on phone, desktop, and square canvas
- Improvements should be tested in fx(hash) sandbox for consistency with a single seed
- Scaling Circles
  - Generate two tangential points (like Gradient graphs)
  - First point random, random angle, random distance
    - How to measure random distance?
    - Random second point within ratio bounding box?
- Test with polygons, circles, and ellipses, squares, and rectangles
- Test with 2d shape functions
  - Circle, ellipse, square, rectangle

## High Resolution Output

- scale all shapes, points, and lines (including stroke)


- [ ] original resolution
- [ ] 720p
- [ ] 1080p
- [ ] 4K
- [ ] 8K
- [ ] save on desktop
- [ ] save on mobile device to file or photos

## Dynamically Set Canvas Size

## Dynamically Set Canvas Aspect Ratio

## Multiple Canvases in One Page

### [All Progress](./progress.md)
