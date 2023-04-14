import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import 'bulma/css/bulma.min.css'
import AppRoute from'@/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRoute />
    </BrowserRouter>
  </React.StrictMode>,
)

//memo1
//import { BrowserRouter } from 'react-router-dom': Imports the BrowserRouter component from the react-router-dom library, 
//which is used to set up routing in the application.

//memo2
//The document.getElementById('root') is used to specify the DOM element where the root should be created. 
//The render function is then called on the created root, and the BrowserRouter component with the AppRoute component 
//as its child is passed as the content to be rendered. The React.StrictMode component is also used as a wrapper around the content, 
//which enables strict mode for the application to catch potential issues and warnings during development.