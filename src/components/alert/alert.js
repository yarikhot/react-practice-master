import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';


class Alert extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    removeMargin() {
        document.querySelector('#app').classList.remove('mt-50');
    }

    addMargin() {
        document.querySelector('#app').classList.add('mt-50');
    }

    render() {
        const {name, email} = this.props.user;
        if (isEmpty(name) || isEmpty(email)) {
            this.removeMargin();
            return null;
        }

        this.removeMargin();

        this.addMargin();

        return (
            <div className='alert alert-success b-alert'>
                <p>Name: <span>{name}</span></p>
                <p>Email: <span>{email}</span></p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Alert);
