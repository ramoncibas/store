import { useAsyncFn } from "react-use";

import {
  fetchProducts,
  fetchProductById,
  fetchProductAspects,
  fetchEditProduct,
  fetchDeleteProduct,
  fetchFilterProduct,
  fetchCreateProduct,
} from "./fetchProduct";
import { UseProductServiceReturn } from "types";

const useProductService = (): UseProductServiceReturn => {
  const [fetchProductsState, fetchProductsRequest] = useAsyncFn(fetchProducts);
  const [fetchProductByIdState, fetchProductByIdRequest] =
    useAsyncFn(fetchProductById);
  const [fetchCreateProductState, fetchCreateProductRequest] =
    useAsyncFn(fetchCreateProduct);  
  const [fetchEditProductState, fetchEditProductRequest] =
    useAsyncFn(fetchEditProduct);
  const [fetchDeleteProductState, fetchDeleteProductRequest] =
    useAsyncFn(fetchDeleteProduct);
  const [fetchProductAspectsState, fetchProductAspectsRequest] =
    useAsyncFn(fetchProductAspects);
    
  const [fetchFilterProductState, fetchFilterProductRequest] = useAsyncFn(fetchFilterProduct);

  const products = fetchProductsState.value?.data?.data || null;
  const aspects = fetchProductAspectsState.value?.data?.data || null;
  const productByIdData = fetchProductByIdState.value?.data?.data || null;
  const createProductResponse = fetchCreateProductState.value?.data?.data || null;
  const filteredProduct = fetchFilterProductState.value?.data?.data || null;

  const handleInitialRequest = () => {
    fetchProductsRequest();
    fetchProductAspectsRequest();
  };

  return {
    products,
    aspects,
    productByIdData,
    createProductResponse,
    filteredProduct,
    isLoading: {
      products: fetchProductsState.loading,
      editProduct: fetchEditProductState.loading,
      productById: fetchProductByIdState.loading,
      createProduct: fetchCreateProductState.loading,
      aspects: fetchProductAspectsState.loading,
      deleteProduct: fetchDeleteProductState.loading,
      filterProduct: fetchFilterProductState.loading,
    },
    handleContextProduct: {
      initialRequest: handleInitialRequest,
      getProducts: fetchProductsRequest,
      getProductAspects: fetchProductAspectsRequest,
      getProductById: fetchProductByIdRequest,
      createProduct: fetchCreateProductRequest,
      deleteProduct: fetchDeleteProductRequest,
      editProduct: fetchEditProductRequest,
      filterProduct: fetchFilterProductRequest,
    }
  };
};


export default useProductService;