<template>
  <div class="wrap home-page">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">Software developer &amp; educator</p>
        <h1 id="home-title">From code to the <em>classroom.</em></h1>
        <p>I’m Tony Aiello. I build software and community websites, and I design hands-on courses in computer science and management information systems.</p>
        <div class="actions">
          <router-link to="/projects" class="button primary">Explore projects</router-link>
          <router-link to="/teaching" class="button secondary">Teaching &amp; course design</router-link>
        </div>
      </div>
      <figure class="hero-photo">
        <img src="/media/racine-lakefront.webp" alt="Sunrise reflecting off Lake Michigan below a bank of clouds in Racine." width="1600" height="720" fetchpriority="high">
        <figcaption>Lake Michigan at sunrise <span>Racine, Wisconsin</span></figcaption>
      </figure>
    </section>
    <section aria-labelledby="featured-title" class="section">
      <div class="section-head"><h2 id="featured-title">Selected work</h2><router-link to="/projects" class="text-link">View project archive</router-link></div>
      <div class="cards">
        <project-card :project="volga" />
        <article class="work-card">
          <router-link :to="{ path: '/teaching', hash: '#java' }" class="card-link">
            <div class="card-visual teaching-art" aria-hidden="true"><java-trace /></div>
            <div class="card-copy"><p class="eyebrow">Teaching · Computer science</p><h3 class="card-title">Inside the first Java lab</h3><p>Students predict what a program will print, compare their reasoning, then run it. Try a short trace from the classroom example.</p></div>
          </router-link>
        </article>
        <project-card :project="mission" />
      </div>
    </section>
    <section class="classroom-strip" aria-labelledby="classroom-title">
      <div><p class="eyebrow">Course design</p><h2 id="classroom-title">Beyond the first program</h2></div>
      <div class="strip-links">
        <router-link :to="{ path: '/teaching', hash: '#linux' }"><strong>Building a Linux administration lab</strong><span>From individual containers to physical machines</span></router-link>
        <router-link :to="{ path: '/teaching', hash: '#systems-analysis' }"><strong>Designing systems with a community client</strong><span>From a first conversation to a testable requirement</span></router-link>
      </div>
    </section>
  </div>
</template>
<script>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'
import JavaTrace from '../components/JavaTrace.vue'
export default {
  name: 'PortfolioHome',
  components: { ProjectCard, JavaTrace },
  data() {
    return { volga: projects.find(p => p.slug === 'project-volga'), mission: projects.find(p => p.slug === 'mission-got-your-six') }
  }
}
</script>
