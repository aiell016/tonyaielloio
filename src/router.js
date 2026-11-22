import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Project from './views/Project.vue'
import Teaching from './views/Teaching.vue'
import Research from './views/Research.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'
import projects from './data/projects.json'
import { pageFor, notFound, siteUrl } from './data/pages'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    {
      path: '/projects/:slug', name: 'project', component: Project,
      props: route => ({ project: projects.find(item => item.slug === route.params.slug) })
    },
    { path: '/teaching', name: 'teaching', component: Teaching },
    { path: '/research', name: 'research', component: Research },
    { path: '/about', name: 'about', component: About },
    { path: '/skills', name: 'skills', component: Skills },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '*', name: 'not-found', component: NotFound }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash && document.getElementById(to.hash.slice(1))) return { selector: to.hash, offset: { x: 0, y: 24 } }
    if (to.path !== from.path || to.hash !== from.hash) return { x: 0, y: 0 }
  }
})

function setHeadElement(selector, tag, key, name, attribute, value) {
  let element = document.head.querySelector(selector)
  if (!value) {
    if (element) element.remove()
    return
  }
  if (!element) {
    element = document.createElement(tag)
    element.setAttribute(key, name)
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

router.afterEach(to => {
  const meta = pageFor(to.path)
  const path = to.path.replace(/\/+$/, '') || '/'
  const canonical = meta === notFound ? null : siteUrl + path
  document.title = meta.title
  const fields = {
    description: meta.description,
    'og:title': meta.title,
    'og:description': meta.description,
    'og:image': siteUrl + '/media/' + (meta.image || 'racine-lakefront.webp'),
    'og:url': canonical,
    robots: meta === notFound ? 'noindex' : null
  }
  for (const [name, value] of Object.entries(fields)) {
    const key = name.startsWith('og:') ? 'property' : 'name'
    setHeadElement('meta[' + key + '="' + name + '"]', 'meta', key, name, 'content', value)
  }
  setHeadElement('link[rel="canonical"]', 'link', 'rel', 'canonical', 'href', canonical)
})

export default router
