import { Component } from 'react'

import './styles.css'

class Button extends Component {

  render() {
    
    const { text, onClick, disabled } = this.props;

    return (
      <button
        disabled=
        className='btn-pages'
        onClick={onClick}
      >
          {text}
      </button>
    );
  }
}
 
export default Button;