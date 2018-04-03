<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-half is-one-third-fullhd is-flex has-centered direction-column">
        <figure class="image is-max-256x256-fullhd is-max-384x384">
          <img v-lazy="'/img/me.png'" alt="Portrait of me - Christer Olsen" title="The developer himself">
        </figure>
        <h1 class="title is-marginless">Chris Olsen</h1>
        <h2 class="title is-marginless">Web Developer</h2>
      </div>
      <div class="column is-flex has-centered direction-column">
        <div>
          <p>
            As mentioned; the name's Chris!
          </p>
          <p>
            I’m a Norwegian self-employed web developer, beer enthusiast, and traveller.
          </p>
          <p>
            I have a <span class="has-text-info">bachelor’s degree</span> in software engineering, as well as 2 years of experience in the field. VINDIR is the name of my company, and the website can be found <a href="https://www.vindir.no" target="_blank" rel="noopener nofollow">here</a> (in Norwegian).
          </p>
          <p>
            Technologies I've worked with includes <span class="has-text-info">React</span>, Backbone.js, <span class="has-text-info">Vue.js</span> w/Nuxt.js, jQuery, <span class="has-text-info">Node.js</span>
            w/Express, <span class="has-text-info">webpack</span>, Babel, npm, Java, document and relational <span class="has-text-info">databases</span>. Git, HTML, CSS, and vanilla JavaScript goes without saying, but I'll mention it anyway.
          </p>
          <p>
            Finished personal projects consists of this website, as well as <a href="https://www.beeroclock.site" target="_blank" rel="noopener nofollow">The Beer O’Clock Clock</a>.
            But my GitHub profile is home to plenty of half-finished and dead projects.
          </p>
          <p>
            Sounds interesting? Or just feeling lonely? Anyway; let's talk! Contact info in the footer!
          </p>
        </div>
      </div>
    </div>
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
