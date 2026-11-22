# Anthony Aiello’s portfolio

A Vue portfolio of software projects, community websites, and course design in computer science and management information systems.

```sh
npm ci
npm run serve
```

Use `npm run lint` to check the source. `npm test` builds the production site and checks that every route has an entry document, that its JavaScript bundles exist, and that every project screenshot has a description and a corresponding image.

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

The upload verifies the IONOS host key and confirms the SFTP directory serves the portfolio by fetching a temporary file from the public domain. It uploads assets before HTML, keeps existing files outside the build, and checks the published home, research, teaching, and Project Volga pages against the build. To roll back a content change, revert its commit on `master` and let that build deploy.

## Manual publishing on Apache

`npm run build` writes the deployable site to `dist/`. Publish its contents, including `.htaccess`, at the document root for `tony.aiello.io`. The production output contains an HTML document for every project and main page. Open `/projects` and refresh a project detail page to check direct navigation after deployment.

## Update the portfolio

Edit project descriptions, links, and screenshot descriptions in `src/data/projects.json`. Put web-ready images in `public/media/`. Course examples are in `src/views/Teaching.vue`. Titles and descriptions for the main pages are in `src/data/pages.js`.

The faculty bibliography, course list, and permanent LinkedIn address are in `src/data/publications.json`, `src/data/courses.json`, and `src/data/profile.js`.
