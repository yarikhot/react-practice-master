import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import {closeModal} from '../../components/model/action';
import Input from '../../components/ui/input/index';


class EditModal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
    }

    close() {
        this.props.dispatch(closeModal());
    }

    changeName(name) {
        this.setState({name});
    }

    changeLink(youtube) {
        this.setState({youtube});
    }

    save() {
        const {id, name, youtube} = this.state;
        this.props.dispatch(this.props.onSave({id, name, youtube}));
        this.close();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID:</b> {this.state.id} </p>
                    <Input value={this.state.name} onChange={this.changeName}/>
                    <Input value={this.state.youtube} onChange={this.changeLink}/>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-default' onClick={this.close}>Close</button>
                    <button className='btn btn-success' onClick={this.save}>Save</button>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);
