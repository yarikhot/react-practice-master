import {CLOSE_MODAL, OPEN_MODAL} from './action';

const initialState = {
    isOpen: false,
    title: 'modal window',
    content: null
};

function modalReducers(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                isOpen: true,
                title: action.title,
                btnText: action.btnText,
                content: action.content
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}

const ModalReducers = {
    modal: modalReducers
};

export default ModalReducers;
