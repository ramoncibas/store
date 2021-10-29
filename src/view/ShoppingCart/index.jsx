import { useEffect, useState } from "react";
import { Container } from "../../containers/Container";
import { Title } from "../../components";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import api from "../../utils/api";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  // Pega os produtos salvos pelo usuario vindos da api
  useEffect(() => {
    api.get("/cart").then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <Container>
      <Row>
        <Title>Carrinho de Produtos</Title>
      </Row>
      <Row>
        {products == "" && "Você ainda nao tem nenhum produto :("}
        {products !== "" &&
          products.map((product, index) => (
            <Col key={index}>
              <Card {...product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ShoppingCart;
