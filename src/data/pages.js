const projects = require('./projects.json')
const siteUrl = 'https://tony.aiello.io'
const pages = {
  '/': {
    title: 'Anthony Aiello | Software, Teaching & AI Research',
    heading: 'Welcome to Tony Aiello’s portfolio!',
    description: 'Explore Anthony Aiello’s AI learning-assistant research, faculty publications, CS and MIS classrooms, and software projects in Wisconsin.'
  },
  '/projects': {
    title: 'Software & Community Projects | Anthony Aiello', heading: 'Projects',
    description: 'Explore 14 early software and web projects, from a Vue course planner to community websites, alongside later work in classroom design and AI research.'
  },
  '/teaching': {
    title: 'Teaching & Course Design | Anthony Aiello', heading: 'Teaching & course design',
    description: 'Explore Java labs, the Linux courses I co-teach with Matt, our computer science lab manager, and my work with CS, MIS and graduate CIS students at UW–Parkside.'
  },
  '/research': {
    title: 'AI Chatbots & Faculty Publications | Anthony Aiello', heading: 'Research & publications',
    description: 'Meet the 11 authors of the AIELA chatbot study, learn how Anthony Aiello managed the independent study, and read the three IEEE papers he coauthored.'
  },
  '/about': {
    title: 'About Anthony Aiello | Developer & Educator', heading: 'About Anthony',
    description: 'From Milwaukee sound engineering to enterprise IT, two Parkside degrees, graduate advising, campus service and teaching.',
    image: 'anthony-aiello-faculty.webp'
  },
  '/skills': {
    title: 'Technical Skills | Anthony Aiello', heading: 'Technical skills',
    description: 'See how I use Unix and Linux administration, secure software development, database design and classroom research across my projects and teaching.'
  },
  '/contact': {
    title: 'Contact Anthony Aiello', heading: 'Contact',
    description: 'Contact Anthony Aiello about research collaborations, MS CIS advising, internships, community projects and software development.'
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
