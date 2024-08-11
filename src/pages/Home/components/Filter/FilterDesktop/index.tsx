import CheckBox from "shared/Checkbox";
import useFilter from "../hooks/Filter.hook";
import { Container, FilterContent, FilterHeader } from "./style";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Aspect, AspectName } from "types";
import { Skeleton } from "@mui/material";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
  const CheckBoxList = ({ data, aspectName }: { data: Aspect[], aspectName: AspectName }): any => {
    const currentArray = !!filtered ? filtered[aspectName] : [];
    
    return (
      data.map(({ id, name }: any) => (
        <CheckBox
          id={id}
          key={id}
          name={aspectName}
          value={id.toString()}
          label={name}
          checked={currentArray.includes(id)}
          onChange={handleFilter}
        />
      ))
    )
  }
  
  return (
    <Container>
      {!!aspects && Object.keys(aspects).length > 0 ? (
        Object.keys(aspects).map((aspectName) => {
          const typedAspectName = aspectName as AspectName;
          const aspect: Array<Aspect> = aspects[typedAspectName];

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
                <CheckBoxList data={aspect} aspectName={typedAspectName}/>
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