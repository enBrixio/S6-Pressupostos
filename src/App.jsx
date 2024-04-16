import React, { useContext } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BudgetForm from './components/BudgetForm';
import BudgetTotal from './components/BudgetTotal';
import BudgetWepPages from './components/BudgetWebPages';
import { MyProvider, MyContext } from './context/MyContext';

function App() {
  const { showWebPages } = useContext(MyContext);  // Asume que MyContext provee un valor showWebPages

  return (
    <>
    
      <Header />
      <Banner />
      <BudgetForm />
      <BudgetTotal total={1200} />

    
    </>
    
  );
}

export default App;

