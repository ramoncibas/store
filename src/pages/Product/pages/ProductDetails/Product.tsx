import React, { FC } from "react";

import { withProductContext } from "context/Product/productContext.provider";
import useProduct from "../../hooks/useProduct.hook";
import windowWidth from "utils/windowWidth";

import * as DefautlStyle from "assets/style/defaultContainerStyle";
import { Container, Title, CardProduct } from "shared";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import FormProduct from "./components/FormProduct/FormProduct";

const Product: FC = () => {
  const { product } = useProduct();

  return (
    <Container>
      <DefautlStyle.Row>
        <DefautlStyle.Col md="auto">
          <Title>ADICIONE UM PRODUTO PARA VENDA</Title>

          <FormProduct />

        </DefautlStyle.Col>
        
        <DefautlStyle.Col md="auto">
          <DefautlStyle.PreviewContainer>
            <div className="content">
              <span>PREVIEW</span>
              {windowWidth(1024) ? (
                <BsArrowDown size={72} />
              ) : (
                <BsArrowRight size={72} />
              )}
            </div>
          </DefautlStyle.PreviewContainer>
        </DefautlStyle.Col>
        <DefautlStyle.Col md="auto">
          <CardProduct key={product?.name} {...product} />
        </DefautlStyle.Col>
      </DefautlStyle.Row>
    </Container>
  );
};

export default withProductContext(Product);
