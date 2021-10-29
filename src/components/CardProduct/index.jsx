import { useEffect } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { backgroundDiscount } from "../../utils/backgroundDiscount";
import * as S from "./style";
import Button from "../Button";
import DefaultProductImage from "../../assets/img/default-image-product.png";
import { MdAddShoppingCart } from "react-icons/md";

function CardProduct(props) {
  useEffect(() => {
    //console.log("props", props);
  }, [props]);

  // Deixando o preco do produto com o valor atualizado
  const priceWithdiscount = props.price
    ? Number(props.price * props.discount) / 100
    : 0;
  // Gerando o novo valor do Produto
  const newPriceProduct = Number(props.price) - priceWithdiscount;
  // Verificando se tiver discounto, entao retorne
  const priceHasDiscount = props.discount
    ? newPriceProduct
    : Number(props.price);
  // Valor das parcelas do Produto
  const valueOfInstallments = formatCurrency(
    priceHasDiscount / Number(props.number_of_installments)
  );

  return (
    <S.Container>
      <S.Row
        style={!props.discount ? { marginTop: "70px" } : { marginTop: "10px" }}
      >
        {props.discount && (
          <S.ColDiscount background={backgroundDiscount(props.discount)}>
            <div>
              <span>-{props.discount}%</span>
            </div>
          </S.ColDiscount>
        )}
      </S.Row>
      <S.Row className="image-content">
        <S.Col style={{ display: "flex", justifyContent: "center" }}>
          {props.product_picture ? (
            <img src={props.product_picture} alt="Sneakers" />
          ) : (
            <img src={DefaultProductImage} alt="Default Product" />
          )}
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col>
          <p>{props.name}</p>
          {props.freeShipping && (
            <h4 style={{ color: "#04D483" }}>FRETE GRÁTIS</h4>
          )}
          <span className="old-price">
            {props.discount && formatCurrency(props.price)}
          </span>
          <h1 className="price">
            {props.price && formatCurrency(priceHasDiscount)}
          </h1>
          <h4>
            {props.price &&
              props.number_of_installments &&
              props.number_of_installments + " X de " + valueOfInstallments}
          </h4>
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col style={{ position: "absolute", bottom: "10px" }}>
          <Button
            background="white"
            icon={true}
            onClick={() => props.onClick(props)}
            disabled={props.disabledButton}
          >
            <MdAddShoppingCart color="000" />
          </Button>
        </S.Col>
      </S.Row>
    </S.Container>
  );
}

export default CardProduct;
