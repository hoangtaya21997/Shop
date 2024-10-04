import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(null);
  
  return (
    <ProductContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };