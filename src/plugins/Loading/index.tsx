import * as React from 'react';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return (
      <div>
        未加载到该组件，请稍后重试！
      </div>
    );
  }
  if (pastDelay) {
    return (
      <div>
        努力加载中...
      </div>
    );
  }
  return null;
};

export default Loading;
