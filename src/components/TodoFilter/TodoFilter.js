import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ setFilter }) => {
  return (
    <div className='filter-container'>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default TodoFilter;
