<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Software &amp; web design</p>
      <h1>Project archive</h1>
      <p>Some projects began as coursework. Others started when a local business owner, artist, or nonprofit needed a website. These 14 case studies keep the original screenshots alongside the decisions behind the work.</p>
    </header>
    <section class="archive-paths" aria-labelledby="later-work">
      <h2 id="later-work">Projects after graduation</h2>
      <div><router-link to="/research#aiela">AIELA chatbot research</router-link><p>From a Raspberry Pi prototype to an 11-author study of how students used a web assistant in class.</p></div>
      <div><router-link to="/teaching">Classroom &amp; course design</router-link><p>Java tracing exercises, a Linux administration lab, and community-client work in undergraduate and graduate courses.</p></div>
    </section>
    <h2 class="archive-heading">Software &amp; web projects</h2>
    <nav aria-label="Filter projects" class="filters">
      <router-link v-for="filter in filters" :key="filter.value"
        :to="{ name: 'projects', query: filter.value ? { group: filter.value } : {} }"
        :class="{ selected: selected.value === filter.value }"
        :aria-current="selected.value === filter.value ? 'true' : null"
        :aria-label="'Show ' + filter.label.toLowerCase()">{{ filter.label }}</router-link>
    </nav>
    <p class="result-count" aria-live="polite">{{ visibleProjects.length }} projects</p>
    <section aria-label="Project gallery" class="cards archive-cards">
      <project-card v-for="project in visibleProjects" :key="project.slug" :project="project" heading="h3" />
    </section>
  </div>
</template>
<script>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'
const filters = [
  { label: 'All projects', value: '' }, { label: 'Applications', value: 'applications' },
  { label: 'Client & community', value: 'community' }, { label: 'Web design', value: 'web-design' }
]
export default {
  name: 'ProjectArchive',
  components: { ProjectCard },
  data() { return { filters } },
  computed: {
    selected() { return filters.find(filter => filter.value === this.$route.query.group) || filters[0] },
    visibleProjects() { return this.selected.value ? projects.filter(item => item.group === this.selected.label) : projects }
  }
}
</script>
