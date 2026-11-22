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
      { name: 'Unix & Linux administration', text: 'I have worked in enterprise IT and taught the Linux certificate sequence. In the system administration lab, students start with a personal Docker environment and then manage shared machines. Permissions, ownership, and documentation become immediate questions when someone else needs to use the system.', to: { path: '/teaching', hash: '#linux' }, link: 'Explore the Linux lab' },
      { name: 'Cybersecurity & secure development', text: 'My graduate concentration was Secure Software Development. I compared secure development standards with Armando Ramirez and Susan J. Lincke, and I teach students to think about permissions and data handling as part of a system’s design.', to: '/research#secure-standards-2020', link: 'Read our standards comparison' },
      { name: 'Data & cloud systems', text: 'My database work includes MariaDB, Microsoft SQL Server, PostgreSQL, Oracle, and MongoDB with Mongoose. On the Radar connected a MongoDB course catalog to a Vue interface. An earlier team project ran a WordPress site on an AWS EC2 instance, an example I can draw on when teaching cloud computing.', to: '/projects/app-factory', link: 'See the AWS-hosted student project' },
      { name: 'Analysis & project management', text: 'Client requirements, user stories, effort estimates, Agile and Scrum, Kanban boards, Jira, and working with teams to design and test information systems.', to: { path: '/teaching', hash: '#systems-analysis' }, link: 'See a requirements example' },
      { name: 'Web design & publishing', text: 'HTML, CSS, WordPress, WooCommerce, Drupal, Joomla, Magento, and CommonSpot. For visual work I have used Illustrator, Photoshop, InDesign, and Dreamweaver. This portfolio uses Vue and GitHub Actions to test each release before it goes to the web server.', to: '/projects/barnacle-buds', link: 'See the hand-coded restaurant design' },
      { name: 'Classroom research & course design', text: 'I design code-tracing worksheets, labs, and community-client projects. Working on AIELA gave me a chance to study classroom feedback with colleagues and bring students’ questions about AI assistance into that work.', to: '/research#aiela', link: 'Explore the AI learning-assistant research' }
    ] }
  }
}
</script>
