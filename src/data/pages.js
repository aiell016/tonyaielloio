const projects = require('./projects.json')
const siteUrl = 'https://tony.aiello.io'
const pages = {
  '/': {
    title: 'Anthony Aiello | Software, Teaching & AI Research',
    heading: 'Welcome to Tony Aiello’s portfolio!',
    description: 'Explore Anthony Aiello’s AI learning-assistant research, faculty publications, CS and MIS classrooms, and software projects.'
  },
  '/projects': {
    title: 'Software & Community Projects | Anthony Aiello', heading: 'Projects',
    description: 'Explore 14 early software and web projects, from a Vue course planner to community websites, alongside later work in classroom design and AI research.'
  },
  '/teaching': {
    title: 'Teaching & Course Design | Anthony Aiello', heading: 'Teaching & course design',
    description: 'Explore my first Java lab, the Linux courses I co-teach, and my work with computer science, MIS, and graduate CIS students.'
  },
  '/research': {
    title: 'AI Chatbots, Learning Assistants & Publications | Anthony Aiello', heading: 'Research & publications',
    description: 'Anthony Aiello supervised the team of 10 behind the AIELA classroom chatbot study. Read the findings, meet the researchers, and explore his faculty publications.'
  },
  '/about': {
    title: 'About Anthony Aiello | Developer & Educator', heading: 'About Anthony',
    description: 'My path from sound engineering and enterprise IT to teaching computer science, advising graduate students, and studying how students learn.'
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
    image: project.images[0] && project.images[0].file
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
