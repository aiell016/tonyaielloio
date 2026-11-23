<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Software &amp; web design</p>
      <h1>Project archive</h1>
      <p>Some projects began as coursework. Others started when a local business owner, artist, or nonprofit needed a website. These 14 case studies describe the decisions behind the work. Many include screenshots of the original sites.</p>
    </header>
    <section class="archive-paths" aria-labelledby="later-work">
      <h2 id="later-work">Projects after graduation</h2>
      <div><router-link to="/research">Independent study research</router-link><p>Read our <router-link to="/research#aiela">AIELA study</router-link> on human learning assistants and chatbots, or explore <router-link to="/research#aurra">AURRA</router-link>, the knowledge-graph project Matthew Klug presented as a research poster.</p></div>
      <div><router-link to="/teaching">Classroom &amp; course design</router-link><p>Java tracing exercises, the Linux courses I co-teach with our computer science lab manager, and community-client projects.</p></div>
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
