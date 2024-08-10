import { useAsyncFn } from "react-use";

import {
  fetchAddProductToCart,
  fetchProductCart,
  fetchRemoveCartItem,
  fetchCleanCart
} from "./fetchCart";
import { UseCartServiceReturn } from "types";

const useCartService = (): UseCartServiceReturn => {
  const [productCartState, fetchProductCartRequest] = useAsyncFn(fetchProductCart);
  const [addProductToCartState, fetchAddProductToCartRequest] = useAsyncFn(fetchAddProductToCart);
  const [removeCartItemState, fetchRemoveCartItemRequest] = useAsyncFn(fetchRemoveCartItem);
  const [cleanCartState, fetchCleanCartRequest] = useAsyncFn(fetchCleanCart);

  const productsCart = productCartState.value?.data?.data || null;
  
  return {
    productsCart,
    isLoading: {
      cart: productCartState.loading,
      added: addProductToCartState.loading,
      cleanedCart: cleanCartState.loading,
      removeItem: removeCartItemState.loading,
    },
    handleContextCart: {
      getCart: fetchProductCartRequest,
      addCartItem: fetchAddProductToCartRequest,
      removeItem: fetchRemoveCartItemRequest,
      cleanCart: fetchCleanCartRequest,
    },
  };
}

export default useCartService;