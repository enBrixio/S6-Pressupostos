import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Products from './components/product/Products.jsx'
import Banner from './components/banner/Banner.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Products />
    <Products />
    <Products />
  </React.StrictMode>,
)
