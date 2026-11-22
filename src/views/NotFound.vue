<template>
  <div class="wrap inner-page">
    <header class="page-intro"><p class="eyebrow">404</p><h1>Page not found</h1><p>Looking for a project screenshot, a course, or one of my papers? These pages can help you find it.</p></header>
    <div class="actions"><router-link to="/projects" class="button primary">Browse projects</router-link><router-link to="/research#publications" class="button secondary">Faculty publications</router-link><router-link to="/teaching#course-history" class="button secondary">Courses taught</router-link></div>
  </div>
</template>
<script>
export default { name: 'NotFound' }
</script>
