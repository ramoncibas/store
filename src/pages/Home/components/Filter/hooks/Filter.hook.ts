import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import useHome from "../../../Home.hook";
import { ProductAspects } from "types";

type FilterTitleType = {
  [key: string]: string;
};

interface IUseFilter {
  aspects: ProductAspects | null | undefined;
  filtered: FilterTitleType | null | undefined;
  openFilters: boolean | null | undefined;
  filterTitle: FilterTitleType;
  queryParamsObj: {[key: string]: string | undefined};
  randomKey: () => number;
  handleFilter: (event: React.ChangeEvent<HTMLElement>) => void;
  handleClearFilter: () => void;
  handleCloseFilter: () => void;
}

const useFilter = (): IUseFilter => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState<FilterTitleType | null>(null);
  const [openFilters, setOpenFilters] = useState<boolean>(true);

  const { aspects, queryParamsObj, randomKey } = useHome();

  const handleFilter = (event: any) => {
    const { name, value, dataset } = event.target;

    searchParams.set(name, value);

    if (!event.target.checked) {
      searchParams.delete(name);
    }

    if (Number(value) >= 0) {
      setSearchParams((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setFiltered((prevState) => ({
        ...prevState,
        [name]: dataset.label,
      }));

      navigate({
        pathname: "/product/filter",
        search: `?${createSearchParams(searchParams)}`,
      });
    }
  };

  const handleClearFilter = () => {
    // Implementar a lógica para limpar os filtros
  };

  const handleCloseFilter = () => {
    setOpenFilters((prevState) => !prevState);
  };

  const hasQueryParams = queryParamsObj && Object.keys(queryParamsObj).length > 0;

  useEffect(() => {
    if (!hasQueryParams) {
      navigate({ pathname: "/" });
    }
  }, [hasQueryParams, navigate]);

  const filterTitle: FilterTitleType = {
    colors: "COR",
    price: "PREÇO",
    brands: "MARCA",
    sizes: "TAMANHO",
    genders: "GÊNERO",
    categories: "CATEGORIA",
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