<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item">
            <img src="~/assets/img/logo-full.png" class="has-text-primary" alt="Christer Olsen" title="Logo - Christer Olsen">
          </nuxt-link>
        </div>

        <span class="nav-toggle"
              :class="{'is-active': showNavbarMenu}"
              @click="toggleNavbarMenu"
              @keydown.enter="toggleNavbarMenu"
              role="button"
              tabindex="0"
              :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`">
          <span class="is-info"></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu"
             :class="{'is-active': showNavbarMenu}"
             @click="hideNavbarMenu"
             @keypress.enter="hideNavbarMenu">
          <nuxt-link to="/" class="has-text-primary nav-item">
            Home
          </nuxt-link>
          <nuxt-link to="/blog" class="has-text-primary nav-item">
            Blog
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'

  export default {
    components: { NuxtLink },
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
