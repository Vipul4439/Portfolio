import React, { useEffect, useRef } from "react";
import "./intro.scss";

import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Profile.jpg"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Vipul Soni</h1>
          <h3>
            Full Stack <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/downarrow.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
