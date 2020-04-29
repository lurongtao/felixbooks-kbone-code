import Vue from 'vue'
import App from './App'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  window.onload = function() {
    if (process.env.isMiniprogram) {
      // 小程序
      document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 16 + 'px'
    } else {
      // Web 端
      document.documentElement.style.fontSize = document.documentElement.getBoundingClientRect().width / 16 + 'px'
    }
  }

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}