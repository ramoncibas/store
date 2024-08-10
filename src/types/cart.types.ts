import { CustomAxiosPromise } from "./axios.types";
import { Product } from "./product.types";

export interface CartItem {
  id: number;
  product_id: number;
  customer_id: number;
  quantity: number;
}

export interface ShoppingCart extends Product {
  product_id: string;
} 

export interface ICartContext {
  productsCart: ShoppingCart[] | null;
  isLoading: {
    cart: boolean;
    added: boolean;
    cleanedCart: boolean;
    removeItem: boolean;
  };
  handleContextCart: {
    getCart: (customerUUID: string) => CustomAxiosPromise<ShoppingCart[]>;
    addCartItem: (customerID: number, product: Product) => CustomAxiosPromise<void>;
    removeItem: (customerID: string, shoppingCarID: number) => CustomAxiosPromise<void>;
    cleanCart: (customerID: number) => CustomAxiosPromise<void>;
  };
}

export interface UseCartServiceReturn extends ICartContext {}