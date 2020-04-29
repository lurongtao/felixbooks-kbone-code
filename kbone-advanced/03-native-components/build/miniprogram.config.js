module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		index: [
			'/',
		],
	},	
	redirect: {		
		notFound: 'index',		
		accessDenied: 'index',
	},
	generate: {
    appWxss: 'none',
    // 构建完成后是否自动安装小程序依赖。'npm'：使用 npm 自动安装依赖
		autoBuildNpm: 'npm'
	},
	runtime: {
		// wxComponent: 'noprefix',
    wxComponent: 'default'
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},	
	projectConfig: {
		appid: '',
    projectname: 'native-components',
	},	
	packageConfig: {
		author: 'Felixlu',
	},
}