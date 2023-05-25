import { useState } from "react";
import { useCookies } from 'react-cookie'
import { Form, FloatingLabel } from "react-bootstrap";

import api from "../../utils/api";
import { Container } from "./style";
import { Button, Input } from "../../shared";

const Login = () => {

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

  const handleLogin = (event) => {
    event.preventDefault();

    const userData = {
      email: credentials.email,
      password: credentials.password
    }

    api.post("/login", userData).then((response) => {
      const { data, status } = response;

      if (status === 200) {
        let expires = new Date();
        expires.setTime(expires.getTime() + (data.expiresIn * 1000));

        setCookie("access_token", data.token, { path: "/", expires });
        alert('Login bem sucessedido!')
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
              id="email"
              name="email"
              label="Digite seu E-mail"
              type="text"
              placeholder="Digite seu E-mail"
              value={credentials.email || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
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
          <Button
            onClick={handleLogin}
            background={"#e9e9e9"}
          // style={props.style}
          >
            <span style={{ color: '#000' }}>Login</span>
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Login;