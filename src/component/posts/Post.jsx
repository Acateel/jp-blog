import { useEffect } from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="user">
        <div className="user_link"></div>
        <p className="user_name">{props.user.username}</p>
      </div>
      <div className="post_content">
        <h1 className="post_title">{props.post.title}</h1>
        <p className="post_body">{props.post.body}</p>
      </div>
    </div>
  );
};

export default Post;
