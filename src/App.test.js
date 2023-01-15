import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders a counter component', () => {
    render(<App />);
    screen.queryByText('Current count is 0');
  });
});
