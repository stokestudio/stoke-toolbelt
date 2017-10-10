# Stoke Toolbelt

This is a collection of React components we use at [Stoke Studio](https://stokestudio.com) for creating websites.

## Install

```bash
yarn add stoke-toolbelt
```

You'll also want to make sure you have the peer dependencies `lodash`, `prop-types`, and `react` installed.

## Components

### RetinaImage

**Props:**
- `srcs`: array of source paths in increasing densities [1x, 2x, 3x]
- `naturalWidth`: the width image should actually be (width of 1x image)
- `alt`: accessible alt text

```jsx
<RetinaImage
  srcs={[
    '/images/my-image.jpg',
    '/images/my-image@2x.jpg',
    '/images/my-image@3x.jpg'
  ]}
  naturalWidth={500}
  alt="My Image" />
```

### WindowSize

**Props:**
- `render`: passed object of `{ width }` where width is current width of window
  - Note: `width` value calculation is throttled

```jsx
<WindowSize
  render={({ width }) => (
    <div style={{ width: width * 0.5 }}>
      This is always fixed at half of window with.
    </div>
  )} />
```
