import CheckBox from "shared/Checkbox";
import useFilter from "../hooks/Filter.hook";
// import { Container, FilterContent, FilterHeader } from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FilterMobile = () => {
  const {
    aspects,
    queryParamsObj,
    filterTitle,
    openFilters,
    randomKey,
    handleFilter,
    handleCloseFilter,
  } = useFilter();

  return (
    <></>
  );
};

export default FilterMobile;