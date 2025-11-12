import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    authors: z.array(z.string()).optional(),
    links: z.record(z.string(), z.string()).optional(), // Object with label -> URL pairs
  }),
});

const bio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/bio" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    paperURL: z.string().optional(),
    authors: z.string().optional(),
    codeURL: z.string().optional(),
    webURL: z.string().optional(),
    dataURL: z.string().optional(),
    img: z.string().optional(),
    imgAlt: z.string().optional(),
    pub: z.string().optional(),
  }),
});

export const collections = { blog, bio, projects, publications };
