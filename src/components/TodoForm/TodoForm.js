import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
