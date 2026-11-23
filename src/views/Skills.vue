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
      { name: 'Unix & Linux administration', text: 'I draw on my enterprise IT experience when I co-teach Linux with our computer science lab manager.', to: { path: '/teaching', hash: '#linux' }, link: 'Explore the Linux courses we co-teach' },
      { name: 'Cybersecurity & secure development', text: 'My graduate concentration was Secure Software Development. I compared secure development standards with Armando Ramirez and Susan J. Lincke, and I teach students to think about permissions and data handling as part of a system’s design.', to: '/research#secure-standards-2020', link: 'Read our standards comparison' },
      { name: 'Data & cloud systems', text: 'My database work includes MariaDB, Microsoft SQL Server, PostgreSQL, Oracle, and MongoDB with Mongoose. On the Radar connected a MongoDB course catalog to a Vue interface. An earlier team project ran a WordPress site on an AWS EC2 instance, an example I can draw on when teaching cloud computing.', to: '/projects/student-software-portfolio', link: 'See the AWS-hosted student project' },
      { name: 'Analysis & project management', text: 'Client requirements, user stories, effort estimates, Agile and Scrum, Kanban boards, Jira, and working with teams to design and test information systems.', to: { path: '/teaching', hash: '#systems-analysis' }, link: 'See a requirements example' },
      { name: 'Web design & publishing', text: 'HTML, CSS, WordPress, WooCommerce, Drupal, Joomla, Magento, and CommonSpot. For visual work I have used Illustrator, Photoshop, InDesign, and Dreamweaver. This portfolio uses Vue and GitHub Actions to test each release before it goes to the web server.', to: '/projects/barnacle-buds', link: 'See the hand-coded restaurant design' },
      { name: 'Research & course design', text: 'I design code-tracing worksheets and community-client projects. I also supervised the independent study team that investigated how students use chatbots and human learning assistants.', to: '/research#who-did-the-work', link: 'Read about my role on the research team' }
    ] }
  }
}
</script>
