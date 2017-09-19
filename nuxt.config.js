const isStatic = !!process.env.STATIC

module.exports = {
  css: [
    { src: './assets/style/other.scss', lang: 'sass' },
    { src: './assets/style/global.scss', lang: 'sass' }
  ],
  loading: {
    color: '#23d160'
  },
  manifest: {
    name: 'Christer Olsen - Web Developer',
    short_name: 'CO - Webdev',
    display: 'standalone',
    description: 'Christer Olsen is a freelance web developer from Norway.',
    orientation: 'any',
    theme_color: '#fff'
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
    extractCSS: true,
    vendor: [
      'whatwg-fetch'
    ]
  },
  plugins: [
    './plugins/components'
  ],
  head: {
    htmlAttrs: { lang: 'en_US' },
    title: 'Forsiden',
    titleTemplate: '%s - Christer Olsen - Web Developer',
    script: [ { src: 'https://use.fontawesome.com/992cf8b5f9.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://www.christerolsen.me', type: 'text/html' }
    ],
    meta: [
      { name: 'title', content: 'Christer Olsen - Web Developer' },
      { name: 'description', content: 'Christer Olsen is a freelance web developer from Norway.' },
      { name: 'theme-color', content: '#fff' },
      { property: 'og:title', content: 'Christer Olsen - Web Developer' },
      { property: 'og:description', content: 'Christer Olsen is a freelance web developer from Norway.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.christerolsen.me/logo.png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Christer Olsen - Web Developer' },
      { name: 'robots', content: 'noindex' /* TODO Change me and static/robots.txt before prod */ }
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
