<template>
  <div class="wrap inner-page">
    <header class="page-intro"><p class="eyebrow">Get in touch</p><h1>Contact</h1><p>I welcome questions from students, research collaborators, and community partners. Here’s how to reach me about the work you’ve seen here.</p></header>
    <div class="contact-list">
      <div><h2>Teaching &amp; advising</h2><div><p>For a course, an internship, graduate advising, or a question about one of our papers, my university inbox is the best place to start. If you’re asking about a class, include its course number.</p><a href="mailto:aielloa@uwp.edu">aielloa@uwp.edu</a><a class="contact-extra" href="https://www.uwp.edu/faculty-and-staff/aielloa/">My UW–Parkside faculty profile</a></div></div>
      <div><h2>Community &amp; software projects</h2><div><p>If you have an idea for students to work on, tell me who would use it and the problem they face today. A short description is enough to start a conversation.</p><a href="mailto:anthony@aiello.io">anthony@aiello.io</a></div></div>
      <div><h2>Research</h2><div><p>I’m interested in how human learning assistants and AI tools support students during real classroom work. You can read the studies and find my collaborators on the research page.</p><router-link to="/research#publications">Explore my faculty publications</router-link></div></div>
      <div><h2>Professional profiles</h2><div><p>The source for this Vue portfolio is on GitHub. LinkedIn is a good place to reconnect after a class, conference, or shared project.</p><div class="source-links"><a href="https://github.com/aiell016/tonyaielloio">Portfolio source on GitHub</a><a href="https://github.com/aiell016">All public repositories</a><a :href="profile.linkedIn">Anthony Aiello on LinkedIn</a></div></div></div>
    </div>
  </div>
</template>
<script>
import profile from '../data/profile'
export default { name: 'PortfolioContact', data() { return { profile } } }
</script>
