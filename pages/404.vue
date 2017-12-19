<template>
  <div class="container content  has-text-centered">
    <h1>404 - Page Not Found</h1>
    <h2>¯\_(ツ)_/¯</h2>
    <p>The page you're looking for doesn't exist...</p>
    <p>Click <nuxt-link to="/">here</nuxt-link> to go home.</p>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Frontpage',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me' } ]
    }
  }
</script>
