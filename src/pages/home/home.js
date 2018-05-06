import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/ui/input/index';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import {
    addToDo,
    deleteTodo,
    getTodo,
    likeTodo
} from './action';
import classnames from 'classnames';
import {LocalStorageManager} from '../../devtool';
import Loader from '../../components/ui/loader/index';


export class HomePages extends React.Component {

    static path = '/home';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodos']);
        this.props.dispatch(getTodo());
    }

    inputOnChange(value) {
        this.setState({todoName: value});
    }

    addTodos() {
        this.props.dispatch(addToDo(this.props.home.todos, this.state.todoName));
        this.setState({todoName: ''});
    }


    renderTodos(item, idx) {
        const todoClasses = classnames('b-home', {
            'is-liked': item.liked
        });
        const btnClasses = classnames('btn-message', {
            'active': item.liked
        });
        return (
            <p key={idx} className='item'>
                <span className={todoClasses}>{item.name}</span>
                <button onClick={this.delTodo.bind(this, item)} className='btn-message'><i className='fa fa-ban' aria-hidden='true'/></button>
                <button onClick={this.likeTodo.bind(this, item)} className={btnClasses}><i className='fa fa-thumbs-up' aria-hidden='true'/></button>
            </p>
        );
    }

    delTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    likeTodo(todo) {
        this.props.dispatch(likeTodo(todo));
    }

    render() {
        const {todoName} = this.state;
        const {todos, error, isLoading} = this.props.home;
        LocalStorageManager.set('todos', todos);

        return (
            <div className='bg-messager'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xs-12 col-sm-12'>
                            <div className='messager'>
                                  {isLoading ? <Loader/> : todos.length !== 0 ? todos.map(this.renderTodos) : 'not elements'}

                                <Input
                                    value={todoName}
                                    onChange={this.inputOnChange}
                                    placeholder='Write to'
                                    error={error}
                                />
                                <button
                                    type='submit'
                                    onClick={this.addTodos}
                                    className='btn'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePages);
