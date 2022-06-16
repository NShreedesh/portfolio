import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import "./hamburger.scss";

function Hamburger(props) {
  const { setIsNavbarActive, isNavbarActive } = props;

  function handleHamburgerClick() {
    setIsNavbarActive((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div id="hamburger">
      <button onClick={handleHamburgerClick}>
        {isNavbarActive ? (
          <IoClose color="black" size={20} />
        ) : (
          <GiHamburgerMenu color="black" size={20} />
        )}
      </button>
    </div>
  );
}

export default Hamburger;
