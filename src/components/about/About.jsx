import React from "react";
import "./about2.css";
import ME from "../../assets/me-about.png";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Resume from "../../assets/kaif_sindhi_resume.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container hideMobile">
        <div className="about_me">
          <img src={ME} alt="About Me" />
          <div className="about_me_content">
            <div className="about_icon">
              <AiOutlineMail size={"inherit"} />
            </div>
            <b>Email</b>
            <a
              href="mailto:mkaifsindhi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i>mkaifsindhi@gmail.com</i>
            </a>
            <br />
            <div className="about_icon">
              <AiFillLinkedin size={"inherit"} />
            </div>
            <b>LinkedIn</b>
            <a
              target="_blank"
              className="link"
              href="https://www.linkedin.com/in/kaifsindhi"
            >
              <i>www.linkedin.com/in/kaifsindhi</i>
            </a>
            <br />
            <div className="about_icon">
              <AiFillGithub size={"inherit"} />
            </div>
            <b>GitHub</b>
            <a
              target="_blank"
              className="link"
              href="https://github.com/kaifsindhi"
            >
              <i>www.github.com/kaifsindhi</i>
            </a>
          </div>
        </div>
        <div className="divider vertical" />
        <div className="about_content">
          <p>
            <b>Hello!</b> My name is Kaif.
            <br />
            <br />I am a software engineering senior at{" "}
            <a className="link" href="https://www.msoe.edu" target="_blank">
              <b>Milwaukee School of Engineering</b>
            </a>
            . I have on-hands experience in <b>full-stack web development</b>{" "}
            and in-class experience in <b>machine learning</b> and{" "}
            <b>realtime systems</b>. <br />
            <br />I currently work a part-time internship at{" "}
            <a className="link" href="https://circaworks.com" target="_blank">
              <b>Circa</b>
            </a>{" "}
            and am looking for entry-level full-time software engineering
            positions for when I graduate in May 2023.
            <br />
            <br />
            Some technical things that I am knowledgeable in are:
            <div className="skills">
              <ul className="frontend">
                <li>• Angular</li>
                <li>• React</li>
                <li>• Phoenix LiveView</li>
              </ul>
              <ul className="backend">
                <li>• C, C++</li>
                <li>• C#</li>
                <li>• Elixir</li>
                <li>• Python</li>
              </ul>
              <ul className="database">
                <li>• MongoDB</li>
                <li>• SQL</li>
                <li>• GraphQL</li>
              </ul>
              <ul className="database">
                <li>• Docker</li>
              </ul>
            </div>
            <br />
            Download my resume below to see how I've used these technologies!
            <br />
            <br />
            <a href={Resume} download className="btn btn-secondary">
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
