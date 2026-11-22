<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Computer science &amp; management information systems</p>
      <h1>Teaching &amp; course design</h1>
      <p>The first website I built after Computer Science I was an online bookstore. Today I teach that course. In my classrooms, students spend time predicting, building, and explaining what happened when they tried it.</p>
    </header>
    <div class="teaching-layout">
      <nav class="teaching-index" aria-label="Teaching cases">
        <span class="eyebrow">Course examples</span>
        <router-link :to="{ path: '/teaching', hash: '#java' }">Computer Science I</router-link>
        <router-link :to="{ path: '/teaching', hash: '#linux' }">Linux system administration</router-link>
        <router-link :to="{ path: '/teaching', hash: '#systems-analysis' }">Systems analysis &amp; design</router-link>
      </nav>
      <div class="teaching-cases">
        <section id="java" tabindex="-1" aria-labelledby="java-title">
          <p class="eyebrow">CSCI 241 · Computer Science I</p>
          <h2 id="java-title">Inside the first Java lab</h2>
          <p>In discussion, I give students a small piece of Java and ask them to trace it on paper. They compare values with a partner before we run the program together. When two people predict different outputs, we have a specific line of code to talk about.</p>
          <div class="example">
            <h3>Try a loop trace</h3><p>Write down the value of <code>total</code> after each pass. What appears on the last line of the console?</p>
            <java-trace />
            <details><summary>Check your trace</summary><p>The running totals are <strong>1, 3, and 6</strong>. The print statement runs once, after the loop, so the console shows <strong>6</strong>.</p></details>
          </div>
          <router-link to="/projects/project-volga" class="text-link">See Project Volga, my first site after CS I</router-link>
        </section>
        <section id="linux" tabindex="-1" aria-labelledby="linux-title">
          <p class="eyebrow">CSCI 435 / CIS 635 · Linux System Administration</p>
          <h2 id="linux-title">From containers to four physical machines</h2>
          <p>I designed the first four weeks around Docker so each student could practice on a Linux system from their own laptop. Then we moved to four physical machines on a private lab network. The same administrative decisions now had consequences for the next person who used the machine.</p>
          <div class="lab-stages">
            <div><h3>Personal container</h3><p>Inspect ownership and permissions, change a setting, and reproduce the result in a fresh environment.</p></div>
            <div><h3>Shared machine</h3><p>Document the starting state, coordinate changes with classmates, and verify the resulting system together.</p></div>
          </div>
          <div class="example"><h3>A lab question</h3><p>Two users need to edit files in a shared directory. What would you check before changing permissions, and how would you verify the result as each user?</p></div>
        </section>
        <section id="systems-analysis" tabindex="-1" aria-labelledby="mis-title">
          <p class="eyebrow">MIS 425 / CIS 625 · Systems Analysis &amp; Design</p>
          <h2 id="mis-title">From a client conversation to a requirement</h2>
          <p>My first MIS client project was a team-built storefront for a local entrepreneur. Now I design community projects that put my students on the other side of that conversation. They listen for the business problem, document what the system must do, and check their interpretation with the partner.</p>
          <div class="example"><h3>Example client brief</h3><blockquote>“Sometimes the same volunteer signs up twice for one shift.”</blockquote>
            <dl class="requirements"><dt>Requirement</dt><dd>A volunteer can hold one registration per shift.</dd><dt>Acceptance check</dt><dd>Register the same volunteer twice for the same shift. The roster should contain one entry, and the second attempt should explain that the volunteer is already registered.</dd></dl>
          </div>
          <router-link to="/projects/natures-best" class="text-link">Explore the Nature’s Best client project</router-link>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import JavaTrace from '../components/JavaTrace.vue'
export default { name: 'TeachingPortfolio', components: { JavaTrace } }
</script>
