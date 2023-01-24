import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostsList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const renderedPostsList = () =>
    props.posts.map((post) => <h3 key={post.id}>{post.title}</h3>);

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
