import { Component } from 'react'

class Button extends Component {

  render() {
    
    const { text, onClick } = this.props;

    return (
      <button onClick={}>
        {text}
      </button>
    );
  }
}
 
export default Button;