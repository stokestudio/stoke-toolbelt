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

### NotFound
See [Rendering Routes with Statuses](#render-statuses). For use with [react-router](https://github.com/ReactTraining/react-router).

**Props:**
*Same props as `Route`*

```jsx
<Switch>
  <Route path="/page1" component={Page1} />
  <Route path="/page2" component={Page2} />
  <Route path="/page3" component={Page3} />

  <NotFound component={NotFoundPage} />
</Switch>
```

### PermanentRedirect
For use with [react-router](https://github.com/ReactTraining/react-router).

**Props:**
*Same props as `Route`*

```jsx
<Switch>
  <Route path="/page1" component={Page1} />
  <Route path="/page2" component={Page2} />
  <Route path="/page3" component={Page3} />

  <PermanentRedirect exact from="/about-us" to="/about" />
</Switch>
```

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
For use with [react-router](https://github.com/ReactTraining/react-router). Scroll to top of page on route changes.

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

## Rendering Routes with Statuses

Express example:

```
const context = {};
const markup = renderToString(
  <StaticRouter context={context} location={req.url}>
    <App />
  </StaticRouter>
);

if (context.url) {
  res.redirect(context.status || 302, context.url);
} else {
  res.status(context.status || 200).send(`<html>...</html>`);
}
```
