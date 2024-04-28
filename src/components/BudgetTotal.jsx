import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function BudgetTotal() {
    
const {resultado} = useContext(MyContext);

    return (
        <div className="container">
        <span className="my-10 justify-end me-72 text-3xl font-bold flex space-x-5">
            <h2 className="text-3xl mx-16">Preu Pressuposat:</h2>{resultado}€  
        </span>
    </div>
);
    
}

export default BudgetTotal;

