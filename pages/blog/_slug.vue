<template>
  <article class="container content">
    <header class="section">
      <blog-post-top :blogPost="res" :link="false"/>
    </header>

    <section class="section" v-html="res.content"/>

    <footer class="section has-text-centered">
      <span>Feel like sharing?</span>
      <br>
      <br>
      <div class="level is-mobile has-text-primary">
        <span class="level-item">
          <a v-clipboard:copy="url">
            Copy URL
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://twitter.com/home?status=${urlEncoded}`" target="noopener" rel="nofollow">
            Twitter
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`" target="noopener" rel="nofollow">
            Facebook
          </a>
        </span>

        <span class="level-item">
          <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlEncoded}&title=${titleEncoded}`" target="noopener" rel="nofollow">
            LinkedIn
          </a>
        </span>
      </div>
      <div class="section has-text-centered">
        <button v-if="!showComments" class="button is-primary is-large" @click="toggleComments">Show Comments</button>
        <vue-disqus v-if="showComments" shortname="christerolsen-me" :identifier="res.slug" :url="`https://www.christerolsen.me/blog/${this.res.slug}`"/>
      </div>
    </footer>
  </article>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    computed: {
      url () {
        return `https://www.christerolsen.me/blog/${this.res.slug}`
      },
      urlEncoded () {
        return encodeURIComponent(`https://www.christerolsen.me/blog/${this.res.slug}`)
      },
      titleEncoded () {
        return encodeURIComponent(this.res.title)
      }
    },
    methods: {
      toggleComments () {
        this.showComments = true
      }
    },
    data () {
      return { showComments: false }
    },
    head () {
      return {
        title: `${this.res.title} - Blog - Christer Olsen: Web Developer`,
        link: [ { rel: 'canonical', href: `https://www.christerolsen.me/blog/${this.res.slug}` } ],
        meta: [
          { name: 'title', content: `${this.res.title} - Blog - Christer Olsen: Web Developer` },
          { property: 'og:title', content: `${this.res.title} - Blog - Christer Olsen: Web Developer` },
          { property: 'og:description', content: this.res.excerpt },
          { property: 'og:image', content: this.res.image.url },
          { property: 'og:type', content: 'article' }
        ]
      }
    },
    asyncData: createGetData()
  }
</script>
