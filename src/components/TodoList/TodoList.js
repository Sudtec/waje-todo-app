import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      <li className='title'>
        <span>
          Title
        </span>
        <span>Action</span>
      </li>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
