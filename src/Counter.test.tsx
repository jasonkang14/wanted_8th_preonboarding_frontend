import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';


test('renders the counter and updates count on button clicks', () => {
  const { getByText } = render(<Counter />);
  const countText = getByText(/Count: 0/i);

  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  fireEvent.click(incrementButton);
  expect(countText.textContent).toBe('Count: 1');

  fireEvent.click(decrementButton);
  expect(countText.textContent).toBe('Count: 0');
});
