import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/Handshake-icon.png"></img>
      </div>
      <div className="right">
        <div className="right-h1">
          <h1
            style={{
              margin: "0 auto",
              fontSize: "55px",
              textAlign: "left",
            }}
          >
            Contact
          </h1>
        </div>

        <div className="c-info">
          <div className="c-info-item">
            <img
              src="Skills/PhoneIcon.png"
              alt=""
              className="c-icon"
            ></img>
            <h4>+91 8875880066</h4>
          </div>
          <div className="c-info-item">
            <img
              src="assets/Mail.png"
              alt=""
              className="c-icon"
            ></img>
            <h4>vipulsoniab17@gmail.com</h4>
          </div>
          <div className="c-info-item">
            <img
              src="Skills/AddressIcon.png"
              alt=""
              className="c-icon"
            ></img>
            <h4>
              Soni Hostel Near Power House Jaipur Road Phagi, Jaipur,
              Rajasthan, Pin Code - 303005
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
