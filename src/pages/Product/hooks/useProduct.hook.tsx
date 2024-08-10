import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { InputProps, Product, ProductById } from "types";
import { useProductContext } from "context/Product/productContext.context";


const useProduct = (): any => {
  const { id: __PRODUCT_ID_PARAMS } = useParams();
  const [product, setProduct] = useState<any>();

  const REDIRECT_HOME = () => window.location.assign("/");

  const {
    aspects,
    productByIdData,
    handleContextProduct,
    isLoading
  } = useProductContext();

  useEffect(() => {
    if (__PRODUCT_ID_PARAMS) {
      handleContextProduct.getProductById(__PRODUCT_ID_PARAMS);
      if (productByIdData !== null) setProduct(productByIdData);      
    }    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productByIdData?.id]);

  /**
   * Atualiza o estado com o nome e o valor vindos do Input
   * @param event evento do elemento
   */
  const handleChange = (event: any) => {
    const { value, name } = event.target;
    const checked = event.target.checked;

    // { hex }
    // Criar um objeto, e ti-palo com uma interface ->> data:Product
    // Migrar para TypeScript, para resolver meus problemas :)

    /**
     * Altera o valor da "discount_percentage" para zero se o checkbox não estiver marcado
     * Altera a prop "free_shipping" para true ou false, de acordo com o checkbox
     */
    if (checked === false && name === "hasDiscount") {
      product!.discount_percentage = 0;
    } else if (checked === true && name === "hasDiscount") {
      product!.discount_percentage = 1;
    } else if (checked === false && name === "hasFreeShipping") {
      product!.free_shipping = false;
    } else if (checked === true && name === "hasFreeShipping") {
      product!.free_shipping = true;
    }

    setProduct((prevState: any) => ({
      ...prevState,
      [name]: checked || value,
    }));
  };

  const handeDelete = (event: any) => {
    event.preventDefault();

    // Mostrar um modal aqui
    const sureDelete = prompt("Deseja meso remover esse produto?");

    if (sureDelete) {
      handleContextProduct.deleteProduct(product?.id);

      REDIRECT_HOME();
    }
  };

  const handleProduct = (event: any) => {
    event.preventDefault();

    try {
      if (__PRODUCT_ID_PARAMS) handleContextProduct.editProduct({ id: __PRODUCT_ID_PARAMS, ...product});
      if (!__PRODUCT_ID_PARAMS) handleContextProduct.createProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      return REDIRECT_HOME();
    }
  };

  // const handleColor = ({ hex }) => {
  //   setProduct({ ...product, color: hex });
  // };

  const fieldsProduct: Array<InputProps> = [
    {
      id: "name",
      name: "name",
      label: "Nome do Produto",
      type: "text",
      placeholder: "Nome do Produto",
      value: product?.name,
      handleChange,
    },
    {
      id: "size",
      name: "size",
      label: "Tamanho do Produto",
      type: "text",
      placeholder: "Tamanho do Produto",
      value: product?.size,
      handleChange,
    },
    {
      id: "color",
      name: "color",
      label: "Cor do Produto",
      type: "text",
      placeholder: "Cor do Produto",
      value: product?.color,
      handleChange,
      //<BlockPicker name="cor" color={product.color onChange={handleColor}/> 
    },
    {
      id: "price",
      name: "price",
      label: "Preço do Produto",
      type: "text",
      placeholder: "Preço do Produto",
      value: product?.price,
      handleChange,
    },
    {
      id: "product_picture",
      name: "product_picture",
      label: "Url da Imagem do produto",
      type: "text",
      placeholder: "Url da Imagem do produto",
      value: product?.product_picture,
      handleChange,
    },
    {
      id: "number_of_installments",
      name: "number_of_installments",
      label: "Número máximo de Parcelas",
      type: "number",
      placeholder: "Número máximo de Parcelas",
      value: product?.number_of_installments,
      handleChange,
    },
  ];

  return {
    product,
    aspects,
    productByIdData,
    __PRODUCT_ID_PARAMS,
    fieldsProduct,
    handleChange,
    handleProduct,
    handeDelete,
    handleContextProduct,
    isLoading
  };
};

export default useProduct;
