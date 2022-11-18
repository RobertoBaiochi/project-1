import { Component } from "react";

import "./styles.css";

import Post from '../../components/Posts';
import { loadPost } from '../../utils/load-posts'

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 6
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    
    const postsAndPhotos = await loadPost();
    this.setState({ 
      posts: postsAndPhotos.slice(0, 6),
      allPosts: postsAndPhotos,
    })
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
