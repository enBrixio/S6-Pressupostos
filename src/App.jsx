import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import BudgetForm from './components/BudgetForm'
import BudgetTotal from './components/BudgetTotal'
import { useContext } from 'react'
import { MyContext, MyProvider } from './context/MyContext'
import BudgetWepPages from './components/BudgetWepPages'


function App () {
  const myContext = useContext(MyContext)
    return (
    <>
    <MyProvider>
    <Header />
    <Banner />
    <BudgetForm />
    <BudgetTotal total={1200}/>
    <BudgetWepPages />
    </MyProvider>
 
    </>
  )
}
export default App