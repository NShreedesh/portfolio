import React from "react";
import Typewriter from "typewriter-effect";

import "./typewriter.scss";

const typeWriterStringArray = [
  "Game Developer",
  "Web Developer",
  "App Developer",
];

function TypeWriter() {
  return (
    <div id="typeWriter">
      <Typewriter
        options={{
          strings: typeWriterStringArray,
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: 100,
          cursorClassName: "typewriter-cursor",
        }}
      />
    </div>
  );
}

export default TypeWriter;
