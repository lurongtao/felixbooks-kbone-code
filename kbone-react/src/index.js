import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './components/counter'
import Todos from './components/todos/Todos'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Todos />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
