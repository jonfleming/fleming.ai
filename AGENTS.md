## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Content

Fleming AI is a static notebook. Add Markdown; do not invent project history.

Articles live in `src/content/articles/`. One file per note:

```yaml
---
title: "Giving Reachy Mini Long-Term Memory"
description: "Using Hindsight and local AI to give Reachy Mini persistent memory."
date: 2026-10-01
category: "Robotics"
tags:
  - Reachy Mini
hero: "/images/example.jpg"
---
```

`category` should be one of `AI`, `Robotics`, `Voice AI`, `ESP32`, or `Home Assistant` unless a new topic is intentional. Set `draft: true` to hide a note from production.

Projects live in `src/content/projects/`. Update the `log` list when work happens. If that update has an article, set `article` to the article id (the filename without `.md`).

```yaml
log:
  - date: 2026-10-05
    summary: Added persistent memory
    article: giving-reachy-mini-long-term-memory
```

Topics are declared in `src/consts.ts`. Tags are free-form and become `/tags/<slug>/` automatically.

## Content

Fleming AI is a static notebook. Add Markdown; do not invent project history.

Articles live in `src/content/articles/`. One file per note:

```yaml
---
title: "Giving Reachy Mini Long-Term Memory"
description: "Using Hindsight and local AI to give Reachy Mini persistent memory."
date: 2026-10-01
category: "Robotics"
tags:
  - Reachy Mini
hero: "/images/example.jpg"
---
```

`category` should be one of `AI`, `Robotics`, `Voice AI`, `ESP32`, or `Home Assistant` unless a new topic is intentional. Set `draft: true` to hide a note from production.

Projects live in `src/content/projects/`. Update the `log` list when work happens. If that update has an article, set `article` to the article id (the filename without `.md`).

```yaml
log:
  - date: 2026-10-05
    summary: Added persistent memory
    article: giving-reachy-mini-long-term-memory
```

Topics are declared in `src/consts.ts`. Tags are free-form and become `/tags/<slug>/` automatically.
