import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoFilter from '../TodoFilter/TodoFilter';

describe('TodoFilter', () => {
  test('renders TodoFilter component', () => {
    render(<TodoFilter setFilter={jest.fn()} />);
    const allButton = screen.getByText(/All/i);
    expect(allButton).toBeInTheDocument();
  });

  test('calls setFilter when a filter button is clicked', () => {
    const setFilterMock = jest.fn();
    render(<TodoFilter setFilter={setFilterMock} />);
    const activeButton = screen.getByText(/Active/i);
    fireEvent.click(activeButton);
    expect(setFilterMock).toHaveBeenCalledWith('active');
  });
});
