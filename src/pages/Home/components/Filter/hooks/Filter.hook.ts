import { useCallback, useEffect, useState } from "react";
import useHome from "../../../Home.hook";
import { AspectName, ProductAspects } from "types";
import { getCurrentArray, updateArray } from "utils/array";
import { useProductContext } from "context/Product/productContext.context";
import { FilterTitleType, IUseFilter } from "../types/filter.types";

const useFilter = (): IUseFilter => {
  const { aspects } = useHome();
  const { filteredProduct, handleContextProduct, handleClearFilteredProducts } = useProductContext();

  const initialFilterValue: ProductAspects = {
    // TODO: No size eu vou passar min, e max... então preciso alterar a logica de atualização de estado para comportar essa demanda
    brand_id: [], gender_id: [], category_id: [], size: {}
  };  
  
  const [filtered, setFiltered] = useState<ProductAspects>(initialFilterValue);
  const [openFilters, setOpenFilters] = useState<boolean>(true);

  const handleFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    const numericValue = Number(value);

    if (numericValue >= 0 && name !== 'size') {
      setFiltered((prevState) => {
        const aspectName = name as AspectName;
        const currentArray = getCurrentArray(prevState, aspectName);
        const updatedArray = checked
          ? updateArray(currentArray, numericValue) // Adiciona se o checkbox estiver marcado
          : currentArray.filter((item) => item !== numericValue);

        return {
          ...prevState,
          [aspectName]: updatedArray,
        };
      });
    }
  }, []);

  const handleClearFilter = useCallback(() => {
    setFiltered(initialFilterValue);
    handleClearFilteredProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleCloseFilter = useCallback(() => {
    setOpenFilters((prevState) => !prevState);
  }, []);

  const handleFiltered = useCallback(() => {
    if (filtered && typeof filtered === "object") {
      // Check if any value in the 'filtered' object contains a non-empty array.
      const hasFilteredValue = Object.values(filtered).some(
        (arr) => Array.isArray(arr) && arr.length > 0
      );

      if (hasFilteredValue) {
        // Apply filters if there are active values.
        handleContextProduct.filterProduct(filtered);
      } else {
        // Clear filtered state if all are empty or absent.
        handleClearFilteredProducts();
      }
    }
  }, [filtered, handleContextProduct, handleClearFilteredProducts]);
  
  useEffect(() => {
    handleFiltered();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);
  
  const filterTitle: any = {
    // TODO: ajustar esses retorno do backend, criando um 'alias' lá para simplificar o front
    // colors: "COR",
    // price: "PREÇO",
    // price: "PREÇO",
    brand_id: "SHOP BY CATEGORY",
    size: "SIZE",
    gender_id: "GENDER",
    category_id: "CATEGORY",
  };

  return {
    aspects,
    filtered,
    filterTitle,
    filteredProduct,
    openFilters,
    handleFilter,
    handleClearFilter,
    handleCloseFilter,
  };
};

export default useFilter;