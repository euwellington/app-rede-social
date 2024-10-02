import React, { createContext, useContext, ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

const GlobalContext = createContext<undefined | {}>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

// Hook para acessar o contexto global
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
