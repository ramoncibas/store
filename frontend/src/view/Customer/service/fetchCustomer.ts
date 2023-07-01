import { AxiosPromise, AxiosResponse } from "axios";
import { Customer, CustomerLogin, CustomerRegister } from "../types";
import api from "utils/api";
import getAcessToken from "utils/getAcessToken";

/** @backend to do */
const fetchCustomer = (): Promise<AxiosResponse<Customer>> => 
  api.get("/profile", {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchLoginCustomer = (customer: CustomerLogin): Promise<AxiosPromise<Customer>> => 
  api.post("/login", customer, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchRegisterCustomer = (customer: CustomerRegister): Promise<AxiosPromise<Customer>> => 
  api.post("/register", customer, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

/** @backend to do */
const fetchEditCustomer = (customer: Customer): Promise<AxiosPromise<Customer>> => 
  api.patch("/profile", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    customer
  });

/** @backend to do */
const fetchDeleteCustomer = (customerId: string): Promise<AxiosPromise> =>
  api.delete("/customer", {
    headers: { Authorization: "*", "x-access-token": getAcessToken() },
    data: { customerId },
  });

export {
  fetchCustomer,
  fetchLoginCustomer,
  fetchRegisterCustomer,
  fetchEditCustomer,
  fetchDeleteCustomer
};