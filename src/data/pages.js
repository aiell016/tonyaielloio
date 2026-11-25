const projects = require('./projects.json')

const siteUrl = 'https://tony.aiello.io'
const navigation = [
  ['/', 'Home'], ['/projects/', 'Projects'], ['/skills/', 'Skills'],
  ['/about/', 'About'], ['/contact/', 'Contact']
]
const categories = [
  { path: '/projects/', label: 'All projects' },
  { path: '/projects/category/applications/', label: 'Applications', heading: 'Software applications',
    description: 'Explore Anthony Aiello’s Project Volga bookstore and On the Radar course planner, with original screenshots and links to both applications.' },
  { path: '/projects/category/community/', label: 'Client & community', heading: 'Client and community websites',
    description: 'Explore websites for a veterans’ nonprofit, computing conferences, a musician and a local entrepreneur, with project histories and website links.' },
  { path: '/projects/category/web-design/', label: 'Web design', heading: 'Web design projects',
    description: 'Visit Anthony Aiello’s web design projects, including an early DJ equipment store and hand-coded websites.' }
]
const pages = [
  { path: '/', template: 'home', title: 'Anthony Aiello | Secure Software Development & Cybersecurity',
    description: 'Anthony Aiello is an MS CIS graduate focused on cybersecurity and secure software development. Explore his software, web, and systems portfolio.' },
  { path: '/projects/', template: 'projects', title: 'Software & Web Projects | Anthony Aiello', heading: 'Projects', projects,
    description: 'Explore Anthony Aiello’s full-stack applications, client websites, and web design projects through case studies and original screenshots.' },
  { path: '/about/', template: 'about', title: 'About Anthony Aiello | MS CIS Graduate',
    description: 'Learn about Anthony Aiello’s MS CIS concentration in cybersecurity and secure software development and his path from technical operations to software.' },
  { path: '/skills/', template: 'skills', title: 'Technical Skills | Anthony Aiello',
    description: 'Explore Anthony Aiello’s skills in software development, secure systems, Linux, AWS, databases, and Agile project delivery.' },
  { path: '/contact/', template: 'contact', title: 'Contact Anthony Aiello | Career Opportunities',
    description: 'Contact Anthony Aiello about software development, cybersecurity, and systems roles.' }
]
for (const category of categories.slice(1)) {
  pages.push({ ...category, template: 'projects', title: category.heading + ' | Tony Aiello',
    projects: projects.filter(project => project.group === category.label) })
}
for (const project of projects) {
  pages.push({ path: '/projects/' + project.slug + '/', template: 'project', project,
    title: (project.searchTitle || project.title) + ' | Tony Aiello',
    description: project.searchDescription, image: project.images[0] })
}
const notFound = {
  path: '/404.html', template: 'not-found', title: 'Page not found | Tony Aiello',
  description: 'Find a project or return to Anthony Aiello’s portfolio.'
}
module.exports = { siteUrl, pages, notFound, categories, navigation }
