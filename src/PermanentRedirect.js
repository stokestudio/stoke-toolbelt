import React from 'react';
import { Route } from 'react-router-dom';

const MOVED_PERMANENTLY = 301;

const PermanentRedirect = ({ exact, from, ...restProps }) => (
  <Route
    exact={exact}
    path={from}
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = MOVED_PERMANENTLY;
      return <Redirect exact={exact} from={from} {...restProps} />;
    }}
  />
);

export default PermanentRedirect;
