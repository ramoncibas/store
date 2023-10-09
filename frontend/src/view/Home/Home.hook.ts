import { useEffect, useState } from "react";

import { useProductContext } from "context/productContext.context";
import useProductService from "view/Product/service/useProductService.service";
import useKey from "hooks/useKey";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FilterQueryParams, Product, ProductAspects } from "view/Product/types";

interface IUseHome {
  products: Product[] | null;
  aspects: ProductAspects | null | undefined;
  queryParamsObj: FilterQueryParams;
  randomKey: () => number;
  handleShoppinCart: (product: Product) => any;
}

const useHome = (): IUseHome => {
  const {
    products: productsAPIResponse,
    aspects,
    handleBuyProduct,
  } = useProductContext();

  const { filteredProduct, handleFilterProduct } = useProductService();

  const [products, setProducts] = useState<Product[]>(productsAPIResponse || []);
  const [searchParams, setSearchParams] = useSearchParams();

  const { randomKey } = useKey();

  const handleShoppinCart = (product: Product) => {
    return handleBuyProduct(product).then((window.location.href = "/cart"));
  };

  useEffect(() => {
    if (productsAPIResponse)
      setProducts(productsAPIResponse);
  }, [productsAPIResponse]);

  const queryParamsObj = Object.fromEntries(searchParams);
  
  useEffect(() => {
    if (!!Object.entries(queryParamsObj).length) {      
      handleFilterProduct(queryParamsObj);
    }

    if(filteredProduct) {
      setProducts(filteredProduct);
    }
    //  else {
    //   setProducts(productsAPIResponse);
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  return {
    products,
    aspects,
    queryParamsObj,
    randomKey,
    handleShoppinCart,
  };
};

export default useHome;