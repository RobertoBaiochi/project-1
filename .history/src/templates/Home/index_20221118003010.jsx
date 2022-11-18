import { Component } from "react";

import "./styles.css";

import Post from '../';
import { loadPost } from './utils/load-posts'

class Home extends Component {
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
         <Post posts={posts} />
      </section>
     
    );
  }
}

export default Home;
