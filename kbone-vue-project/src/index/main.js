import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import AAA from './AAA.vue'
import BBB from './BBB.vue'

// 添加ENV.vue组件，用于环境判断案例
import ENV from './ENV.vue'

// rem 和页面样式修改
window.onload = function() {
  document.documentElement.style.fontSize = document.documentElement.getBoundingClientRect().width / 16 + 'px'
  document.documentElement.style.backgroundColor = '#fffbe7'
}
window.onerror = (message, source, lineno, colno, error) => {
  console.log('window.onerror => ', message, source, lineno, colno, error)
};
window.addEventListener('error', evt => console.log('window.addEventListener(\'error\') =>', evt))

Vue.use(Router)

const router = new Router({
  mode: 'history', // 是否使用 history api
  routes: [
    { path: '/test/aaa', component: AAA },
    { path: '/test/bbb', component: BBB },

    // 添加路由
    { path: '/test/env', component: ENV }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})