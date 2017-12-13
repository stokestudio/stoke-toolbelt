import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const MOVED_PERMANENTLY = 301;

const PermanentRedirect = ({ exact, from, to, ...restProps }) => (
  <Route
    exact={exact}
    path={from}
    render={({ location, staticContext }) => {
      if (staticContext) staticContext.status = MOVED_PERMANENTLY;
      return (
        <Redirect
          exact={exact}
          from={from}
          to={{ pathname: to, search: location.search }}
          {...restProps}
        />
      );
    }}
  />
);

export default PermanentRedirect;
