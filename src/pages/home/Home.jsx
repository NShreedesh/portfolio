import React from "react";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      <div className="body">
        <div className="details">
          <div className="details-text">
            <h1>Hi! I Am</h1>
            <h1>Shreedesh Niroula</h1>
            <hr></hr>
            <p>A self taught and Strongly determined Game / Web developer</p>
          </div>
          <div className="details-button">
            <button>Hire Me</button>
            <button>Get CV</button>
          </div>
        </div>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + "/images/profile.jpg"}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
