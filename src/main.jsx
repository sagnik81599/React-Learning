import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvide } from './ContextApi/Globalvariable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GlobalProvide>
     <App />
  </GlobalProvide>

  </StrictMode>,
)
