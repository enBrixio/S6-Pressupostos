import React, { createContext, useContext } from 'react';
import { useBudget } from '../hooks/useBudget';
import { useData } from '../hooks/useData';
import { useCheck } from '../hooks/useChek';
import { useInputs } from '../hooks/useInputs';
import { useState } from 'react';



export const MyContext = createContext();


export const MyProvider = ({ children }) => {

    const {
        setInputPage,
        setInputLanguage,
        inputPage,
        inputLanguage,
        resetInputsOnCondition,
        inputFunction,
        resultado,
        ...inputs
    } = useInputs();

    const budget = useBudget();
    const data = useData();
    const check = useCheck(inputPage, inputLanguage, resetInputsOnCondition, inputFunction);

    const [open, setOpen] = useState(false)
    const [currentModalType, setCurrentModalType] = useState(null);


    const openModal = (modalType) => {
        console.log("Opening modal with type:", modalType);
        setCurrentModalType(modalType); // Guardamos el tipo de modal
        setOpen(true);
    };
    const closeModal = () => setOpen(false)

    const [message, setMessage] = useState(''); 
    const [formData, setFormData] = useState([]);
    const [currentForm, setCurrentForm] = useState({
        name: '',
        phone: '',
        email: '',
        total: resultado,
        numPages: inputPage,
        numLang: inputLanguage,
    });

    const value = {
        setInputPage,  // Asegúrate de que esto está siendo explícitamente incluido
        setInputLanguage,
        inputPage,
        inputLanguage,
        inputFunction,
        ...budget,
        ...data,
        ...check,
        ...inputs,
        setMessage,
        formData,
        setFormData,
        currentForm,
        setCurrentForm,
        message,
        setOpen,
        open,
        openModal,
        closeModal,
        currentModalType,
        setCurrentModalType,

    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};
