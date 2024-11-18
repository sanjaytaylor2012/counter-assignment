// import necessary react testing library helpers here
import { render, screen, waitFor  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import the Counter component here

import Counter from "../components/Counter";


test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  userEvent.click(incrementButton);
  await waitFor(() => expect(count).toHaveTextContent('1'));

});

test('clicking - decrements the count', async () => {
  render(<Counter />);
  const count = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  
  userEvent.click(decrementButton);
  await waitFor(() => expect(count).toHaveTextContent('-1'));
});
