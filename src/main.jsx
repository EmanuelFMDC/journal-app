import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournaApp } from './JournaApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JournaApp/>
    </BrowserRouter>
  </StrictMode>,
)
