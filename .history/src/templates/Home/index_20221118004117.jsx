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
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    })
  };

  loadMorePost = () => {
    console.log('Load More Posts')
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
         <Post posts={posts} />
         <button onClick={}></button>
      </section>
     
    );
  }
}

export default Home;
