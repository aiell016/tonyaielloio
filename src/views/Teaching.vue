<template>
  <div class="wrap inner-page">
    <header class="page-intro">
      <p class="eyebrow">Computer science &amp; management information systems</p>
      <h1>Teaching &amp; course design</h1>
      <p>The first website I built after Computer Science I was an online bookstore. Today I teach that course alongside MIS and graduate CIS. My students trace programs on paper, administer shared machines, and work through real requirements with a community partner.</p>
    </header>
    <div class="teaching-layout">
      <nav class="teaching-index" aria-label="Teaching cases">
        <span class="eyebrow">On this page</span>
        <router-link :to="{ path: '/teaching', hash: '#java' }">Computer Science I</router-link>
        <router-link to="#accessible-materials">Accessible lab materials</router-link>
        <router-link :to="{ path: '/teaching', hash: '#systems-analysis' }">Systems analysis &amp; design</router-link>
        <router-link to="#learning-assistants">Learning assistants &amp; gamification</router-link>
        <router-link to="#course-history">Courses taught</router-link>
        <router-link to="#cloud-computing">Cloud Computing</router-link>
        <router-link to="#advising">Graduate advising</router-link>
      </nav>
      <div class="teaching-cases">
        <section id="java" tabindex="-1" aria-labelledby="java-title">
          <p class="eyebrow">Computer Science I</p>
          <h2 id="java-title">Inside the first Java lab</h2>
          <p>Most students prefer to work on their own laptops, so they bring them to our first lab. Anyone without a laptop can complete all the coursework on a lab computer with the software already installed.</p>
          <p>On the laptops, we install the Java Runtime Environment (JRE), the Java Development Kit (JDK), and the ACM graphics library. We also install Visual Studio Code (VS Code) and BlueJ, the two development environments we used in fall 2026. Students need a ZIP utility such as 7-Zip or WinRAR.</p>
          <p>To check the setup, students compile <code>Doodle.java</code> and <code>DoodleDriver.java</code>, then run the lab using the steps for their development environment. A successful run confirms that their computer has the software they need for the rest of the course.</p>
          <router-link to="/projects/project-volga" class="text-link">See Project Volga, my first site after CS I</router-link>
        </section>
        <section id="accessible-materials" tabindex="-1" aria-labelledby="accessibility-title">
          <h2 id="accessibility-title">Accessible lab materials</h2>
          <p>The lab instructions we share online need to work for students who use a screen reader or navigate with a keyboard.</p>
          <p>The U.S. Department of Justice’s web and mobile accessibility rule under Title II of the Americans with Disabilities Act (ADA) uses the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as its standard.</p>
          <div class="source-links"><a href="https://www.ada.gov/resources/2024-03-08-web-rule/">U.S. Department of Justice guide to the rule</a></div>
        </section>
        <section id="systems-analysis" tabindex="-1" aria-labelledby="mis-title">
          <p class="eyebrow">Systems Analysis &amp; Design</p>
          <h2 id="mis-title">From a client conversation to a requirement</h2>
          <p>My first MIS client project was a team-built storefront for a local entrepreneur. Now I design community projects that put my students on the other side of that conversation. They listen for the business problem, document what the system must do, and check their interpretation with the partner.</p>
          <div class="example"><h3>Example client brief</h3><blockquote>“Sometimes the same volunteer signs up twice for one shift.”</blockquote>
            <dl class="requirements"><dt>Requirement</dt><dd>A volunteer can hold one registration per shift.</dd><dt>Acceptance check</dt><dd>Register the same volunteer twice for the same shift. The roster should contain one entry, and the second attempt should explain that the volunteer is already registered.</dd></dl>
          </div>
          <router-link to="/projects/natures-best" class="text-link">Explore the Nature’s Best client project</router-link>
        </section>
        <section id="learning-assistants" tabindex="-1" aria-labelledby="assistants-title">
          <h2 id="assistants-title">Learning assistants &amp; gamification</h2>
          <p>In discussion, I give students a small piece of Java and ask them to trace it on paper. They compare values with a partner before we run the program together. When two people predict different outputs, we have a specific line of code to talk about.</p>
          <p>During a code trace, I can hear the person speaking, but I also want to know what’s happening at the tables. A learning assistant can sit with a pair, ask how they arrived at a value, and help them find the line where their answers diverge. Our spring 2024 pilot gave us a way to study that kind of support.</p>
          <p>I use game elements, too. In Computer Science I, I bring physical Bitcoin-themed tokens into class and hold extra practice sessions such as CS1 Power Hour. Students get another chance to explain a solution out loud and try it with different inputs.</p>
          <router-link to="/research#aiela-2024" class="text-link">Read our learning-assistant pilot paper</router-link>
        </section>
        <section id="course-history" tabindex="-1" aria-labelledby="course-history-title">
          <p class="eyebrow">Undergraduate &amp; graduate teaching</p>
          <h2 id="course-history-title">Courses I’ve taught</h2>
          <p>When staffing shortages affected both CS and MIS, I took on additional undergraduate and graduate sections. These courses show how my teaching has ranged from a student’s first Python program to independent graduate work.</p>
          <div v-for="group in courseGroups" :key="group.area" class="course-group">
            <h3>{{ group.area }}</h3>
            <dl class="course-list">
              <div v-for="course in group.courses" :key="course[0]">
                <dt v-bind="course[2] ? { id: course[2], tabindex: -1 } : {}">{{ course[0] }}</dt><dd>{{ course[1] }}</dd>
              </div>
            </dl>
          </div>
        </section>
        <section id="advising" tabindex="-1" aria-labelledby="advising-title">
          <h2 id="advising-title">Graduate advising &amp; independent work</h2>
          <p>I advise domestic and international MS CIS students on course choices, internships, and independent studies.</p>
          <p>Starting in summer 2024, I managed the program in an interim role while our department searched for a director with a terminal degree. I’m helping our new program director with the transition.</p>
          <div class="source-links"><router-link to="/contact">Contact me about advising</router-link></div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import courseGroups from '../data/courses.json'
export default {
  name: 'TeachingPortfolio',
  data() { return { courseGroups } }
}
</script>
