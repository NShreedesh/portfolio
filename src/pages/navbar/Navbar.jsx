import React from "react";
import { useState } from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import CustomNavLink from "../../components/navlink/CustomNavLink";

import "./navbar.scss";

function Navbar() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  return (
    <nav id="nav">
      <Hamburger
        isNavbarActive={isNavbarActive}
        setIsNavbarActive={setIsNavbarActive}
      />
      <div className={`nav-container ${isNavbarActive ? "active" : ""}`}>
        <div className="header-nav">
          <h1>My Portfolio</h1>
        </div>
        <div className="link-nav">
          <CustomNavLink link="/" buttonName="Home" />
          <CustomNavLink link="/about" buttonName="About" />
          <CustomNavLink link="/project" buttonName="Project" />
          <CustomNavLink link="/skills" buttonName="Skills" />
          <CustomNavLink link="/work" buttonName="Work" />
        </div>
        <div className="footer-nav">
          <p>Footer</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
