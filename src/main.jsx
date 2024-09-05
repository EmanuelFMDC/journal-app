import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournaApp } from './JournaApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JournaApp/>
  </StrictMode>,
)
