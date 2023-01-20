import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Title, CardProduct } from "../../components";
import { Container } from "../../containers/Container";
import { Banner, Main, Aside, Row, Col } from "./style";
import Filter from "./components/Filter";
import api from "../../utils/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  console.log(cookies, 'cookie from front-end')

  // Pega os produtos vindos da api
  useEffect(() => {
    api.get("/").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  // Adiconando o produto ao carrinho de compras
  const handleBuyProduct = product => {
    api.post("/", product).then(window.location.href = "/cart");
  };

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
          <Filter />
        </Aside>
        <Container margin={'2rem'}>
          <Row>
            <Title
              fontsize='32px'
            >Mais Vistos</Title>
          </Row>
          <Row>
            {products.map((product, index) => (
              <Col key={index}>
                <CardProduct onClick={handleBuyProduct} {...product} />
              </Col>
            ))}
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Home;
