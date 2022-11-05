import React from "react";
import "./portfolio.css";
import { Selection } from "./PortfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Things I've Worked On</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container hideMobile">
        <Selection />
      </div>
    </section>
  );
};

export default Portfolio;
