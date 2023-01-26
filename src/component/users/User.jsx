import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser } from "../../actions";
import UserIcon from "./UserIcon";
import "./User.css"

const User = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchUser(id);
  }, []);

  if (!props.users[id]) {
    return <h1 className="title">Loading...</h1>;
  }

  const user = props.users[id]
  return (
    <div className="user_info">
      <UserIcon className="user_info_icon user_icon" name={user.username ?? ""} id={user.id} />
      <div className="user_info_data">
        <section>
            Name: <span>{user.name}</span>
        </section>
        <section>
            Username: <span>{user.username}</span>
        </section>
        <section>
            Email: <span>{user.email}</span>
        </section>
        <section>
            City: <span>{user.address.city}</span>
        </section>
        <section>
            Phone: <span>{user.phone}</span>
        </section>
        <section>
            Website: <a href={user.website} >{user.website}</a>
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
