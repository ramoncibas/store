import useFilter from "../hooks/Filter.hook";
import { Container, FilterContent, FilterHeader } from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Aspect, AspectName } from "types";
import { Skeleton } from "@mui/material";
import CheckBoxList from "shared/CheckboxList";
import RangeInput from "shared/Input/Range";

const FilterDesktop = () => {
  const {
    filtered,
    aspects,
    filterTitle,
    openFilters,
    handleFilter,
    handleCloseFilter,
  } = useFilter();

  // REFERENCIA DE ESTIIZAÇÃO
  // https://cdn.shopify.com/app-store/listing_images/f44b43e81ef89598c0de05c8ea6dcf80/desktop_screenshot/CKCezOGbqPECEAE=.png?height=360&width=640
  // https://truethemes.net/wp-content/uploads/2022/10/CKCezOGbqPECEAE.png
 
  return (
    <Container>
      {!!aspects && Object.keys(aspects).length > 0 ? (
        Object.keys(aspects).map((aspectName) => {
          const typedAspectName = aspectName as AspectName;
          const aspect: Array<Aspect> = aspects[typedAspectName];
          const selectedOptions = !!filtered ? filtered[typedAspectName] : [];

          return (
            <div className="ul-container" key={aspectName}>
              <FilterHeader>
                <button onClick={handleCloseFilter}>
                  {openFilters ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                  <span>{filterTitle[aspectName]}</span>
                </button>
              </FilterHeader>

              <FilterContent className={`ul-${aspectName}`} open={!!openFilters}>
                {
                  aspectName !== 'size' ? (
                    <CheckBoxList
                      options={aspect}
                      filterName={aspectName}
                      selectedOptions={selectedOptions}
                      onOptionChange={handleFilter}
                    />
                  ) : (
                    <RangeInput options={aspect} handleFilter={handleFilter} />
                  )
                }
                
              </FilterContent>
            </div>
          );
        })
      ) : (
        <div>
          <Skeleton height={16} width={120} style={{ marginBottom: "8px" }} />
          <Skeleton height={16} width={120} style={{ marginBottom: "8px" }} />
        </div>
      )}
    </Container>
  );
};

export default FilterDesktop;