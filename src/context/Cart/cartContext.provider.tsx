import React, { useEffect, useMemo } from "react";

import { CartContext } from "./cartContext.context";
import useCartService from "pages/Product/service/useCart.service";
import useCustomerStorage from "hooks/useCustomerStorage.hook";

interface CartContextProviderProps {
  children: React.ReactNode;
}

const CartContextProvider: React.FunctionComponent<CartContextProviderProps> = ({ children }) => {
  const {
    productsCart,
    isLoading,
    handleContextCart,
  } = useCartService();

  const handleInitialRequest = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { customerUUID } = useCustomerStorage();
  
    if (!customerUUID) {
      console.error("UUID do cliente não está definido");
      return;
    }
  
    handleContextCart.getCart(customerUUID).catch((error) => {
      console.error(`Falha ao coletar dados do carrinho: ${error}`);
    });
  };

  // Testando sem o exaustive deps
  // useEffect(() => {
  //   handleInitialRequest();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    handleInitialRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const contextValue = useMemo(() => {
  //   return {
  //     productsCart,
  //     handle,
  //     isLoading
  //   };
  // }, [
  //   productsCart,
  //   handleContextCart,
  //   isLoading
  // ]);

  // return (
  //   <CartContext.Provider value={contextValue}>
  //     {children}
  //   </CartContext.Provider>
  // );

  return (
    <CartContext.Provider 
      value={{
        productsCart,
        handleContextCart,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function withProductContext(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <CartContextProvider>
        <Component {...props} />
      </CartContextProvider>
    );
  };
}

export { CartContextProvider };

export default CartContext;


// Ajustando as interfaces de Context, e Provider do Cart