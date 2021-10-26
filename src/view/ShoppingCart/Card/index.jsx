import { Row, Col } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../../components";
import * as S from "./style";
import { formatCurrency } from "../../../utils/formatCurrency";
import DefaultProductImage from "../../../assets/img/default-image-product.png";

const Card = (props) => {
  // Arruma o valor do numero de parcelas
  const valueOfInstallments = formatCurrency(
    props.priceProduct / props.numberOfInstallments
  );
  return (
    <S.Container>
      <Row>
        <div className="content">
          <Col>
            {props.imageProduct ? (
              <img src={props.imageProduct} alt="Produto" />
            ) : (
              <img src={DefaultProductImage} alt="Default Product" />
            )}
          </Col>
          <Col>
            <p>{props.descriptionProduct}</p>
            <h1>{formatCurrency(props.priceProduct)}</h1>
            <h4>
              {props.numberOfInstallments}X de {valueOfInstallments}
            </h4>
          </Col>
        </div>
      </Row>
      <br />
      <Row>
        <Button onClick={props.handleClick} background="FF705A">
          Remover Produto &nbsp;
          <MdAddShoppingCart color="000" />
        </Button>
      </Row>
    </S.Container>
  );
};

export default Card;
