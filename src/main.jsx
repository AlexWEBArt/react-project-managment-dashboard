import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StatsProvider from './provider/statsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatsProvider>
      <App />
    </StatsProvider>
  </React.StrictMode>,
)
