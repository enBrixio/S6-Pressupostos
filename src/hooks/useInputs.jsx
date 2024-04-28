import { useState } from "react";

export function useInputs() {
  const [inputPage, setInputPage] = useState(0);
  const [inputLanguage, setInputLanguage] = useState(0);

  const inputFunction = (itemId, isChecked) => {
    if (!isChecked && itemId === 3) {
      setInputPage(0);
      setInputLanguage(0);
    }
    }
  const handleInputChangePage = (event) => {
    setInputPage(event.target.value);
  };
  const handleInputChangeLanguage = (event) => {
    setInputLanguage(event.target.value);
  };

  const sumarPage = (event,item) => {
    setInputPage(inputPage + 1)
  }
    const restarPage = (event) => {
    if (inputPage <= 0) {
      setInputPage(0);
    }
    else {
    setInputPage(inputPage - 1);
  }
}

const sumarLeng = (event) => {
  setInputLanguage(inputLanguage + 1);
}
const restarLeng = (event) => {
  if (inputLanguage <= 0) {
    setInputLanguage(0);
  }
  else {
    setInputLanguage(inputLanguage - 1);
}
}
  


  return {
    inputPage,
    setInputPage,
    inputLanguage,
    setInputLanguage,
    handleInputChangePage,
    handleInputChangeLanguage,
    sumarPage,
    restarPage,
    sumarLeng,
    restarLeng,
    inputFunction,	
  };
}