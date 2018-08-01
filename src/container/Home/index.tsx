import * as React from 'react';
import * as styles from './index.scss';
// import * as img from '../../assets/image/img.png';
const img = require('../../assets/image/img.png');

export default (): any => (
  <div>
    <div className="iconfont icon-home" />
    <img src={img} alt="图片" />
    <div className={styles.text}>
      内部样式 .text 使用 styles.text
    </div>
    <div className={styles.textTwo}>
      内部样式 .text-two 使用 styles.textTwo
    </div>
    <div className="button">
      全局样式
    </div>
  </div>
);
