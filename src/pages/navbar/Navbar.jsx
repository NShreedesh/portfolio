import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return <div id="nav">
    <div className="left-nav">
      
    </div>
    <div className="right-nav">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/work">Work</Link>
    </div>
  </div>;
}

export default Navbar;
