import React from 'react';
import PropTypes from 'prop-types';
import {DevTools} from './devtool/index';
import Header from './components/header/index';
import {Modal} from './components/model/index';
import {Alert} from './components/alert/index';

export default class App extends React.Component {

    static propTypes={
        children: PropTypes.any.isRequired
    };
    static path = '/';

    render() {
        return (
            <div>
                <Alert />
                <Modal />
                <Header />
                { this.props.children }
                {NODE_ENV !== 'production' ? <DevTools/> : null}
            </div>
        );
    }
}


