import React from 'react';
import {Route} from 'react-router';
import HomePages from './home';


export default (
    <Route>
        <Route components={HomePages} path={HomePages.path}/>
    </Route>
);


