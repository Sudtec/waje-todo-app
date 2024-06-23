import React from 'react';
import "./TodoItem.css"

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text || todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
