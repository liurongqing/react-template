import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import ScrollToTop from './plugins/ScrollToTop/index';

import Header from './container/Layout/Header';

import * as Loadable from 'react-loadable';
import Loading from './plugins/Loading/index';

// 首页
const asyncHome = Loadable({
    loader: () => import(/* webpackChunkName: "home" */'./container/Home/index'),
    loading: () => <div>loading...</div>,
});

// 关于
const asyncAbout = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ './container/About/index'),
    loading: Loading,
});

const routes = [
    {
        path: '/',
        exact: true,
        component: asyncHome,
    },
    {
        path: '/home',
        component: asyncHome,
    },
    {
        path: '/about',
        component: asyncAbout,
    },
];

export default () => (
    <Router>
        <ScrollToTop>

            <Header />

            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
                <Switch>
                    {
                        routes.map(route => (
                            <Route
                                exact={route.exact}
                                key={route.path}
                                path={route.path}
                                component={route.component}
                            />
                        ))
                    }
                </Switch>
            </div>
        </ScrollToTop>
    </Router>
)