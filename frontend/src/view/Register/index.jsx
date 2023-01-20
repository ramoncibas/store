import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie'
import { Form, FloatingLabel } from "react-bootstrap";

import api from "../../utils/api";
import { Container } from "./style";
import { Button, Input } from "../../components";

const Register = () => {

  const [credentials, setCredentials] = useState({});
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

  //email: 'adm@store.com', password: 'store' 
  //httpOnly cookies

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));

    console.log(credentials)
  }

  const handleRegister = (event) => {
    event.preventDefault();

    const userData = {
      first_name: credentials.first_name,
      last_name: credentials.last_name,
      email: credentials.email,
      password: credentials.password,
      phone: credentials.phone,
      user_picture: credentials.user_picture
    }

    api.post("/register", userData).then((response) => {
      const { data, status } = response
      if (status) {
        let expires = new Date();
        expires.setTime(expires.getTime() + (data.expiresIn * 1000));
        setCookie("access_token", data.token, { path: "/", expires });

        alert("Usuario criado com sucesso!")

        window.location.href = '/'
      }
    }).catch(({ response }) => {
      if (response.status >= 400) {
        alert('Usuário não encontrado')
      }
    })
  }

  return (
    <Container>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              id="first_name"
              name="first_name"
              label="Digite seu Primeiro nome"
              type="text"
              placeholder="Digite seu Primeiro nome"
              value={credentials.first_name || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Input
              id="last_name"
              name="last_name"
              label="Digite seu Sobrenome"
              type="text"
              placeholder="Digite seu Sobrenome"
              value={credentials.last_name || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              id="email"
              name="email"
              label="Digite seu E-mail"
              type="text"
              placeholder="Digite seu E-mail"
              value={credentials.email || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              id="phone"
              name="phone"
              label="Digite seu Celular"
              type="text"
              placeholder="Digite seu Celular"
              value={credentials.phone || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              id="password"
              name="password"
              label="Digite sua Senha"
              type="text"
              placeholder="Digite sua Senha"
              value={credentials.password || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Input
              id="user_picture"
              name="user_picture"
              label="Insira sua foto"
              type="text"
              placeholder="Insira sua foto"
              value={credentials.user_picture || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            onClick={handleRegister}
            background={"#e9e9e9"}
          // style={props.style}
          >
            <span style={{ color: '#000' }}>Enviar</span>
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Register;