import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fethcPostFull, removeComments } from "../../actions";
import Post from "./Post";
import "./Comment.css";

const PostShow = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fethcPostFull(id);
    return () => props.removeComments();
  }, []);

  const post = props.posts[id];

  if (!(post && props.users[post.userId] && props.comments)) {
    return <h1 className="title">Loading...</h1>;
  }

  const renderedComments = () =>
    props.comments?.map((comment) => (
      <div className="comment" key={comment.id}>
        <p className="comment_email">{comment.email}</p>
        <p className="comment_name">{comment.name}</p>
        <p className="comment_body">{comment.body}</p>
      </div>
    ));

  return (
    <Fragment>
      <Post post={post} user={props.users[post.userId]} />
      <h1 className="title">Comments</h1>
      {renderedComments()}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  fethcPostFull,
  removeComments,
})(PostShow);
