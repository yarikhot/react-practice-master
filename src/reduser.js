import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {HomeReducer} from './pages/home/index';
import {ListReducer} from './pages/list/index';
import {ContactReducer} from './pages/contact/index';
import {ModalReducers} from './components/model/index';

export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ModalReducers,
    ...ContactReducer
});
