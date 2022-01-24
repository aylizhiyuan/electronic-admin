import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './pages/App'

const render = (App: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
render(App)

if (module.hot) {
  console.log('是否执行了这个')
  module.hot.accept()
}
