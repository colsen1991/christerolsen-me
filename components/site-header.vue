<template>
  <header class="navbar section">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img aria-label="Logo" alt="Site Logo" src="~/assets/img/logo.png">
        </nuxt-link>

        <div
          class="navbar-burger burger"
          :class="{'is-active': showNavbarMenu}"
          @click="toggleNavbarMenu"
          @keydown.enter="toggleNavbarMenu"
          role="button"
          tabindex="0"
          :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu"
           :class="{'is-active': showNavbarMenu}"
           @click="hideNavbarMenu"
           @keypress.enter="hideNavbarMenu">
        <nav class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link to="#lorem" class="navbar-link">
              <b-icon icon="cogs"></b-icon>&nbsp;LOREM
            </nuxt-link>

            <div class="navbar-dropdown">
              <nuxt-link to="#ipsum" class="navbar-item">Ipsum</nuxt-link>
              <nuxt-link to="#dolor" class="navbar-item">Dolor</nuxt-link>
            </div>
          </div>
          <nuxt-link to="#sit" class="navbar-item">
            <b-icon icon="folder-open"></b-icon>&nbsp;SIT
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
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
