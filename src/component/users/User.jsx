import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../actions";
import UserIcon from "./UserIcon";
import "./User.css";

const User = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchUser(id);
  }, []);

  if (!props.users[id]) {
    return <h1 className="title">Loading...</h1>;
  }

  const user = props.users[id];
  return (
    <div className="user_info">
      <UserIcon
        className="user_info_icon"
        name={user.username ?? ""}
        id={user.id}
        size="80px"
      />
      <div className="user_info_data">
        <section>
          Name: <span>{user.name}</span>
        </section>
        <section>
          Username: <span>{user.username}</span>
        </section>
        <section>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </section>
        <section>
          Address:
          <address>{user.address.city}</address>
          <address>{user.address.street}</address>
          <address>{user.address.suite}</address>
        </section>
        <section>
          Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
        </section>
        <section>
          Website: <a href={user.website}>{user.website}</a>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUser })(User);
