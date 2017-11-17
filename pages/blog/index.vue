<template>
  <div class="container">
    <section v-for="blogPost in res" :key="`${blogPost.slug}`" class="card small-vertical-section">
      <nuxt-link class="card-image" :to="`/blog/${blogPost.slug}`">
        <img width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" v-lazy="blogPost.image.url"/>
      </nuxt-link>

      <div class="card-content content">
        <nuxt-link :to="`/blog/${blogPost.slug}`">
          <h1 class="title">{{blogPost.title}}</h1>
        </nuxt-link>

        <p>{{blogPost.excerpt}}</p>

        <div class="level is-mobile">
          <div class="tags level-left is-marginless">
        <span v-for="tag in blogPost.tags.split(',')" :key="`${blogPost.slug}-${tag}`" class="tag is-info">
          {{tag}}
        </span>
          </div>
          <time class="level-right" :datetime="blogPost.updatedAt">
            {{new Date(blogPost.updatedAt).toLocaleDateString()}}
          </time>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    asyncData: createGetData('blog'),
    head: {
      title: 'Blog',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me/blog' } ],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Blog - Christer Olsen: Web Developer' }
      ]
    }
  }
</script>
