import { useEffect } from "react";
import UserIcon from "../users/UserIcon";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post_user">
        <UserIcon className="user_link" name= {props.user?.username ?? ""} id={props.post.userId}/>
        <p className="user_name">{props.user?.username}</p>
      </div>
      <div className="post_content">
        <h1 className="post_title">{props.post.title}</h1>
        <p className="post_body">{props.post.body}</p>
      </div>
    </div>
  );
};

export default Post;
