<template>
  <div class="wrap inner-page">
    <header class="page-intro"><p class="eyebrow">Background</p><h1>About Anthony</h1><p>I love to code. Before I started building software, I worked with the sound and lighting systems that keep a live show running.</p></header>
    <div class="bio-layout">
      <div class="prose">
        <h2>From the booth to the lab</h2>
        <p>I worked as an audio engineer and eventually managed a Milwaukee lighting, sound, and video business. One of my earliest web projects was our online DJ equipment store. Years later, when I went back to school, I could see exactly how much my approach to web design had changed.</p>
        <p>I went on to work in enterprise IT and software development. My projects have ranged from programming a microcontroller in C to building web applications with a team. I still enjoy the work that comes before the code, especially listening to a client, writing user stories, and figuring out what to build first.</p>
        <p>These days I teach computer science, management information systems, and graduate courses in computer and information systems. When I bring a project into class, I want students to see the decisions behind it as well as the finished product.</p>
        <router-link to="/teaching" class="text-link">Explore my course design</router-link>
      </div>
      <figure class="bio-photo"><img src="/media/racine-lakefront.webp" alt="Morning sunlight on Lake Michigan, seen from the Racine waterfront." width="1600" height="720"><figcaption>One of my favorite views on the way to work, downtown Racine.</figcaption></figure>
    </div>
    <section class="education">
      <h2>Education</h2>
      <div class="degree"><span class="year">2021</span><div><h3>Master of Science in Computer and Information Systems</h3><p>University of Wisconsin–Parkside. My graduate work included software development, cybersecurity, and mobile applications.</p><a href="https://www.uwp.edu/learn/programs/mscis/" class="text-link">MS CIS program</a></div></div>
      <div class="degree"><span class="year">2018</span><div><h3>Bachelor of Science in Computer Science</h3><p>University of Wisconsin–Parkside. Minor in Web Development, with certificates in Cyber Security and Unix System Administration. Some of my favorite classes were artificial intelligence, astronomy, calculus, data structures, and physics.</p><a href="https://www.uwp.edu/learn/programs/computersciencemajor/" class="text-link">Computer Science program</a></div></div>
    </section>
  </div>
</template>
<script>
export default { name: 'AboutAnthony' }
</script>
