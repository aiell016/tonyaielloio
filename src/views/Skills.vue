<template>
  <div class="wrap inner-page">
    <header class="page-intro"><p class="eyebrow">Technical background</p><h1>Skills in practice</h1><p>Here are the tools I’ve used to build software, run systems, and teach. Each area leads to a project or a classroom example.</p></header>
    <div class="skill-list">
      <section v-for="item in areas" :key="item.name"><h2>{{ item.name }}</h2><div><p>{{ item.text }}</p><router-link :to="item.to" class="text-link">{{ item.link }}</router-link></div></section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechnicalSkills',
  data() {
    return { areas: [
      { name: 'Application development', text: 'Java, JavaScript, Vue, Node.js, C, C++, C#, Python, PHP, and Ruby. My development tools have included Git, BlueJ, IntelliJ, Eclipse, NetBeans, Visual Studio, VS Code, and WebStorm.', to: '/projects/on-the-radar', link: 'See the On the Radar application' },
      { name: 'Systems & databases', text: 'Linux and Unix administration, Apache, Docker, AWS, and Windows environments. My database work includes MariaDB, Microsoft SQL Server, PostgreSQL, Oracle, and MongoDB with Mongoose.', to: { path: '/teaching', hash: '#linux' }, link: 'Explore the Linux lab' },
      { name: 'Analysis & project management', text: 'Client requirements, user stories, effort estimates, Agile and Scrum, Kanban boards, Jira, and working with teams to design and test information systems.', to: { path: '/teaching', hash: '#systems-analysis' }, link: 'See a requirements example' },
      { name: 'Web design & publishing', text: 'HTML, CSS, WordPress, WooCommerce, Drupal, Joomla, Magento, and CommonSpot. For visual work I have used Illustrator, Photoshop, InDesign, and Dreamweaver.', to: '/projects/barnacle-buds', link: 'See the hand-coded restaurant design' }
    ] }
  }
}
</script>
