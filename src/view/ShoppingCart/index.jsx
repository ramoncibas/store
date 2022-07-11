import { useEffect, useState } from "react";
import { Container } from "../../containers/Container";
import { Title } from "../../components";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import api from "../../utils/api";
import {ProductNull} from "./style";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  // Pega os produtos salvos pelo usuario vindos da api
  useEffect(() => {
    api.get("/cart").then(({ data }) => {
      setProducts(data);
    });

  }, []);

  const ShoppingCartIsNull = () => (
    <ProductIsNull>
      <div className="content">
        <h3 className="info-text">
          Você ainda não tem nenhum produto no carrinho 😔
        </h3>
        <a href="/">Adicionar ao carrinho</a>
      </div>
    </ProductIsNull>
  )

  return (
    <Container>
      <Row>
        <Title>Carrinho de Produtos</Title>
      </Row>
      <Row>
        {
          // Valida se o usuário já adicionou algum produto no carrinho
          products.length
            ? products.map((product, index) => (
              <Col key={index}>
                <Card {...product} />
              </Col>
            ))
            : <ShoppingCartIsNull />
        }
      </Row>
    </Container>
  );
};

export default ShoppingCart;
