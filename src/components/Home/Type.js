import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "software developer",
          "painter",
          "web designer",
          "violinist",
          "digital artist",
          "researcher",
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
