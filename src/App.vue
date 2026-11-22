<template>
  <div id="app">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap header-inner" @keydown.esc="closeMenu">
        <router-link to="/" class="brand" aria-label="Anthony Aiello, homepage">
          <span class="monogram" aria-hidden="true">Aa.</span>
          <span>Anthony Aiello</span>
        </router-link>
        <button ref="menuToggle" class="menu-toggle" type="button" aria-controls="main-navigation" :aria-expanded="String(menuOpen)" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close menu' : 'Menu' }}</button>
        <nav id="main-navigation" class="main-nav" :class="{ open: menuOpen }" aria-label="Main navigation">
          <router-link v-for="item in navigation" :key="item.path" :to="item.path" :exact="item.path === '/'" @click.native="menuOpen = false">{{ item.label }}</router-link>
        </nav>
      </div>
    </header>
    <main id="main" ref="main" tabindex="-1"><router-view /></main>
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <span class="footer-name">Anthony Aiello</span>
        <span class="footer-location">Racine, Wisconsin</span>
        <a href="mailto:anthony@aiello.io">anthony@aiello.io</a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'PortfolioApp',
  data() {
    return {
      menuOpen: false,
      navigation: [
        { path: '/', label: 'Home' }, { path: '/projects', label: 'Projects' },
        { path: '/teaching', label: 'Teaching' }, { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' }, { path: '/contact', label: 'Contact' }
      ]
    }
  },
  methods: {
    closeMenu() {
      if (!this.menuOpen) return
      this.menuOpen = false
      this.$refs.menuToggle.focus()
    }
  },
  watch: {
    $route(to, from) {
      this.menuOpen = false
      if (to.path === from.path && to.hash === from.hash) return
      this.$nextTick(() => {
        const section = to.hash && document.getElementById(to.hash.slice(1))
        const target = section || this.$refs.main
        if (target) target.focus({ preventScroll: true })
      })
    }
  }
}
</script>
<style src="./portfolio.css"></style>
