import { Link } from "react-router-dom";
import "./UserIcon.css";

const colors = [
  "#645CBB",
  "#0081C9",
  "#B9F3FC",
  "#BFDB38",
  "#FC7300",
  "#F55050",
  "#FFEA20",
  "#FFEA20",
  "#9DF1DF",
  "#820000",
];

const UserIcon = (props) => {
  const chars = props.name.slice(0, 2);
  return (
    <Link to={`/users/${props.id}`} className="blank_link">
      <div
        className={`${props.className} user_icon`}
        style={{ backgroundColor: colors[props.id - 1] ?? "gray" }}
      >
        <h1 style={props.size ? {fontSize: props.size} : {}}>{chars}</h1>
      </div>
    </Link>
  );
};

export default UserIcon;
