---
title: Hello Blog
subtitle: Testing blog post, please ignore. Explains how populating this blog works.
date: 2025-08-26T00:00:00-05:00
tags:
  - markdown
  - angular
  - obsidian
  - node
---

# Hello Blog :wave:

***
:robot: Testing blog please ignore.

Verifying integration with an Obsidian vault inside the `public` folder of this website's repo.

This should allow me to write posts using Obsidian, save as a static file in this website's repo, integrating it into the git workflow, then serving it in Chittyblog using `ngx-markdown`.

**Update 08/26/2026**

I figured out how to use the `gray-matter` package to allow for my node script to read front-matter content. The "How it works" section has been updated with this info!

**Update 08/27/2026**

Fixed several loading issues to make page feel more responsive.

- Instead of generating a `manifest.json` file, I now generate a `.ts` within the `shared` directory with a single const that can easily be imported into consuming components at build time. This eliminates the need to leverage `HttpClient` for fetching the manifest.json
- The route within `chittylog.routes.ts` are no longer lazy loaded. This caused a second delay when opening each article because it loaded the `.js` in at run-time. Chose to take the minor optimization hit on initial load, because I'd expect users to read at least one article if they're hitting the base article page.

Instructions will be updated with this new flow!

## How it works :page_facing_up:

***

1. Create a .md file under the `public/blog` directory.
2. Set up front-matter data in `.md` file for parsing by [gray-matter](https://github.com/jonschlinkert/gray-matter)

    ```yaml
    ---
    title: My Blog
    subtitle: My first blog post
    date: 2024-12-25
    tags:
      - tech
      - pizza
    ---
    ```

1. (Optional) If you want to use **Obsidian**, open `public/blog` as a vault to generate a `.obsidian` folder. This file is ignored in `.gitignore` by default.
1. Once created, run:

    ```bash
    npm run blog:update-manifest
    ```

1. This creates a `blog-manifest.ts` file in the `src/app/shared/data` directory with a list of navigable `.md` files for display. This command is setup with `prebuild` and `prebuild:prod` to ensure it always stays up to date.

    ```typescript
    export const BLOG_MANIFEST = {
      "files": [
        {
          "fileName": "hello-blog.md",
          "title": "Hello Blog",
          "subtitle": "Testing blog post, please ignore. Explains how populating this blog works.",
          "date": "2025-08-26T05:00:00.000Z",
          "tags": [
            "markdown",
            "angular",
            "obsidian",
            "node"
          ]
        }
      ]
    } as const;
    ```

1. Navigate to `/chittyblog`
2. A service in the `ChittylogContainerComponent` will import the `BLOG-MANIFEST` and generate `p-card` elements for each of the Markdown files. It will display the title, subtitle, date posted, and other content all in the card!
1. Click one of the links in the list to open the full article.
1. :white_check_mark: Success!
