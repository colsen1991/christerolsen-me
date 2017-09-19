<template>
  <div class="hero-head is-info">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="~/assets/img/logo-full.png" alt="Logo">
          </a>
        </div>

        <span class="nav-toggle"
              :class="{'is-active': showNavbarMenu}"
              @click="toggleNavbarMenu"
              @keydown.enter="toggleNavbarMenu"
              role="button"
              tabindex="0"
              :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu"
             :class="{'is-active': showNavbarMenu}"
             @click="hideNavbarMenu"
             @keypress.enter="hideNavbarMenu">
          <a class="nav-item">
            Home
          </a>
          <a class="nav-item">
            Examples
          </a>
          <a class="nav-item">
            Documentation
          </a>
        </div>
      </div>
    </header>
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
