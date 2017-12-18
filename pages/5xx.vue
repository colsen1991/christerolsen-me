<template>
  <div class="container content has-text-centered">
    <h1>Wops! An Error Occured!</h1>
    <h2>¯\_(ツ)_/¯</h2>
    <p class="is-size-4">Rest assured this won't happen too often...</p>
    <p>Click <nuxt-link to="/">here</nuxt-link> to return home...</p>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Error',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me' } ]
    }
  }
</script>
