const isStatic = !!process.env.STATIC

const blogPosts = require('./static/data/blog.json')

module.exports = {
  css: [
    { src: './assets/style/index.scss', lang: 'sass' }
  ],
  loading: {
    color: '#48E826'
  },
  manifest: {
    name: 'Christer Olsen: Web Developer',
    short_name: 'CO: Webdev',
    display: 'standalone',
    description: 'Homepage and blog of Christer Olsen, a Norwegian web developer',
    orientation: 'any',
    theme_color: '#FB5607',
    background_color: '#363636'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/google-analytics', { ua: 'UA-107229265-2' } ]
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: [
      '~/assets/img/placeholder-2-1.svg',
      'whatwg-fetch'
    ]
  },
  plugins: [
    './plugins/components',
    './plugins/disqus',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: { lang: 'en' },
    titleTemplate: '%s - Chrsiter Olsen: Web Developer',
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://www.christerolsen.me', type: 'text/html' }
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'Homepage and blog of Christer Olsen, a Norwegian web developer' },
      { name: 'theme-color', content: '#FB5607' },
      { hid: 'og:title', property: 'og:title', content: 'Christer Olsen: Web Developer' },
      { hid: 'og:description', property: 'og:description', content: 'Homepage and blog of Christer Olsen, a Norwegian web developer' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.christerolsen.me/icon.png' },
      { property: 'og:locale', content: 'en' },
      { property: 'og:site_name', content: 'Christer Olsen: Web Developer' },
      { name: 'robots', content: 'index, follow' }
    ]
  },
  generate: {
    async routes () {
      return [
        {
          route: '/blog',
          payload: blogPosts
        },
        ...blogPosts.map(({ slug }) => {
          return {
            route: `/blog/${slug}`,
            payload: require(`./static/data/${slug}.json`)
          }
        })
      ]
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.christerolsen.me',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: [
      ...blogPosts.map(blogPost => `/blog/${blogPost.slug}`)
    ]
  },
  workbox: {
    handleFetch: isStatic
  }
}
