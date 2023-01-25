import { useEffect } from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <h1 className="post_title">{props.post.title}</h1>
      <p className="post_body">{props.post.body}</p>
    </div>
  );
};

export default Post;
