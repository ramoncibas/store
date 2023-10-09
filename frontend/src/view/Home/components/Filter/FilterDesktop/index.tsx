import CheckBox from "shared/Checkbox";
import useFilter from "../hooks/Filter.hook";
import { Container, FilterContent, FilterHeader } from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Aspect } from "view/Product/types";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FilterDesktop = () => {
  const {
    aspects,
    queryParamsObj,
    filterTitle,
    openFilters,
    randomKey,
    handleFilter,
    handleCloseFilter,
  } = useFilter();

  // REFERENCIA DE ESTIIZAÇÃO
  // https://cdn.shopify.com/app-store/listing_images/f44b43e81ef89598c0de05c8ea6dcf80/desktop_screenshot/CKCezOGbqPECEAE=.png?height=360&width=640

  return (
    <Container>
      {aspects && Object.keys(aspects).length > 0 ? (
        Object.keys(aspects).map((key: string) => {
          const aspect: Array<Aspect> = aspects?.[key];
          return (
            <div className="ul-container" key={key}>
              <FilterHeader>
                <button onClick={handleCloseFilter}>
                  {openFilters ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                  <span>{filterTitle[key]}</span>
                </button>
              </FilterHeader>

              <FilterContent className={`ul-${key}`} open={!!openFilters}>
                {aspect.map(({ id, name }: Aspect) => (
                  <CheckBox
                    key={randomKey()}
                    name={key}
                    value={id.toString()}
                    label={name}
                    checked={Number(queryParamsObj?.[key]) === id}
                    onChange={handleFilter}
                  />
                ))}
              </FilterContent>
            </div>
          );
        })
      ) : (
        <div>
          {/* <Skeleton height={16} width={120} style={{ marginBottom: "8px" }} />
          <Skeleton count={5} height={36} style={{ marginBottom: "8px" }} /> */}
        </div>
      )}
    </Container>
  );
};

export default FilterDesktop;