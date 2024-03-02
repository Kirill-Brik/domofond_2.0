// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  devServer: {
    port: 5000,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/dark.scss" as local;',
        },
      },
    },
  },

  css: ["reset-css", "~/assets/styles/main.scss"],

  modules: [
    "@nuxtjs/color-mode",
    "@element-plus/nuxt",
    [
      "unplugin-icons/nuxt",
      {
        /* options */
      },
    ],
    '@nuxtjs/strapi',
    '@pinia/nuxt'
  ],

  colorMode: {
    classSuffix: "",
  },

  elementPlus: {
    importStyle: "scss",
    themes: ["dark"],
  },

  strapi: {
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    }
  }
});
