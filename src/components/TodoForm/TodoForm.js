// import React, { useState } from 'react';
// import './TodoForm.css'

// const TodoForm = ({ addTodo }) => {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       addTodo(text);
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='todo-form'>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a todo"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default TodoForm;


import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
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
