import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [selectedPrices, setSelectedPrices] = useState([]);

  const addPrice = (price) => {
    setSelectedPrices(current => [...current, price]);
  };

  const removePrice = (price) => {
    setSelectedPrices(current => current.filter(p => p !== price));
  };

  return (
    <MyContext.Provider value={{ selectedPrices, addPrice, removePrice }}>
      {children}
    </MyContext.Provider>
  );
};
