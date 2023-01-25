import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import Post from "./Post";

const PostsList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const renderedPostsList = () =>
    props.posts.map((post) => <Post post={post} />);

  if (!props.posts) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {renderedPostsList()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
