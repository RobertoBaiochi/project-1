import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
