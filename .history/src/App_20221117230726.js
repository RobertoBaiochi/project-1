import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    this.setState({ posts: postsJson })
  };

  render() {
    const { posts } = this.state;

    return (
      <section>

      </section>
     
    );
  }
}

export default App;
