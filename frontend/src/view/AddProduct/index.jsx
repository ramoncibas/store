import { Form, FloatingLabel } from "react-bootstrap";
import { Container } from "../../containers/Container";
import { Title, Button, Input, CardProduct } from "../../components";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import * as DefautlStyle from "../../assets/style/defaultContainerStyle";
import { useState } from "react";
import api from "../../utils/api";
import { useLocation } from 'react-router-dom';


const CheckBox = ({ onChange }) => (
  <Form.Group
    className="mb-3"
    id="discount"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Form.Check type="checkbox" label="Desconto" />
    <FloatingLabel controlId="discount" label="Ex: 15">
      <Form.Control
        name="discount"
        type="number"
        placeholder="Valor do Desconto"
        onChange={onChange}
      />
    </FloatingLabel>
  </Form.Group>
);

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const { state } = useLocation();
  
  /**
   * Atualiza o estado com o nome e o valor vindos do Input
   * @param event evento do elemento
   */
  const handleChange = (event) => {
    setProduct((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  /**
   * Chama a api para salvar os dados no banco via post
   * @param data dados do produto a serem salvos
   */
  const handleSaveProduct = (event, data) => {
    event.preventDefault();
    api.post("/product", data).then(window.location.href = "/");
  };

  /**
   * Chama a api para alterar os dados do produto selecionado,  via post
   * @param data dados do produto a serem modificados
   */
  const handleUpdateProduct = (event, data) => {
    event.preventDefault();
    api.patch("/product", {id: state.id, ...data}).then(window.location.href = "/");
  }

  //Verifica se o tamanho da tela é menor que 1094 pixel (tamanha de tablets)
  const windowWidth = window.innerWidth <= 1094 ? true : false;
  return (
    <Container>
      <DefautlStyle.Row>
        <DefautlStyle.Col md="auto">
          <Title>ADICIONE UM PRODUTO PARA VENDA</Title>
          <Form>
            <Input
              id="name"
              name="name"
              label="Nome do Produto"
              type="text"
              placeholder="Nome do Produto"
              onChange={handleChange}
              value={state ? state.name : ''}
            />
            <Input
              id="price"
              name="price"
              label="Preço do Produto"
              type="number"
              placeholder="Preço do Produto"
              onChange={handleChange}
              value={state ? state.price : ''}
            />
            <CheckBox onChange={handleChange} />
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
              onChange={handleChange}
              value={state ? state.product_picture : ''}
            />
            <Input
              id="number_of_installments"
              name="number_of_installments"
              label="Nomero máximo de Parcelas"
              type="number"
              placeholder="Numero máximo de Parcelas"
              onChange={handleChange}
              value={state ? state.number_of_installments : ''}
            />
            <Button
              onClick={(event) => {
                {
                  !state
                  ? handleSaveProduct(event, product)
                  : handleUpdateProduct(event, product)
                }
              }}
            >
              Adicionar Produto &nbsp;
              <MdAddShoppingCart color="000" />
            </Button>
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
          <CardProduct key={product} disabledButton={true} {...product} />
        </DefautlStyle.Col>
      </DefautlStyle.Row>
    </Container>
  );
};

export default AddProduct;
