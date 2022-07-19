import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { Container } from "../../containers/Container";
import { Title, Input, Button } from "../../components";
import * as DefautlStyle from "../../assets/style/defaultContainerStyle";
import DefaultImage from "../../assets/img/default-image-user.png";
import api from "../../utils/api";

const UserProfile = () => {
  const [user, setUser] = useState({});  
  // Pega o ususario que estiver salvo
  useEffect(() => {
    api.get("/profile/1").then(({ data }) => {
      const user = {...data}
      if(user) {setUser(user)}
    });
  }, []);

  /**
   * Atualiza o estado com o nome e o valor vindos do Input
   * @param event evento do elemento
   */
  const handleChange = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  /**
   * Chama a api para salvar os dados no banco via post
   * @param data dados do produto a serem salvos
   */
  const handleSaveUser = (data) => {
    api.post("/profile", data).then((res) => {
      console.log(res.data);
    });
    console.log(data);
  };
  const windowWidth = window.innerWidth <= 1094 ? true : false;

  return (
    <>
      <Container>
        <DefautlStyle.Row>
          <DefautlStyle.Col md="auto">
            <Title>Informações do Usuário</Title>
            <Form>
              <Input
                id="name"
                name="name"
                value={user.name || ''}
                label="Nome do Usuário"
                type="text"
                placeholder="Nome do Usuário"
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"                
                value={user.email || ''}
                label="E-mail"
                type="mail"
                placeholder="E-mail"
                onChange={handleChange}
              />
              <Input
                id="phone"
                name="phone"                
                value={user.phone || ''}
                label="Telefone"
                type="phone"
                placeholder="Telefone"
                onChange={handleChange}
              />
              <Input
                id="user_picture"
                name="user_picture"                
                value={user.user_picture || ''}
                label="Imagem de Perfil"
                type="text"
                placeholder="Imagem de Perfil"
                onChange={handleChange}
              />
              {/* <Form.Group controlId="user_picture" className="mb-3">
                <Form.Label>Imagem de Perfil</Form.Label>
                <Form.Control
                  name="user_picture"
                  type="file"
                  onChange={handleChange}
                />
              </Form.Group> */}
              <Button
                onClick={() => {
                  handleSaveUser(user);
                }}
                background="04AFD4"
              >
                Salvar Informações
              </Button>
            </Form>
          </DefautlStyle.Col>
          <DefautlStyle.Col md="auto">
            <DefautlStyle.PreviewContainer>
              <div className="content">
                <span>IMAGE PREVIEW</span>
                {windowWidth ? (
                  <BsArrowDown size={72} />
                ) : (
                  <BsArrowRight size={72} />
                )}
              </div>
            </DefautlStyle.PreviewContainer>
          </DefautlStyle.Col>
          <DefautlStyle.Col md="auto" className="image">
            <img src={DefaultImage} alt="Imagem Padrão" />
          </DefautlStyle.Col>
        </DefautlStyle.Row>
      </Container>
    </>
  );
};

export default UserProfile;
