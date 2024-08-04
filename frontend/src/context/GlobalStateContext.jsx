import React, { createContext, useState } from 'react';

// Crie o contexto
export const GlobalStateContext = createContext();

// Crie o provider
export const GlobalStateProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('Notas fiscais');
  const [dash, setDash] = useState(null);
  const [nome, setNome] = useState('');
  const [fornecedores, setFornecedores] = useState([]);


  return (
    <GlobalStateContext.Provider value={{ dash, setDash, nome, setNome, selectedMenu, setSelectedMenu, fornecedores, setFornecedores}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
