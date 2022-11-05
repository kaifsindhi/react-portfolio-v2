import { useState } from "react";
import { RiAngularjsFill, RiAngularjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiCsharp,
  SiMaterialui,
  SiElixir,
  SiGraphql,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { DiMongodb, DiSqllite, DiDjango } from "react-icons/di";
import { TbCSharp } from "react-icons/tb";
import { FaPhoenixFramework } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";

const PortfolioData = [
  {
    title: "Insight",
    dates: (
      <>
        <p>
          <i>Sept 2022 - Present</i>
        </p>
      </>
    ),
    summary: (
      <>
        <b>SUMMARY</b>
        <p>
          Insight is an in-progress senior design team project that I am
          currently working on. It is a configuration web application in which
          our product owner{" "}
          <a target="__blank" href="https://www.newworldnow.com/">
            New World Now
          </a>{" "}
          can deploy settings for its clients through one interface.
        </p>
      </>
    ),
    moreInfo: <p></p>,
    technologies: (
      <>
        <b>TECH STACK</b>
        <div className="technology">
          <a
            // href="https://material.angular.io/"
            target="__blank"
            className="technology_icon_holder"
          >
            {/* <div className="tooltip">Material UI</div> */}
            <SiMaterialui className="icon" />
            <SiMaterialui className="icon hover" />
          </a>
          <a
            // href="https://angular.io/"
            target="__blank"
            className="technology_icon_holder"
          >
            <RiAngularjsFill className="icon" />
            <RiAngularjsLine className="icon hover" />
          </a>
          <a
            // href="https://learn.microsoft.com/en-us/dotnet/csharp/"
            target="__blank"
            className="technology_icon_holder"
          >
            <TbCSharp className="icon" />
            <SiCsharp className="icon hover" />
          </a>
          <a
            // href="https://www.mongodb.com/"
            target="__blank"
            className="technology_icon_holder"
          >
            <DiMongodb className="icon" />
            <SiMongodb className="icon hover" />
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Board View",
    dates: (
      <>
        <p>
          <i>August 2022</i>
        </p>
      </>
    ),
    summary: (
      <>
        <b>SUMMARY</b>
        <p>
          Board View was an investigative full-stack personal project into
          remaking an existing web application Trello.
        </p>
      </>
    ),
    moreInfo: <p></p>,
    technologies: (
      <>
        <b>TECH STACK</b>
        <div className="technology">
          <a
            // href=""
            target="__blank"
            className="technology_icon_holder"
          >
            <RiReactjsFill className="icon" />
            <RiReactjsFill className="icon hover" />
          </a>
          <a
            // href=""
            target="__blank"
            className="technology_icon_holder"
          >
            <SiPython className="icon" />
            <SiPython className="icon hover" />
          </a>
          <a
            // href=""
            target="__blank"
            className="technology_icon_holder"
          >
            <DiDjango className="icon" />
            <DiDjango className="icon hover" />
          </a>
          <a
            // href=""
            target="__blank"
            className="technology_icon_holder"
          >
            <DiSqllite className="icon" />
            <DiSqllite className="icon hover" />
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Upcycle",
    dates: (
      <>
        <p>
          <i>Sept 2021 - May 2022</i>
        </p>
      </>
    ),
    summary: (
      <>
        <b>WHAT IS UPCYCLE?</b>
        <p>
          Upcycle is a social network in which schools in the Milwaukee area can
          offer, request, and transfer resources they may have. It was a
          year-long junior design team project.
        </p>
      </>
    ),
    moreInfo: (
      <>
        <b>WHAT WAS THE GOAL?</b>
        <p>
          Upcycle was a continuing project from a previous junior design team
          but did not have a social feature nor was a web app. In order to do
          migrate it to a web app, we used an open-source toolkit called
          Bonfire.
        </p>
        <br />
        <b>
          WHAT IS{" "}
          <a
            className="link"
            target="__blank"
            href="https://bonfirenetworks.org/"
          >
            BONFIRE
          </a>
          ?
        </b>
        <p>
          Bonfire is an open-source toolkit which comes ready with social
          features. It operates with sets of configurations called "flavours."
          You can create your own flavour in Bonfire to add additional
          implementation.
        </p>
        <br />
        <b>WHAT DID WE DO?</b>
        <p>
          We worked closely with the Bonfire developers and our product owners
          to understand the source code. Once we were familiar with it, we
          created our own flavour called "upcycle," which is viewable and
          runnable from Bonfire's repo{" "}
          <a
            target="__blank"
            href="https://github.com/bonfire-networks/bonfire-app/tree/main/flavours/upcycle"
          >
            here
          </a>
          .
        </p>
        <br />
        <b>WHAT WAS MY ROLE?</b>
        <p>
          My work on the project primarily consisted of doing frontend related
          tasks. That included creating, styling, and implementing UI mockups,
          dynamic page generation, and API request handling.
        </p>
      </>
    ),
    technologies: (
      <>
        <b>TECH STACK</b>
        <div className="technology">
          <a
            href="https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html"
            target="__blank"
            className="technology_icon_holder"
          >
            <FaPhoenixFramework className="icon" />
            <FaPhoenixFramework className="icon hover" />
          </a>
          <a
            // href="https://elixir-lang.org/"
            target="__blank"
            className="technology_icon_holder"
          >
            <SiElixir className="icon" />
            <SiElixir className="icon hover" />
          </a>
          <a
            // href="https://graphql.org/"
            target="__blank"
            className="technology_icon_holder"
          >
            <SiGraphql className="icon" />
            <SiGraphql className="icon hover" />
          </a>
          <a
            // href="https://www.docker.com/"
            target="__blank"
            className="technology_icon_holder"
          >
            <SiDocker className="icon" />
            <SiDocker className="icon hover" />
          </a>
        </div>
      </>
    ),
  },
];

export const Selection = () => {
  const [selection, setSelection] = useState(PortfolioData.at(0));

  return (
    <>
      <div className="portfolio_options_container">
        {PortfolioData.map((button) => {
          return (
            <div
              className={
                selection.title === button.title
                  ? "btn btn-secondary option selected"
                  : "btn btn-secondary option"
              }
              onClick={() => {
                setSelection(button);
              }}
            >
              {button.title}
            </div>
          );
        })}
      </div>
      <div className="container portfolio_description">
        <div>
          {selection.dates}
          <br />
          {selection.summary}
          {selection.technologies}
          <br />
          {selection.moreInfo}
          <br />
        </div>
      </div>
    </>
  );
};
