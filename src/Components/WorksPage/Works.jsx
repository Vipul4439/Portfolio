import React, { useState } from "react";

import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      title: "EaseMyTrip Clone",
      desc: "An online travel booking website to book ticket for flights, hotels, trains, bus etc",
      img: "assets/EaseMyTrip.png",
      url: "https://github.com/Rabia-Basari777/easeMyTrip-clone",
    },
    {
      id: "2",
      title: "Tatacliq Clone",
      desc: "An e-commerce website to shop for lifestyle products like clothes, shoes etc",
      img: "assets/TatacliqProject.jpeg",
      url: "https://github.com/ASHarslan/unit-3-Project",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlider(
          currentSlide < data.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <div className="sociallogo">
                      <img src="assets/Git.png" />
                      <a target="_blank" href={d.url}>
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      ></img>
    </div>
  );
}
