import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link to={"/"} className="header_item">
          Posts
        </Link>
        <Link to={"/albums"} className="header_item">
          Albums
        </Link>
        <Link to={"/users"} className="header_item">
          Users
        </Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
