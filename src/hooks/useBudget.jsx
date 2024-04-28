import { useState } from 'react';


export function useBudget() {
 const [product, setProduct] = useState([]);
 
 
 
function addProduct(title, price, description, numPages, numLanguages) {
  const newProduct = { title, price, description, numPages, numLanguages };
  setProduct((prevProduct) => [...prevProduct, newProduct]);
}

 function removeProduct(product) {
      setProduct((prevProduct) => prevProduct.filter((item) => item !== product));
  }

 return {
   product,
   setProduct,
   addProduct,
   removeProduct,
  };
}