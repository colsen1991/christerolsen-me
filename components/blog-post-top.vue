<template>
  <div>
    <nuxt-link :to="`/blog/${blogPost.slug}`">
      <h1 class="title">{{blogPost.title}}</h1>
    </nuxt-link>

    <nuxt-link v-if="link" :to="`/blog/${blogPost.slug}`">
      <img width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" v-lazy="blogPost.image.url"/>
    </nuxt-link>
    <img v-if="!link" width="100%" :title="blogPost.image.title" :alt="blogPost.image.alt" v-lazy="blogPost.image.url"/>

    <div class="level is-mobile">
      <div class="tags level-left is-marginless">
        <span v-for="tag in blogPost.tags.split(',')" :key="`${blogPost.slug}-${tag}`" class="tag is-info">
          {{tag}}
        </span>
      </div>
      <time class="level-right" :datetime="blogPost.updatedAt">
        {{date}}
      </time>
    </div>

    <p>{{blogPost.excerpt}}</p>
  </div>
</template>

<script>
  export default {
    name: 'blog-post-top',
    computed: {
      date () {
        const date = new Date(this.blogPost.updatedAt)

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      }
    },
    props: {
      blogPost: {
        type: Object,
        required: true
      },
      link: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
