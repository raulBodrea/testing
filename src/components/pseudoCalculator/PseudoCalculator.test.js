import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PseudoCalculator from './PseudoCalculator';

describe('PseudoCalculator', () => {
  const setupComponent = initialValue => {
    render(<PseudoCalculator initialValue={initialValue} />);
    const user = userEvent.setup();

    return { user };
  };

  it('renders the input fields', () => {
    setupComponent();
    const inputFields = screen.queryAllByDisplayValue('0');
    expect(inputFields).toHaveLength(2);
  });

  it('renders the buttons', () => {});
});
