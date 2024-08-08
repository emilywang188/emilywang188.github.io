import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Painter",
          "Web Designer",
          "Violinist",
          "Digital Artist",
          "Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 40
      }}
    />
  );
}

export default Type;
