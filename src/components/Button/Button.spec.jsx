import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

import TestRenderer from 'react-test-renderer';

describe('<Button />', () => {
  it('should render the button with the text "Load More"', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);
    expect.assertions(2);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'btn-pages');
  });

  it('should call fuction on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load More" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load More" disabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const testRenderer = TestRenderer.create(<Button text="Load More" disabled={false} onClick={fn} />).toJSON();

    expect(testRenderer).toMatchSnapshot();
  });
});
