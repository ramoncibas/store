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

export interface BrandProduct {
  id: number;
  name: string;
}

export interface GenderProduct {
  id: number;
  name: string;
}

export interface CategoryProduct {
  id: number;
  name: string;
}

export interface ColorsProduct {
  id: number;
  name: string;
}

export interface SizesProduct {
  id: number;
  name: string;
}

export interface ProductAspects {
  brands: BrandProduct[];
  genders: GenderProduct[];
  categories: CategoryProduct[];
  colors: ColorsProduct[];
  sizes: SizesProduct[];
}

export interface ShoppingCart extends Product {
  product_id: string;
}

export interface InputProps {
  id: string | number;
  name: string;
  label: string;
  type: 'text' | 'number';
  placeholder: string;
  value?: string | number;
  handleChange: any;
}