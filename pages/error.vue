<template>
  <div class="container content has-text-centered">
    <h1>Oooops! An Error Seem to Have Occurred!</h1>
    <h2>┗┃・ ■ ・┃┛</h2>
    <p>I'm terribly sorry. I'll look into fixing it soonish.</p>
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
