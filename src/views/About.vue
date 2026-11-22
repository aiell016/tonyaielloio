<template>
  <div class="wrap inner-page">
    <header class="page-intro"><p class="eyebrow">Anthony Aiello, MS CIS</p><h1>About Anthony</h1><p>I’m a computer science lecturer. Before my classroom had a whiteboard and a projector, my work took me backstage to the sound and lighting systems that keep a live show running.</p></header>
    <section class="prose">
      <h2>From the booth to the lab</h2>
      <p>I worked as an audio engineer and eventually managed a Milwaukee lighting, sound, and video business. One of my earliest web projects was our online DJ equipment store. Years later, when I went back to school, I could see exactly how much my approach to web design had changed.</p>
      <p>I worked in enterprise IT at Innovative Dynamic Networks. As a student developer, I contributed to software projects for regional organizations. My projects have ranged from programming a microcontroller in C to building a course planner with a team. I still enjoy the work before the first line of code, especially listening to a client and figuring out what to build first.</p>
      <p>I began teaching the Linux certificate sequence as an adjunct. Our computer science lab manager and I have co-taught Linux Concepts and Linux System Administration since 2019. I became a full-time computer science lecturer in 2022.</p>
      <p>These days my classroom work spans CS, management information systems, and graduate CIS. I advise students in the MS CIS program. I also managed the program during the search for a new director.</p>
      <router-link to="/teaching" class="text-link">Explore my course design</router-link>
    </section>
    <section class="education">
      <h2>Education</h2>
      <div class="degree"><span class="year">2021</span><div><h3>Master of Science in Computer and Information Systems</h3><p>After my bachelor’s degree, I went straight into a master’s program and concentrated on Secure Software Development. My graduate work included cybersecurity and mobile applications. In 2020, Armando Ramirez, Susan J. Lincke, and I published a comparison of secure development standards.</p><div class="source-links"><router-link to="/research#secure-standards-2020">Read the publication</router-link></div></div></div>
      <div class="degree"><span class="year">2018</span><div><h3>Bachelor of Science in Computer Science</h3><p>I earned a Web Development minor and certificates in Cybersecurity and Linux System Administration. Artificial intelligence, astronomy, calculus, data structures, and physics were among my favorite classes.</p></div></div>
    </section>
    <section class="education" aria-labelledby="service-title">
      <h2 id="service-title">Campus and professional service</h2>
      <div class="degree service-row"><h3>Student organizations</h3><div><p>I’ve advised Girls Who Code, Computer Club, and Tabletop. Computer Club gives students room to explore an interest beyond a course, whether that means a coding challenge, a robotics activity, or a game night.</p></div></div>
      <div class="degree service-row"><h3>College service</h3><div><p>I served on the search and screen committee for the Small Business Development Center director.</p></div></div>
      <div class="degree service-row"><h3>Department search committees</h3><div><ul class="service-history">
        <li><strong>2025</strong> Three Computer Science search and screen committees.</li>
        <li><strong>2024</strong> Searches for Computer Science faculty, an assistant or associate professor, and the professor and department chair position.</li>
        <li><strong>2023</strong> Computer Science faculty search and screen committee.</li>
        <li><strong>2020</strong> Computer Science faculty search and screen committee and a separate faculty search and screen committee.</li>
        <li><strong>2018</strong> Computer Science faculty search and screen committee.</li>
      </ul></div></div>
      <router-link to="/research#peer-review" class="text-link">See my conference peer review by year</router-link>
    </section>
    <section class="education" aria-labelledby="background-study">
      <h2 id="background-study">What I’m working on now</h2>
      <p>Teaching, advising, and studying how students learn are closely connected for me. The AIELA chatbot research was the starting point for my doctoral plans at Georgia Southern. I’ve paused those plans and continue to bring the research questions back to class.</p>
      <router-link to="/research#doctoral-plans" class="text-link">My research and doctoral plans</router-link>
    </section>
  </div>
</template>
<script>
export default { name: 'AboutAnthony' }
</script>
