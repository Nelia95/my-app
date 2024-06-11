import React, { useState, useMemo } from 'react';
import './styles/App.css';
import { PostList } from './component/PostList';
import { PostForm } from './component/PostForm';
import { PostFilter } from './component/PostFilter';
import { MyModal } from './component/MyModal/MyModal';
import { MyButton } from './component/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'js' },
    { id: 2, title: 'React', body: 'ac' },
    { id: 3, title: 'Node', body: 'nd' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndFilterPost = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        title="Створити пост"
        onClick={() => {
          setModal(true);
        }}
      />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyModal
        visible={modal}
        setVisible={setModal}
        children={<PostForm create={createPost} />}
      />
      {sortedAndFilterPost.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndFilterPost}
          title="Список постів"
        />
      ) : (
        <div>
          <h1 style={{ textAlign: 'center' }}>Не знайдено жодного поста</h1>
        </div>
      )}
    </div>
  );
}

export default App;
