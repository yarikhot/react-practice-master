import React from 'react';
import {Route} from 'react-router';
import List from './list';
import ItemDetails from './item-details';


export default (
    <Route>
        <Route components={List} path={List.path}/>
        <Route components={ItemDetails} path={List.path + '/:id'}/>
    </Route>
);

