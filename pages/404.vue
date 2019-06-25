<template>
  <div class="hero is-medium">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1>404 - Page Not Found</h1>
        <h2>¯\_(ツ)_/¯</h2>
        <p>The page you're looking for doesn't exist...</p>
        <p>Click <nuxt-link to="/">here</nuxt-link> to go home.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: '404',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me/404' } ]
    }
  }
</script>
