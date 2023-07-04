import { FC } from "react";

import { Container, Title, CardProduct } from "shared";
import { Banner, Main, Aside, Row, Col } from "./style";
import Filter from "./components/Filter";
import useHome from "./Home.hook";
import { withProductContext } from "context/productContext.provider";
import { Product } from "view/Product/types";


const Home: FC = () => {
  const { products, handleShoppinCart, randomKey } = useHome();

  return (
    <>
      <Banner>
        <div className="content">
          <h1>STORE</h1>
          <span>buy safe</span>
        </div>
      </Banner>
      <Main>
        <Aside className="filter-product">
          <Filter.Desktop />
        </Aside>
        <Container margin={"2rem"}>
          <Row>
            <Title fontsize="32px">Mais Vistos</Title>
          </Row>
          <Row>
            {products?.map((product: Product) => (
              <Col key={randomKey()}>
                <CardProduct onClick={handleShoppinCart} {...product} />
              </Col>
            ))}
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default withProductContext(Home);
