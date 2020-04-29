module.exports = {
  // 页面 origin，默认是 https://miniprogram.default
  origin: 'https://test.miniprogram.com',
  
  // 入口页面路由
  entry: '/test/env',
  
  // 页面路由，用于页面间跳转。其值是一个以页面名称作为 key 的对象，每项的值是该页面可以响应的路由
	router: {
		index: [
			'/test/aaa',
			'/test/bbb',
			'/test/env',
		],
  },
  
  // 特殊路由跳转
	redirect: {	
		notFound: 'index',	
		accessDenied: 'index',
  },
  
  // 构建输出配置
	generate: {
    /**
     * 注入全局变量，每一项为 [key, value] 的结构。构建时会将需要注入的全局变量声明在所有要执行的代码之前，以方便代码里直接使用。
     * 如果配置了 ['TEST_VAR_STRING', '\'miniprogram\'']，则会生成类似 var TEST_VAR_STRING = 'miniprogram' 的声明语句；
     * 不指定 value 的话，则会从 window 下读取，如 ['CustomEvent'] 则会生成类似 var CustomEvent = window.CustomEvent 的声明语句。
     */
		globalVars: [
      ['TEST_VAR_STRING', '\'miniprogram\''],
      ['TEST_VAR_NUMBER', '123'],
      ['TEST_VAR_BOOL', 'true'],
      ['TEST_VAR_FUNCTION', 'function() {return \'I am function\'}'],
			['TEST_VAR_OTHERS', 'window.document'],
			['open'],
    ],
    
    // 构建完成后是否自动安装小程序依赖。'npm'：使用 npm 自动安装依赖
		autoBuildNpm: 'npm',
  },
  
  // 小程序全局配置，参见 https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window
	app: {
		navigationBarTitleText: 'kbone-vue-project',
  },
  
  // 所有页面的全局配置
	global: {
		rem: true, // 是否支持 rem
    pageStyle: true, // 是否支持修改页面样式
  },
  
  // 项目配置，会被合并到 project.config.json 中
	projectConfig: {
		appid: '',
    projectname: 'kbone-vue-project',
  },
  
  // 包配置，会被合并到 package.json 中
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}