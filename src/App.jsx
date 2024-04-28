import React, { useContext } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BudgetForm from './components/BudgetForm';
import BudgetTotal from './components/BudgetTotal';


function App() {
  
  return (
    <>
    
      <Header />
      <Banner />
      <BudgetForm />
      <BudgetTotal/>

    
    </>
    
  );
}

export default App;

