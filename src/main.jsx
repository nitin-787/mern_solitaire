import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  // temporarily wrapping App in StrictMode to find potential problems
  <StrictMode>
    <App />
  </StrictMode>,
)
