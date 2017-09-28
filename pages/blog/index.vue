<template>
  <div class="container">
    <blog-post-top v-for="blogPost in res" :blogPost="blogPost" :key="`${blogPost.slug}`" class="small-vertical-section content"/>
  </div>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    asyncData: createGetData('blog'),
    head: {
      title: 'Blog - Christer Olsen: Web Developer',
      link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.christerolsen.me/blog' } ],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Blog - Christer Olsen: Web Developer' }
      ]
    }
  }
</script>
