import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const genItem = (dir) => {
  let navList = []
  let loaclPath = path.resolve(__dirname, '..') + '/' + dir
  let dirs = fs.readdirSync(loaclPath)
  dirs.forEach((item) => {
    let fullPath = path.join(loaclPath, item)
    let stats = fs.statSync(fullPath)
    subItem = item.substring(0, item.lastIndexOf('.'))
    if ('index' === subItem) return
    if (stats.isDirectory()) {
    } else {
      let tempLink = {
        text: subItem,
        link: '/' + dir + '/' + subItem
      }
      navList.push(tempLink)
    }
  })
  return navList
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QianYanz's Blog",
  description: 'nothing to say',
  lang: 'zh',
  head: [['link', { rel: 'icon', href: '/huaji2.png' }]],
  themeConfig: {
    logo: '/huaji2.png',
    siteTitle: 'Hello World',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '周报', link: '/weekly/' }
    ],
    sidebar: [
      {
        collapsed: true,
        text: '文章',
        items: genItem('posts')
      },
      {
        collapsed: true,
        text: '周报',
        items: genItem('weekly')
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/qianyanz' }],

    footer: {
      message: '这个信息只能是静态的，需要重写',
      copyright: 'Copyright © '
    }
  }
})
