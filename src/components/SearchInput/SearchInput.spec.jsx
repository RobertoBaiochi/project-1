import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '.';
import TestRenderer from 'react-test-renderer';

describe('<SearchInput />', () => {
  it('should have a value on searchValue', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'testing input'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('testing input');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<SearchInput handleChange={fn} searchValue={'um valor qualquer'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const testRenderer = TestRenderer.create(<SearchInput handleChange={fn} searchValue={''} />).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});
