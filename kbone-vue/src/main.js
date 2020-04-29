import Vue from 'vue'
import Todos from './Todos.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(Todos),
})
