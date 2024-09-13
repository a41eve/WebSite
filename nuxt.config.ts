// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "WebSite",
      meta: [
        {
          name: "description",
          content: "Это страница WebSite",
        },
      ],
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "nuxt-file-storage",
  ],
  css: ["~/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_vars.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
