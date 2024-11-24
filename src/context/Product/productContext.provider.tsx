import React, { useEffect, useState } from "react";

import { ProductContext } from "./productContext.context";
import useProductService from "pages/Product/service/useProduct.service";
import { Product } from "types";

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
  
  const [filteredProductState, setFilteredProductState] = useState<Product[] | null>(null);
  
  useEffect(() => {
    if (filteredProduct) {
      setFilteredProductState(filteredProduct);
    }
  }, [filteredProduct]);
  
  const handleClearFilteredProducts = () => {
    setFilteredProductState(null)
  }

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
        filteredProduct: filteredProductState,
        handleContextProduct,
        handleClearFilteredProducts,
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
