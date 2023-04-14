import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'bulma/css/bulma.min.css'
import AppRoute from'@/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
)
