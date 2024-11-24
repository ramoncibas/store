import { AxiosPromise } from "axios";
import { createContext, useContext } from "react";
import { Product, IProductContext, FilterQueryParams, ProductAspects } from "types";

export const productDefaultValues: IProductContext = {
  products: null,
  aspects: null,
  productByIdData: null,
  createProductResponse: null,
  filteredProduct: null,
  isLoading: {
    products: false,
    editProduct: false,
    productById: false,
    createProduct: false,
    aspects: false,
    deleteProduct: false,
    filterProduct: false,
  },
  handleContextProduct: {
    initialRequest: () => {},
    getProducts: () => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    getProductById: (productId: string) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    getProductAspects: () => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    filterProduct: (data: ProductAspects) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    createProduct: (product: Product) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    editProduct: (data: Product) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
    deleteProduct: (productId: string) => Promise.resolve({ data: undefined }) as AxiosPromise<any>,
  },
  handleClearFilteredProducts: () => {}
};

export const ProductContext = createContext<IProductContext>(productDefaultValues);

export const useProductContext = (): IProductContext => useContext(ProductContext);
