import React from 'react';
import PropTypes from 'prop-types';
import {bindAll} from 'lodash';
import is from 'is_js';
import Input from '../../components/ui/input/index';
import {connect} from 'react-redux';
import {submitForm} from './action';
import Alert from '../../components/alert/index';


class Contact extends React.Component {

    static path = '/contact';
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errors: {
                errorsName: '',
                errorsEmail: ''
            }
        };

        bindAll(this, ['changeName', 'changeEmail', 'submit', 'isFormValid', 'isNameValid', 'isEmailValid']);
    }

    changeName(name) {
        this.setState({name});
    }

    changeEmail(email) {
        this.setState({email});
    }

    submit(event) {
        event.preventDefault();

        this.isFormValid();

        this.props.dispatch(submitForm(this.state.name, this.state.email));
        this.setState({
            name: '',
            email: ''
        });
    }

    isFormValid() {
        return this.isNameValid(this.state.name) && this.isEmailValid(this.state.email);
    }

    isNameValid(name) {
        let errorsName = '';
        if (name === '') {
            errorsName = 'Field can not be empty';
            this.setState({errorsName});
            return false;
        }

        if (name.length < 3) {
            errorsName = 'Field can not be empty';
            this.setState({errorsName});
            return false;
        }

        this.setState({errorsName});
        return true;
    }

    isEmailValid(email) {
        let errorsEmail = '';
        if (email === '') {
            errorsEmail = 'Field can not be empty';
            this.setState({errorsEmail});
            return false;
        }

        if (!is.email(email)) {
            errorsEmail = 'The field must be emailed';
            this.setState({errorsEmail});
            return false;
        }

        this.setState({errorsEmail});
        return true;
    }

    render() {
        return (
            <div className='form-validation'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12 offset-md-3'>
                            <form className='b-contact'>

                                <h5>Name: </h5>
                                <Input value={this.state.name}
                                       onChange={this.changeName}
                                       error={this.state.errorsName}/>
                                <h5>Email: </h5>
                                <Input value={this.state.email}
                                       onChange={this.changeEmail}
                                       error={this.state.errorsEmail}/>
                                <button type='submit'
                                        onClick={this.submit}>Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Contact);
