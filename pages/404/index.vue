<template>
  <div class="container content has-text-centered">
    <h1>404 - Page Not Found</h1>
    <h2>¯\_ಠ_ಠ_/¯</h2>
    <p class="is-size-4">The link you've entered or followed doesn't seem to exist.</p>
    <p>Click <nuxt-link to="/">here</nuxt-link> to return home...</p>
  </div>
</template>

<script>
  export default {
    head: {
      title: '404 - Page Not Found',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me' } ]
    }
  }
</script>
