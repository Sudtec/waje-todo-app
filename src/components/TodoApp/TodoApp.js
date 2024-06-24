import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoFilter from '../TodoFilter/TodoFilter';
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown';
import { useAuth } from '../AuthContext';
import "./TodoApp.css"

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const { logout, username } = useAuth();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data.slice(0, 10)); // Limiting to 10 items for simplicity
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);


  const onAddTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return false; // Default return value
  });

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
    logout();
  };

  return (
    <div className="todo-app">
      <div className='header'>
        <h1>Todo List</h1>
        <AvatarDropdown
          username={username}
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
          onLogout={handleLogout}
        />
      </div>
      <div className='todo-top_bar'>
        <TodoForm onAddTodo={onAddTodo} />
        <TodoFilter setFilter={setFilter} />
      </div>

      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
