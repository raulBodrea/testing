import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

// describe -> Defineste o suita de teste. Sintaxa: describe('numele componentei sau o descriere a suitei de teste', () => {...mai multe teste})
describe('Counter', () => {
  // beforeEach -> Ruleaza o functie inaintea fiecarui test. Sintaxa: beforeEach(() => {...cod de rulat})
  beforeEach(() => {});

  // beforeAll -> Ruleaza o functie inaintea tuturor testelor. Sintaxa: beforeAll(() => {... cod de rulat})
  beforeAll(() => {});

  // afterEach -> Ruleaza o functie dupa fiecare test. Sintaxa: afterEach(() => {... cod de rulat})
  afterEach(() => {});

  // afterAll -> Ruleaza o functie dupa toate testele. Sintaxa: afterAll(() => {... cod de rulat})
  afterAll(() => {});

  // it / test -> Defineste un test. Sintaxa: it('descrierea testului', () => { render(<...})
  it('renders the current count', () => {
    render(<Counter />);
    const currentCountElement = screen.queryByText('Current count is 0');
    // expect -> Un obiect care vine din jest care ne permite sa scriem validari. Pentru a vedea ce stie sa faca acest obiect: https://jestjs.io/docs/expect
    expect(currentCountElement).not.toBeNull();
  });

  // it / test -> Defineste un test. Sintaxa: it('descrierea testului', () => { render(<...})
  test('renders the decrement button', () => {
    render(<Counter />);
    const decrementButton = screen.queryByText('-');
    // expect -> Un obiect care vine din jest care ne permite sa scriem validari. Pentru a vedea ce stie sa faca acest obiect: https://jestjs.io/docs/expect
    expect(decrementButton).not.toBeNull();
  });

  // it / test -> Defineste un test. Sintaxa: it('descrierea testului', () => { render(<...})
  it('renders the increment button', () => {
    render(<Counter />);
    const incrementButton = screen.queryByText('+');
    // expect -> Un obiect care vine din jest care ne permite sa scriem validari. Pentru a vedea ce stie sa faca acest obiect: https://jestjs.io/docs/expect
    expect(incrementButton).not.toBeNull();
  });

  it('increments the current count as expected', async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const incrementButton = screen.queryByText('+');
    await user.click(incrementButton);
    const currentCountElement = screen.queryByText('Current count is 1');
    expect(currentCountElement).not.toBeNull();
  });

  it('decrements the current count as expected', async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const decrementButton = screen.queryByText('-');
    await user.click(decrementButton);
    const currentCountElement = screen.queryByText('Current count is -1');
    expect(currentCountElement).not.toBeNull();
  });
});

// jest.fn() -> Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

// RTL:
// queries:
//  - findBy...: Returneaza o promisiune. Daca nu exista elementul, promise-ul va fi rejected
//  - getBy...: Returneaza elementul sau arunca o eroare daca nu exista acel element
//  - queryBy...: Returneaza elementul sau null daca nu exista acel element
