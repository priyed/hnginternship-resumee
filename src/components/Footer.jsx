import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";
import hnglogo from "../assets/images/photo_2021-08-17_23-38-05.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p id="copyright">
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}{" "}
        Developed with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} className="footer-icon" />
        </span>{" "}
        by <span className="name">Priye Duye</span>{" "}
        <span>
          Powered by{" "}
          <a href="https://zuri.team">HNGi8 internship by the Zuri team</a>
        </span>
      </p>
      <img src={hnglogo} alt="HNG logo" />
    </div>
  );
};

export default Footer;
