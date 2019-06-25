<template>
  <div class="hero is-medium">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1>Oooops! An Error Seem to Have Occurred!</h1>
        <h2>┗┃・ ■ ・┃┛</h2>
        <p>I'm terribly sorry. I'll look into fixing it soonish.</p>
        <p>Click <nuxt-link to="/">here</nuxt-link> to go home.</p>
      </div>
    </div>
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
