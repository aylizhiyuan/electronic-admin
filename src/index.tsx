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
  module.hot.accept()
}
