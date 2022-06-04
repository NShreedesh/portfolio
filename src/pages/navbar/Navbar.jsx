import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav id="nav">
      <div className="left-nav">
        <h1>My Portfolio</h1>
      </div>
      <div className="right-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">Work</Link>
      </div>
    </nav>
  );
}

export default Navbar;
