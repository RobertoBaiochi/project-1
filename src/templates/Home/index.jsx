import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import Post from '../../components/Posts';
import { loadPost } from '../../utils/load-posts';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePost = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && (
          <>
            <h3>Search Value: {searchValue}</h3>
          </>
        )}
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Post posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Busca não encontrada =( </p>}

      <div className="button-container">
        {!searchValue && <Button text="Load More" onClick={loadMorePost} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

export default Home;
