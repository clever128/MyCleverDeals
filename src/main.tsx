import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // <--- IMPORTANTE
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider> {/* <--- O SEGREDO ESTÁ AQUI */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)