import React from "react";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/images/profile.jpg"}
          alt="Profile"
        />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
