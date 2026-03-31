import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Main_Router from './Main_Router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main_Router/>
  </BrowserRouter>,
)
