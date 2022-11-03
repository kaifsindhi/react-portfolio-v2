import React from "react";
import "./portfolio.css";
import { PortfolioData } from "./PortfolioData";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Things I've Worked On</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          PortfolioData.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                   <img src={image} alt={title} />
                </div>
                <h3>
                  {title}
                </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  {/* <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
