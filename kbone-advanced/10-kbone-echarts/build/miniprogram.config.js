module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		index: ['/'],
		bar: ['/bar'],
		scatter: ['/scatter'],
		pie: ['/pie'],
		line: ['/line'],
		funnel: ['/funnel'],
		gauge: ['/gauge'],
		k: ['/k'],
		radar: ['/radar'],
		heatmap: ['/heatmap'],
		tree: ['/tree'],
		treemap: ['/treemap'],
		sunburst: ['/sunburst'],
		map: ['/map'],
		graph: ['/graph'],
		boxplot: ['/boxplot'],
		parallel: ['/parallel'],
		sankey: ['/sankey'],
		themeriver: ['/themeriver'],
	},
	redirect: {		
		notFound: 'index',		
		accessDenied: 'index',
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
    projectname: 'kbone-echarts',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}