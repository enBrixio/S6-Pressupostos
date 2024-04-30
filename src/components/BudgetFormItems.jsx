import { useContext } from 'react';
import BudgetWebPages from '../components/BudgetWebPages'
import { MyContext } from '../context/MyContext';
import { useInputs } from '../hooks/useInputs';

function BudgetFormItems({ item }) {
  const {
    checkedItems, updateItemCheck, data, inputFunction
  } = useContext(MyContext);
  

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    updateItemCheck(item.id, item.price, isChecked);
    inputFunction(item.id, isChecked);
  };


  return (
    <div className='container mx-auto justify-center max-w-6xl'>
      <div className='grid grid-cols-1 gap-4 mt-5 mx-20 justify-center'>
        <div className={`bg-white  p-4 rounded-3xl shadow-custom grid grid-cols-3 min-h-44 justify-center items-center`}>
          <div className={`col-span-1 flex flex-col justify-center  `}>  
            <h2 className='text-3xl font-semibold mx-5'>{item.title}</h2>
            <p className='mx-5'>{item.description}</p>
          </div>
          <div className={`col-span-1 flex justify-center items-center`}>  
            <p className='font-bold text-3xl'>{item.price}€</p>
          </div>
          <div className="col-span-1 flex flex-col justify-end items-center">  
            <label className="cursor-pointer">
            <input
  type="checkbox"
  checked={checkedItems[item.id] || false}
  onChange={(event) => handleCheckboxChange(event, item)}
  className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
  name='Añadir'
/>
              <span className='mx-5'>Añadir</span>
            </label>


          </div>
          <div className='col-span-3 flex flex-row justify-end'>
  {checkedItems[item.id] && data[2].id === item.id  &&
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