import { Form } from "react-bootstrap";
import { Container } from "../../containers/Container";
import { Title, Button, Input, CardProduct } from "../../components";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import * as DefautlStyle from "../../assets/style/defaultContainerStyle";
import { useState } from "react";
import api from "../../utils/api";
import { useLocation } from 'react-router-dom';
import { AiTwotoneDelete } from "react-icons/ai"
import { BsCheck2All } from "react-icons/bs"
import CheckBox from "./components/CheckBox"
import * as S from "./style"

const Product = () => {
  const { state } = useLocation();
  const initialValue = state || { disabledButton: true };
  const [product, setProduct] = useState(initialValue);
  console.log(state)
  /**
   * Atualiza o estado com o nome e o valor vindos do Input
   * @param event evento do elemento
   */
  const handleChange = (event) => {
    const { value, name } = event.target;
    const checked = event.target.checked;
    console.log(value, name, checked)

    // Criar um objeto, e ti-palo com uma interface ->> data:Product
    // Migrar para TypeScript, para resolver meus problemas :)


    /**
     * Altera o valor da "discount_percentage" para zero se o checkbox não estiver marcado
     * Altera a prop "free_shipping" para true ou false, de acordo com o checkbox
     */
    if (checked === false && name === 'hasDiscount') {
      product.discount_percentage = 0
    } else if(checked === true && name === 'hasDiscount') {
      product.discount_percentage = 1
    } else if (checked === false && name === 'hasFreeShipping') {
      product.free_shipping = false
    } else if (checked === true && name === 'hasFreeShipping') {
      product.free_shipping = true
    }

    setProduct((prevState) => ({
      ...prevState,
      [name]: checked || value
    }));
  };

  /**
   * Chama a api para salvar, ou alterar os dados no banco
   * @param data dados do produto a serem salvos/modificados
   */
  const handleProduct = (event, data) => {
    event.preventDefault();
    const dataFromProductPage = {
      name: data.name,
      price: data.price,
      product_picture: data.product_picture,
      discount_percentage: data.discount_percentage || 0,
      number_of_installments: data.number_of_installments,
      free_shipping: data.free_shipping || false
    };

    if (!state) {
      api.post("/product", dataFromProductPage).then(window.location.href = "/");
    } else {
      api.patch("/product", { id: product.id, ...dataFromProductPage }).then(window.location.href = "/");
    }
  };

  const handeDelete = (event, id) => {
    event.preventDefault();
    api.delete("/product", {
      headers: { Authorization: "*" },
      data: { id }
    }).then(window.location.href = '/')
  }

  //Verifica se o tamanho da tela é menor que 1094 pixel (tamanha de tablets)
  const windowWidth = window.innerWidth <= 1094 ? true : false;
  return (
    <Container>
      <DefautlStyle.Row>
        <DefautlStyle.Col md="auto">
          <Title>ADICIONE UM PRODUTO PARA VENDA</Title>
          <Form>
            <CheckBox
              id="free"
              nameCheckBox={"hasFreeShipping"}
              nameInput={"free_shipping"}
              labelCheckBox={"Frete Gratis"}
              onChange={handleChange}
              checked={product.free_shipping}
              freeShipping={product.free_shipping > 0 || false} // provisorio - logica nao ta boa hj
              hasFreeShipping={product.hasFreeShipping}
              children={<S.FreeShipping>FRETE GRATIS &nbsp;<BsCheck2All></BsCheck2All></S.FreeShipping>}
            />
            <Input
              id="name"
              name="name"
              label="Nome do Produto"
              type="text"
              placeholder="Nome do Produto"
              value={product.name || ''}
              onChange={handleChange}
            />
            <Input
              id="price"
              name="price"
              label="Preço do Produto"
              type="number"
              placeholder="Preço do Produto"
              value={product.price || ''}
              onChange={handleChange}
            />
            {/* <CheckBox
              onChange={handleChange}
              hasDiscount={product.hasDiscount}
              discountPercentage={product.discount_percentage}
            /> */}
            <CheckBox
              id="discount"
              nameCheckBox={"hasDiscount"}
              nameInput={"discount_percentage"}
              labelCheckBox={"Desconto"}
              inputPlaceholder={"Valor do Desconto"}
              onChange={handleChange}
              checked={product.discount_percentage}
              discountPercentage={product.discount_percentage} // provisorio - logica nao ta boa hj
              hasDiscount={product.hasDiscount}
              inputGroupText={true}
              inputGroupValue={"$"}
            />
            {/*
              // Funcionalidade futura para adicionar foto via upload
            <Form.Group controlId="product_image" className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                id="product_image"
                name="product_image"
                type="file"
                onChange={handleChange}
              />
            </Form.Group> */}
            <Input
              id="product_picture"
              name="product_picture"
              label="Url da Imagem do produto"
              type="text"
              placeholder="Url da Imagem do produto"
              value={product.product_picture || ''}
              onChange={handleChange}
            />
            <Input
              id="number_of_installments"
              name="number_of_installments"
              label="Nomero máximo de Parcelas"
              type="number"
              placeholder="Numero máximo de Parcelas"
              value={product.number_of_installments || ''}
              onChange={handleChange}
            />
            <div className="buttons-container">
              <Button
                onClick={(event) => handleProduct(event, product)}
              >
                {!state ? 'Adicionar Produto ' : 'Atualizar '}&nbsp;
                <CgArrowsExchange color="fff" />
              </Button>
              {
                state && (
                  <Button
                    background={'#ff7777'}
                    onClick={(event) => handeDelete(event, product.id)}
                  >
                    Deletar &nbsp;
                    <AiTwotoneDelete color="fff" />
                  </Button>
                )
              }
            </div>
          </Form>
        </DefautlStyle.Col>
        <DefautlStyle.Col md="auto">
          <DefautlStyle.PreviewContainer>
            <div className="content">
              <span>PREVIEW</span>
              {windowWidth ? (
                <BsArrowDown size={72} />
              ) : (
                <BsArrowRight size={72} />
              )}
            </div>
          </DefautlStyle.PreviewContainer>
        </DefautlStyle.Col>
        <DefautlStyle.Col md="auto">
          <CardProduct key={product.name} {...product} />
        </DefautlStyle.Col>
      </DefautlStyle.Row>
    </Container>
  );
};

export default Product;
