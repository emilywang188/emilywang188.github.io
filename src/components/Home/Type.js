import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Researcher",
          "Painter",
          "Web Designer",
          "Teaching Assistant",
          "Violinist",
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
