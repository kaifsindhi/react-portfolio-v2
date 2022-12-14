import { useState, React } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav className="standard">
        <a
          id="first"
          href="#"
          className={activeNav === "#" ? "active" : ""}
          onClick={() => setActiveNav("#")}
        >
          <h5>Home</h5>
        </a>
        <a
          id="page"
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => setActiveNav("#about")}
        >
          <h5>About</h5>
        </a>
        <a
          id="page"
          href="#portfolio"
          className={activeNav === "#portfolio" ? "active" : ""}
          onClick={() => setActiveNav("#portfolio")}
        >
          <h5>Projects</h5>
        </a>
        <a
          id="last"
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => setActiveNav("#contact")}
        >
          <h5>Contact</h5>
        </a>
      </nav>

      {/* Mobile */}

      <nav className="mobile">
        <a
          href="#"
          className={activeNav === "#" ? "active" : ""}
          onClick={() => setActiveNav("#")}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={() => setActiveNav("#about")}
        >
          <AiOutlineUser />
        </a>
        {/* <a href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}>
        <BiBook />
      </a> */}
        <a
          href="#portfolio"
          className={activeNav === "#portfolio" ? "active" : ""}
          onClick={() => setActiveNav("#portfolio")}
        >
          <BiBook />
        </a>
        {/* <a href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}>
        <RiServiceLine />
      </a> */}
        <a
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
          onClick={() => setActiveNav("#contact")}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
