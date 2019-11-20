/* @flow */
import * as React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
  static propTypes = {
    location: PropTypes.shape({}),
    children: PropTypes.element
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
