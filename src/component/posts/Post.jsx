import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../users/UserIcon";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post_user">
        <UserIcon
          className="post_user_icon"
          name={props.user?.username ?? ""}
          id={props.post.userId}
        />
        <p className="user_name">{props.user?.username}</p>
      </div>
      <div className="post_content">
        <h1 className="post_title">
          <Link to={`/posts/${props.post.id}`} className="blank_link">
            {props.post.title}
          </Link>
        </h1>
        <p className="post_body">{props.post.body}</p>
      </div>
    </div>
  );
};

export default Post;
