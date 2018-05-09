import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {openModal} from '../../components/model/index';
import EditModal from './editModal';
import DeleteModal from './deleteModal';
import {editItems, deleteItems} from './actions';

class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
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

    delete() {
        const {id, name} = this.props;
        this.props.dispatch(openModal({
            content: <DeleteModal id={id}
                                  name={name}
                                  onSuccess={deleteItems}/>,
            title: 'You really want to remove it?'
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
                        <i className='fab fa-react'/>
                    </button>
                    <button className='angular' onClick={this.delete}>
                        <i className='fab fa-angular'/>
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
