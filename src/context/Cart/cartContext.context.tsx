import { AxiosPromise } from "axios";
import { createContext, useContext } from "react";
import { ICartContext } from "types";

export const cartDefaultValues: ICartContext = {
  productsCart: null,
  isLoading: {
    cart: false,
    added: false,
    cleanedCart: false,
    removeItem: false,
  },
  handleContextCart: {
    getCart: (customerUUID: string) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    addCartItem: (customerID: number, product: any) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    removeItem: (customerID: string, shoppingCarID: number) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    cleanCart: (customerID: number) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
  },
};

export const CartContext = createContext(cartDefaultValues);

export const useCartContext = () => useContext(CartContext);