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
import { BlockPicker } from 'react-color'

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
    // { hex }
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
    console.log(data)
    const dataFromProductPage = {
      name: data.name,
      price: data.price,
      product_picture: data.product_picture,
      discount_percentage: data.discount_percentage || 0,
      number_of_installments: data.number_of_installments,
      free_shipping: data.free_shipping || false,
      brand_id: data.brand,
      gender_id: data.gender,
      category_id: data.category,
      size: data.size,
      color: data.color,
    };    

    if (!state) {
      api.post("/product",     {
      name: "Tenis Nike AirMax 90",
      price: "1200",
      discount_percentage: 15,
      number_of_installments: 12,
      product_picture: "https://vgmultimarcas.com/wp-content/uploads/2021/05/nike-tenis-nike-air-force-1-tm-p-1618505989591.jpg",
      color: "White",
      size: 43,
      free_shipping: 1,
      brand_product_id: 3,
      gender_product_id: "Masculino",
      category_product_id: 1
    }).then((data) => console.log(data))
    // .then(window.location.href = "/");
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

  /*
  -- Passar esses campos no formulario, e enviar ao backend
        1.1 - Ja fiz o backend, basta valida-lo com um mock do front mesmo...
        1.2 - Adicionar esses campos ao formulario do frontend, e enviar ao back
        brand_id,
        gender_id,
        category_id
  */

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
              id="size"
              name="size"
              label="Tamanho do Produto"
              type="text"
              placeholder="Tamanho do Produto"
              value={product.size || ''}
              onChange={handleChange}
            />
            <Input
              id="color"
              name="color"
              label="Cor do Produto"
              type="text"
              placeholder="Cor do Produto"
              value={product.color || ''}
              onChange={handleChange}
            />
            {/* ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'] */}
            {/* <BlockPicker
              name="cor"
              color= {product.color}
              onChange={handleChange}
            /> */}
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
