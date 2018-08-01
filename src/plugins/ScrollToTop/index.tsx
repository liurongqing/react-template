/* eslint no-undef: 0 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import * as R from 'ramda';
import {
  Provider,
  AppContextData,
} from '../AppContext/index';
import { TITLE } from '../../constant/index';

class ScrollToTop extends React.Component {
  state = {
    header: AppContextData.header,
  }

  componentDidUpdate(prevProps) {
    const { location }: any = this.props;

    if (!R.equals(location, prevProps.location)) {
      window.scrollTo(0, 0);
      const pathname: any = R.compose(R.nth(1), R.split('/'))(location.pathname);
      this.setTitle(TITLE[pathname]);
    }
  }

  setTitle(title) {
    this.setState({
      header: {
        title,
      },
    });
  }

  render() {
    const { header } = this.state;
    const { children } = this.props;

    return (
      <Provider value={header}>
        {children}
      </Provider>
    );
  }
}

export default withRouter(ScrollToTop as any);
