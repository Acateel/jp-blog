import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link to={"/"} className="header_item">
          Posts
        </Link>
        <Link to={"/"} className="header_item">
          Albums
        </Link>
        <Link to={"/"} className="header_item">
          Users
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
