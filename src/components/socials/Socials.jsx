import { React } from "react";
import "./socials.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SocialsData } from "../SocialsData";

const Nav = () => {
  return (
    <div className="socials">
      {SocialsData.map(({ title, link, icon }) => {
        return (
          <a href={link}>
            <div className="socials__card">{icon}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
