import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import BudgetForm from './components/BudgetForm/BudgetForm'
import BudgetTotal from './components/BudgetTotal/BudgetTotal'
import { useContext } from 'react'
import { MyContext, MyProvider } from './context/MyContext'


function App () {
  const myContext = useContext(MyContext)
    return (
    <>
    <MyProvider>
    <Header />
    <Banner />
    <BudgetForm />
    <BudgetTotal total={1200}/>
    </MyProvider>
 
    </>
  )
}
export default App