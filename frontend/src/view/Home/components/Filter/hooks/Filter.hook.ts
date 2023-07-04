import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useHome from "../../../Home.hook";
import { ProductAspects } from "view/Product/types";

type FilterTitleType = {
  [key: string]: string;
};

// alterar os 'aspects' por attribute

interface IUseFilter {
  aspects: ProductAspects | null;
  filtered: FilterTitleType | null | undefined;
  openFilters: boolean | null | undefined;
  filterTitle: FilterTitleType;
  queryParamsObj: {} | null;
  randomKey: () => void;
  handleFilter: (event: React.ChangeEvent<HTMLElement>) => void;
  handleClearFilter: () => void;
  handleCloseFilter: () => void;
}

const useFilter = (): IUseFilter => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState();

  const [openFilters, setOpenFilters] = useState(true);

  const { aspects, queryParamsObj, randomKey } = useHome();


  // substituir tudo isso por useMemo/useCallback
  const handleFilter = (event: any) => {
    const { name, value, dataset } = event.target;

    searchParams.set(name, value);

    if(!event.target.checked) {
      searchParams.delete(name);
    }
  
    if (Number(value) >= 0) {
      setSearchParams((prevState: any) => ({
        ...prevState,
        [name]: value,
      }));

      // setFiltered((prevState: any) => ({
      //   ...prevState,
      //   [name]: dataset.label,
      // }));

      navigate({
        pathname: "/filter",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
    // limpar a url, caso não tenha filtros
    // navigate({pathname: "/"})
  };
  
  const handleClearFilter = () => {};

  const handleCloseFilter = () => {
    setOpenFilters(!openFilters)
  };

  const filterTitle: FilterTitleType = {
    colors: 'COR',
    price: 'PREÇO',
    brands: 'MARCA',
    sizes: 'TAMANHO',
    genders: 'GÊNERO',
    categories: 'CATEGORIA',
  };

  return {
    aspects,
    filtered,
    queryParamsObj,
    filterTitle,
    openFilters,
    randomKey,
    handleFilter,
    handleClearFilter,
    handleCloseFilter,
  };
};

export default useFilter;
