import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAlbums, fetchUsers } from "../../actions";
import UserIcon from "../users/UserIcon";
import "./AlbumsList.css";

const AlbumsList = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchAlbums();
    props.fetchUsers();
  }, []);

  const renderedAlbums = () =>
    Object.values(props.albums).map((album) => (
      <div className="album_info" key={album.id}>
        <div className="album_info_text">
          <UserIcon
            className="album_info_user"
            name={props.users[album.userId]?.username ?? ""}
            id={album.userId}
          />
          <h1 className="user_info_title">{album.title}</h1>
        </div>
        <button
          onClick={() => navigate(`/albums/${album.id}`)}
          className="user_info_open"
        >
          Open
        </button>
      </div>
    ));

  return (
    <Fragment>
      <h1 className="title">Albums</h1>
      {renderedAlbums()}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchAlbums, fetchUsers })(
  AlbumsList
);
