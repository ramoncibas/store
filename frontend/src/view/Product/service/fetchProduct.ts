import { AxiosPromise, AxiosResponse } from "axios";
import { FilterQueryParams, Product, ProductAspects, ProductById, ShoppingCart } from "../types";
import api from "../../../utils/api";
import getAcessToken from "../../../utils/getAcessToken";

const fetchProduct = (): Promise<AxiosResponse<Product[]>> => 
  api.get("/", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchProductById = (productId: string): Promise<AxiosResponse<ProductById[]>> =>
  api.get(`/product/${productId}`, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchProductAspects = (): Promise<AxiosResponse<ProductAspects>> => 
  api.get("/product/aspects", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchFilterProduct = (query: FilterQueryParams): Promise<AxiosResponse<Product[]>> => 
  api.get("/filter", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
    params: query,
  });  

const fetchBuyProduct = (product: Product): Promise<AxiosPromise> => 
  api.post("/", product, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchSaveNewProduct = (product: Product): Promise<AxiosPromise> => 
  api.post("/product", product, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchEditProduct = (data: Product): Promise<AxiosPromise> => 
  api.patch("/product", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data
  });

const fetchDeleteProduct = (productId: string): Promise<AxiosPromise> =>
  api.delete("/product", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { productId },
  });

const fetchProductCartProduct = (): Promise<ShoppingCart> => 
  api.get("/cart", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchDeleteShoppingCartProduct = (productId: string): Promise<AxiosPromise> => 
  api.delete("/cart", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { productId }
  });

export {
  fetchProduct,
  fetchProductById,
  fetchProductAspects,
  fetchBuyProduct,
  fetchSaveNewProduct,
  fetchEditProduct,
  fetchDeleteProduct,
  fetchProductCartProduct,
  fetchDeleteShoppingCartProduct,
  fetchFilterProduct,
};