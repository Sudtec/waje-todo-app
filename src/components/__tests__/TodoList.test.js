import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList/TodoList';

const sampleTodos = [
  { id: 1, text: 'Test Todo 1', completed: false },
  { id: 2, text: 'Test Todo 2', completed: true },
];

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList todos={sampleTodos} />);
    const todoElement = screen.getByText(/Test Todo 1/i);
    expect(todoElement).toBeInTheDocument();
  });

  test('renders the correct number of todo items', () => {
    render(<TodoList todos={sampleTodos} />);
    const todoElements = screen.getAllByRole('listitem');
    expect(todoElements.length).toBe(2);
  });
});
