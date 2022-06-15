# Covalent Docs

The official docs site for Covalent. This is also referred to as the *Knowledge Base*.


## Contributing

Please read the contribution guidelines [here](CONTRIBUTING.md).

## Running docs site locally
Covalent uses a static site generator `hugo` for generating the website.

1. Install the `hugo` server for your machine: https://gohugo.io/getting-started/installing/

2. Checkout this repo

3. Install the dependencies with: `npm install`:
   ```
   npm install 
   ```

4. Run the `hugo` server:
   ```
   hugo server
   ``` 


## How it works

The markdown files in `content/` are generated as static HTML pages and rendered by hugo. By default, the docs will be run at `localhost:1313/docs`. 

### Creating Content

Some helpful things to know about creating content pages:

- Content for the docs site is added in `content/en/docs/`. You must have at least an `_index.md` inside this folder.
- The sidebar navigation tree and page paths are automatically generated from the file structure and naming in `content/en/docs/`
    - Each page starts with a *frontmatter* which outlies the metadata for the page and looks something like:
    ```
      ---
      title: Tutorials
      draft: false
      weight: 1
      ---
   ```

   - Note the frontmatter's used for tutorials, case studies and other detailed content (see below) is generally more involved.

   - The `title` value is what is used in the sidebar navigation tree. If a `title` is not specified, the first `h1` in the Markdown is used. 

- `index.md` files inside sub-folders of `content/en/docs/` will take the pathname of their parent directory (e.g. navigation tree menu label for content in `networks/_index.md` shows up under `networks`).


- For using images, drop the image in  `static/static/images/` folder.


## Preview your branch
Everytime you commit to a branch, we deploy a fully built website for preview. Check the comments on your pull request for the live URL.


