
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
      name: "Roberto Baiochi",
      counter: 0
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
