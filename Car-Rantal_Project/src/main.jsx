import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Main_route from './Pages/Main_route.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Main_route/>
  </BrowserRouter>,
)
