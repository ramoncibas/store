import api from "utils/api";
import getAcessToken from "utils/getAcessToken";
import { CustomAxiosPromise, Product, ShoppingCart } from "types";

const fetchProductCart = (customerUUID: string): CustomAxiosPromise<ShoppingCart[]> =>
  api.get(`/cart/${customerUUID}`, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchAddProductToCart = (customerID: number, product: Product): CustomAxiosPromise<void> =>
  api.post(`/cart/add/${customerID}`, product, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchRemoveCartItem = (customerID: string, shoppingCarID: number): CustomAxiosPromise<void> =>
  api.delete(`/cart/${customerID}/remove/item/${shoppingCarID}`, {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { shoppingCarID }
  });

const fetchCleanCart = (customerID: number): CustomAxiosPromise<void> =>
  api.delete("/cart", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { customerID }
  });


export {
  fetchAddProductToCart,
  fetchProductCart,
  fetchRemoveCartItem,
  fetchCleanCart
}