import { Row, Col } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../../../../../../components";
import * as S from "./style";
import { formatCurrency } from "../../../../../../utils/formatCurrency";
import DefaultProductImage from "../../../../../../assets/img/default-image-product.png";
import api from "../../../../../../utils/api";

const Card = (props) => {
  // Arruma o valor do numero de parcelas
  const valueOfInstallments = formatCurrency(
    props.price / props.number_of_installments
  );

  const handleDeleteItem = (event, id) => {
    event.preventDefault();

    // Mostrar um modal aqui
    const sureDelete = prompt('Deseja meso remover esse produto?')

    if (sureDelete) {
      api.delete("/cart", {
        headers: { Authorization: "*" },
        data: { id }
      }).then(window.location.href = '/cart') 
    }    
  }
  return (
    <S.Container>
      <Row>
        <div className="content">
          <Col>
            {props.product_picture ? (
              <img src={props.product_picture} alt="Produto" />
            ) : (
              <img src={DefaultProductImage} alt="Default Product" />
            )}
          </Col>
          <Col>
            <div>
            <span>{props.name}</span>
              <h1>{formatCurrency(props.price)}</h1>
              <h4>
                {props.number_of_installments}X de {valueOfInstallments}
              </h4>
            </div>              
          </Col>
        </div>
      </Row>
      <br />
      <Row>
        <Button onClick={(event) => handleDeleteItem(event, props.id)} background="#FF705A">
          Remover Produto &nbsp;
          <MdAddShoppingCart color="000" />
        </Button>
      </Row>
    </S.Container>
  );
};

export default Card;
