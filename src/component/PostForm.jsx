import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';
import React, { useState } from 'react';

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = e => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);

    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* Управляємий компонент */}
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Назва поста"
      />

      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Опис поста"
      />

      {/* Неуправляємий компонент */}
      {/* <MyInput ref={bodyInputRef} type="text" placeholder="Опис поста" /> */}
      <MyButton title="Створити пост" onClick={addNewPost} />
    </form>
  );
};
