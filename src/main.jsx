import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.jsx'
import './index.css'
import Services from './components/services/Services.jsx'
import Banner from './components/banner/Banner.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Services />
    <Services />
    <Services />
  </React.StrictMode>,
)
