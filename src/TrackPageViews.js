import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const isClient = typeof document !== 'undefined';

const onClient = cb => {
  if (isClient) cb(require('react-ga'));
};

const getLocationPath = location => location.pathname + location.search;

const logPageView = page => {
  onClient(ReactGA => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  });
};

class TrackPageViews extends React.Component {
  componentDidMount() {
    onClient(ReactGA => ReactGA.initialize(this.props.trackingId));

    const page = getLocationPath(this.props.location);
    logPageView(page);
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = getLocationPath(this.props.location);
    const nextPage = getLocationPath(nextProps.location);

    if (currentPage !== nextPage) {
      logPageView(nextPage);
    }
  }

  render() {
    return this.props.children;
  }
}

TrackPageViews.propTypes = {
  children: PropTypes.node.isRequired,
  trackingId: PropTypes.string.isRequired
};

export default withRouter(TrackPageViews);
