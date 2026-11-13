import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Derive the router base from the actual browser URL. This supports both
// the GitHub Pages project path and the existing Netlify root domain.
const routerBase = window.location.pathname.startsWith('/Unisouk_biskra_v2')
  ? '/Unisouk_biskra_v2'
  : '/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><BrowserRouter basename={routerBase}><App /></BrowserRouter></React.StrictMode>
)
