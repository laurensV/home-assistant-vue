// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  css: ['~/assets/styles/global.scss'],
  plugins: [{ src: '~/plugins/aos', mode: 'client' }],
  app: {
    head: {
      titleTemplate: '%s - Home Assistant',
      title: 'Home Assistant',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'has-navbar-fixed-top',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Home Assistant Vue Frontend',
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
  },
});
