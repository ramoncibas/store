import { AxiosPromise, AxiosResponse } from "axios";
import { Customer, CustomerLogin, CustomerRegister } from "types";
import api from "utils/api";
import getAcessToken from "utils/getAcessToken";

const fetchCustomer = (customerUUID: string): Promise<AxiosResponse<Customer | null>> =>
  api.get(`/profile/${customerUUID}`, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchLoginCustomer = (customer: CustomerLogin): Promise<AxiosResponse<Customer | null>> =>
  api.post("/login", customer, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchRegisterCustomer = (customer: CustomerRegister): Promise<AxiosPromise<Customer>> =>
  api.post("/register", customer, {
    headers: { Accept: "version=1", "x-access-token": getAcessToken() },
  });

const fetchEditCustomer = (customerUUID: string, customer: Customer): Promise<AxiosPromise<Customer>> =>
  api.patch(`/profile/${customerUUID}`, customer, {
    headers: {
      Accept: "version=1", "x-access-token": getAcessToken(), "Content-Type": "multipart/form-data",
    },
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