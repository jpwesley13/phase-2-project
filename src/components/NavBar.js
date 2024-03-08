import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
      >
        Home
      </NavLink>
      <NavLink
      to="/series"
      >
        Series
      </NavLink>
      <NavLink
      to="/travel"
      >
        Travel
      </NavLink>
    </nav>
    );
};

export default NavBar;