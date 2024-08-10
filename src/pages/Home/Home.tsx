import { FC } from "react";

import { Container, Title, CardProduct } from "shared";
import { Main, Aside, Row, Col } from "./style";
import Filter from "./components/Filter";
import useHome from "./Home.hook";
import { withProductContext } from "context/Product/productContext.provider";
import { Product } from "types";
import Login from "pages/Customer/pages/Login";
import StoreBanner from "pages/Home/components/StoreLogo";

interface ProductListProps {
  list: Product[];
}

const Home: FC = () => {
  const { products, handleShoppinCart, randomKey } = useHome();
  
  const ProductList: React.FC<ProductListProps> = ({ list }): any => (
    list.map((product: Product) => (
      <Col key={product.id}>
        <CardProduct onClick={handleShoppinCart} {...product} />
      </Col>
    ))
  );

  return (
    <>
      <StoreBanner />
      <Main>
        <Aside className="filter-product">
          <Filter />
        </Aside>
        {/* <Login.Modal /> */}
        <Container margin={"2rem"}>
          <Row>
            <Title fontsize="32px">Mais Vistos</Title>
          </Row>
          <Row>
            {/* {products && products.length > 0 ? <ProductList list={products} /> : null} */}
            {!!products && products != null ? <ProductList list={products}/> : <></>}
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default withProductContext(Home);