import { Product, ProductAspects } from "types";

export type FilterTitleType = {
  [key: string]: string[];
};

export interface IUseFilter {
  aspects: ProductAspects | null | undefined;
  filtered: ProductAspects | null | undefined;
  filteredProduct: Product[] | null | undefined;
  openFilters: boolean | null | undefined;
  filterTitle: FilterTitleType;
  // handleFilter: (event: React.ChangeEvent<HTMLElement>) => void;
  handleFilter: any;
  handleClearFilter: () => void;
  handleCloseFilter: () => void;
}
