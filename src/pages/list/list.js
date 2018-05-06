import React from 'react';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import ListItem from './listItem';


export class List extends React.Component {

    static path = '/list';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem
                key={idx}
                id={item.id}
                name={item.name}
                youtube={item.youtube}
            />);
    }

    render() {
        const {items} = this.props.list;
        return (
            <div className='table'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h3>list</h3>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.map(this.renderItems)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(List);
