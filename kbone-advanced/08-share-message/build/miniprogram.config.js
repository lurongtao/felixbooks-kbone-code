module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		page1: ['/'],
		page2: ['/page2'],
		page3: ['/page3'],
		page4: ['/page4'],
	},	
	redirect: {		
		notFound: 'page1',		
		accessDenied: 'page1',
  },
  generate: {
		// 构建完成后是否自动安装小程序依赖。'npm'：使用 npm 自动安装依赖
		autoBuildNpm: 'npm'
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	projectConfig: {
		appid: '',
    projectname: 'kbone-demo22',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}