module.exports = {
  title: '打代码啦秃头',
  description: '爱编程、爱音乐、爱生活',
  locales: { '/': { lang: 'zh' } },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    huawei: false,
    // 自动形成侧边导航
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/CaresWe', icon: 'reco-github' },
    ],
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    sidebarDepth: 3,
    // 文档更新时间
    lastUpdated: false,
    authorAvatar: '/avatar.jpg',
    author: '秃头',
    startYear: '2020',
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 评论
    // valineConfig: {
    //   appId: 'KzUoq3F8YsCkQ58nNR3XQtj1-gzGzoHsz',
    //   appKey: 'Q1uPUMv153GlBbfsVa8xlgY1',
    //   placeholder: '欢迎交流 😁～',
    //   avatar: 'wavatar',
    //   notify: true,
    // },
    record: '粤ICP备19149697号',
    recordLink: 'http://beian.miit.gov.cn/',
    //
    friendLink: [
      {
        title: 'bysec',
        desc: '个人技术博客',
        logo: "http://api.btstu.cn/sjtx/api.php?format=images",
        link: 'http://www.bysec.cn/'
      },
      {
        title: '小城技术博客',
        desc: '个人技术博客',
        logo: "https://www.xcio.cn/usr/uploads/2019/11/headImg.jpg",
        link: 'https://www.xcio.cn/'
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'ribbon', // 彩带背景
    'cursor-effects',
  ],
};
