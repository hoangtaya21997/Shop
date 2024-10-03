import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(null);
  
  return (
    <UserContext.Provider value={{ currentItem, setCurrentItem }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };