<template>
  <div class="container">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img src="~/assets/img/logo.png" alt="Christer Olsen">
      </nuxt-link>

      <span class="navbar-burger"
            :class="{'is-active': showNavbarMenu}"
            :title="`${showNavbarMenu ? 'Hide' : 'Show'} navigation`"
            role="button"
            tabindex="0"
            @click="toggleNavbarMenu"
            @keydown.enter="toggleNavbarMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="navbar-menu"
         :class="{'is-active': showNavbarMenu}"
         @click="hideNavbarMenu"
         @keypress.enter="hideNavbarMenu">
      <nav class="navbar-end">
        <nuxt-link to="/" class="navbar-item">home</nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">blog</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'site-header',
    data () {
      return {
        showNavbarMenu: false
      }
    },
    methods: {
      toggleNavbarMenu () {
        this.showNavbarMenu = !this.showNavbarMenu
      },
      hideNavbarMenu () {
        this.showNavbarMenu = false
        document.querySelector('.navbar-burger').focus()
      }
    }
  }
</script>
