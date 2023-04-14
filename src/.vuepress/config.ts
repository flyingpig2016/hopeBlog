import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Flyingpig",
      description: "A blog demo for flyingpig",
    },
    "/": {
      lang: "zh-CN",
      title: "Flyingpig",
      description: "Flyingpig 的博客演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
