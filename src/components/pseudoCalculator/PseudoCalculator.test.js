import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PseudoCalculator from './PseudoCalculator';

describe('PseudoCalculator', () => {
  const setupComponent = initialNumber => {
    render(<PseudoCalculator initialNumber={initialNumber} />);
    const user = userEvent.setup();

    return { user };
  };

  it('renders the input fields', () => {
    setupComponent();
    const inputFields = screen.queryAllByDisplayValue('0');
    expect(inputFields).toHaveLength(2);
  });

  it('renders the buttons', () => {
    setupComponent();
    const sumButton = screen.queryByText('+');
    const difButton = screen.queryByText('-');
    expect(sumButton).not.toBeNull();
    expect(difButton).not.toBeNull();
  });

  it('apply the initial value', () => {
    setupComponent(42);
    const firstField = screen.queryByDisplayValue('42');
    const secondField = screen.queryByDisplayValue('0');
    expect(firstField).not.toBeNull();
    expect(secondField).not.toBeNull();
  });

  it('testing sum', async () => {
    const { user } = setupComponent();
    const [firstField, secondField] = screen.queryAllByDisplayValue('0');
    await user.type(firstField, '33');
    await user.type(secondField, '23');
    const difButton = screen.queryByText('+');
    await user.click(difButton);
    const textField = screen.queryByText('56');
    expect(textField).not.toBeNull();
  });

  it('testing dif', async () => {
    const { user } = setupComponent();
    const [firstField, secondField] = screen.queryAllByDisplayValue('0');
    await user.type(firstField, '33');
    await user.type(secondField, '23');
    const difButton = screen.queryByText('-');
    await user.click(difButton);
    const textField = screen.queryByText('10');
    expect(textField).not.toBeNull();
  });
});
