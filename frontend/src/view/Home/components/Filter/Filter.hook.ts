import { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useHome from "view/Home/Home.hook";
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
  handleRemoveFilter: () => void;
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

    // avaliar se esse if faz sentido, pois não tem index 0 no array de aspectos
    // se não me engano, ele retorna isso quando clico 2 vezes no botão, verificar isso
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
    
    // limpar a url, caso não tenha filtros
    // navigate({});
  };
  
  const handleRemoveFilter = () => {};

  const handleCloseFilter = () => {
    setOpenFilters(!openFilters)
  };

  const filterTitle: FilterTitleType = {
    color: 'COR',
    price: 'PREÇO',
    brands: 'MARCA',
    size: 'TAMANHO',
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
    handleCloseFilter,
  };
};

export default useFilter;
