import React from "react";
import { useState } from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import CustomNavLink from "../../components/navlink/CustomNavLink";

import "./navbar.scss";
import NavbarFooter from "../../components/navbarfooter/NavbarFooter";
import { navbarData } from "../../data/navbarData";

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
          {
            navbarData.map((data, index)=>{
              return(
              <CustomNavLink key={index}  
                data={data} 
                sNavbarActive={isNavbarActive}
                setIsNavbarActive={setIsNavbarActive}/>
              );
            })
          }
        </div>
        <NavbarFooter/>
      </div>
    </nav>
  );
}

export default Navbar;
