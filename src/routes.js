import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './app';
import {HomePages, HomeRoutes} from './pages/home/index';
import {AboutRoutes} from './pages/about/index';
import {ListRoutes} from './pages/list/index';
import ErrorPages from './pages/error/index';


export default (
    <Route component={App} path={App.path}>
        <IndexRoute components={HomePages}/>

        {HomeRoutes}
        {AboutRoutes}
        {ListRoutes}
        <Route path='*' components={ ErrorPages }/>
    </Route>
);
