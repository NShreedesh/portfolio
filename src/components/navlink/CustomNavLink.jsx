import React from "react";
import { NavLink } from "react-router-dom";
import "./customNavLink.scss";

function CustomNavLink(props) {
  const { data } = props;

  return (
    <div className="navLink">
      <NavLink to={data.link} activeclassname="active">
        {data.title}
      </NavLink>
    </div>
  );
}

export default CustomNavLink;
