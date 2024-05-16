// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/destyle.css@2.0.2/destyle.min.css'
        }
      ]
    }
  },
  googleFonts: {
    families: {
      Roboto: true, // specify the font family you want to use
      // You can add more fonts here
    }
  },
  css: [
    '~/styles/style.css'
  ]
})
