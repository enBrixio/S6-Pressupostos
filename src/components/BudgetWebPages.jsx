import React, { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext'; // Importa el contexto

const BudgetWebPages = () => {
    const { addPrice, removePrice } = useContext(MyContext);
    const [numPages, setNumPages] = useState(0);
    const [numLanguages, setNumLanguages] = useState(0);

    // Función para manejar cambios en los inputs
    const handleInputChange = (setter) => (e) => {
      const newValue = parseInt(e.target.value, 10) || 0;
      setter(newValue);  // Actualiza el estado local
  };

    // Calcular y actualizar el total
    const updateTotal = () => {
        const newTotal = (numPages + numLanguages) * 30;
        addPrice(newTotal, 3);  // Ejemplo: suponiendo que "3" es el ID para WEB
    };

    return (
      <div className="container justify-end mt-20">
        <div className="flex items-center mb-4">
          <h1 className="font-serif">Nombre de Páginas</h1>
          <input 
              value={numPages} 
              onChange={handleInputChange(setNumPages)}
              maxLength={3} 
              className="text-xl font-semibold text-center mx-5 w-16 h-10 rounded-lg bg-white border-indigo-500/75 focus:border-indigo-500/100 border-2" 
              type="text" 
          />
        </div>
        <div className="flex items-center">
          <h1 className="font-serif">Nombre de Idiomas</h1>
          <input 
              value={numLanguages} 
              onChange={handleInputChange(setNumLanguages)}
              maxLength={3} 
              className="text-xl font-semibold text-center mx-4 w-16 h-10 rounded-lg bg-white border-indigo-500/75 active:border-indigo-500/100 border-2" 
              type="text" 
          />
        </div>
      </div>
    );
}

export default BudgetWebPages;

  