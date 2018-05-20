import React from 'react';
import {Route} from 'react-router';
import Contact from './contact';


export default (
    <Route>
        <Route components={Contact} path={Contact.path}/>
    </Route>
);
