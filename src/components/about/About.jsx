import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { SocialsData } from "./SocialsData";

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
            <a>realtime systems</a>. I currently work an internship as{" "}
            <a className="link" href="">
              Circa
            </a>{" "}
            and am looking for entry-level full-time software engineering
            positions for when I graduate in May 2023.
          </p>
          <div className="about__cards">
            {SocialsData.map(({ title, link, icon }) => {
              return (
                <a href={link}>
                  <div className="about__card">
                    {icon}
                    <small>{title}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
