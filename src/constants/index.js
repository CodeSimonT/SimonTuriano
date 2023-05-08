export const Navlinks = [
  {
    id: 1,
    number: "01.",
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    number: "02.",
    title: "Projects",
    link: "#project",
  },
  {
    id: 3,
    number: "03.",
    title: "Contact",
    link: "#contact",
  },
];

import {
  facebookD,
  githubD,
  instagramD,
  linkedinD,
  twitterD,
} from "../assets/index";

export const AboutLinks = [
  {
    title: [
      {
        item: "javascript (ES6+)",
      },
      {
        item: "tailwind css",
      },
      {
        item: "typescript",
      },
    ],
  },
  {
    title: [
      {
        item: "react js",
      },
      {
        item: "vue js",
      },
      {
        item: "node js",
      },
    ],
  },
];
import { hoobank, signup, bootcamp } from "../assets/index.js";
import { send } from "../assets/index";
export const FeaturedProjects = [
  {
    id: "1",
    img: bootcamp,
    title: "FrontCode",
    text: "FrontCode is a learning platform or online bootcamp where you can start your journy to be a front-end developer, they will teach you HTML,CSS, Javascript, React js, Vue js, and manny more!",
    tech: [
      {
        item: "Html",
      },
      {
        item: "CSS",
      },
      {
        item: "Bootstrap",
      },
      {
        item: "Javascript",
      },
    ],
    link: [
      {
        item: send,
      },
      {
        item: githubD,
      },
    ],
  },
  {
    id: "2",
    img: hoobank,
    title: "Hoobank",
    text: "Hoobank is a modern design website, built to provide easy, fast, and reliable transaction at anytime.",
    tech: [
      {
        item: "React js",
      },
      {
        item: "Tailwind css",
      },
    ],
    link: [
      {
        item: send,
      },
      {
        item: githubD,
      },
    ],
  },
  {
    id: "3",
    img: signup,
    title: "CMS",
    text: "The frist wireless carwash company in naga city, modern log-in and sign-up design, using a REST API, authentication, and secured personal information",
    tech: [
      {
        item: "React js",
      },
      {
        item: "Tailwind css",
      },
      {
        item: "Node js",
      },
      {
        item: "Express",
      },
      {
        item: "MonggoDB",
      },
    ],
    link: [
      {
        item: send,
      },
      {
        item: githubD,
      },
    ],
  },
];

export const FooterLinks = [
  {
    id: "2",
    image: linkedinD,
  },
  {
    id: "3",
    image: twitterD,
  },
  {
    id: "1",
    image: facebookD,
  },
  {
    id: "4",
    image: instagramD,
  },
  {
    id: "5",
    image: githubD,
  },
];
