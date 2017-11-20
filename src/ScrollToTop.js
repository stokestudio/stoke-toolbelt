import React from 'react';
import { withRouter } from 'react-router-dom';

const urlWithoutHash = location => location.pathname + location.search;

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      urlWithoutHash(this.props.location) !== urlWithoutHash(prevProps.location)
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
