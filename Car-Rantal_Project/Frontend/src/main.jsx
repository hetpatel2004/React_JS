import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main_route from './Pages/Main_route.jsx'
import { Provider } from 'react-redux'
import { store } from './Pages/redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
      <Main_route/>
  </Provider>
  </BrowserRouter>,
)
