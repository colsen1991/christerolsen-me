<template>
  <article class="container content">
    <header class="small-vertical-section">
      <img width="100%" :title="res.image.title" :alt="res.image.alt" v-lazy="res.image.url"/>
      <h1 class="title">{{res.title}}</h1>
    </header>

    <section class="small-vertical-section" v-html="res.content">
      <p>{{res.excerpt}}</p>
    </section>

    <footer class="small-vertical-section has-text-centered">
      <div class="small-vertical-section level is-mobile">
        <div class="tags level-left is-marginless">
        <span v-for="tag in res.tags.split(',')" :key="`${res.slug}-${tag}`" class="tag is-info">
          {{tag}}
        </span>
        </div>
        <time class="level-right" :datetime="res.updatedAt">
          {{new Date(res.updatedAt).toLocaleDateString()}}
        </time>
      </div>
      <span>Feel like sharing?</span>
      <div class="level small-vertical-section">
        <span class="level-item">
          <a :href="`https://twitter.com/home?status=${urlEncoded}`" target="_blank" rel="nofollow noopener">Twitter</a>
        </span>

        <span class="level-item">
          <a :href="`https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`" target="_blank" rel="nofollow noopener">Facebook</a>
        </span>

        <span class="level-item">
          <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${urlEncoded}&title=${titleEncoded}`" target="_blank" rel="nofollow noopener">LinkedIn</a>
        </span>
      </div>
      <div class="small-vertical-section has-text-centered">
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
        title: `${this.res.title} - Blog`,
        link: [ { hid: 'canonical', rel: 'canonical', href: `https://www.christerolsen.me/blog/${this.res.slug}` } ],
        meta: [
          { hid: 'description', name: 'description', content: this.res.excerpt },
          { hid: 'og:title', property: 'og:title', content: this.res.title },
          { hid: 'og:description', property: 'og:description', content: this.res.excerpt },
          { hid: 'og:image', property: 'og:image', content: this.res.image.url },
          { hid: 'og:type', property: 'og:type', content: 'article' }
        ]
      }
    },
    asyncData: createGetData()
  }
</script>
