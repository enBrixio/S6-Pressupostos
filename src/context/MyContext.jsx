import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [showWebPages, setShowWebPages] = useState(false);
    const [numPages, setNumPages] = useState(0);
    const [numLanguages, setNumLanguages] = useState(0);
    const [webPagesTotal, setWebPagesTotal] = useState(0); // Nuevo estado para el total de páginas web

    // Función para calcular el precio de páginas web
    const calculateWebPagesTotal = (pages, languages) => {
        const total = (pages + languages) * 30;
        setWebPagesTotal(total);
        updateTotalPrices();
    };

    // Función para agregar un precio al total
    const addPrice = (price) => {
        setSelectedPrices(current => [...new Set([...current, price])]);
    };

    // Función para remover un precio del total
    const removePrice = (price) => {
        setSelectedPrices(current => current.filter(p => p !== price));
    };

    // Función para actualizar los precios seleccionados incluyendo el total de web pages
    const updateTotalPrices = () => {
        const newTotal = [...selectedPrices, webPagesTotal];
        setSelectedPrices(newTotal);
    };

    return (
        <MyContext.Provider value={{
            selectedPrices,
            addPrice,
            removePrice,
            showWebPages,
            numPages,
            setNumPages,
            numLanguages,
            setNumLanguages,
            calculateWebPagesTotal
        }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;



