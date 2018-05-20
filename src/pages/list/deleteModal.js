import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import {closeModal} from '../../components/model/action';

class DeleteModal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSuccess: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['close', 'deleteItem']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    deleteItem() {
        this.props.dispatch(this.props.onSuccess(this.props.id));
        this.close();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID:</b>{this.props.id}</p>
                    <p><b>Name:</b>{this.props.name}</p>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-default' onClick={this.close}>No</button>
                    <button className='btn btn-danger' onClick={this.deleteItem}>Yes</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);
