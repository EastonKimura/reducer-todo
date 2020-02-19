import React from 'react';
import Todo from './Todo';

const TodoList = ({ state, dispatch }) => {
  const createTodo = () => {
    return state.map(item => <Todo {...item} dispatch={dispatch} />)
  }
  return (
    <div className='todo-list'>
      {createTodo()}
      {}
    </div>
  );
};
export default TodoList;