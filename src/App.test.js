import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a counter component', () => {
    render(<App />);
    const counterComp = screen.queryByText('Current count is 0');
    expect(counterComp).not.toBeNull();
  });

  it('renders pseudoCalc component', () => {
    render(<App />);
    const pseudoCalculator = screen.queryByTestId('pseudoCalculator');
    expect(pseudoCalculator).not.toBeNull();
  });

  it('renders todo list component', () => {
    render(<App />);
    const todoList = screen.queryByTestId('todoList');
    expect(todoList).not.toBeNull();
  });

  it('renders blog component', () => {
    render(<App />);

    screen.getByText('Blog'); // Implicit
    // vs
    const blog = screen.queryByText('Blog'); // Explicit
    expect(blog).not.toBeNull();
  });
});
