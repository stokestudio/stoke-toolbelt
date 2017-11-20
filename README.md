# Stoke Toolbelt

This is a collection of React components we use at [Stoke Studio](https://stokestudio.com) for creating websites.

## Install

```bash
yarn add stoke-toolbelt
```

**Dependencies:**
```bash
yarn add lodash prop-types react react-ga react-router-dom
```

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

### ScrollToTop
Scroll to top of page on route changes.

```jsx
<ScrollToTop>
  <App />
</ScrollToTop>
```

### TrackPageViews

**Props:**
- `trackingId`: Google Analytics Tracking ID (ex. `UA-12345678-1`)

```jsx
const App = () => (
  <TrackPageViews trackingId="UA-12345678-1">
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </TrackPageViews>
);
```

### WindowSize

**Props:**
- `render`: passed object of `{ width }` where width is current width of window
  - Note: `width` value calculation is throttled

```jsx
<WindowSize
  render={({ width }) => (
    <div style={{ width: width * 0.5 }}>
      This is always fixed at half of window width.
    </div>
  )} />
```
