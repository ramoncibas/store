import { formatCurrency } from "../../utils/formatCurrency";
import { backgroundDiscount } from "../../utils/backgroundDiscount";
import * as S from "./style";
import Button from "../Button";
import DefaultProductImage from "../../assets/img/default-image-product.png";
import { MdAddShoppingCart, MdEditNote } from "react-icons/md";

import { useNavigate, useLocation } from 'react-router-dom'

function CardProduct(props) {  
  const navigate = useNavigate();
  const { pathname }  = useLocation();

  let disabledButton;
  pathname !== '/' ? disabledButton = true : disabledButton = false;

  // Deixando o preco do produto com o valor atualizado
  const priceWithdiscount = props.price
    ? Number(props.price * props.discount_percentage) / 100
    : 0;

  // Gerando o novo valor do Produto
  const newPriceProduct = Number(props.price) - priceWithdiscount;

  // Verificando se tiver desconto, entao retorna o novo valor com disconto, se não o valor inteiro
  const priceHasDiscount = props.discount_percentage
    ? newPriceProduct
    : Number(props.price);

  // Valor das parcelas do Produto
  const valueOfInstallments = formatCurrency(
    priceHasDiscount / props.number_of_installments
  );

  // Só sera possivel editar um produto caso o "userType" for "admin"
  const handleEdit = (product) => {
    navigate(`/product/${product.id}`);
    // window.sessionStorage.setItem('product-to-edit', JSON.stringify(data))
  }

  const hasDiscount = props.discount_percentage > 0
  const hasFreeShipping = props.free_shipping    

  const admin = true
  // useEffect(() => {

  // }, [props]);
  
  return (
    <S.Container>
      <S.Row
        style={{ marginTop: "0" }}
      >
        <S.ActionContainer>
          {
            // Valida se tem disconto, se sim ele mostra um "circle" com o valor do desconto
            hasDiscount && props.discount_percentage > 0 ? (
              <S.DiscountComponent background={backgroundDiscount(props.discount_percentage)}>
                <div className="discount-content">
                  <span>{props.discount_percentage}%</span>
                </div>
              </S.DiscountComponent>
            ) : <></>
          }
          {
            // Isso nao faz sentido estar habilitado, como esse component é herdado, so deve ser mostrado na home, e não na /product
            //user.admin && (AbleToEditProduct())
            admin ? (
              <Button
                onClick={() => handleEdit(props)}
                background="white"
                icon={true}
                style={{
                  width: '2.75rem',
                  color: '#000',
                  fontSize: '1.5rem',
                  display: disabledButton && 'none'
                }}
              >
                {/* <Link to={{
                  pathname: '/product',
                  state:{props}
                }}
                >aaaa</Link> */}
                <MdEditNote />
              </Button>
            ) : <></>
          }
        </S.ActionContainer>
      </S.Row>
      <S.Row className="image-content">
        <S.Col style={{ display: "flex", justifyContent: "center" }}>
          {
            // Valida se o campo de imagem foi preenchido, se sim renderiza a foto, se não mostra a default
            props.product_picture ? (
              <img src={props.product_picture} alt="Sneakers" />
            ) : (
              <img src={DefaultProductImage} alt="Default Product" />
            )
          }
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col>
          <p>{props.name}</p>
          {
            // Adicionar a opção de frete gratis nos cards
            hasFreeShipping && (
              <h4 style={{ color: "#04D483" }}>FRETE GRÁTIS</h4>
            )
          }
          <span className="old-price">
            {hasDiscount && formatCurrency(props.price)}
          </span>
          <h1 className="price">
            {
              // formata o valor com descoto se tive, ou o valor escrito, por default é formatado ("0") zero
              formatCurrency(hasDiscount ? priceHasDiscount : props.price || 0)
            }
          </h1>
          <h4>
            {
              // Valida se há nummero de parcelas para renderizar o valor dividido por elas
              props.number_of_installments && ( //props.number_of_installments >= 1
                props.number_of_installments + " X de " + valueOfInstallments
              )
            }
          </h4>
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col style={{ position: "absolute", bottom: "10px" }}>
          <Button
            background="#E5E5E5"
            icon={true}
            onClick={() => props.onClick(props)}
            disabled={disabledButton}
          >
            <MdAddShoppingCart color="000" />
          </Button>
        </S.Col>
      </S.Row>
    </S.Container>
  );
}

export default CardProduct;
