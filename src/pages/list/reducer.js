import {EDIT_ITEMS, DELETE_ITEMS} from './actions';

const initialState = {
    items: [
        {
            id: 1,
            name: 'Stas I-kak-prosto',
            youtube: '8cVJgjcOOig'
        },
        {
            id: 2,
            name: 'Eminem',
            youtube: '8cVJgjcOOig'
        },
        {
            id: 3,
            name: 'Eminem',
            youtube: '8cVJgjcOOig'
        },
        {
            id: 4,
            name: 'Red Hot Chilli Papers',
            youtube: '8cVJgjcOOig'
        },
        {
            id: 5,
            name: 'Metallica',
            youtube: '8cVJgjcOOig'
        }
    ]
};

function listReduser(state = initialState, action) {
    switch (action.type) {
        case EDIT_ITEMS:
            const idx = state.items.findIndex(item => item.id === action.id);
            state.items[idx].name = action.name;
            state.items[idx].youtube = action.youtube;
            return Object.assign({}, state, {
                items: state.items
            });
        case DELETE_ITEMS:
            state.items = state.items.filter(item => item.id !== action.id);
            return Object.assign({}, state, {
                items: state.items
            });
        default:
            return state;
    }
}

const ListReducer = {
    list: listReduser
};


export default ListReducer;
