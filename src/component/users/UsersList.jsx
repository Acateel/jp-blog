import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import UserIcon from "./UserIcon";
import "./UserList.css";

const UsersList = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = () =>
    props.users.map((user) => (
      <div key={user.id} className="user">
        <UserIcon
          className="user_icon"
          name={user.username ?? ""}
          id={user.id}
        />
        <p className="user_name">{user.username}</p>
        <p className="user_fullname">{user.name}</p>
      </div>
    ));

  return (
    <div>
        <h1 className="title">Users</h1>
        <div className="user_list">{props.users ? renderUsers() : null}</div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);
