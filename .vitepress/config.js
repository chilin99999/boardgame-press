import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/boardgame-press',
  title: '簡評桌遊',
  description: '簡單扼要聊聊桌遊',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: '桌遊列表', link: '/' }],

    sidebar: [
      {
        text: '輕策',
        items: [
          { text: '得分沙拉', link: '/light/point-salad' },
          { text: '香料之路', link: '/light/century-spice-road' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    outlineTitle: '索引',
  },
});
