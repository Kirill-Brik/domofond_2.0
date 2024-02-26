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
          additionalData: '@use "~/assets/styles/variables.scss" as element;',
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
  ],

  colorMode: {
    classSuffix: "",
  },

  elementPlus: {
    importStyle: "scss",
    themes: ["dark"],
  },
});