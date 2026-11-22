<template>
  <article class="work-card">
    <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="card-link" :class="{ 'text-card': !image }">
      <div v-if="image" class="card-visual" :class="'art-' + project.slug">
        <img :src="'/media/' + image.file" :alt="image.alt" :width="image.width" :height="image.height" loading="lazy" decoding="async">
      </div>
      <div class="card-copy">
        <p class="eyebrow">{{ project.group }}</p>
        <component :is="heading" class="card-title">{{ project.title }}</component>
        <p>{{ project.intro }}</p>
      </div>
    </router-link>
  </article>
</template>
<script>
export default {
  name: 'ProjectCard',
  props: {
    project: { type: Object, required: true },
    heading: { type: String, default: 'h3' }
  },
  computed: { image() { return this.project.images[0] } }
}
</script>
