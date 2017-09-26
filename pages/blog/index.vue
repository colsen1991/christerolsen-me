<template>
  <div class="container">
    <blog-post-top v-for="blogPost in res" :blogPost="blogPost" :key="`${blogPost.slug}`" class="section content"/>
  </div>
</template>

<script>
  import createGetData from '../../utils/data'

  export default {
    asyncData: createGetData('blog'),
    head: {
      title: 'Blog - Christer Olsen: Web Developer',
      link: [ { rel: 'canonical', href: 'https://www.christerolsen.me/blog' } ],
      meta: [
        { name: 'title', content: 'Blog - Christer Olsen: Web Developer' },
        { property: 'og:title', content: 'Blog - Christer Olsen: Web Developer' }
      ]
    }
  }
</script>
