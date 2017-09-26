<template>
  <div class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item">
          <img src="~/assets/img/logo-full.png" class="has-text-primary" alt="Christer Olsen" title="Logo - Christer Olsen">
        </nuxt-link>
      </div>

      <nav class="nav-right">
        <nuxt-link to="/blog" class="has-text-primary nav-item">Blog</nuxt-link>
      </nav>
    </div>
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
