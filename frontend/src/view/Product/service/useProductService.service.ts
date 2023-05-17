import { useAsyncFn } from "react-use";

import {
  fetchProduct,
  fetchProductById,
  fetchProductAspects,
  fetchSaveNewProduct,
  fetchEditProduct,
  fetchDeleteProduct,
} from "../service/productApi";

const useProductService = () => {
  const [fetchProductState, fetchProductRequest] = useAsyncFn(fetchProduct);
  const [fetchProductByIdState, fetchProductByIdRequest] =
    useAsyncFn(fetchProductById);
  const [fetchEditProductState, fetchEditProductRequest] =
    useAsyncFn(fetchEditProduct);
  const [fetchDeleteProductState, fetchDeleteProductRequest] =
    useAsyncFn(fetchDeleteProduct);
  const [fetchProductAspectsState, fetchProductAspectsRequest] =
    useAsyncFn(fetchProductAspects);
  const [fetchSaveNewProductState, fetchSaveNewProductRequest] =
    useAsyncFn(fetchSaveNewProduct);

  const products = fetchProductState.value?.data || null;
  const aspects = fetchProductAspectsState.value?.data || null;
  const [ productByIdData ] = fetchProductByIdState.value?.data || [];

  return {
    products,
    aspects,
    productByIdData,
    isLoadingProduct: fetchProductState.loading,
    isLoadingEdit: fetchEditProductState.loading,
    isLoadingProductById: fetchProductByIdState.loading,
    isLoadingAspects: fetchProductAspectsState.loading,
    isLoadingSave: fetchSaveNewProductState.loading,
    isLoadingDelete: fetchDeleteProductState.loading,
    handleGetProduct: fetchProductRequest,
    handleGetProductAspects: fetchProductAspectsRequest,
    handleGetProductById: fetchProductByIdRequest,
    handleDeleteProduct: fetchDeleteProductRequest,
    handleEditProduct: fetchEditProductRequest,
    handleSaveNewProduct: fetchSaveNewProductRequest,
  };
};


export default useProductService;