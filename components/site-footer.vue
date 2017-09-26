<template>
  <div class="section">
    <div class="container">

      <hr class="is-hidden-mobile">

      <div class="columns">

        <hr class="is-hidden-tablet">

        <div class="column has-text-centered has-text-primary">
          <a href="https://twitter.com/colsen1991" target="noopener">
            Twitter
          </a>&nbsp;
          <a href="https://www.facebook.com/colsen1991" target="noopener">
            Facebook
          </a>&nbsp;
          <a href="https://www.linkedin.com/in/christer-olsen-15845b53" target="noopener">
            LinkedIn
          </a><br>
          <a href="https://github.com/colsen1991" target="noopener">
            GitHub
          </a>&nbsp;
          <a href="mailto:colsen1991@gmail.com" target="noopener">
            Email
          </a>
        </div>

        <hr class="is-hidden-tablet">

        <nav class="column has-text-centered has-text-primary">
          <nuxt-link to="/">Home</nuxt-link>
          <br>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </nav>

        <hr class="is-hidden-tablet">

        <div class="column has-text-centered">
          <p class="has-text-centered">
            &copy; {{new Date().getFullYear()}}<br>
            Christer Olsen
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'site-footer'
  }
</script>
