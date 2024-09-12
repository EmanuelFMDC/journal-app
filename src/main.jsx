import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournaApp } from './JournaApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <JournaApp/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
