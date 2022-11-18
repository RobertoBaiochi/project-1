import { Component } from 'react'

class Button extends Component {

  render() {
    
    const { text, onClick } = this.props;

    return (
      <button>
        {text}
      </button>
    );
  }
}
 
export default Button;