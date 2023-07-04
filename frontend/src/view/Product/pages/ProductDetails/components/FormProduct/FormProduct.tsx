import React, { FC } from "react";
// import { BlockPicker } from "react-color";

import { Form } from "react-bootstrap";

import { BsCheck2All } from "react-icons/bs";
import CheckBox from "../CheckBox";
import * as S from "../../../../style";
import useProduct from "../../../../hooks/useProduct.hook";
import InputList from "./components/InputList";
import { Buttons } from "./components/Buttons";

const FormProduct: FC = () => {
  const {
    product,
    aspects,
    fieldsProduct,
    handleChange,
  } = useProduct();
  return (
    <Form>
      <CheckBox
        id="free"
        nameCheckBox={"hasFreeShipping"}
        nameInput={"free_shipping"}
        labelCheckBox={"Frete Grátis"}
        onChange={handleChange}
        checked={product?.free_shipping || false}
        freeShipping={product?.free_shipping || false}
        children={
          <S.FreeShipping>
            FRETE GRÁTIS &nbsp;<BsCheck2All></BsCheck2All>
          </S.FreeShipping>
        }
      />

      <InputList fields={fieldsProduct} />

      <Form.Select
        name="brand_product_id"
        aria-label="Default select example"
        onChange={handleChange}
        // value={data.brands[0][product.brand_product_id] || null}
        value={product?.brand_product_id}
      >
        <option>Selecione uma Marca</option>
        {aspects?.brands ? (
          aspects?.brands?.map(({ id, name }: any) => (
            <option value={id} key={id + name}>
              {name}
            </option>
          ))
        ) : (
          <option
            value={product?.brand_product_id}
            key={product?.brand_product_id}
          >
            {product?.brand_name}
          </option>
        )}
      </Form.Select>
      <br />
      <Form.Select
        name="gender_product_id"
        aria-label="Default select example"
        onChange={handleChange}
        value={product?.gender_product_id}
      >
        <option>Selecione um Genero</option>
        {aspects?.genders ? (
          aspects?.genders?.map(({ id, name }: any) => (
            <option value={id} key={id + name}>
              {name}
            </option>
          ))
        ) : (
          <option
            value={product?.gender_product_id}
            key={product?.gender_product_id}
          >
            {product?.gender_name}
          </option>
        )}
      </Form.Select>
      <br />
      <Form.Select
        name="category_product_id"
        aria-label="Default select example"
        onChange={handleChange}
        value={product?.category_product_id}
      >
        <option>Selecione uma Categoria</option>
        {aspects?.categories ? (
          aspects?.categories?.map(({ id, name }: any) => (
            <option value={id} key={id + name}>
              {name}
            </option>
          ))
        ) : (
          <option
            value={product?.category_product_id}
            key={product?.category_product_id}
          >
            {product?.category_name}
          </option>
        )}
      </Form.Select>
      <br />
      {/* ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'] */}
      <CheckBox
        id="discount"
        nameCheckBox={"hasDiscount"}
        nameInput={"discount_percentage"}
        labelCheckBox={"Possui Desconto"}
        inputPlaceholder={"Valor do Desconto"}
        onChange={handleChange}
        checked={product?.discount_percentage}
        discountPercentage={product?.discount_percentage}
        inputGroupText={true}
        inputGroupValue={"$"}
      />
      {/*
        // Funcionalidade futura para adicionar foto via upload
        <Form.Group controlId="product_image" className="mb-3">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            id="product_image"
            name="product_image"
            type="file"
            onChange={handleChange}
          />
        </Form.Group> 
      */}
      <Buttons />
    </Form>
  );
};

export default FormProduct;
