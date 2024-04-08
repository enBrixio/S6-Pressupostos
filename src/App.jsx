import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import BudgetForm from './components/BudgetForm/BudgetForm'
import BudgetTotal from './components/BudgetTotal/BudgetTotal'

function App () {
  
    return (
    <>
    <Header />
    <Banner />
    <BudgetForm />
    <BudgetTotal total={1200}/>
    </>
  )
}
export default App