export interface CustomerLogin {
  email: string;
  password: string;
}

export interface Customer extends CustomerLogin {
  uuid: string;
  first_name: string;
  last_name: string;
  phone: string;
  user_picture: string
}

export type CustomerRegister = Omit<Customer, "uuid" | "phone" | "user_picture">;

export interface UseCustomerServiceProps {
  customer: Customer;
  customerLogin: CustomerLogin;
  customerRegister: CustomerRegister;
  customerEdited: Customer;
  isLoadingCustomer: boolean;
  isLoadingLogin: boolean;
  isLoadingRegister: boolean;
  isLoadingEditCustomer: boolean;
  isLoadingDeleteCustomer: boolean;
  handleCustomer: (event: any) => void;
  handleLoginCustomer: (event: any) => void;
  handleRegisterCustomer: (event: any) => void;
  handleEditCustomer: (event: any) => void;
  handleDeleteCustomer: (event: any) => void;
}

export interface UseCustomerProps {
  statusLogin: any;
  credentials: { email: string; password: string };
  isLoadingRedirect: boolean;
  handleLogin: (event: any) => void;
  handleChange: (event: any) => void;
}