import {
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillGithub,
} from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

export const Data = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/kaifsindhi/",
    icon: (
      <>
        <AiFillLinkedin className="about__icon" />
        <AiOutlineLinkedin className="about__icon hover" />
      </>
    ),
  },
  {
    title: "GitHub",
    link: "https://github.com/kaifsindhi",
    icon: (
      <>
        <AiFillGithub className="about__icon" />
        <VscGithub className="about__icon hover" />
      </>
    ),
  },
];
