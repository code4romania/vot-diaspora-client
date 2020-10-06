export default {
  env: {
    NUXT_ENV_API_URL:
      process.env.NUXT_ENV_API_URL || 'https://votdiaspora.ro/api',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'VotDiaspora',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Vot România este o platformă dezvoltată de Code for Romania care  simplifică pe înțelesul cetățenilor ghidul electoral al alegerilor locale, care vor avea loc la finalul lunii septembrie 2020.',
      },
      { property: 'og:title', content: 'Vot România' },
      {
        property: 'og:image',
        content: 'https://votdiaspora.ro/static/social/og_image.png',
      },
      {
        name: 'theme-color',
        content: '#352245',
      },
      {
        property: 'og:description',
        content:
          'Vot Diaspora este o platformă dezvoltată de Code for Romania care oferă rapid românilor din Diaspora informații despre cum pot vota la alegerile generale din decembrie 2020.',
      },
      { property: 'og:url', content: 'https://votdiaspora.ro' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' },
    ],
    script: [
      {
        src: 'https://js.api.here.com/v3/3.1/mapsjs-core.js',
      },
      {
        src: 'https://js.api.here.com/v3/3.1/mapsjs-service.js',
      },
      {
        src: 'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js',
      },
      {
        src: 'https://js.api.here.com/v3/3.1/mapsjs-ui.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/scss/style.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-142048447-2',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],
  i18n: {
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        name: 'EN',
        file: 'en-US.js',
      },
      {
        code: 'hu',
        name: 'HU',
        file: 'hu-HU.js',
      },
      {
        code: 'ro',
        name: 'RO',
        file: 'ro-RO.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ro',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [({ isServer }) => 'vue-typeahead-bootstrap'],
  },
}
