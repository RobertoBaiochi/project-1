import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this)

    this.state = {
      name: "Roberto Baiochi",
      counter: 0
    };
  }

  handlePClick() {
    this.setState({ name: 'Junior Pancada' })
  }

  handleAClick = () => {
    const { counter } = this.state;
    this.setState({ counter : counter + 1 })

  }

  render() {

    const { name } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o Link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
