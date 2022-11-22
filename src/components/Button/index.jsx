import P from 'prop-types';

import { Component } from 'react';

import './styles.css';

class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button disabled={disabled} className="btn-pages" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
