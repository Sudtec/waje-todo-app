import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoApp from '../TodoApp/TodoApp';
import { AuthProvider } from '../AuthContext';

describe('TodoApp', () => {
  test('renders TodoApp component', () => {
    render(
      <AuthProvider>
        <TodoApp />
      </AuthProvider>
    );
    const linkElement = screen.getByText(/Add/i);
    expect(linkElement).toBeInTheDocument();
  });
});

