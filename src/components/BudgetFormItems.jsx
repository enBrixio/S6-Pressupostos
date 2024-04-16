import React, { useState, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import BudgetWebPages from './BudgetWebPages'; // Asegúrate de que la ruta de importación es correcta

function BudgetFormItems({ id, title, price, description }) {
  const [isCheck, setIsCheck] = useState(false);
  const { addPrice, removePrice } = useContext(MyContext);

  // No necesitas un estado separado para showWebPages si solo quieres que actúe basado en el checkbox de ID 3

  const handleCheckboxChange = (e) => {
      setIsCheck(e.target.checked);
      const priceValue = Number(price);
      if (e.target.checked) {
          addPrice(priceValue, id);

      } else {
          removePrice(priceValue, id);
      }
  };

  return (
    <div className='container mx-auto justify-center max-w-6xl'>
      <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
        <div className={`bg-white  p-4 rounded-3xl shadow-custom grid grid-cols-3 min-h-44 justify-center items-center`}>
          <div className={`col-span-1 flex flex-col justify-center ${isCheck === 3 ? ' h-80': ' h-44'} `}>  
            <h2 className='text-3xl font-semibold mx-5'>{title}</h2>
            <p className='mx-5'>{description}</p>
          </div>
          <div className={`col-span-1 flex justify-center items-center`}>  
            <p className='font-bold text-3xl'>{price}€</p>
          </div>
          <div className="col-span-1 flex flex-col justify-end items-center">  
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={isCheck}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                name='Añadir'
              />
              <span className='mx-5'>Añadir</span>
            </label>


          </div>
          <div className='col-span-3 flex flex-row justify-end'>
  {isCheck && id === 3 &&
    <div className=' mb-20 me-20'>
      <BudgetWebPages />
    </div>
  }
</div>

        </div>
      </div>
    </div>
  );
  
  
  
}

export default BudgetFormItems;



