import { React } from "react";
import "./socials.css";
import { Data } from "../Data";

const Nav = () => {
  return (
    <div className="socials">
      {Data.map(({ title, link, icon }) => {
        return (
          <a href={link} target="_blank">
            <div className="socials__card">{icon}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
