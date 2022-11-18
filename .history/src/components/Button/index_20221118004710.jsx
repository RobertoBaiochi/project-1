import { Component } from 'react'

class Button extends Component {

  render() {
    
    const { text }

    return (
      <button>
        {text}
      </button>
    );
  }
}
 
export default Button;