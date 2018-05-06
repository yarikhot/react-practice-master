import {ADD_TODO, LIKE_TODO, DEL_TODO, GET_TODO} from './action';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Message',
            liked: false
        }
    ],
    error: '',
    isLoading: true
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const todos = state.todos;
            if (!action.error) {
                todos.push({id: action.id, name: action.name, liked: false});
            }
            return Object.assign({}, state, {
                error: action.error,
                todos
            });
        case LIKE_TODO:
            const idx = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[idx].liked = action.liked;
            return Object.assign({}, state, {todos: state.todos});
        case DEL_TODO:
            const filterTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({}, state, {todos: filterTodos});
        case GET_TODO:
            return Object.assign({}, state, {todo: action.todo, isLoading: false });
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
