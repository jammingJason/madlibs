// const addCommas = require("./addCommas");
import { render, screen, fireEvent } from '@testing-library/react';
import AddCommas from './AddCommas';

describe('#AddCommas', () => {
  test('it is a function', () => {
    expect(typeof AddCommas).toBe('function');
  });
});

// smoke test
it('renders without crashing', function () {
  render(<AddCommas />);
});

// snapshot test
it('matches snapshot', function () {
  const { asFragment } = render(<AddCommas />);
  expect(asFragment()).toMatchSnapshot();
});

it('handles comma insertions for positive numbers', function () {
  const { getByText, getByRole } = render(<AddCommas />);
  const inputNode = screen.getByPlaceholderText('12345');
  const h2 = getByText('New Number Goes Here');

  fireEvent.change(inputNode, { target: { value: '2356' } });

  expect(h2.innerText).toBe('2,356');
});

it('handles comma insertions for negative numbers', function () {
  const { getByText, getByRole } = render(<AddCommas />);
  const inputNode = screen.getByPlaceholderText('12345');
  const h2 = getByText('New Number Goes Here');

  fireEvent.change(inputNode, { target: { value: '-2356' } });

  expect(h2.innerText).toBe('-2,356');
});

it('handles comma insertions for decimals', function () {
  const { getByText, getByRole } = render(<AddCommas />);
  const inputNode = screen.getByPlaceholderText('12345');
  const h2 = getByText('New Number Goes Here');

  fireEvent.change(inputNode, { target: { value: '-2356.0253' } });

  expect(h2.innerText).toBe('-2,356.0253');
});
