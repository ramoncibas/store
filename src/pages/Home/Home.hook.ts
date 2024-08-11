import { useEffect, useState } from "react";

import { useProductContext } from "context/Product/productContext.context";
import useKey from "hooks/useKey";
import { Product, ProductAspects } from "types";
import { useCartContext } from "context/Cart/cartContext.context";
import useCustomerStorage from "hooks/useCustomerStorage.hook";

interface IUseHome {
  products: Product[] | null;
  aspects: ProductAspects | null | undefined;
  randomKey: () => number;
  handleShoppinCart: (product: Product) => any;
}

const useHome = (): IUseHome => {
  const {
    products: productsContext,
    aspects,
  } = useProductContext();
  const { handleContextCart } = useCartContext();

  const { customerID } = useCustomerStorage();

  const [products, setProducts] = useState<Product[]>(productsContext || []);

  const { randomKey } = useKey();

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
    if (productsContext)
      setProducts(productsContext);
  }, [productsContext]);

  return {
    products,
    aspects,
    randomKey,
    handleShoppinCart,
  };
};

export default useHome;