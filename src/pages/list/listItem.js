import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {openModal} from '../../components/model/index';
import EditModal from './editModal';
import {editItems} from './actions';

class ListItem extends React.Component {

    static propTypes={
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
    }

    edit() {
        const {id, name, youtube} = this.props;
        this.props.dispatch(openModal({
            content: <EditModal id={id}
                                name={name}
                                youtube={youtube}
                                onSave={editItems}/>,
            title: 'Edit'
        }));
    }

    render() {
        return (

            <tr>
                <td>{this.props.id}</td>
                <td>
                    <Link to={`/list/${ this.props.id }`}>{this.props.name} </Link>
                </td>
                <td>
                    <button className='react' onClick={this.edit}>
                        <i className='fab fa-react' />
                    </button>
                    <button className='angular'>
                        <i className='fab fa-angular' />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(ListItem);
