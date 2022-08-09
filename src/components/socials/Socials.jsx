import { React } from "react";
import "./socials.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/kaifsindhi/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kaifsindhi" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default Nav;
