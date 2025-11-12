export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_BIO_ITEMS_ON_HOMEPAGE: number;
  NUM_PUBLICATIONS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

// Table of contents heading type used by the TOC components
export type TocHeading = {
  text: string;
  slug: string;
  depth: number;
  // allow nested headings (h2 -> h3)
  sub: TocHeading[];
};
