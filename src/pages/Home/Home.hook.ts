import { useEffect, useState } from "react";

import { useProductContext } from "context/Product/productContext.context";
import { Product, ProductAspects } from "types";
import { useCartContext } from "context/Cart/cartContext.context";
import useCustomerStorage from "hooks/useCustomerStorage.hook";

interface IUseHome {
  products: Product[] | null;
  aspects: ProductAspects | null | undefined;
  handleShoppinCart: (product: Product) => any;
}

const useHome = (): IUseHome => {
  const { customerID } = useCustomerStorage();
  const {
    products: productsContext,
    filteredProduct,
    aspects,
  } = useProductContext();
  const { handleContextCart } = useCartContext();
  const [products, setProducts] = useState<Product[]>(productsContext || []);

  const handleShoppinCart = async (product: Product) => {
    if (!product || !customerID || !handleContextCart.addCartItem) {
      throw new Error('Ops... Não foi possivel adicionar um produto ao carrinho.');
    }
    
    return await handleContextCart.addCartItem(customerID, product)?.then(
      (data: any) => {
        if (data) {
          window.location.href = "/cart";
        }
      }
    );
  };

  useEffect(() => {
    if (filteredProduct || productsContext) {
      setProducts(filteredProduct || productsContext || []);
    }
  }, [filteredProduct, productsContext, products]);

  return {
    products,
    aspects,
    handleShoppinCart,
  };
};

export default useHome;