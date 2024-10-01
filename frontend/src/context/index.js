import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [dataUserSearch, setDataUserSearch] = useState([]);
  const [dataUser10Search, setDataUser10Search] = useState([]);
  const [yearlop10, setYearlop10] = useState('2024');

  return (
    <UserContext.Provider value={{ dataUserSearch,dataUser10Search, setDataUserSearch,setDataUser10Search, setYearlop10,  yearlop10}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };