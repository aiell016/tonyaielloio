<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Computing education</p>
      <h1>Research &amp; publications</h1>
      <p>When a student gets stuck on a program, what kind of help gets them thinking again? That classroom question brought me into research on AI chatbots and human learning assistants.</p>
    </header>
    <div class="teaching-layout">
      <nav class="teaching-index" aria-label="Research sections">
        <router-link to="#aiela">The chatbot study</router-link>
        <router-link to="#publications">Faculty publications</router-link>
        <router-link to="#peer-review">Conference peer review</router-link>
        <router-link to="#collaborations">Research collaborations</router-link>
        <router-link to="#doctoral-plans">My doctoral plans</router-link>
      </nav>
      <div class="teaching-cases research-content">
        <section id="aiela" tabindex="-1" aria-labelledby="aiela-title">
          <p class="eyebrow">IEEE SoutheastCon · 2025</p>
          <h2 id="aiela-title">A chatbot at the lab table</h2>
          <p>The first AI-Enhanced Learning Assistant (AIELA) ran on a Raspberry Pi. Students had to use the device where it was set up. In the follow-up study, students could open the web version on their own laptops or phones while working on a problem.</p>
          <h3>What the students told us</h3>
          <p>After two classroom demonstrations, students reported feeling comfortable with the web assistant and found it useful for worksheets. Working through a misconception was a different matter. Students rated the human learning assistants more highly for help understanding a concept. The surveys captured first impressions. A semester-long study could tell us whether students’ preferences change as they gain experience.</p>
          <h3 id="who-did-the-work" tabindex="-1">Who did the work</h3>
          <p>I managed AIELA as an independent study. That semester I taught 24 credits and volunteered to supervise student internships when no other faculty member was available. Teaching took most of my time, so my role in the hands-on research and in writing the paper was limited. My coauthors did most of that work.</p>
          <p>I was one of the <strong>{{ publications[0].authors.length }} coauthors</strong>. Our team included Dr. Vijayalakshmi Ramasamy from Georgia Southern University. Most of the authors now work at AbbVie.</p>
          <p>Our earlier study also brought in Dr. Peter J. Clarke at Florida International University. The two papers below credit each team in publication order.</p>
          <router-link class="text-link" to="#aiela-2025">See the paper and all 11 authors</router-link>
        </section>
        <section id="publications" tabindex="-1" aria-labelledby="publications-title">
          <h2 id="publications-title">Faculty publications</h2>
          <ol class="publication-list">
            <li v-for="paper in publications" :key="paper.id" :id="paper.id" tabindex="-1">
              <p class="eyebrow">{{ paper.year }} · {{ paper.authors.length }} authors</p>
              <h3>{{ paper.title }}</h3>
              <p class="author-line"><span v-for="(author, index) in paper.authors" :key="author"><strong v-if="author === 'Anthony Aiello'">{{ author }}</strong><template v-else>{{ author }}</template>{{ index === paper.authors.length - 1 ? '.' : ', ' }}</span></p>
              <p class="pub-venue"><cite>{{ paper.venue }}</cite>, pp. {{ paper.pages }}.</p>
              <p>{{ paper.description }}</p>
              <div class="source-links"><a :href="'https://doi.org/' + paper.doi" :aria-label="'DOI for ' + paper.title">DOI {{ paper.doi }}</a></div>
            </li>
          </ol>
        </section>
        <section id="peer-review" tabindex="-1" aria-labelledby="peer-review-title">
          <h2 id="peer-review-title">Conference peer review</h2>
          <p>I’ve served as a paper reviewer for conferences in engineering education and computing.</p>
          <div v-for="group in conferenceReviews" :key="group.year" class="review-year">
            <h3>{{ group.year }}</h3>
            <ul class="service-history">
              <li v-for="conference in group.conferences" :key="conference.url">
                <a :href="conference.url" :aria-label="conference.name + ', ' + group.year">{{ conference.name }}</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="collaborations" tabindex="-1" aria-labelledby="collaborations-title">
          <h2 id="collaborations-title">Collaborative research in computing education</h2>
          <h3>CUE-T · Broadening participation in computing</h3>
          <p>I served as a co-principal investigator on the National Science Foundation’s four-year CUE-T collaboration. We studied how learning assistants could support active participation when computing students at different universities met online at the same time.</p>
          <p>Dr. Ramasamy served as a principal investigator. Dr. Clarke led the collaboration from Florida International University. Partners also included Alabama A&amp;M University, Florida A&amp;M University, Humboldt State University (now Cal Poly Humboldt), and Rider University.</p>
          <h3>INTEL · Interaction Networks to Engaged Learning</h3>
          <p>I also served as a co-principal investigator on INTEL. This project focused on engaging students through an interactive discussion-board model. It asked how an online discussion could get students responding to one another’s ideas.</p>
        </section>
        <section id="doctoral-plans" tabindex="-1" aria-labelledby="doctoral-title">
          <h2 id="doctoral-title">Where the PhD fits in</h2>
          <p>AIELA began as an initial research project for the PhD I planned to pursue at Georgia Southern University. That year, faculty shortages in both computer science and management information systems left courses to cover. I took on a double teaching load, including MIS and graduate courses. I couldn’t complete the PhD on the original timeline, so I paused those plans.</p>
          <p>I’m happy teaching and advising, and I’m keeping my options open. If I return to doctoral study, I’d like to start by talking with colleagues I know at Milwaukee-area institutions about studying in person.</p>
          <router-link to="/teaching" class="text-link">See the courses I teach</router-link>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import publications from '../data/publications.json'
import conferenceReviews from '../data/conference-reviews.json'
export default {
  name: 'PortfolioResearch',
  data() { return { publications, conferenceReviews } }
}
</script>
