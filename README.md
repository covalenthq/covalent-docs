# Covalent Docs

The official docs website for Covalent.

## Setting up for development

We use [Cloudflare's documentation engine](https://developers.cloudflare.com/docs-engine/) for this.

1. Install the documentation engine
   - `npm run docs-bootstrap`
2. Build the site
   - `./s/docs-build`
3. The site is served using `gatsby`, the site is now available under `http://localhost:9000`.

## Preview your branch

Everytime you commit to a branch, we deploy a fully built website for preview. Check the comments on your pull request for the live URL.

## Rebuilding documentation

We use two different packages to build our documentation:

- The [Covalent API reference](https://www.covalenthq.com/docs/api/) automatically generated from the backend's OpenAPI specification.
- The high-level [Knowledge Base](https://www.covalenthq.com/docs/) which includes guides, tutorials and how-tos.

## API Reference

All of the interactive features are built using Java's `@OpenAPI` annotations.

## Deployment

Simply pushing to the `master` branch will deploy to the live site. Therefore, our recommended workflow is to open a pull request and ask for someone else on the team to review + merge your pull request.
