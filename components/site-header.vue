<template>
  <div class="nav">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="nav-item">
          <img src="~/assets/img/logo-full.png" alt="Christer Olsen" title="Logo - Christer Olsen">
        </nuxt-link>
      </div>

      <nav class="nav-right">
        <nuxt-link to="/blog" class="nav-item">Blog</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'site-header'
  }
</script>
