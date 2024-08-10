import { ChangeEvent } from "react";
import { CustomAxiosPromise } from "./axios.types";

export interface Product {
  id?: string | number;
  name: string;
  price: string;
  size: number;
  color: string;
  discount_percentage: number;
  product_picture: string;
  number_of_installments: number;
  free_shipping: boolean;
  brand_product_id: number;
  gender_product_id: number;
  category_product_id: number;

  // temporario
  brand_name?: string;
  gender_name?: string;
  category_name?: string;

  /**
   * Ponto de melhoria que sera implementado na API:
   * Retornar todas as caracteristicas em formato de objeto.
   * Exemplo:
     {
       aspects: {
        brand: {
          id: number;
          name: string;
        },
        gender: {...},
        category: {...},
       }
     }
   */
  // brand: BrandProduct;
  // gender: GenderProduct;
  // category: CategoryProduct;
}

export interface ProductById extends Product {
  brand_name: string;
  gender_name: string;
  category_name: string;
}

export interface Aspect {
  id: number;
  name: string;
}

export interface ProductAspects {
  [key: string]: Array<{ id: number; name: string }>;
  brands: Aspect[];
  genders: Aspect[];
  categories: Aspect[];
  colors: Aspect[];
  sizes: Aspect[];
};

export interface InputProps {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'number';
  placeholder: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface FilterQueryParams {
  [key: string]: string;
}

export interface IProductContext {
  products: Product[] | null;
  aspects: ProductAspects | null;
  productByIdData: ProductById | null;
  createProductResponse: Product | null;
  filteredProduct: Product[] | null;
  isLoading: {
    products: boolean;
    editProduct: boolean;
    productById: boolean;
    createProduct: boolean;
    aspects: boolean;
    deleteProduct: boolean;
    filterProduct: boolean;
  };
  handleContextProduct: {
    initialRequest: () => void;
    getProducts: (productId: string) => CustomAxiosPromise<any>;
    getProductById: (productId: string) => CustomAxiosPromise<any>;
    createProduct: (product: Product) => CustomAxiosPromise<any>;
    editProduct: (product: Product) => CustomAxiosPromise<any>;
    deleteProduct: (productId: string) => CustomAxiosPromise<any>;
    getProductAspects: () => CustomAxiosPromise<any>;
    filterProduct: (query: FilterQueryParams) => CustomAxiosPromise<Product[]>;
  };
}

export interface UseProductServiceReturn extends IProductContext {}