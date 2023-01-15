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
});
