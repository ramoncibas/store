import React, { useEffect } from "react";

import { ProductContext } from "./productContext.context";
import useProductService from "../../pages/Product/service/useProduct.service";

const ProductContextProvider: React.FunctionComponent<any> = ({
  children,
}: any) => {
  const {
    products,
    aspects,
    productByIdData,
    createProductResponse,
    filteredProduct,
    handleContextProduct,
    isLoading
  } = useProductService();
  
  useEffect(() => {
    handleContextProduct.initialRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        aspects,
        productByIdData,
        createProductResponse,
        filteredProduct,
        handleContextProduct,
        isLoading
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
