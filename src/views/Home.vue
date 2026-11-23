<template>
  <div class="wrap home-page">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">Software developer &amp; educator</p>
        <h1 id="home-title">From code to the <em>classroom.</em></h1>
        <p>Welcome! I’m Tony Aiello, and I’m glad you stopped by. I teach computer science and management information systems, design hands-on courses, and supervise independent studies. Come explore the software I’ve built, <router-link to="/teaching#java">see how we get started in Computer Science I</router-link>, or meet the team behind our research on chatbots and privacy policies.</p>
        <div class="actions">
          <router-link to="/research" class="button primary">Research &amp; publications</router-link>
          <router-link to="/projects" class="button secondary">Explore projects</router-link>
        </div>
      </div>
      <figure class="hero-photo">
        <img src="/media/lakefront-sunrise.webp" alt="Sunrise reflecting off Lake Michigan below a bank of clouds." width="1600" height="720" fetchpriority="high">
        <figcaption>Lake Michigan at sunrise</figcaption>
      </figure>
    </section>
    <section class="research-feature" aria-labelledby="home-research-title">
      <div><p class="eyebrow">Featured research</p><h2 id="home-research-title">Classroom chatbots and the fine print</h2></div>
      <div><p>I managed a team of 10 researchers. Together we chose two projects that went on to be published. For AIELA, students told us when they wanted a chatbot’s help and when they wanted to talk to a human learning assistant. For AURRA, we used knowledge graphs to analyze privacy policies.</p><router-link to="/research" class="text-link">Explore both projects and meet the team</router-link></div>
    </section>
    <section aria-labelledby="featured-title" class="section">
      <div class="section-head"><h2 id="featured-title">Selected work</h2><router-link to="/projects" class="text-link">View project archive</router-link></div>
      <div class="cards">
        <project-card :project="volga" />
        <article class="work-card">
          <router-link :to="{ path: '/teaching', hash: '#java' }" class="card-link">
            <p class="card-visual teaching-art">Computer Science I</p>
            <div class="card-copy"><p class="eyebrow">Teaching</p><h3 class="card-title">Inside the first Java lab</h3><p>Students set up Java and run the Doodle lab to check that their laptops are ready for the course.</p></div>
          </router-link>
        </article>
        <project-card :project="mission" />
      </div>
    </section>
    <section class="classroom-strip" aria-labelledby="classroom-title">
      <div><p class="eyebrow">Course design</p><h2 id="classroom-title">Beyond the first program</h2></div>
      <div class="strip-links">
        <router-link :to="{ path: '/teaching', hash: '#systems-analysis' }"><strong>Designing systems with a community client</strong><span>From a first conversation to a testable requirement</span></router-link>
      </div>
    </section>
  </div>
</template>
<script>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: 'PortfolioHome',
  components: { ProjectCard },
  data() {
    return { volga: projects.find(p => p.slug === 'project-volga'), mission: projects.find(p => p.slug === 'mission-got-your-six') }
  }
}
</script>
