import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchUsers } from "../../actions";
import Post from "./Post";

const PostsList = (props) => {
  useEffect(() => {
    props.fetchPosts();
    props.fetchUsers();
  }, []);

  const renderedPostsList = () =>
    Object.values(props.posts).map((post) => <Post key={post.id} post={post} user={props.users[post.userId]} />);

  if (!props.posts) {
    return <h3>Loading...</h3>;
  }

  return (
    <Fragment>
      <h1 className="title">Posts</h1>
      {renderedPostsList()}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(PostsList);
