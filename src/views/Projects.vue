<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Software &amp; web design</p>
      <h1>Project archive</h1>
      <p>Some projects began as coursework. Others started when a local business owner, artist, or nonprofit needed a website. Each entry describes my part and preserves the original design.</p>
    </header>
    <nav aria-label="Filter projects" class="filters">
      <router-link v-for="filter in filters" :key="filter.value"
        :to="{ name: 'projects', query: filter.value ? { group: filter.value } : {} }"
        :class="{ selected: selected.value === filter.value }"
        :aria-current="selected.value === filter.value ? 'true' : null"
        :aria-label="'Show ' + filter.label.toLowerCase()">{{ filter.label }}</router-link>
    </nav>
    <p class="result-count" aria-live="polite">{{ visibleProjects.length }} projects</p>
    <section aria-label="Project gallery" class="cards archive-cards">
      <project-card v-for="project in visibleProjects" :key="project.slug" :project="project" heading="h2" />
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
