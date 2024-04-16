import React, { useContext } from 'react';
import { MyContext } from "../context/MyContext";

function BudgetTotal() {
    const { selectedPrices } = useContext(MyContext);  // Consumimos el contexto
    const total = selectedPrices.reduce((acc, price) => acc + price, 0);  // Calculamos la suma total

    return (
        <div className="container">
            <span className="my-10 flex justify-end me-72 text-3xl font-bold flex space-x-5">
                <h2 className="text-3xl mx-16">Preu Pressuposat:</h2>{total}€
            </span>
        </div>
    );
}

export default BudgetTotal;
