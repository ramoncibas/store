import { AxiosPromise, AxiosResponse, AxiosError } from "axios";

export interface CustomerLogin {
  email: string;
  password: string;
}

export interface Customer extends CustomerLogin {
  id: number;
  uuid: string;
  first_name: string;
  last_name: string;
  phone: string;
  user_picture: any;
  user_picture_url?: any;
  expiresIn: any;
  token: string;
  type: string;
}

export type CustomerRegister = Omit<Customer, "uuid" | "phone" | "user_picture">;

export interface UseCustomerServiceProps {
  customer: Customer | null;
  customerLogin: Customer | null;
  customerLoginError: AxiosError | null;
  customerRegister: AxiosPromise<Customer> | null;
  customerEdited: AxiosPromise<Customer> | null;
  isLoadingCustomer: boolean;
  isLoadingLogin: boolean;
  isLoadingRegister: boolean;
  isLoadingEditCustomer: boolean;
  isLoadingDeleteCustomer: boolean;
  handleCustomer: (event: any) => any;
  handleLoginCustomer: (event: any) => any;
  handleRegisterCustomer: (event: any) => void;
  handleEditCustomer: (customerUUID: string, customer: Customer) => any;
  handleDeleteCustomer: (event: any) => void;
}

export interface UseCustomerProps {
  statusLogin: any;
  credentials: { email: string; password: string };
  isLoadingRedirect: boolean;
  handleLogin: (event: any) => void;
  handleChange: (event: any) => void;
}