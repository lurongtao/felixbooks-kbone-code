module.exports = {
  origin: 'https://test.miniprogram.com',
  entry: '/',
  router: {
    page1: ['/a'],
    page2: ['/b'],
    page3: ['/c'],
    page4: ['/d/:id'],
  },
  redirect: {
    notFound: 'page1',
    accessDenied: 'page1',
  },
  generate: {
    // 分包
    subpackages: {
      package1: ['page2'],
      package2: ['page3', 'page4'],
    },
    // 分包预加载
    preloadRule: {
      page2: {
        network: 'all',
        packages: ['package2'],
      },
    },
    autoBuildNpm: 'npm'
  },
  app: {
    navigationBarTitleText: 'miniprogram-project',
  },
  projectConfig: {
    appid: '',
    projectname: 'kbone-demo7',
  },
  packageConfig: {
    author: 'wechat-miniprogram',
  },
}