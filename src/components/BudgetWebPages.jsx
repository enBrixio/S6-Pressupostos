import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext'; // Importa el contexto
import FotoIcon from '../assets/circle-info-solid.svg';

const BudgetWebPages = () => {

    const { openModal, restarLeng, sumarLeng, restarPage, sumarPage, handleInputChangePage,handleInputChangeLaguages, inputPage, inputLanguage } = useContext(MyContext);

    return (
<div className="container justify-end mt-20">
  <div className="flex items-center justify-center mb-4">
  <img src={FotoIcon} className="h-5 w-5 me-2 cursor-pointer" onClick={()=>openModal('pages')}/><h1 className="font-serif mr-1">Nombre de Páginas:</h1>
    <div className="flex items-center">
      <button 
        onClick={restarPage} 
        className="text-base flex items-center justify-center font-semibold mx-1 w-5 h-5 rounded-full bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="button"
      >
        -
      </button>
      <input 
        value={inputPage} 
        onChange={(event) => handleInputChangePage('numPages', event.target.value)}
        maxLength={3} 
        className="text-xl font-semibold text-center mx-1 w-10 h-10 rounded-lg bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="text" 
      />
      <button 
        onClick={sumarPage} 
        className="text-base flex items-center justify-center font-semibold mx-1 w-5 h-5 rounded-full bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="button"
      >
        +
      </button>
    </div>
  </div>
  <div className="flex items-center justify-center">
  <img src={FotoIcon} className="h-5 w-5 me-2 cursor-pointer" onClick={()=>openModal('languages')}/><h1 className="font-serif mr-1">Nombre de Idiomas: </h1>
    <div className="flex items-center">
      <button 
        onClick={restarLeng} 
        className="text-base flex items-center justify-center font-semibold mx-1 w-5 h-5 rounded-full bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="button"
      >
        -
      </button>
      <input 
        value={inputLanguage} 
        onChange={(event) => handleInputChangeLaguages('numLanguages', event.target.value)}
        maxLength={3} 
        className="text-xl font-semibold text-center mx-1 w-10 h-10 rounded-lg bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="text" 
      />
      <button 
        onClick={sumarLeng} 
        className="text-base flex items-center justify-center font-semibold mx-1 w-5 h-5 rounded-full bg-white border-green-500/75 active:border-green-500/100 border-2" 
        type="button"
      >
        +
      </button>
    </div>
  </div>
</div>
    );
  }

export default BudgetWebPages;

  