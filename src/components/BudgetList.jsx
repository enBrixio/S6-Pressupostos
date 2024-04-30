import React, { useContext } from 'react';
import BudgetListItems from '../components/BudgetListItems';
import { MyContext } from '../context/MyContext';

function BudgetList() {
    const { formData } = useContext(MyContext); // Asegúrate de que este es el nombre correcto de la propiedad en tu contexto que contiene los datos actualizados.

    return (
        <form>
            
            {formData.map(item => (
                <BudgetListItems
                    key={item.id}
                    item={item} // Cambia 'func' por 'item' si eso hace más sentido según tus datos.
                />
            ))}
        </form>
    );
}

export default BudgetList;
