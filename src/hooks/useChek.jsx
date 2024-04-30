import {  useState, useEffect } from 'react';
import { useInputs } from './useInputs';
import { MyContext } from '../context/MyContext';

export function useCheck(inputPage, inputLanguage) {
  const {inputFunction, setInputPage} = useInputs();
  const [checkedItems, setCheckedItems] = useState({});
  const [resultado, setResultado] = useState(0);
  const [prevInputPage, setPrevInputPage] = useState(inputPage);
  const [prevInputLanguage, setPrevInputLanguage] = useState(inputLanguage);

  useEffect(() => {
    const allUnchecked = Object.values(checkedItems).every(val => !val.isChecked);
    if (allUnchecked) {
      setResultado(0);  // Asegura que el resultado se reinicie si todos están desmarcados
    }

    // Considerar solo cambios en cantidad de páginas o idiomas si afectan el resultado
    if (inputPage !== prevInputPage || inputLanguage !== prevInputLanguage) {
      let tempResult = resultado;
      if (inputPage > prevInputPage || inputLanguage > prevInputLanguage) {
        tempResult += 30;  // Ajusta esta cantidad según tu lógica de negocio
      } else {
        tempResult -= 30;  // Ajusta esta cantidad según tu lógica de negocio
      }
      setResultado(tempResult);
    }

    setPrevInputPage(inputPage);
    setPrevInputLanguage(inputLanguage);
  }, [inputPage, inputLanguage, checkedItems]);


  const updateItemCheck = (itemId, itemPrice, isChecked, itemTitle) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: { isChecked, title: isChecked ? itemTitle : "" }
    }));
    // Actualiza el resultado sumando o restando según el checkbox esté marcado o no
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

