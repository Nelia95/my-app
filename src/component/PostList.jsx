import { PostItem } from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export const PostList = ({ posts, title, onRemove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem onRemove={onRemove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
