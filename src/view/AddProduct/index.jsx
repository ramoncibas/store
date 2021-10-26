import { Form, FloatingLabel } from "react-bootstrap";
import { Container } from "../../containers/Container";
import { Title, Button, Input, CardProduct } from "../../components";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import * as DefautlStyle from "../../assets/style/defaultContainerStyle";
import { useState } from "react";
import api from "../../utils/api";

const CheckBox = ({ onChange }) => (
  <Form.Group
    className="mb-3"
    id="formGridCheckbox"
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
  const handleSaveProduct = (data) => {
    api.post("/add-product", data).then(({ data }) => {
      console.log(data);
    });
  };

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
            />
            <Input
              id="price"
              name="price"
              label="Preço do Produto"
              type="number"
              placeholder="Preço do Produto"
              onChange={handleChange}
            />
            <CheckBox onChange={handleChange} />
            <Form.Group controlId="product_image" className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                name="imageProduct"
                type="file"
                onChange={handleChange}
              />
            </Form.Group>
            <Input
              id="number_of_installments"
              name="numberOfInstallments"
              label="Nomero máximo de Parcelas"
              type="number"
              placeholder="Numero máximo de Parcelas"
              onChange={handleChange}
            />
            <Button
              onClick={() => {
                handleSaveProduct(product);
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
