import { Component } from "react";

import "./styles.css";

import Post from '../../components/Posts';
import { loadPost } from '../../utils/load-posts'
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 9,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  } 

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase()
          .includes(searchValue.toLowerCase()
        );
      })
      : posts;

    return (
      <section className='container'>

        {!!searchValue && (
          <>
            <h3>Search Value: {searchValue}</h3><br />
          </>
        )}

        <SearchInput searchValue={searchValue} handleChange=/>

        {filteredPosts.length > 0 && (
          <Post posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Busca não encontrada =( </p>
        )}  

        <div className="button-container">
          {!searchValue && (            
            <Button 
              text="Load more posts"
              onClick={this.loadMorePost} //como atributo
              disabled={noMorePosts}
            />
          )}

        </div>
         
      </section>
     
    );
  }
}

export default Home;
