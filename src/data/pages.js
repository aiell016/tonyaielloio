const projects = require('./projects.json')

const siteUrl = 'https://tony.aiello.io'
const navigation = [
  ['/', 'Home'], ['/projects/', 'Projects'], ['/teaching/', 'Teaching'],
  ['/research/', 'Research'], ['/about/', 'About'], ['/skills/', 'Skills'], ['/contact/', 'Contact']
]
const categories = [
  { path: '/projects/', label: 'All projects' },
  { path: '/projects/category/applications/', label: 'Applications', heading: 'Software applications',
    description: 'Explore Anthony Aiello’s Project Volga bookstore and On the Radar course planner, with original screenshots and links to both applications.' },
  { path: '/projects/category/community/', label: 'Client & community', heading: 'Client and community websites',
    description: 'Explore websites for a veterans’ nonprofit, computing conferences, a musician and a local entrepreneur, with project histories and website links.' },
  { path: '/projects/category/web-design/', label: 'Web design', heading: 'Web design projects',
    description: 'Visit Anthony Aiello’s web design projects, including an early DJ equipment store, a music archive and hand-coded websites.' }
]
const pages = [
  { path: '/', template: 'home', title: 'Anthony “Tony” Aiello | Computer Science Educator & Developer',
    description: 'Explore Anthony “Tony” Aiello’s software projects, computer science and MIS teaching, and published research on AI chatbots and human learning assistants.' },
  { path: '/projects/', template: 'projects', title: 'Software Projects & Community Websites | Tony Aiello', heading: 'Project archive', projects,
    description: 'Visit Tony Aiello’s software and web projects, from an online bookstore and course planner to nonprofit sites. Browse the screenshots and read each case study.' },
  { path: '/teaching/', template: 'teaching', title: 'Computer Science & MIS Teaching and Course Design | Tony Aiello',
    description: 'See how Tony Aiello teaches programming, Linux, systems analysis and cloud computing, and advises graduate students in computer and information systems.' },
  { path: '/research/', template: 'research', title: 'AI Chatbots, Learning Assistants & Faculty Publications | Anthony Aiello',
    description: 'Read the AIELA classroom chatbot study, meet the team Anthony Aiello supervised, and explore his faculty publications on computing education and secure development.' },
  { path: '/about/', template: 'about', title: 'About Anthony “Tony” Aiello | Educator & Developer',
    description: 'Meet Anthony Aiello and follow his path from Milwaukee sound engineering and enterprise IT to software development, teaching and graduate advising.' },
  { path: '/skills/', template: 'skills', title: 'Software Development, Linux & Technical Skills | Tony Aiello',
    description: 'Explore Tony Aiello’s experience in software development, Linux administration, databases, cloud computing and web design through projects and teaching examples.' },
  { path: '/contact/', template: 'contact', title: 'Contact Tony Aiello | Research, Teaching & Software Projects',
    description: 'Get in touch with Anthony Aiello about computing education research, community software projects, internships or graduate advising.' }
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
  description: 'Find a project, explore a course or return to Tony Aiello’s portfolio.'
}
module.exports = { siteUrl, pages, notFound, categories, navigation }
