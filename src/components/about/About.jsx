import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about_center">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Me" />
              </div>
            </div>
          </div>
          <p>
            Hello<a>!</a> I am a software engineering senior at{" "}
            <a className="link" href="https://www.msoe.edu">
              Milwaukee School of Engineering
            </a>
            . I have on-hands experience in <a>full-stack web development</a>{" "}
            and in-class experience in <a>machine learning</a> and{" "}
            <a>realtime systems</a>.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
