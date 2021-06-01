# Covalent Docs

The official docs site for Covalent. This is also referred to as the *Knowledge Base*.


## Contributing

Please read the contribution guidelines [here](CONTRIBUTING.md).


## Running docs site locally
Covalent uses the [Cloudflare documentation engine](https://developers.cloudflare.com/docs-engine/) for the docs site.

1. Install the `hugo` server for your machine: https://gohugo.io/getting-started/installing/

2. Checkout this repo

3. Install the dependencies with: `npm install`. If you run into an error due to legacy dependencies, install using the flag: 
   ```
   npm install --legacy-peer-deps
   ```

4. Install the Cloudflare documentation engine with: `npm run docs-bootstrap`. If you run into an error due to legacy dependencies, run using the flag: 
   ```
   npm run docs-bootstrap --legacy-peer-deps
   ```

   **Note: You may get an error message suggesting you to install `gatsby`. You do not need to do this.**

5. Build the docs site with:
   ```
   ./s/docs-build
   ```

6. Create an empty `config.yaml` in your project root folder. This is required in order to run the `hugo` server. 

7. Run the `hugo` server which should render the contents from `public/`. If this does not happen by default, direct `hugo` to the `public` folder with the following:
   ```
   hugo server --contentDir ./public
   ``` 

&nbsp;
## How it works
For a comprehensive overview of how the Cloudflare docs engine works, see [this excellent resource.](https://developers.cloudflare.com/docs-engine/how-it-works)

The content is generated as static HTML pages in `public/` and then rendered. 

&nbsp;
### Creating Content
For a comprehensive overview on *creating content* using the Cloudflare docs engine, see [this excellent resource](https://developers.cloudflare.com/docs-engine/reference/pages)

Some helpful things to know about creating content pages:

- Content for the docs site is added in `docs/content/`. You must have at least an `index.md` inside this folder.
- The sidebar navigation tree and page paths are automatically generated from the file structure and naming in `docs/content/`
    - Each page starts with a *frontmatter* which outlies the metadata for the page and looks something like:
    ```
      ---
      title: Tutorials
      hidden: false
      order: 1
      ---
   ```

   - Note the frontmatter's used for tutorials, case studies and other detailed content (see below) is generally more involved.

   - The `title` value is what is used in the sidebar navigation tree. If a `title` is not specified, the first `h1` in the Markdown is used. 

- `index.md` files inside sub-folders of `docs/content/` will take the pathname of their parent directory (e.g. navigation tree menu label for content in `networks/index.md` shows up under `networks`).

- You can include custom MDX components in `docs/components/` as `.js` files and import them into `.md` files. See the [Topic Calculator markdown](docs/content/tools/topic-calculator.md) for an example.

- For using images, create a local `images/` folder inside your content sub-folder and import them accordingly.

- There is a built-in MDX components for embedding YouTube clips where you simply just need to use the clip ID like this example:
   ```
   <YouTube id="qhibXxKANWE"/>
   ```

&nbsp;
### Learning Series Content (Tutorials, How-to Guides, Case Studies)
Use [this template](/docs/content/learn/learning_series_template.md) when creating any new learning series content such as a [Tutorial](/docs/content/learn/tutorials), [How-to Guide](/docs/content/learn/guides) or [Case Study](/docs/content/learn/casestudies). Please follow these *fontmatter* guidelines:

  - `type`:  Use either `Article` or `Video` or `Code` if it's entirely an embedded code template. 

  - `featuredImage`: Create a content banner using the Covalent Figma templates. Ask a Covalent admin for this info. 

  - `tags`: Keep these high-level and reusable so that they can effectively filter content but not so specific that they only apply to a single article. 

Each learning series content should be treated as a 'stand-alone' page. 


&nbsp;
## Preview your branch

Everytime you commit to a branch, we deploy a fully built website for preview. Check the comments on your pull request for the live URL.

&nbsp;
## Rebuilding documentation

We use two different packages to build our documentation:

- The [Covalent API reference](https://www.covalenthq.com/docs/api/) automatically generated from the backend's OpenAPI specification.

- The high-level [Knowledge Base](https://www.covalenthq.com/docs/) which includes tutorials, how-to guides and case studies.

&nbsp;
## API Reference

All of the [Covalent API](https://www.covalenthq.com/docs/api/) interactive features are built using Java's `@OpenAPI` annotations.

&nbsp;

## Deployment

Simply pushing to the `master` branch will deploy to the live site. Therefore, our recommended workflow is to deploy to the `development` branch and open a pull request.
