const isStatic = !!process.env.STATIC

module.exports = {
  css: [
    { src: './assets/style/bulma-alterations.scss', lang: 'sass' },
    { src: './assets/style/global.scss', lang: 'sass' }
  ],
  loading: {
    color: '#23d160'
  },
  manifest: {
    name: 'Christer Olsen: Web Developer',
    short_name: 'CO: Webdev',
    display: 'standalone',
    description: 'Christer Olsen is a freelance web developer from Norway.',
    orientation: 'any',
    theme_color: '#00bd7f',
    background_color: '#363636'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
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
    './plugins/components'
  ],
  head: {
    htmlAttrs: { lang: 'en_US' },
    title: 'Forsiden',
    titleTemplate: '%s - Christer Olsen: Web Developer',
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://www.christerolsen.me', type: 'text/html' }
    ],
    meta: [
      { name: 'title', content: 'Christer Olsen: Web Developer' },
      { name: 'description', content: 'Christer Olsen is a freelance web developer from Norway.' },
      { name: 'theme-color', content: '#00bd7f' },
      { property: 'og:title', content: 'Christer Olsen: Web Developer' },
      { property: 'og:description', content: 'Christer Olsen is a freelance web developer from Norway.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.christerolsen.me/logo.png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Christer Olsen: Web Developer' },
      { name: 'robots', content: 'noindex' }
    ]
  },
  generate: {
    async routes () {
      return []
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.christerolsen.me',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: []
  }
}
