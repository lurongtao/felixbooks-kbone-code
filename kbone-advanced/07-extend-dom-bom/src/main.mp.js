import Vue from 'vue'
import App from './App'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  // 例子一：使用 window.$$extend 对 dom/bom 对象追加属性/方法
  window.$$extend('window.location', {
    testStr: 'I am location',
    testFunc() {
      console.log(`Hello, ${this.testStr}`)
    },
  })

  // 例子二：使用 window.$$getPrototype 获取 dom/bom 对象的原型
  const locationPrototype = window.$$getPrototype('window.location')
  console.log(locationPrototype)

  // 例子三：对 dom/bom 对象方法追加前置/后置处理
  const beforeAspect = function(...args) {
    // 在执行 window.location.testFunc 前被调用，args 为调用该方法时传入的参数
    console.log('执行 window.location.testFunc 前')
  }
  const afterAspect = function(res) {
    // 在执行 window.location.testFunc 后被调用，res 为该方法返回结果
    console.log('执行 window.location.testFunc 后')
  }
  window.$$addAspect('window.location.testFunc.before', beforeAspect)
  window.$$addAspect('window.location.testFunc.after', afterAspect)

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}