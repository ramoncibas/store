import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { Row, Col } from "react-bootstrap";
import { Container, Title } from "shared";
import Card from "./Card";
import { ProductIsNull } from "./style";
import api from "utils/api";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  // Pega os produtos salvos pelo usuario vindos da api
  useEffect(() => {
    api.get("/cart", {
      headers: { "x-access-token": cookies.access_token, }
    }).then(({ data }) => {
      setProducts(data);
    })

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
