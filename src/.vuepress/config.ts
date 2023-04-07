import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Flyingpig",
      description: "A blog demo for flyingpig",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Flyingpig",
      description: "Flyingpig 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
