module.exports = {	
	origin: 'https://test.miniprogram.com',	
	generate: {
		// 构建完成后是否自动安装小程序依赖。'npm'：使用 npm 自动安装依赖
		autoBuildNpm: 'npm'
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	global: {
		share: true,
	},
	projectConfig: {
		appid: '',
    projectname: 'miniprogram-project',
	},
	packageConfig: {
		author: 'Felixlu',
	}
}