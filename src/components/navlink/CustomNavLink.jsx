import React from "react";
import { NavLink } from "react-router-dom";
import "./customNavLink.scss";

function CustomNavLink(props) {
  const { data } = props;

  const { setIsNavbarActive} = props;

  function handleLinkClick() {
    setIsNavbarActive((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="navLink">
      <NavLink to={data.link}   
        activeclassname="active" 
        onClick={handleLinkClick}>
        {data.title}
      </NavLink>
    </div>

  );
}

export default CustomNavLink;
