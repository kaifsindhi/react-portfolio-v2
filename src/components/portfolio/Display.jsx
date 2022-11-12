import { React, useState } from "react";
import {
  SiElixir,
  SiGraphql,
  SiDocker,
  SiAngular,
  SiMongodb,
  SiMaterialui,
} from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { TbCSharp } from "react-icons/tb";

import { Images } from "./Images";

const Summary = () => {
  const [scope, setScope] = useState("summary");

  const Projects = [
    {
      title: "Insight",
      dates: "Sept 2022 - Present",
      cover_image: Images.insight,
      brief_summary: (
        <p>
          Insight is a settings configuration web application in which our
          product owner{" "}
          <a target="__blank" href="https://www.newworldnow.com/">
            New World Now
          </a>{" "}
          can deploy settings for its clients through one user interface.
        </p>
      ),
      interactive_demo: {
        slides: [
          {
            image: require("../../assets/upcycle/1.JPG"),
            caption:
              "After checking out the GitHub repository, the flavour must be changed to upcycle and some pre-config has to be completed via the commands above (in the red squares).",
          },
        ],
      },
      tabs: [
        {
          title: "Summary",
          content: (
            <>
              <b>What is Insight?</b>
              <p>
                Insight is a settings configuration web application in which our
                product owner{" "}
                <a target="__blank" href="https://www.newworldnow.com/">
                  New World Now
                </a>{" "}
                can deploy settings for its clients through one user interface.
                It is an in-progress year long senior design team project.
              </p>
              <br />
              <p>
                Because it is still an in-progress project, there may be content
                missing but stay tuned!
              </p>
              <br />
              <p>
                <div
                  className="btn btn-secondary"
                  onClick={() => setScope("interactive")}
                >
                  View Interactive Slideshow
                </div>
              </p>
              <br />
              <b>Tech Stack</b>
              <ul className="technology">
                <li>
                  <SiMaterialui className="icon" /> Material UI
                </li>
                <li>
                  <SiAngular className="icon" /> Angular
                </li>
                <li>
                  <TbCSharp className="icon" /> C#
                </li>
                <li>
                  <SiMongodb className="icon" /> MongoDB
                </li>
              </ul>
              <br />
              <b>What is the goal?</b>
              <p>
                Currently, New World support staff must manually write SQL to
                update changes to their individual services to their clients.
                Our team aims to solve this problem by creating a one-stop web
                configuration web application.
              </p>
              <br />
              <b>What is my role?</b>
              <p>
                I am the DevOps for the team. So, I created the development
                build and have set up the frontend integration testing so far.
              </p>
            </>
          ),
        },
        {
          title: "Process",
          content: (
            <>
              <b>My Team</b>
              <p>
                We are a team of five software engineering seniors. We all have
                our own different skillsets and have divided labor for the
                project into areas we have interest in - i.e. frontend, backend,
                etc.
              </p>
              <br />
              <b>What is the project - so far?</b>
              <p>
                For our first term, we started with a one week sprint zero in
                which we determined what technologies to use. Then, we operated
                in 2 weeks sprints to incrementally create the project.
              </p>
              <br />
              <p>
                So far, we have a fleshed out configurations page frontend,
                frontend testing, and the backend architecture setup.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "Board View",
      dates: "August 2022",
      cover_image: Images.boardView,
      brief_summary: (
        <p>
          Board View was an investigative full-stack personal project into
          remaking the existing web application Trello.
        </p>
      ),

      tabs: [
        {
          title: "PAGE 1",
        },
        { title: "PAGE 2" },
      ],
    },
    {
      title: "Upcycle",
      dates: "Sept 2021 - May 2022",
      cover_image: Images.upcycle,
      brief_summary: (
        <p>
          Upcycle is a social network in which schools in the Milwaukee area can
          offer, request, and transfer resources that they may have.
        </p>
      ),
      interactive_demo: {
        slides: [
          {
            image: require("../../assets/upcycle/1.JPG"),
            caption:
              "After checking out the GitHub repository, the flavour must be changed to upcycle and some pre-config has to be completed via the commands above (in the red squares).",
          },
          {
            image: require("../../assets/upcycle/2.JPG"),
            caption:
              "Then, we must run a command to create the frontend locally. If you are running this command for the first time, it may take a while since the program is creating both the backend and frontend..",
          },
          {
            image: require("../../assets/upcycle/3.JPG"),
            caption:
              "After the previous has completed, it will indicate what port the program is being ran on locally. In this case, it's localhost:4000. We'll see the landing page of Bonfire.",
          },
          {
            image: require("../../assets/upcycle/4.JPG"),
            caption:
              "After we click Login, we will be prompted to either sign up or log in. In this case, I am creating a new user with the above email and then pressing sign up.",
          },
          {
            image: require("../../assets/upcycle/5.JPG"),
            caption:
              "After clicking sign up, the program does some checks to see if inputs were valid and if the email is not already registered. If all checks pass, then this screen shows up.",
          },
          {
            image: require("../../assets/upcycle/6.JPG"),
            caption:
              "Like the previous page indicated, you must verify your email in order to continue. Since we are running this locally, we must get this from the terminal. This is squared in red above.",
          },
          {
            image: require("../../assets/upcycle/7.JPG"),
            caption:
              "After we copy and paste the link from the previous slide, we can now create a user.",
          },
          {
            image: require("../../assets/upcycle/8.JPG"),
            caption: "These are the inputs I gave when creating my user.",
          },
          {
            image: require("../../assets/upcycle/cover.JPG"),
            caption:
              "Now we are on the actual landing page of Upcycle. From here, we can navigate through the various tabs to learn about the website. Check it out for yourself by running it locally!",
          },
        ],
      },
      tabs: [
        {
          title: "Description",
          content: (
            <>
              <b>What is Upcycle?</b>
              <p>
                Upcycle is a social network in which schools in the Milwaukee
                area can offer, request, and transfer resources they may have.
                It was a year-long junior design team project.
              </p>
              <br />
              <p>
                <div
                  className="btn btn-secondary"
                  onClick={() => setScope("interactive")}
                >
                  View Interactive Slideshow
                </div>
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
                team but did not have a social feature nor was a web app. In
                order to do migrate it to a web app, we used an open-source
                toolkit called Bonfire.
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
                it, we created our own flavour called "upcycle," which is
                viewable and runnable from Bonfire's repo{" "}
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
                LearnDeep MKE and Valueflo.ws were our primary product owners
                and they operate in Milwaukee.
              </p>
              <br />
              <b>How did we work with our product owners?</b>
              <p>
                We met every week virtually to update Pete from LearnDeep MKE
                and Bob and Lynn from Valueflows on progress, clarify their
                expectations of our team, and determine requirements for the end
                product.
              </p>
              <br />
              <b>What about the Bonfire product owner?</b>
              <p>
                Mayel from Bonfire lived in New Zealand so our virtual meetings
                with him were very sparse due to timezone differences. However,
                we met with him nearly every academic quarter prior to our
                in-class presentations.
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
                <p>
                  My team operated in three week sprints and did well at pacing
                  ourselves - with features added incrementally but
                  consistently.
                </p>
                <br />
                <p>
                  We also worked closely with our product owners to ensure that
                  our development matched their expectations.
                </p>
              </p>
              <br />
              <b>What went wrong?</b>
              <p>
                We had a loss of a team member at the end of sprint 6 and the
                gaining of a new team member at the start of week 7. This
                changing of hands caused us to lose some time getting the new
                member up to speed.
              </p>
              <br />
              <b>Lessons learned</b>
              <p>
                <p>
                  Working in an open-source project requires lots of back and
                  forth with the developers of the open-source project.
                </p>
                <br />
                <p>
                  I also learned that spending time learning documentation of
                  programming languages you are not familiar with is extremely
                  beneficial even if it may slow you down initially.
                </p>
              </p>
            </>
          ),
        },
      ],
    },
  ];

  const [project, setProject] = useState(Projects.at(0));
  const [projectTab, setProjectTab] = useState(project.tabs.at(0));
  const [slideIndex, setSlideIndex] = useState(0);

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
                      setSlideIndex(0);
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
  } else if (scope == "detail") {
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
        </div>
        <div className="detail_divider" />
        <div className="detail_page">
          <div className="detail_content">{projectTab.content}</div>
        </div>
      </div>
    );
  } else if (scope == "interactive") {
    return (
      <div className="container portfolio_container detail_container interactive_container">
        <div className="go_back" onClick={() => setScope("detail")}>
          <BiArrowBack />
          {" "} Return to {project.title}
        </div>
        <div className="detail_page">
          <div className="detail_content slide">
            <div className="image_container">
              <img
                src={project.interactive_demo.slides.at(slideIndex).image}
              ></img>
            </div>
          </div>
        </div>

        <div className="caption">
          {slideIndex === 0 ? (
            <></>
          ) : (
            <div
              className="socials__card"
              onClick={() => {
                setSlideIndex(slideIndex - 1);
              }}
            >
              <BsFillArrowLeftCircleFill size={"75%"} color={"inherit"} />
            </div>
          )}

          <div className="caption_text">
            {project.interactive_demo.slides.at(slideIndex).caption}
          </div>

          {slideIndex === project.interactive_demo.slides.length - 1 ? (
            <></>
          ) : (
            <div
              className="socials__card "
              onClick={() => {
                setSlideIndex(slideIndex + 1);
              }}
            >
              <BsFillArrowRightCircleFill size={"75%"} color={"inherit"} />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Summary;
