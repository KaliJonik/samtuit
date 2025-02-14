// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr:true,
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-swiper'
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }


})
