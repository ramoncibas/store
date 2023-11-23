import { useEffect, useState } from "react";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { Container, Title, Input, Button } from "shared";
import * as DefautlStyle from "assets/style/defaultContainerStyle";
import DefaultImage from "assets/img/default-image-user.png";
import api from "utils/api";
import windowWidth from "utils/windowWidth";
import useCustomerStorage from "hooks/useCustomerStorage.hook";
import getAcessToken from "utils/getAcessToken";
import useProfile from "./hook/useProfile.hook";

const UserProfile = () => {
  const {
    user,
    handleEdit,
    handleChange,
    isLoadingCustomer,
    isLoadingEditCustomer,
  } = useProfile();
  
  return (
    <>
      <Container>
        <DefautlStyle.Row>
          <DefautlStyle.Col md="auto">
            <Title>Informações do Usuário</Title>
            <Form encType="multipart/form-data">
                  <Input
                    id="name"
                    name="name"
                    value={`${user.first_name} ${user.last_name}` || ''}
                    label="Nome do Usuário"
                    type="text"
                    placeholder="Nome do Usuário"
                    disabled
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
                  <Form.Group controlId="user_picture" className="mb-3">
                    <Form.Label>Imagem de Perfil</Form.Label>
                    <Form.Control
                      accept="image/*"
                      name="user_picture"
                      type="file"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button
                    onClick={handleEdit}
                    background="#04AFD4"
                  >
                    Salvar Informações
                  </Button>
                </Form>
          </DefautlStyle.Col>
          <DefautlStyle.Col md="auto">
            <DefautlStyle.PreviewContainer>
              <div className="content">
                <span>IMAGE PREVIEW</span>
                {windowWidth(1024) ? (
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
