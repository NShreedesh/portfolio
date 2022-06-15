import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav id="nav">
      <div className="header-nav">
        <h1>My Portfolio</h1>
      </div>
      <div className="link-nav">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/project" activeClassName="active">
          Project
        </NavLink>
        <NavLink to="/skills" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/work" activeClassName="active">
          Work
        </NavLink>
      </div>
      <div className="footer-nav">
        <p>Footer</p>
      </div>
    </nav>
  );
}

export default Navbar;
