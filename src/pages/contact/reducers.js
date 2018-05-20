import {SUBMIT_FORM} from './action';

const initialState = {
    name: '',
    email: ''
};

function contactRedusers(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            return Object.assign({}, state, {
                name: action.name,
                email: action.email
            });
        default:
            return state;
    }
}

const ContactReducer = {
    user: contactRedusers
};


export default ContactReducer;
