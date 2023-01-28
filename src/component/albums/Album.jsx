import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import UserIcon from "../users/UserIcon";
import {
  fetchAlbumPhotos,
  removeAlbumPhotos,
  fetchAlbum,
  fetchUser,
} from "../../actions";
import "./Album.css";

const Album = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchAlbum(id);
    props.fetchAlbumPhotos(id);
    return () => {
      props.removeAlbumPhotos();
    };
  }, []);

  const album = props.albums[id];
  const user = props.users[album.userId];
  if (!user && album) {
    props.fetchUser(album.userId);
  }

  if (!user || !album || !props.photos) {
    return <h1 className="title">Loading...</h1>;
  }

  const renderedPhotos = () =>
    props.photos.map((photo) => (
      <img src={photo.url} alt={photo.title} key={photo.id} />
    ));

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
  fetchAlbumPhotos,
  removeAlbumPhotos,
  fetchAlbum,
  fetchUser,
})(Album);
