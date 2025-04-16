import React, { createContext, useState } from 'react';

export const ProductSearchContext = createContext();

const ProductSearchProvider = ({ children }) => {
  const [inputData, setInputData] = useState('');

  return (
    <ProductSearchContext.Provider value={{ inputData, setInputData }}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export default ProductSearchProvider;
