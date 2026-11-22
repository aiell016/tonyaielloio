<template>
  <div v-if="project" class="wrap inner-page project-page">
    <router-link to="/projects" class="back-link">Project archive</router-link>
    <header class="page-intro detail-intro">
      <p class="eyebrow">{{ project.group }}</p><h1>{{ project.title }}</h1><p>{{ project.intro }}</p>
    </header>
    <div class="detail-notes">
      <div><h2>About the project</h2><p>{{ project.story }}</p></div>
      <div class="project-links" v-if="project.links.length || project.teaching">
        <a v-for="link in project.links" :href="link.url" :key="link.url" class="text-link">{{ link.label }}</a>
        <router-link v-if="project.teaching" :to="{ path: '/teaching', hash: '#' + project.teaching.id }" class="text-link">{{ project.teaching.label }}</router-link>
      </div>
    </div>
    <section class="gallery" aria-labelledby="screenshots">
      <div class="section-head"><h2 id="screenshots">Original screenshots</h2></div>
      <div class="gallery-grid">
        <figure v-for="(image, index) in project.images" :key="image.file" :class="{ 'lead-shot': index === 0, 'portrait-shot': image.height > image.width }">
          <a :href="'/media/' + image.file" :aria-label="'Open full-size image. ' + image.alt">
            <img :src="'/media/' + image.file" :width="image.width" :height="image.height" :alt="image.alt" :loading="index === 0 ? 'eager' : 'lazy'" decoding="async">
          </a>
          <figcaption>{{ image.caption }}</figcaption>
        </figure>
      </div>
    </section>
  </div>
  <not-found v-else />
</template>
<script>
import NotFound from './NotFound.vue'
export default { name: 'ProjectDetail', components: { NotFound }, props: { project: Object } }
</script>
