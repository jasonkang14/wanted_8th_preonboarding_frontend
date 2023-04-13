import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App  from './App';

test('renders the app and interacts with the counter', () => {
  const { getByText } = render(<App />);
  const header = getByText('Counter');

  expect(header).toBeInTheDocument();

  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');
  const countText = getByText(/Count: 0/i);

  fireEvent.click(incrementButton);
  expect(countText.textContent).toBe('Count: 1');

  fireEvent.click(decrementButton);
  expect(countText.textContent).toBe('Count: 0');
});
