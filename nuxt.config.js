const isStatic = !!process.env.STATIC

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
    description: 'Homepage of Christer Olsen, a Norwegian web developer',
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
    extractCSS: true
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: { lang: 'en' },
    titleTemplate: '%s - Christer Olsen: Web Developer',
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' }
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'Homepage of Christer Olsen, a Norwegian web developer' },
      { name: 'theme-color', content: '#FB5607' },
      { hid: 'og:title', property: 'og:title', content: 'Christer Olsen: Web Developer' },
      { hid: 'og:description', property: 'og:description', content: 'Homepage of Christer Olsen, a Norwegian web developer' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.christerolsen.me/img/me-lg.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Christer Olsen: Web Developer' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://www.christerolsen.me/img/me-lg.png' },
      { name: 'robots', content: 'index, follow' }
    ]
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.christerolsen.me',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic
  },
  workbox: {
    handleFetch: isStatic
  }
}
