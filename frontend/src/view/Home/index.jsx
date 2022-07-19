import { useState, useEffect } from "react";
import { Title, CardProduct } from "../../components";
import { Container } from "../../containers/Container";
import * as S from "./style";
import api from "../../utils/api";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

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
      <S.Banner>
        <div className="content">
          <h1>STORE</h1>
          <span>buy safe</span>
        </div>
      </S.Banner>
      <Container>
        <S.Row>
          <Title>Mais Vistos</Title>
        </S.Row>
        <S.Row>
          {products.map((product, index) => (
            <S.Col key={index}>
              <CardProduct onClick={handleBuyProduct} {...product} />
            </S.Col>
          ))}
        </S.Row>
      </Container>
    </>
  );
};

export default Home;
