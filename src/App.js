import React, { useState, useMemo, useEffect } from "react";

import { PostList } from "./component/PostList";
import { PostForm } from "./component/PostForm";
import { PostFilter } from "./component/PostFilter";
import { MyModal } from "./component/MyModal/MyModal";
import { MyButton } from "./component/UI/button/MyButton";

import "./styles/App.css";

// const INIT_POSTS = [
//   { id: 1, title: "Javascript", body: "js" },
//   { id: 2, title: "React", body: "ac" },
//   { id: 3, title: "Node", body: "nd" },
// ];

const POSTS_KEY = "posts";

const getInitPosts = () => JSON.parse(localStorage.getItem(POSTS_KEY)) || [];

function App() {
  const [posts, setPosts] = useState(getInitPosts());

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndFilterPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  // const sortedAndFilterPost = useMemo(
  //   () =>
  //     (filter.sort
  //       ? posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  //       : posts
  //     ).filter((post) => post.title.toLowerCase().includes(filter.query)),
  //   [filter.sort, filter.query, posts]
  // );

  const createPost = (newPost) => {
    // setPosts([...posts, newPost]);
    setPosts((prev) => [...prev, newPost]);
    setIsOpenModal(false);
  };

  const removePost = (postId) => {
    // setPosts(posts.filter((p) => p.id !== post.id));
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  useEffect(() => {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <MyButton onClick={() => setIsOpenModal(true)}>Створити пост</MyButton>

      <PostFilter filter={filter} setFilter={setFilter} />

      <MyModal
        visible={isOpenModal}
        setVisible={setIsOpenModal}
        children={<PostForm create={createPost} />}
      />

      {sortedAndFilterPost.length !== 0 ? (
        <PostList
          // remove={removePost}
          onRemove={removePost}
          // handleRemove={removePost}
          posts={sortedAndFilterPost}
          title="Список постів"
        />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Не знайдено жодного поста</h1>
        </div>
      )}
    </div>
  );
}

export default App;
