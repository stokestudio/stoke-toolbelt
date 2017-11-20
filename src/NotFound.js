import React from 'react';
import { Route } from 'react-router-dom';

const NOT_FOUND = 404;

const NotFound = props => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = NOT_FOUND;
      return <Route {...props} />;
    }}
  />
);

export default NotFound;
