import { React } from "react";
import "./socials.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Data } from "../Data";

const Nav = () => {
  return (
    <div className="socials">
      {Data.map(({ title, link, icon }) => {
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
