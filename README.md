# Fleming AI

Personal laboratory notebook for practical AI, robotics, voice assistants, and intelligent homes. Static [Astro](https://astro.build) site for [fleming.ai](https://fleming.ai).

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build in `dist/` |
| `npm run preview` | Preview the production build |

## Content

- Articles: `src/content/articles/*.md`
- Projects: `src/content/projects/*.md`
- Topics: `src/consts.ts`

An article is Markdown plus frontmatter (`title`, `description`, `date`, `category`, `tags`, optional `hero` and `draft`). A project adds `status`, hardware and model fields, and a `log`. A log entry can point at an article with `article: <id>`.

## Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Node.js: 22

Add the custom domain `fleming.ai` in the Pages project (Custom domains). Apex domains are supported. SSL is included when the DNS zone is on Cloudflare.

`public/_redirects` keeps a few old WordPress paths pointed at the new pages. `public/_headers` caches hashed assets.

There is no PHP, MySQL, or WordPress server in this setup.
