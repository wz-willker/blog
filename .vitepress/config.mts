import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "willker 的小站",
  description: "一个个人博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '索引', link: '/link' }
    ],

    sidebar: [
      {
        text: '博客',
        items: [
          { text: '你好世界', link: '/blogs/hello-world' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hiruocha' }
    ]
  },
  cleanUrls: true
})
