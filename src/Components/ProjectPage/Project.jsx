import React from "react";

import "./project.scss";

export default function Project() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#dc143c",
        }}
      >
        Projects
      </h1>
      <div className="p" id="project">
        <div className="p-left">
          <div style={{ display: "block", marginLeft: "120px" }}>
            <div className="p-card">
              <img
                src="assets/EaseMyTrip.png"
                alt=""
                className="p-img"
              ></img>
            </div>

            <div className="p-card">
              <img
                src="assets/TatacliqProject.jpeg"
                alt=""
                className="p-img"
              ></img>
            </div>
          </div>
        </div>
        <div className="p-right">
          <div className="p-innerright">
            <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
              EaseMyTrip Clone
            </h1>
            <p
              style={{
                fontSize: "25px",
                marginBottom: "10px",
                color: "#dc143c",
              }}
            >
              An online travel booking portal where users can be able
              to search for flights basis date, departure and arrival
              places. Use React for frontend and MongoDB for Backend.
              Implimented filtered fuctionality for airlines.
            </p>
            <div className="p-award">
              <h1>Tech Stack:</h1>
              <div className="p-teckstack">
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/ReactLogo.png"
                    alt=""
                  ></img>
                  <h3 style={{ marginLeft: "5px" }}>React</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/JavascriptLogo.png"
                    alt=""
                  ></img>
                  <h3>JavaScript</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/NodeJslogo.png"
                    alt=""
                  ></img>
                  <h3 style={{ marginLeft: "0px" }}>NodeJs</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/MongoDB2.jpg"
                    alt=""
                  ></img>
                  <h3 style={{ marginLeft: "1px" }}>MongoDB</h3>
                </div>
              </div>

              <div className="p-havealook">
                <h1 style={{ color: "#4682B4" }}>Have a look</h1>
                <div className="p-links">
                  <a
                    target="_blank"
                    href="https://github.com/Rabia-Basari777/easeMyTrip-clone"
                  >
                    <img
                      style={{ width: "45px", marginLeft: "5px" }}
                      src="assets/Git.png"
                      className="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-innerright">
            <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
              TataCliq Clone
            </h1>
            <p
              style={{
                fontSize: "25px",
                marginBottom: "10px",
                color: "#dc143c",
              }}
            >
              An online shopping website where users can be able to
              buy Clothes and accessories. Implimented filtered
              fuctionality for brands.
            </p>
            <div className="p-award">
              <h1>Tech Stack:</h1>
              <div className="p-teckstack">
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/NodeJslogo.png"
                    alt=""
                  ></img>
                  <h3>NodeJs</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/JavascriptLogo.png"
                    alt=""
                  ></img>
                  <h3>JavaScript</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/HTMLlogo.png"
                    alt=""
                  ></img>
                  <h3 style={{ marginLeft: "10px" }}>HTML</h3>
                </div>
                <div className="p-innerteck">
                  <img
                    className="p-skillsimg"
                    src="Skills/CSSLogo.png"
                    alt=""
                  ></img>
                  <h3 style={{ marginLeft: "10px" }}>CSS</h3>
                </div>
              </div>

              <div className="p-havealook">
                <h1 style={{ color: "#4682B4" }}>Have a look</h1>
                <div className="p-links">
                  <a
                    target="_blank"
                    href="https://github.com/ASHarslan/unit-3-Project"
                  >
                    <img
                      style={{ width: "45px", marginLeft: "5px" }}
                      src="assets/Git.png"
                      className="icon"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://medium.com/@vipulsoniab17_40156/my-first-project-experience-7f12ff7dcd1a"
                  >
                    <img
                      style={{
                        width: "80px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "8px",
                      }}
                      src="Skills/Medium1.png"
                      className="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
