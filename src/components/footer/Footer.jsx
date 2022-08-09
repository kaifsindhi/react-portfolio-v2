import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      {/* <a href="# " className="footer__logo">
        YOUR LOGO
      </a> */}
      {/* 
      <ul className="permalinks">
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> */}

      {/* <div className="footer__socials">
        <a href="Https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="Https://instagram.com">
          <FiInstagram />
        </a>
        <a href="Https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div> */}

      <a href="https://github.com/kaifsindhi/react-portfolio-v2">
        <div className="footer__copyright">
          <small>Inspired by Brittany Chiang and Ernest Achiever</small>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
