import Auth from "../Authentication";

import { Button, Input } from "shared";
import { FormLogin, FormTitle, ForgotPassword, LoginWithAnotherOptions } from "../../style";
import useLogin from "../../hook/useLogin.hook";
import Typography from "shared/Typography";

const LoginForm = () => {
  const { credentials, isLoadingLogin, handleChange, handleLogin } = useLogin();

  return (
    <FormLogin>
      <FormTitle>Log In</FormTitle>
      <FormLogin.Group
        controlId="email_form_group"
        className="mb-3 form_form_login-w100"
      >
        <Input
          id="email"
          name="email"
          label="Digite seu E-mail"
          type="text"
          placeholder="Digite seu E-mail"
          value={credentials.email || ''}
          onChange={handleChange}
        />
      </FormLogin.Group>
      <FormLogin.Group
        controlId="password_form_group"
        className="mb-3 form_form_login-w100"
      >
        <Input
          id="password"
          name="password"
          label="Digite sua Senha"
          type="password"
          placeholder="Digite sua Senha"
          value={credentials.password || ''}
          onChange={handleChange}
        />
      </FormLogin.Group>
      <Button
        onClick={handleLogin}
        background={"#000"}
        textColor="#fff"
        disabled={isLoadingLogin}
      >
        {isLoadingLogin ? "Entrando..." : "Entrar"}
      </Button>

      <ForgotPassword>
        <a href="/register" className="forget-password">Esqueci a senha</a>
      </ForgotPassword>

      {/* <Typography>or use a social network</Typography> */}
      <Typography>ou use uma midia social</Typography>

      <LoginWithAnotherOptions>
        <div className="login_with_another_options content">
          <Auth.Google />
          <Auth.Facebook />
          <Auth.LinkedIn />
        </div>
      </LoginWithAnotherOptions>

      <Typography>Não possui acesso? <a href="/register">Registrar</a></Typography>

    </FormLogin>
  )
}

export default LoginForm;