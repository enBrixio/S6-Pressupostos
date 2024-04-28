import React, { createContext, useContext } from 'react';
import { useBudget } from '../hooks/useBudget';
import { useData } from '../hooks/useData';
import { useCheck } from '../hooks/useChek';
import { useInputs } from '../hooks/useInputs';


export const MyContext = createContext();


export const MyProvider = ({ children }) => {
    const {
        setInputPage,
        setInputLanguage,
        inputPage,
        inputLanguage,
        resetInputsOnCondition,
        inputFunction,
        ...inputs
    } = useInputs();

    const budget = useBudget();
    const data = useData();
    const check = useCheck(inputPage, inputLanguage, resetInputsOnCondition, inputFunction);

    const value = {
        setInputPage,  // Asegúrate de que esto está siendo explícitamente incluido
        setInputLanguage,
        inputPage,
        inputLanguage,
        inputFunction,
        ...budget,
        ...data,
        ...check,
        ...inputs
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};
