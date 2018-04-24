import { compact, isArray, isString } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

const isClient = typeof document !== 'undefined';

const onClient = cb => {
  if (isClient) cb(require('react-ga'));
};

const getLocationPath = location => location.pathname + location.search;

const logPageView = (page, trackerNames) => {
  onClient(ReactGA => {
    ReactGA.set({ page }, trackerNames);
    ReactGA.pageview(page, trackerNames);
  });
};

class TrackPageViews extends React.Component {
  getTrackerNames = () => {
    const { trackingId } = this.props;

    if (isString(trackingId)) return;

    if (isArray(trackingId))
      return compact(
        trackingId.map(config => config.gaOptions && config.gaOptions.name)
      );
  };

  componentDidMount() {
    onClient(ReactGA => {
      ReactGA.initialize(this.props.trackingId);
      if (this.props.onInit) this.props.onInit(ReactGA);
    });

    const page = getLocationPath(this.props.location);
    logPageView(page, this.getTrackerNames());
  }

  componentWillReceiveProps(nextProps) {
    const currentPage = getLocationPath(this.props.location);
    const nextPage = getLocationPath(nextProps.location);

    if (currentPage !== nextPage) {
      logPageView(nextPage, this.getTrackerNames());
    }
  }

  render() {
    return this.props.children;
  }
}

TrackPageViews.propTypes = {
  children: PropTypes.node.isRequired,
  trackingId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(
      PropTypes.shape({ trackingId: PropTypes.string.isRequired })
    ).isRequired
  ]).isRequired,
  onInit: PropTypes.func
};

export default withRouter(TrackPageViews);
