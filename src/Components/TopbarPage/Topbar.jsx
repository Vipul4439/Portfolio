import React from "react";

import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import { colors } from "@material-ui/core";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Contact Me
          </a>
          <div className="itemContainer">
            <a
              target="_blank"
              href="https://linkedin.com/in/vipul-soni-59b359179/"
            >
              <img src="assets/Linkdin.png" className="icon" />
            </a>
            <a target="_blank" href="https://github.com/Vipul4439/">
              <img
                style={{ width: "35px" }}
                src="assets/Git.png"
                className="icon"
              />
            </a>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1z5ZANlH4-DOYsHG0qOynYzJXvVphRZGA/view?usp=sharing"
              style={{ textDecoration: "none" }}
            >
              {/* <img
                style={{ width: "28px" }}
                src="assets/resumefull.png"
                className="icon"
              /> */}
              <h2 style={{ fontSize: "28px", color: "#e27d60" }}>
                Resume
              </h2>
            </a>
          </div>
          <div className="itemContainer">
            <img
              style={{ width: "38px" }}
              src="assets/Mail.png"
              className="icon"
            />

            <span>vipulsoniab17@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
