import { Component } from "react";

import "./App.css";
import Post from './components/Posts';

import { loadPost } from './utils/load-posts'

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPost();
    this.setState({ posts: postsAndPhotos })
  };

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
         <Post posts />
      </section>
     
    );
  }
}

export default App;
