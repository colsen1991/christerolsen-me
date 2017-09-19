<template>
  <footer class="footer section">
    <div class="container">
      <div class="columns">
        <address class="column is-one-third has-text-centered-mobile">
          <p><strong>Kontaktinformasjon</strong></p>
          <a href="https://goo.gl/maps/7TtrchACE7P2" target="noopener">
            GATADI 44S, 1337 Bodø
          </a>
          <br>
          <a href="mailto:colsen1991@gmail.com">
            EXAMPLE@GMAIL.COM
          </a>
          <br>
          <a href="tel:+4747895010">
            +47 48 49 20 33
          </a>
        </address>

        <hr class="is-hidden-tablet">

        <div class="column is-one-third has-text-centered">
          <p><strong>Sosiale Medier</strong></p>
          <div class="level is-mobile">
            <div class="level-item">
              <a href="https://twitter.com/" target="noopener">
                <b-icon class="icon" icon="twitter"/>
              </a>
            </div>
            <div class="level-item">
              <a href="https://www.facebook.com/" target="noopener">
                <b-icon class="icon" icon="facebook"/>
              </a>
            </div>
            <div class="level-item">
              <a href="https://www.linkedin.com/in/" target="noopener">
                <b-icon class="icon" icon="linkedin"/>
              </a>
            </div>
            <div class="level-item">
              <a href="https://github.com/" target="noopener">
                <b-icon class="icon" icon="github"/>
              </a>
            </div>
          </div>
        </div>

        <hr class="is-hidden-tablet">

        <div class="column is-one-third has-text-right-tablet has-text-centered-mobile">
          <p><strong>Navigasjon</strong></p>
          <nuxt-link to="#lorem">LOREM</nuxt-link>
          <div class="pad-right-6-tablet pad-right-6-desktop">
            <nuxt-link to="#ipsum">Ipsum</nuxt-link>
            <br>
            <nuxt-link to="#dolor">Dolor</nuxt-link>
          </div>
          <nuxt-link to="#sit">SIT</nuxt-link>
        </div>
      </div>

      <hr class="is-hidden-tablet">

      <p class="has-text-centered">&copy; {{new Date().getFullYear()}} YOUR NAME</p>
      <p class="has-text-centered"><a class="has-text-grey" href="/sitemap.xml">SITEMAP</a></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'site-footer'
  }
</script>
