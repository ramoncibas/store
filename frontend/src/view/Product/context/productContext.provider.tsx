import React, { useEffect } from "react";

import useProductService from "../service/useProductService.service";
import { ProductContext } from "./productContext.context";

const ProductContextProvider: React.FunctionComponent<any> = ({
  children,
}: any) => {
  const {
    products,
    aspects,
    productByIdData,
    handleGetProduct,
    handleGetProductAspects,
    handleGetProductById,
    handleDeleteProduct,
    handleEditProduct,
    handleSaveNewProduct,
    isLoadingProduct,
    isLoadingEdit,
    isLoadingProductById,
    isLoadingAspects,
    isLoadingSave,
    isLoadingDelete,
  } = useProductService();

  const handleInitialRequest = () => {
    handleGetProduct();
    handleGetProductAspects();
  };
  
  useEffect(() => {
    handleGetProductAspects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        aspects,
        productByIdData,
        isLoadingProduct,
        isLoadingEdit,
        isLoadingProductById,
        isLoadingAspects,
        isLoadingSave,
        isLoadingDelete,
        handleInitialRequest,
        handleGetProductAspects,
        handleGetProductById,
        handleDeleteProduct,
        handleEditProduct,
        handleSaveNewProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function withProductContext(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <ProductContextProvider>
        <Component {...props} />
      </ProductContextProvider>
    );
  };
}

export { ProductContextProvider };

export default ProductContext;
