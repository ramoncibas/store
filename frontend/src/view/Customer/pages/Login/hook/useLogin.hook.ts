import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import useCustomerStorage from "hooks/useCustomerStorage.hook";
import useCustomerService from "../../../service/useCustomerService.service";
import { CustomerLogin } from "types";

interface IUseLoginProps {
  credentials: CustomerLogin;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleLogin: (event: React.FormEvent) => void;
  isLoadingLogin: boolean;
}

const useLogin = (): IUseLoginProps => {
  const { setCustomerSession } = useCustomerStorage();

  const {
    customerLogin,
    isLoadingLogin,
    handleLoginCustomer
  } = useCustomerService();

  const [credentials, setCredentials] = useState<CustomerLogin>({
    email: '',
    password: ''
  });

  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    handleLoginCustomer({
      email: credentials.email,
      password: credentials.password
    });
  };

  useEffect(() => {
    if (isLoadingLogin && customerLogin) {
      const expiresIn = customerLogin?.expiresIn;
      const tokenJWT = customerLogin?.token;

      let expires = new Date();
      expires.setTime(expires.getTime() + expiresIn * 1000);

      setCookie("access_token", tokenJWT, { path: "/", expires });
      setCustomerSession(customerLogin);
      alert("Login bem sucedido!");
    }
  }, [isLoadingLogin, customerLogin]);


  return {
    credentials,
    handleChange,
    handleLogin,
    isLoadingLogin
  }
}

export default useLogin;