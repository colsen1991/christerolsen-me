const isProduction = process.env.TARGET_ENV === 'production'

module.exports = {
  target: 'static',
  generate: {
    fallback: true
  },
  css: [
    {src: './assets/style/index.scss', lang: 'sass'}
  ],
  loading: {
    color: '#48E826'
  },
  modules: isProduction
    ? ['@nuxtjs/sitemap', ['@nuxtjs/google-analytics', {id: 'UA-107229265-2'}]]
    : undefined,
  build: {
    extractCSS: isProduction
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: {lang: 'en'},
    title: 'Christer Olsen: Web Developer',
    link: [
      {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'author', href: '/humans.txt'}
    ],
    meta: [
      {hid: 'charset', charset: 'utf-8'},
      {hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'theme-color', content: '#FB5607'},
      {hid: 'og:title', property: 'og:title', content: 'Christer Olsen: Web Developer'},
      {hid: 'description', name: 'description', content: 'Homepage of Christer Olsen, a Norwegian web developer'},
      {hid: 'og:description', property: 'og:description', content: 'Homepage of Christer Olsen, a Norwegian web developer'},
      {hid: 'og:image', property: 'og:image', content: 'https://www.christerolsen.me/img/me-lg.png'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'Christer Olsen: Web Developer'},
      {name: 'robots', content: 'index, follow'}
    ]
  },
  sitemap: {
    hostname: 'https://www.christerolsen.me'
  }
}
