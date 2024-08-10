import React from "react";
import { useDevices } from "hooks/useDevices";
import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";

interface FilterComponent {
  Desktop: React.ComponentType;
  Mobile: React.ComponentType;
}

const Filter = (): JSX.Element => {
  const FilterComponent: FilterComponent = {
    Desktop: FilterDesktop,
    Mobile: FilterMobile
  };

  const { isMobile } = useDevices();

  return <FilterComponent.Desktop />;
  // return isMobile ? <FilterComponent.Mobile /> : <FilterComponent.Desktop />;
};

export default Filter;