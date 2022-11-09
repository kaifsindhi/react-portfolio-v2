import React from "react";
import "./contact2.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { useRef as UseRef } from "react";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = UseRef("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_900n40q",
        "template_sg7jscc",
        form.current,
        "hyw7o8n3qVkfOw0Bk"
      )
      .then(
        (result) => {
          console.log("Email sent.");
        },
        (error) => {
          console.log("Email did not send.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container hideMobile">
        <div className="contact_card left">
          <div className="card">
            <div className="about_icon">
              <AiOutlineMail size={"inherit"} />
            </div>
            <b>Email</b>
            <a
              href="mailto:mkaifsindhi@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <i>mkaifsindhi@gmail.com</i>
            </a>
          </div>
          <div className="card">
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
          </div>
        </div>
        <div className="horizontal_divider" />
        <div className="contact_card right">
          <b>Send me a message</b>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />{" "}
            <input
              type="email"
              name="email"
              placeholder="What is your email?"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="What do you want to message me?"
              required
            ></textarea>
            <br />
            <button type="submit" className="btn btn-secondary alt">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
