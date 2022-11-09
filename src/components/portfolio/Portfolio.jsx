import { React, useState } from "react";
import "./portfolio2.css";
import { Selection } from "./PortfolioData";
import Display from "./Display";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Things I've Worked On</h5>
      <h2>Projects</h2>
      {/* <div className="container portfolio_container"> */}
      <Display />
      {/* </div> */}
      {/* <div className="container portfolio__container hideMobile">
        <Selection />
      </div> */}
    </section>
  );
};

export default Portfolio;
