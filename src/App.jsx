import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import BudgetPages from './components/BudgetPages';
import { MyProvider } from './context/MyContext';
import { MyContext } from './context/MyContext';


function App() {
  
  return (
    <>
    
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presupuestos" element={<BudgetPages />} />
      </Routes>

    
    </>
    
  );
}

export default App;

