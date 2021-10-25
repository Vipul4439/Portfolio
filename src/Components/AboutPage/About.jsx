import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="assets/AboutMe.png"
            alt=""
            className="a-img"
          ></img>
        </div>
      </div>
      <div className="a-right">
        <h1
          style={{
            margin: "0 auto",
            fontSize: "50px",
            marginBottom: "22px",
          }}
          className="a-title"
        >
          About Me
        </h1>
        <p
          style={{
            fontSize: "25px",
            marginRight: "2px",
            marginBottom: "20px",
          }}
          className="a-desc"
        >
          A passionate Full-Stack Web Developer who is enthusiastic
          about learning new frameworks and creating user-friendly
          websites. Excited to develop innovative programs utilizing
          his problem-solving skills and efficiency.
        </p>
        <div className="a-award">
          <h1>Skills</h1>
          <div className="a-skills">
            <img
              src="Skills/ReactLogo.png"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/ReduxLogo.png"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/NodeJslogo.png"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/JavascriptLogo.png"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/MongoDB2.jpg"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/HTMLlogo.png"
              alt=""
              className="a-award-img"
            ></img>
            <img
              src="Skills/CSSLogo.png"
              alt=""
              className="a-award-img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
