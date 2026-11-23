# Anthony Aiello’s portfolio

A static HTML and CSS portfolio of software projects, community websites, teaching and research. Pages, project filters and screenshot links work with JavaScript disabled. A small script collapses the navigation on narrow screens.

```sh
npm ci
npm run serve
```

Open `http://127.0.0.1:8080/` for a local preview. Run `npm run lint` for JavaScript syntax checks and `npm test` to build the site and check the actual HTML, project destinations, internal links, page metadata, sitemap and bibliography.

## GitHub Actions and IONOS

The **Portfolio CI and deployment** workflow runs `npm ci`, `npm run lint`, and `npm test` on Node 24. It checks pushes to `portfolio-teaching-refresh` and `master`, and pull requests targeting `master`. A successful build on `master` publishes that same build to <https://tony.aiello.io> over SFTP.

### One-time hosting setup

1. In IONOS, check which webspace directory serves `tony.aiello.io`. Under **Hosting → SFTP & SSH → Manage**, create an SFTP user and assign that directory as its home. Copy the server name and username shown by IONOS. [IONOS account setup](https://www.ionos.com/help/hosting/setting-up-and-managing-ftp-access/creating-an-sftp/ssh-account/)
2. In GitHub, open **Settings → Environments → SFTPIonosTonyAielloio**. Under **Environment secrets**, use **Add environment secret** for each value below. GitHub makes these credentials available to the job that publishes the site. [Portfolio environments](https://github.com/aiell016/tonyaielloio/settings/environments)

| Secret | Value |
| --- | --- |
| `IONOS_SFTP_HOST` | The IONOS SFTP server name shown under connection details |
| `IONOS_SFTP_USER` | The SFTP username assigned to the portfolio directory |
| `IONOS_SFTP_PASSWORD` | The password for that SFTP user |

3. Merge the portfolio change into `master`, or open [the workflow](https://github.com/aiell016/tonyaielloio/actions/workflows/portfolio.yml), select **Run workflow**, and choose **master**. You can use the same button after saving or updating credentials.

The upload verifies the IONOS host key and confirms the SFTP directory serves the portfolio by fetching a temporary file from the public domain. It uploads assets before HTML, keeps existing files outside the build, and checks the published home, research, teaching, project archive and Project Volga pages, sitemap and robots.txt against the build. To roll back a content change, revert its commit on `master` and let that build deploy.

## Manual publishing on Apache

`npm run build` writes the deployable site to `dist/`. Publish its contents, including `.htaccess`, at the document root for `tony.aiello.io`. The production output contains an HTML document for every project and main page. Open `/projects` and refresh a project detail page to check direct navigation after deployment.

## Update the portfolio

Edit project descriptions, links, and screenshot descriptions in `src/data/projects.json`. Put web-ready images in `public/media/`. The HTML templates in `src/templates/` use EJS at build time. Edit course examples in `src/templates/teaching.html` and page titles and descriptions in `src/data/pages.js`. For projects with multiple website destinations, set each screenshot’s `site` to the matching link’s `id`. The build generates canonical URLs, structured data, `sitemap.xml` and `robots.txt`.

The faculty bibliography, course list, and public contact address are in `src/data/publications.json`, `src/data/courses.json`, and `src/data/profile.js`.
