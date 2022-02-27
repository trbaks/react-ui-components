import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = props => {
  const logoutHandler = () => {};

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/comments">Comments</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/trending">Trending</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  );
};

export default NavLinks;
