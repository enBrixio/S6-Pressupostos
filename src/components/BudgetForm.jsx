import React, { useContext } from 'react';
import BudgetFormItems from '../components/BudgetFormItems';
import { MyContext } from '../context/MyContext';


function BudgetForm() {
    const { data } = useContext(MyContext);

    return (
        <form>
            {data.map(item => (
                <BudgetFormItems
                    key={item.id}
                    item={item}
                />
            ))}
        </form>
    );
}

export default BudgetForm;

