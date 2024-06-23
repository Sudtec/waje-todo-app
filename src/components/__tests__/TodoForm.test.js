import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from '../TodoForm/TodoForm';

describe('TodoForm', () => {
  test('renders TodoForm component', () => {
    render(<TodoForm onAddTodo={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onAddTodo when form is submitted', () => {
    const addTodoMock = jest.fn();
    render(<TodoForm onAddTodo={addTodoMock} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(addTodoMock).toHaveBeenCalledTimes(1);
    expect(addTodoMock).toHaveBeenCalledWith('Test Todo');
  });
});

