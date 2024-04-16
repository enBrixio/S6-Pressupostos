import React, { useContext } from 'react';
import BudgetFormItems from './BudgetFormItems';
import BudgetWebPages from './BudgetWebPages';
import { dataBudget } from '../data/dataBudget';
import { MyContext } from '../context/MyContext'; // Importar MyContext

function BudgetForm() {
    const { showWebPages } = useContext(MyContext); // Usar useContext para acceder al estado

    return (
        <form>
            {dataBudget.map(item => (
                <BudgetFormItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                />
            ))}
        </form>
    );
}

export default BudgetForm;

