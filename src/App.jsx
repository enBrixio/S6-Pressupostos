import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import BudgetPages from './components/BudgetPages';
import Footer from './components/Footer';
import Modal  from './components/Modal';



function App() {
  
  return (
    <>
    
      <Header />
      <Modal />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presupuestos" element={<BudgetPages />} />
      </Routes>
      <Footer />


    
    </>
    
  );
}

export default App;

