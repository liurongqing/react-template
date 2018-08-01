/* eslint no-undef: 0 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../../plugins/AppContext/index';
import * as styles from './Header.scss';

class Header extends React.Component {
  goBack = () => {
    const { history }: any = this.props;
    history.go(-1);
  }

  goHome = () => {
    const { history }: any = this.props;
    history.push('/home');
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left} onPointerEnter={this.goBack}>
            返回
          </div>
          <Consumer>
            {
              context => (
                <div className={styles.center}>
                  {context.title}
                </div>)
            }
          </Consumer>

          <div className={styles.right} onPointerEnter={this.goHome}>
            首页
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Header as any);
