import * as React from 'react';
import { TITLE } from '../../constant/index';

const pathname = window.location.pathname.split('/')[1];

export const AppContextData = {
  header: {
    title: TITLE[pathname] || TITLE.home,
  },
};

export const { Provider, Consumer } = React.createContext(AppContextData.header);
