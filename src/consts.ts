import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ricardo Chávez Torres",
  DESCRIPTION: "Ricardo Chávez Torres's personal page. I write about machine learning, research, and projects.",
  EMAIL: "chavez.torres.ricardo@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_BIO_ITEMS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HIGHLIGHTAUTHOR = "Ricardo C"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Ricardo Chávez Torres's personal page. I write about machine learning, research, and projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const BIO: Metadata = {
  TITLE: "Bio",
  DESCRIPTION: "Where I have worked and studied.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "X (formerly Twitter)",
  //   HREF: "https://twitter.com/boogerbuttcheek",
  // },
  {
    NAME: "github",
    HREF: "https://github.com/ricardo-chavez-torres",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ricardo-chavez-torres/",
  },
  // {
  //   NAME: "Website",
  //   HREF: "https://trevortylerlee.com",
  // },
];
