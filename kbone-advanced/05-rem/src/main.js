import Vue from 'vue'
import App from './App'

window.onload = function() {
  if (process.env.isMiniprogram) {
    // 小程序
    document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 16 + 'px'
  } else {
    // Web 端
    document.documentElement.style.fontSize = document.documentElement.getBoundingClientRect().width / 16 + 'px'
  }
}

new Vue({
  el: '#app',
  render: h => h(App)
})