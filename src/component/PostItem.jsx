import { MyButton } from "./UI/button/MyButton";

export const PostItem = ({ number, post, onRemove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => onRemove(post.id)}>Видалити</MyButton>
      </div>
    </div>
  );
};
