import {  useState, useEffect } from 'react';
import { useInputs } from './useInputs';
import { MyContext } from '../context/MyContext';

export function useCheck(inputPage, inputLanguage) {
  const {inputFunction, setInputPage} = useInputs();
  const [checkedItems, setCheckedItems] = useState({});
  const [resultado, setResultado] = useState(0);
  const [prevInputPage, setPrevInputPage] = useState(inputPage);

  useEffect(() => {
    const allUnchecked = Object.values(checkedItems).every(val => val === false);
    if (allUnchecked) {
      setResultado(0);
      inputFunction(3, false);
    }
    if (prevInputPage < inputPage) {
      setResultado(prev => prev + 30);
    } else if (prevInputPage > inputPage) {
      setResultado(prev => prev - 30);
    }
    setPrevInputPage(inputPage);
  }, [inputPage, inputLanguage, setCheckedItems, checkedItems, resultado, prevInputPage, inputFunction]);

  const updateItemCheck = (itemId, itemPrice, isChecked) => {
    console.log("Input Page:", inputPage, "Item Price:", itemPrice, "Is Checked:", isChecked);
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: isChecked
    }));
    if (isChecked) {
      setResultado(prevResultado => prevResultado + itemPrice);
    } else {
      setResultado(prevResultado => prevResultado - itemPrice);
    }
  
  };

  return {
    checkedItems,
    updateItemCheck,
    setCheckedItems,
    resultado,

  };
}

