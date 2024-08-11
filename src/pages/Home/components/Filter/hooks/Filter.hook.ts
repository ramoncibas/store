import { useCallback, useEffect, useState } from "react";
import useHome from "../../../Home.hook";
import { AspectName, ProductAspects } from "types";
import { getCurrentArray, updateArray } from "utils/array";
import { useProductContext } from "context/Product/productContext.context";
import { FilterTitleType, IUseFilter } from "../types/filter.types";

const useFilter = (): IUseFilter => {
  const { aspects } = useHome();
  const { handleContextProduct } = useProductContext();

  const initialFilterValue: ProductAspects = {
    brand_id: [], gender_id: [], category_id: [], size_id: []
  };  
  
  const [filtered, setFiltered] = useState<ProductAspects>(initialFilterValue);
  const [openFilters, setOpenFilters] = useState<boolean>(true);

  const handleFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = Number(value);
  
    if (numericValue >= 0) {
      setFiltered((prevState) => {
        const aspectName = name as AspectName;
        const currentArray = getCurrentArray(prevState, aspectName);
        const updatedArray = updateArray(currentArray, numericValue);
  
        return {
          ...prevState,
          [aspectName]: updatedArray,
        };
      });
    }
  }, []);

  const handleClearFilter = useCallback(() => {
    setFiltered(initialFilterValue);
  }, []);
  
  const handleCloseFilter = useCallback(() => {
    setOpenFilters((prevState) => !prevState);
  }, []);
  
  useEffect(() => {
    if (filtered && typeof filtered === 'object') {
      const hasFilteredValue = Object.values(filtered).some((arr) => Array.isArray(arr) && arr.length > 0);
  
      if (hasFilteredValue) {
        handleContextProduct.filterProduct(filtered);
      }
    }
  }, [filtered]);
  
  const filterTitle: any = {
    // TODO: ajustar esses retorno do backend, criando um 'alias' lá para simplificar o front
    // colors: "COR",
    // price: "PREÇO",
    // price: "PREÇO",
    brand_id: "SHOP BY CATEGORY",
    size_id: "SIZE",
    gender_id: "GENDER",
    category_id: "CATEGORY",
  };

  return {
    aspects,
    filtered,
    filterTitle,
    openFilters,
    handleFilter,
    handleClearFilter,
    handleCloseFilter,
  };
};

export default useFilter;