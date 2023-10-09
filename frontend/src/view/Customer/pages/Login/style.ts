import styled from "styled-components";
import { Form } from "react-bootstrap";

export const LoginContainerPage = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 80vh;
  display: grid;
  place-content: center;

  form {
    width: 450px;
    border: 1px solid #65656524;
    border-radius: 10px;
    padding: 20px;
  }
`;

export const FormLogin = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &&& {
    .form_form_login-w100 {
      width: 100%;
    }
    .typography_shared_component {
      margin-bottom: 0px;
    
      &:first-of-type {
        margin-top: 20px;
      }
    }
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 30px;
`;

export const ForgotPassword = styled.div`
  &&& {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const LoginWithAnotherOptions = styled.div`
  &&& {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    .login_with_another_options.content {
      width: 40%;
      display: flex;
      justify-content: space-between;
      button {
        border: none;
        border-radius: 50%;
        background-color: transparent;
      }
    }
  }
`;