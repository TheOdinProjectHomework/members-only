import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import './index.css'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import { MessageProvider } from './context/MessageContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <MessageProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </MessageProvider>
  </UserProvider>
)
