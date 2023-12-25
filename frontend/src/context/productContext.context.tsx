import { createContext, useContext } from "react";
import { Product, ProductById, ProductAspects } from "../pages/Product/types";

type ProductValues = { 
  products: Product[] | null | undefined;
  aspects: ProductAspects | null | undefined;
  productByIdData: ProductById | null | undefined;
  isLoadingProduct: boolean;
  isLoadingEdit: boolean;
  isLoadingProductById: boolean;
  isLoadingAspects: boolean;
  isLoadingSave: boolean;
  isLoadingDelete: boolean;
  handleInitialRequest: () => any;
  handleEditProduct: (product: Product) => any;
  handleGetProductById: (productId: string) => any;
  handleDeleteProduct: (productId: string) => any;
  handleSaveNewProduct: (product: Product) => any;
  handleGetProductAspects: () => any;
  handleBuyProduct: (product: Product) => any;
}

export const productDefaultValues: ProductValues = {
  products: null,
  aspects: null,
  productByIdData: null,
  isLoadingProduct: false,
  isLoadingEdit: false,
  isLoadingProductById: false,
  isLoadingAspects: false,
  isLoadingSave: false,
  isLoadingDelete: false,
  handleInitialRequest: () => null,
  handleEditProduct: (product: Product) => null,
  handleGetProductById: (productId: string) => null,
  handleDeleteProduct: (productId: string) => null,
  handleSaveNewProduct: (product: Product) => null,
  handleGetProductAspects: () => null,
  handleBuyProduct: () => null,
};

export const ProductContext = createContext<ProductValues>(
  productDefaultValues
);

export const useProductContext = (): ProductValues =>
  useContext(ProductContext);
