import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './router';
import './registerServiceWorker';

import './assets/css/app.scss';

ReactDOM.render(
  <Router />,
  document.getElementById('app'),
);
