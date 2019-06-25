<template>
  <div class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-one-third-fullhd is-flex has-centered direction-column has-text-centered content">
            <figure class="image is-max-256x256-fullhd is-max-384x384">
              <img v-lazy="'/img/me.png'" alt="Portrait of me - Christer Olsen" title="The developer himself">
            </figure>
            <h1 class="title is-marginless">Chris Olsen</h1>
            <h2 class="title is-marginless">Web Developer</h2>
          </div>
          <div class="column content">
            <p>
              As mentioned; the name's Chris!
            </p>
            <p>
              I’m a Norwegian self-employed web developer, beer enthusiast, and traveller.
            </p>
            <p>
              I have a <span class="has-text-info">bachelor’s degree</span> in software engineering, as well as {{new Date().getFullYear() - 2014}} years of
              experience in the field. Vindir is the name of my company, and the website can be found <a href="https://www.vindir.no" target="_blank" rel="noopener nofollow">here</a> (in Norwegian).
              I'm also a co-founder of <a href="http://www.chatrobot.no" target="_blank" rel="noopener nofollow">Chatrobot</a> - a company in development - and a part-time employee at <a href="https://www.companycast.no" target="_blank" rel="noopener nofollow">CompanyCast</a>.
            </p>
            <p>
              Technologies and tools that I've worked with includes <span class="has-text-info">React</span>, Backbone.js, <span
              class="has-text-info">Vue.js</span> w/Nuxt.js, jQuery, <span class="has-text-info">Node.js</span>
              w/Express, <span class="has-text-info">webpack</span>, Babel, npm, Java, document and relational <span
              class="has-text-info">databases</span>, Botkit.ai, and several others.
              Git, HTML, CSS, and vanilla JavaScript goes without saying, but there you go.
            </p>
            <p>
              Finished personal projects consists of this website, as well as <a href="https://www.beeroclock.site" target="_blank" rel="noopener nofollow">The Beer O’Clock Clock</a>.
              My GitHub profile is also home to plenty of projects in various states. Lastly I have a good handful of closed source projects
              connected to my company, and the link to each one can be found <a href="https://www.vindir.no/referanser" target="_blank" rel="noopener, nofollow">here</a>.
            </p>
            <p>
              Sounds interesting? Or just feeling lonely? Anyway; let's talk! Contact info in the footer!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      link: [{hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me'}]
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
