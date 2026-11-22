# Anthony Aiello’s portfolio

A Vue portfolio of software projects, community websites, and course design in computer science and management information systems.

```sh
npm ci
npm run serve
```

Use `npm run lint` to check the source. `npm test` builds the production site and checks that every route has an entry document, that its JavaScript bundles exist, and that every project screenshot has a description and a corresponding image.

## Publish on Apache

`npm run build` writes the deployable site to `dist/`. Publish its contents, including `.htaccess`, at the document root for `tony.aiello.io`. The production output contains an HTML document for every project and main page. Open `/projects` and refresh a project detail page to check direct navigation after deployment.

## Update the portfolio

Edit project descriptions, links, and screenshot descriptions in `src/data/projects.json`. Put web-ready images in `public/media/`. Course examples are in `src/views/Teaching.vue`. Titles and descriptions for the main pages are in `src/data/pages.js`.
