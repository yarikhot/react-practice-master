import {Delay, LocalStorageManager} from '../../devtool/index';


export const ADD_TODO = 'ADD_TODO';
export const LIKE_TODO = 'LIKE_TODO';
export const DEL_TODO = 'DEL_TODO';
export const GET_TODO = 'GET_TODO';


export function addToDo(todos, name) {
    let error = '';
    if (!name) {
        error = 'Write Now';
    }

    let id = 1;
    if (todos.length) {
        id = todos[todos.length - 1].id + 1;
    }


    return {
        type: ADD_TODO,
        id, name, error
    };
}

export function likeTodo(todo) {
    const liked = !todo.liked;

    return {
        type: LIKE_TODO,
        todo, liked
    };
}

export function deleteTodo(todo) {
    return {
        type: DEL_TODO,
        todo
    };
}

export function getTodo() {
    const todos = LocalStorageManager.get('todos');

    return (dispatch) => {
        Delay(1000).then(() => {
            dispatch({
                type: GET_TODO,
                todos
            });
        });
    };
}


