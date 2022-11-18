import { Component } from 'react'

import './styles.css'

class Button extends Component {

  render() {
    
    const { text, onClick } = this.props;

    return (
      <button
        disabled
        className='btn-pages'
        onClick={onClick}>
          {text}
      </button>
    );
  }
}
 
export default Button;