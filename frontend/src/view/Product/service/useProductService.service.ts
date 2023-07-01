import { useAsyncFn } from "react-use";

import {
  fetchProduct,
  fetchProductById,
  fetchProductAspects,
  fetchSaveNewProduct,
  fetchEditProduct,
  fetchDeleteProduct,
  fetchBuyProduct,
  fetchFilterProduct,
} from "./fetchProduct";

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
  const [fetchBuyProductState, fetchBuyProductRequest] =
    useAsyncFn(fetchBuyProduct);

  const [fetchFilterProductState, fetchFilterProductRequest] = useAsyncFn(fetchFilterProduct);

  const products = fetchProductState.value?.data || null;
  const aspects = fetchProductAspectsState.value?.data || null;
  const [ productByIdData ] = fetchProductByIdState.value?.data || [];

  return {
    products,
    aspects,
    productByIdData,
    filteredProduct: fetchFilterProductState.value?.data || null,
    buyProductResponse: fetchBuyProductState,
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
    handleBuyProduct: fetchBuyProductRequest,
    handleFilterProduct: fetchFilterProductRequest,
  };
};


export default useProductService;