import api from "utils/api";
import getAcessToken from "utils/getAcessToken";
import {
  Product,
  ProductAspects,
  ProductById,
  CustomAxiosPromise
} from "types";

const fetchProducts = (): CustomAxiosPromise<Product[]> =>
  api.get("/product/all", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchProductById = (productId: string): CustomAxiosPromise<ProductById> =>
  api.get(`/product/${productId}`, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchProductAspects = (): CustomAxiosPromise<ProductAspects> =>
  api.get("/product/aspects", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchFilterProduct = (data: ProductAspects): CustomAxiosPromise<Product[]> =>
  api.post("/product/filter", data, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchCreateProduct = (product: Product): CustomAxiosPromise<Product> =>
  api.post("/product/create", product, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchEditProduct = (data: Product): CustomAxiosPromise<Product> =>
  api.patch("/product/update", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data
  });

const fetchDeleteProduct = (productId: string): CustomAxiosPromise<void> =>
  api.delete("/product/delete", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { productId },
  });

export {
  fetchProducts,
  fetchProductById,
  fetchProductAspects,
  fetchCreateProduct,
  fetchEditProduct,
  fetchDeleteProduct,
  fetchFilterProduct,
};