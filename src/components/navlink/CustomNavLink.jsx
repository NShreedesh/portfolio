import React from "react";
import { NavLink } from "react-router-dom";
import "./customNavLink.scss";

function CustomNavLink(props) {
  const { buttonName, link } = props;

  return (
    <div className="navLink">
      <NavLink to={link} activeclassname="active">
        {buttonName}
      </NavLink>
    </div>
  );
}

export default CustomNavLink;
