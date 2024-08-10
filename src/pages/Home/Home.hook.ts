import { useEffect, useState } from "react";

import { useProductContext } from "context/Product/productContext.context";
import useProductService from "pages/Product/service/useProduct.service";
import useKey from "hooks/useKey";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FilterQueryParams, Product, ProductAspects } from "types";
import { useCartContext } from "context/Cart/cartContext.context";
import useCustomerStorage from "hooks/useCustomerStorage.hook";

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
  } = useProductContext();

  const { handleContextCart } = useCartContext();
  const { handleContextProduct, filteredProduct } = useProductContext();
  
  const { customerID } = useCustomerStorage();

  const [products, setProducts] = useState<Product[]>(productsAPIResponse || []);
  const [searchParams, setSearchParams] = useSearchParams();

  const { randomKey } = useKey();

  const handleShoppinCart = async (product: Product) => {
    if (!product || !customerID || !handleContextCart.addCartItem) {
      throw new Error('Ops... Não foi possivel adicionar um produto ao carrinho.');
    }
    
    return await handleContextCart.addCartItem(customerID, product)?.then(
      (data: any) => {
        if (data) {
          window.location.href = "/cart";
        }
      }
    );
  };

  useEffect(() => {
    if (productsAPIResponse)
      setProducts(productsAPIResponse);
  }, [productsAPIResponse]);

  const queryParamsObj = Object.fromEntries(searchParams);

  useEffect(() => {
    if (!!Object.entries(queryParamsObj).length) {
      handleContextProduct.filterProduct(queryParamsObj);
    }

    if (filteredProduct) {
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