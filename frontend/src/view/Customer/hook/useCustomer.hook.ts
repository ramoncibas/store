import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import useCustomerStored from "hooks/useCustomerStored";
import useCustomerService from "../service/useCustomerService";

import { UseCustomerProps } from "../types";

const useCustomer = (): UseCustomerProps => {
  const {
    customer,
    customerLogin,
    customerRegister,
    isLoadingCustomer,
    isLoadingLogin,
    isLoadingRegister,
    handleLoginCustomer,
    handleRegisterCustomer,
    handleCustomer,
  } = useCustomerService();

  const { handleSaveUserStorage } = useCustomerStored();

  const { id: productID } = useParams();
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const [credentials, setCredentials] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [isLoadingRedirect, setLoadingRedirect] = useState<boolean>(false);
  const [statusLogin, setStatusLogin] = useState({});
  const [tryAgainError, setTryAgainError] = useState(3); // TODO: verifica a quantidade de tentativas do usuario, e mostrar um modal para ele alterar a senha
  const REDIRECT_HOME = () => window.location.assign("/");

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginErrorMessage = {
    user: {
      labelMessage: "Ops! Usuário não encontrado.",
      className: "warning",
      tryAgain: tryAgainError,
    },
    internal: {
      labelMessage: "Ops! Parece que ocorreu um erro na sua validação.",
      className: "error",
      tryAgain: tryAgainError,
    },
  };

  const validatedUser = (userData: any) => {
    const { data, status } = userData;

    if (status === 200) {
      let expires = new Date();
      expires.setTime(expires.getTime() + data.expiresIn * 1000);
      setCookie("access_token", data.token, { path: "/", expires });

      handleSaveUserStorage(data);

      const timer = setTimeout(() => {
        REDIRECT_HOME();
        setLoadingRedirect(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (status !== 200 && status < 500) {
      setTryAgainError(tryAgainError - 1);
      setStatusLogin(loginErrorMessage.user);
    }
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();

    const userData = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      handleLoginCustomer(userData);

      if (customerLogin) validatedUser(customerLogin);
      if (!customerLogin) setStatusLogin(loginErrorMessage.internal);
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return {
    statusLogin,
    credentials,
    isLoadingRedirect,
    handleLogin,
    handleChange,
  };
};

export default useCustomer;
