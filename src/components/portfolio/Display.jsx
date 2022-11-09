import { React, useState } from "react";
import Insight from "../../assets/insight.png";
import BoardView from "../../assets/board-view.png";
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
import { BiArrowBack } from "react-icons/bi";

const Projects = [
  {
    title: "Insight",
    dates: "Sept 2022 - Present",
    cover_image: Insight,
    brief_summary: (
      <p>
        Insight is a settings configuration web application in which our product
        owner{" "}
        <a target="__blank" href="https://www.newworldnow.com/">
          New World Now
        </a>{" "}
        can deploy settings for its clients through one user interface.
      </p>
    ),
    tabs: [{ title: "Summary" }, { title: "Process" }, { title: "Analysis" }],
  },
  {
    title: "Board View",
    dates: "August 2022",
    cover_image: BoardView,
    brief_summary: (
      <p>
        Board View was an investigative full-stack personal project into
        remaking the existing web application Trello.
      </p>
    ),

    tabs: [
      {
        title: "Summary",
      },
      { title: "Process" },
      { title: "Analysis" },
    ],
  },
  {
    title: "Upcycle",
    dates: "Sept 2021 - May 2022",
    cover_image: "TBD",
    brief_summary: (
      <p>
        Upcycle is a social network in which schools in the Milwaukee area can
        offer, request, and transfer resources that they may have.
      </p>
    ),

    tabs: [
      {
        title: "Description",
        content: (
          <>
            <b>What is Upcycle?</b>
            <p>
              Upcycle is a social network in which schools in the Milwaukee area
              can offer, request, and transfer resources they may have. It was a
              year-long junior design team project.
            </p>
            <br />
            <b>Tech Stack</b>
            <ul className="technology">
              <li>
                <FaPhoenixFramework className="icon" /> Phoenix LiveView
              </li>
              <li>
                <SiElixir className="icon" /> Elixir
              </li>
              <li>
                <SiGraphql className="icon" /> GraphQL
              </li>
              <li>
                <SiDocker className="icon" /> Docker
              </li>
            </ul>
            <br />
            <b>What was the goal?</b>
            <p>
              Upcycle was a continuing project from a previous junior design
              team but did not have a social feature nor was a web app. In order
              to do migrate it to a web app, we used an open-source toolkit
              called Bonfire.
            </p>
            <br />
            <b>
              What is{" "}
              <a
                className="link"
                target="__blank"
                href="https://bonfirenetworks.org/"
              >
                Bonfire
              </a>
              ?
            </b>
            <p>
              Bonfire is an open-source toolkit which comes ready with social
              features. It operates with sets of configurations called
              "flavours." You can create your own flavour in Bonfire to add
              additional implementation.
            </p>
            <br />
            <b>What did we do?</b>
            <p>
              We worked closely with the Bonfire developers and our product
              owners to understand the source code. Once we were familiar with
              it, we created our own flavour called "upcycle," which is viewable
              and runnable from Bonfire's repo{" "}
              <a
                target="__blank"
                href="https://github.com/bonfire-networks/bonfire-app/tree/main/flavours/upcycle"
              >
                here
              </a>
              .
            </p>
            <br />
            <b>What was my role?</b>
            <p>
              My work on the project primarily consisted of doing frontend
              related tasks. That included creating, styling, and implementing
              UI mockups, dynamic page generation, and API request handling.
            </p>
          </>
        ),
      },
      {
        title: "Process",
        content: (
          <>
            <b>How did we operate internally?</b>
            <p>
              Our team operated using the Agile Manifesto. As such, we had 9
              sprints, each one 3 weeks long. Every 3 weeks, we halted our
              development to give presentations of our progress to our peers.
            </p>
            <br />
            <b>Who were our product owners?</b>
            <p>
              Our product owners were LearnDeep MKE, Valueflows, and Bonfire.
              LearnDeep MKE and Valueflo.ws were our primary product owners and
              they operate in Milwaukee.
            </p>
            <br />
            <b>How did we work with our product owners?</b>
            <p>
              We met every week virtually to update Pete from LearnDeep MKE and
              Bob and Lynn from Valueflows on progress, clarify their
              expectations of our team, and determine requirements for the end
              product.
            </p>
            <br />
            <b>What about the Bonfire product owner?</b>
            <p>
              Mayel from Bonfire lived in New Zealand so our virtual meetings
              with him were very sparse due to timezone differences. However, we
              met with him nearly every academic quarter prior to our in-class
              presentations.
            </p>
          </>
        ),
      },
      {
        title: "Analysis",
        content: (
          <>
            <b>What went well?</b>
            <p>
              My team operated in three week sprints and did well at pacing
              ourselves - with features added incrementally but consistently. We
              also worked closely with our product owners to ensure that our
              development matched their expectations.
            </p>
            <br />
            <b>What went wrong?</b>
            <p>
              We had a loss of a team member at the end of sprint 6 and the
              gaining of a new team member at the start of week 7. This changing
              of hands caused us to lose some time getting the new member up to
              speed. In turn, we had to reduce our work capacity in following
              sprints in order to accommodate.
            </p>
            <br />
            <b>Lessons learned</b>
            <p>
              Working in an open-source project requires lots of back and forth
              with the developers of the open-source project. I also learned
              that spending time learning documentation of programming languages
              you are not familiar with is extremely beneficial even if it may
              slow you down initially.
            </p>
          </>
        ),
      },
    ],
  },
];

