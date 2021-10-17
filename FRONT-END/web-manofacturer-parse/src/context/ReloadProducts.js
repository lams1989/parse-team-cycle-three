import { createContext, useContext } from 'react';
export const ReloadProductsContext = createContext(null);

export const useReloadProducts = () => {
    return useContext(ReloadProductsContext);
  };