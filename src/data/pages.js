const projects = require('./projects.json')
const siteUrl = 'https://tony.aiello.io'
const pages = {
  '/': {
    title: 'Anthony Aiello | Software Development & Teaching',
    heading: 'Anthony Aiello',
    description: 'Software projects, community websites, and hands-on course design in computer science and management information systems by Anthony Aiello in Wisconsin.'
  },
  '/projects': {
    title: 'Software & Community Projects | Anthony Aiello', heading: 'Projects',
    description: 'Explore software prototypes, client websites, and early web design work with original screenshots and project archives.'
  },
  '/teaching': {
    title: 'Teaching & Course Design | Anthony Aiello', heading: 'Teaching & course design',
    description: 'Inside three of my courses: tracing Java programs, administering Linux systems, and translating a community partner’s request into testable requirements.'
  },
  '/about': {
    title: 'About Anthony Aiello | Developer & Educator', heading: 'About Anthony',
    description: 'From Milwaukee sound and lighting systems to software development and the computer science classroom. Read about my background and education.'
  },
  '/skills': {
    title: 'Technical Skills | Anthony Aiello', heading: 'Technical skills',
    description: 'The programming, systems, database, and design skills behind my software projects and teaching.'
  },
  '/contact': {
    title: 'Contact Anthony Aiello', heading: 'Contact',
    description: 'Get in touch about a software project, community partnership, or teaching collaboration.'
  }
}
for (const project of projects) {
  pages['/projects/' + project.slug] = {
    title: project.title + ' | Anthony Aiello',
    heading: project.title,
    description: project.intro,
    image: project.images[0].file
  }
}
const notFound = {
  title: 'Page not found | Anthony Aiello', heading: 'Page not found',
  description: 'Find a project or return to the portfolio homepage.'
}
function pageFor(path) {
  return pages[path.replace(/\/+$/, '') || '/'] || notFound
}
module.exports = { pages, pageFor, notFound, siteUrl }
