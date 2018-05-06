import React from 'react';
import {bindAll} from 'lodash';
import {store} from '../../index';
import PropTypes from 'prop-types';
// import './styles.less';

export default class ItemDetails extends React.Component {

    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            youtube: item.youtube
        };
    }

    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const {items} = actualStore.list;

        const idx = items.findIndex(item => item.id === Number(this.props.routeParams.id));

        return {
            id: items[idx].id,
            name: items[idx].name,
            youtube: items[idx].youtube
        };
    }

    render() {
        return (
            <div className='youtube'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sx-12'>
                            <div className='list'>
                                <div className='list-heading'><h1>{this.state.id}: {this.state.name}</h1>
                                </div>
                                <div className='list-body'>
                                    <iframe width='560'
                                            height='315'
                                            src={`https://www.youtube.com/embed/${this.state.youtube}`}
                                            frameBorder='0'
                                            allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