const Summary = () => {
  const [project, setProject] = useState(Projects.at(0));
  const [projectTab, setProjectTab] = useState(project.tabs.at(0));
  const [scope, setScope] = useState("summary");

  if (scope == "summary") {
    return (
      <div className="container portfolio_container center">
        {Projects.map((card, index) => {
          return (
            <>
              <div className="project_card">
                <div className="project_title">
                  <b>{card.title}</b>
                  <p>
                    <i>{card.dates}</i>
                  </p>
                </div>
                <div className="project_image_container">
                  <img src={card.cover_image} alt={card.title} />
                </div>
                <div className="project_content">
                  <b>SUMMARY</b>
                  {card.brief_summary}
                </div>

                <div className="project_cta">
                  <div
                    className="btn btn-secondary"
                    onClick={() => {
                      setScope("detail");
                      setProject(card);
                      setProjectTab(card.tabs.at(0));
                    }}
                  >
                    Learn More
                  </div>
                </div>
              </div>
              {index !== Projects.length - 1 ? (
                <div className="divider vertical" />
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="container portfolio_container detail_container">
        <div className="go_back" onClick={() => setScope("summary")}>
          <BiArrowBack />
          {" "}View my other projects
        </div>
        <div className="detail_title">
          <b>{project.title}</b>
        </div>
        <div className="detail_title_divider" />
        <div className="detail_subtitle">{project.dates}</div>
        <div className="detail_nav">
          {project.tabs.map((card, index) => {
            var position = "";
            var selected = "";

            if (index == 0) {
              position = "first";
            } else if (index == project.tabs.length - 1) {
              position = "last";
            } else {
              position = "mid";
            }

            if (projectTab.title == card.title) {
              selected = "selected";
            }

            return (
              <>
                <div
                  onClick={() => setProjectTab(card)}
                  className={"detail_nav_item " + selected + " " + position}
                >
                  {card.title}
                </div>
              </>
            );
          })}
          {/* <div className="detail_nav_item selected first">Summary</div>
          <div className="detail_nav_item mid">Process</div>
          <div className="detail_nav_item last">Analysis</div> */}
        </div>
        <div className="detail_divider" />
        <div className="detail_page">
          <div className="detail_content">{projectTab.content}</div>
        </div>
      </div>
    );
  }
};

export default Summary;
