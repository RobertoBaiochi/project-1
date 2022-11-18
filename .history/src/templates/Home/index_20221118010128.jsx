import { Component } from "react";

import "./styles.css";

import Post from '../../components/Posts';
import { loadPost } from '../../utils/load-posts'
import Button from '../../components/Button';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPost();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  };

  loadMorePost = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <Post posts={posts} />

        <div className="button-container">
          <Button 
            text="Load more posts"
            onClick={this.loadMorePost} //como atributo
          />
        </div>
         
      </section>
     
    );
  }
}

export default Home;
