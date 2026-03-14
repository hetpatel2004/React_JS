import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Main_rought from './Main_rought.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Main_rought/>
  </BrowserRouter>
)

