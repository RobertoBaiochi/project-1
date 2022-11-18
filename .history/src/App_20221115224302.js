import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
      posts: [
        {
          id: 1,
          title: 'O Titulo 1',
          body: 'O corpo 1'
        },
        {
          id: 2,
          title: 'O Titulo 2',
          body: 'O corpo 2'
        },
        {
          id: 1,
          title: 'O Titulo 1',
          body: 'O corpo 1'
        }
      ]
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
