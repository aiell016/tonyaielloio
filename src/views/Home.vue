<template>
  <div class="wrap home-page">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">Software developer &amp; educator</p>
        <h1 id="home-title">From code to the <em>classroom.</em></h1>
        <p>Welcome! I’m Tony Aiello, and I’m glad you stopped by. As a lecturer at UW–Parkside, I design hands-on courses in computer science and management information systems and supervise independent studies. Come explore the software I’ve built, <router-link to="/teaching#java">try a Java exercise from my classroom</router-link>, or meet the team behind our chatbot study.</p>
        <div class="actions">
          <router-link to="/research" class="button primary">Research &amp; publications</router-link>
          <router-link to="/projects" class="button secondary">Explore projects</router-link>
        </div>
      </div>
      <figure class="hero-photo">
        <img src="/media/racine-lakefront.webp" alt="Sunrise reflecting off Lake Michigan below a bank of clouds in Racine." width="1600" height="720" fetchpriority="high">
        <figcaption>Lake Michigan at sunrise <span>Racine, Wisconsin</span></figcaption>
      </figure>
    </section>
    <section class="research-feature" aria-labelledby="home-research-title">
      <div><p class="eyebrow">Featured research · IEEE SoutheastCon 2025</p><h2 id="home-research-title">Who do students turn to when they get stuck?</h2></div>
      <div><p>I managed the independent study on AIELA, an AI-Enhanced Learning Assistant. Students tried the chatbot during class and described when it helped with a worksheet and when they wanted a human learning assistant to talk through a concept.</p><router-link to="/research#aiela" class="text-link">Meet the 11 authors and explore the findings</router-link></div>
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
        <router-link :to="{ path: '/teaching', hash: '#linux' }"><strong>Teaching Linux with Matt</strong><span>How our labs changed when remote access ended</span></router-link>
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
