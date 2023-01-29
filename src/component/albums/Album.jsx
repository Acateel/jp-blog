import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import UserIcon from "../users/UserIcon";
import { fetchAlbumFull, removeAlbumPhotos } from "../../actions";
import "./Album.css";

const Album = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchAlbumFull(id);
    return () => {
      props.removeAlbumPhotos();
    };
  }, []);

  const album = props.albums[id];

  if (!(album && props.users[album.userId] && props.photos)) {
    return <h1 className="title">Loading...</h1>;
  }

  const renderedPhotos = () =>
    props.photos.map((photo) => (
      <img
        src={photo.url}
        alt={photo.title}
        key={photo.id}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/600/000000";
        }}
      />
    ));

  const user = props.users[album.userId];
  return (
    <Fragment>
      <div className="album_title">
        <h1 className="title">Album: {album.title}</h1>
        <UserIcon className="user_link" name={user.username} id={user.id} />
      </div>
      <div className="photos_list">{renderedPhotos()}</div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    photos: state.photos,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchAlbumFull,
  removeAlbumPhotos,
})(Album);
