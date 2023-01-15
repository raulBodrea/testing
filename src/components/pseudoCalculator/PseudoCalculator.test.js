import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PseudoCalculator from './PseudoCalculator';

describe('PseudoCalculator', () => {
  const setupComponent = ({
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    result,
    setResult,
  } = {}) => {
    const setFirstNumberSpy = jest.fn(setFirstNumber);
    const setSecondNumberSpy = jest.fn(setSecondNumber);
    const setResultSpy = jest.fn(setResult);
    render(
      <PseudoCalculator
        firstNumber={firstNumber || 0}
        secondNumber={secondNumber || 0}
        setFirstNumber={setFirstNumberSpy}
        setSecondNumber={setSecondNumberSpy}
        result={result}
        setResult={setResultSpy}
      />
    );
    const user = userEvent.setup();

    return { user, setFirstNumberSpy, setSecondNumberSpy, setResultSpy };
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
    setupComponent({ firstField: 42, secondField: 0 });
    const firstField = screen.queryByDisplayValue('42');
    const secondField = screen.queryByDisplayValue('0');
    expect(firstField).not.toBeNull();
    expect(secondField).not.toBeNull();
  });

  fit('testing sum ', async () => {
    const { user, setFirstNumberSpy, setSecondNumberSpy, setResultSpy } =
      setupComponent({ firstNumber: 2, secondNumber: 3 });
    const [firstField, secondField] = screen.queryAllByDisplayValue('0');
    await user.type(firstField, '2');
    await user.type(secondField, '3');
    const sumButton = screen.queryByText('+');
    await user.click(sumButton);
    expect(setFirstNumberSpy).toHaveBeenCalledWith(2);
    expect(setSecondNumberSpy).toHaveBeenCalledWith(3);
    expect(setResultSpy).toHaveBeenCalledWith(5);
    console.log(setResultSpy);
    console.log(setResultSpy.mock);
  });

  it('testing dif ', async () => {
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
