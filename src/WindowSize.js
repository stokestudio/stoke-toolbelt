import React from 'react';
import { throttle } from 'lodash';

const DEFAULT_WIDTH = 375;

const isClient = typeof window !== 'undefined';

class WindowSize extends React.Component {
  state = { width: (isClient && window.innerWidth) || DEFAULT_WIDTH };

  componentDidMount() {
    if (isClient) {
      window.addEventListener('resize', this.detectSize);
      this.detectSize();
    }
  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('resize', this.detectSize);
    }
  }

  detectSize = throttle(() => {
    const { innerWidth } = window;
    if (this.state.width !== innerWidth) this.setState({ width: innerWidth });
  }, 100);

  render() {
    const { width } = this.state;
    return this.props.render({ width });
  }
}

export default WindowSize;
