import webpack from 'webpack'

const { microCmsApiKey, microCmsApiDomain } = process.env

export default {
  target: 'static',
  env: {
    microCmsApiKey,
    microCmsApiDomain
  },
  // Nuxt 2: use ssr flag instead of deprecated mode
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    base: { href: process.env.ROUTER_BASE || '/' },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: (process.env.ROUTER_BASE || '/') + 'favicon.ico' }
    ],
    script: [
      // {
      //   src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      //   integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
      //   crossorigin: 'anonymous'
      // },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        integrity: 'sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/scss/common.scss', lang: 'scss' },
    { src: '~assets/scss/reset.scss', lang: 'scss' },
    { src: '~assets/scss/add.scss', lang: 'scss' }
    // { src: '~assets/scss/neumorphism.css', lang: 'scss' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [
      'vue-p5'
    ],
    extend(config) {
      config.node = {
        fs: 'empty'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  },
  router: {
    base: process.env.ROUTER_BASE || '/'
  },
  generate: {
    // SPA fallback for GitHub Pages (serves 404.html)
    fallback: true
  },
  googleAnalytics: {
    id: 'UA-165351964-2'
  }
}
