import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost, fetchUser } from "../../actions";
import Post from "./Post";

const PostShow = (props) => {
  const { id } = useParams();

  const post = props.posts[id];
  if (!post) {
    props.fetchPost(id);
    return <h1 className="title">Loading...</h1>;
  }

  const user = props.users[post.userId];
  if (!user) {
    props.fetchUser(post.userId);
    return <h1 className="title">Loading...</h1>;
  }

  return <Post post={post} user={props.users[post.userId]} />;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchPost, fetchUser })(PostShow);
