import React from 'react';
import {Route} from 'react-router';
import AboutPages from './about';


export default (
    <Route>
        <Route components={AboutPages} path={AboutPages.path}/>
    </Route>
);


