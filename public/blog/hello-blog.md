# Hello Blog :wave:

***
:robot: Testing blog please ignore.

Verifying integration with an Obsidian vault inside the `public` folder of this website's repo.

This should allow me to write posts using Obsidian, save as a static file in this website's repo, integrating it into the git workflow, then serving it in Chittyblog using `ngx-markdown`.

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

1. This creates a `manifest.json` file in the `public/blog` directory with a list of navigable `.md` files for display. This command also gets ran on the `gh-pages.yml` deploy script for production builds.

    ```json
    {
      "files": [
        "blog/hello-blog.md"
      ]
    }
    ```

1. Navigate to `/chittyblog`
2. A service in the `ChittylogContainerComponent` will iterate through the `manifest.json` filename list, generating links for each of the markdown files.
1. Click one of the links in the list to open the Markdown file.
1. :white_check_mark: Success!
