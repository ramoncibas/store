import { useEffect, useState } from "react";

import { useProductContext } from "context/productContext.context";
import useProductService from "view/Product/service/useProductService.service";
import useKey from "hooks/useKey";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Product, ProductAspects } from "view/Product/types";

interface FilteredParams {
  gender?: string;
  category?: string;
  brand?: string;
  color?: string;
  size?: string;
}

interface IUseHome {
  products: Product[] | null | undefined;
  aspects: ProductAspects | null | undefined;
  filtered: FilteredParams | null | undefined;
  queryParamsObj: {} | null;
  randomKey: () => void;
  handleFilter: (event: React.ChangeEvent<HTMLElement>) => void;
  handleRemoveFilter: () => void;
  handleShoppinCart: (product: Product) => any;
}

const useHome = (): IUseHome => {
  const {
    products: productsAPIResponse,
    aspects,
    handleBuyProduct,
  } = useProductContext();
  const { filteredProduct, handleFilterProduct } = useProductService();

  const [products, setProducts] = useState<Product>(productsAPIResponse);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState();

  const navigate = useNavigate();
  const { randomKey } = useKey();

  const handleShoppinCart = (product: Product) => {
    return handleBuyProduct(product).then((window.location.href = "/cart"));
  };


  // substituir tudo isso por useMemo/useCallback
  const handleFilter = (event: any) => {
    const { name, value, dataset } = event.target;

    searchParams.set(name, value);

    if (Number(value) === 0) {
      searchParams.delete(name);
    }
  
    if (Number(value) >= 0) {
      setSearchParams((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));

      setFiltered((prevState: any) => ({
        ...prevState,
        [name]: dataset.label,
      }));

      navigate({
        pathname: "/filter",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
  };

  const handleRemoveFilter = () => {};

  useEffect(() => {
    setProducts(productsAPIResponse);
  }, [productsAPIResponse]);

  const queryParamsObj = Object.fromEntries(searchParams);

  useEffect(() => {
    if (!!Object.entries(queryParamsObj).length) {
      handleFilterProduct(queryParamsObj);
      setProducts(filteredProduct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  return {
    products,
    aspects,
    filtered,
    queryParamsObj,
    randomKey,
    handleFilter,
    handleRemoveFilter,
    handleShoppinCart,
  };
};

export default useHome;
