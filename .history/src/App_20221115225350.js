import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "O Titulo 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O Titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O Titulo 3",
        body: "O corpo 3",
      },
    ],
  };

  componentDidMount() {
    
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
