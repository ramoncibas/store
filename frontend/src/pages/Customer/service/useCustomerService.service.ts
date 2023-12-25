import { useAsyncFn } from "react-use";
import { Customer, UseCustomerServiceProps } from "types";

import {
  fetchCustomer,
  fetchLoginCustomer,
  fetchRegisterCustomer,
  fetchEditCustomer,
  fetchDeleteCustomer
} from "./fetchCustomer";
import { AxiosError } from "axios";

const useCustomerService = (): UseCustomerServiceProps => {
  const [fetchLoginState, fetchLoginRequest] = useAsyncFn(fetchLoginCustomer);
  const [fetchRegisterState, fetchRegisterRequest] = useAsyncFn(fetchRegisterCustomer);
  const [fetchEditState, fetchEditRequest] = useAsyncFn(fetchEditCustomer);
  const [fetchDeleteState, fetchDeleteRequest] = useAsyncFn(fetchDeleteCustomer);
  const [fetchCustomerState, fetchCustomerRequest] = useAsyncFn(fetchCustomer);

  const customer = fetchCustomerState.value?.data || null;
  const customerLogin = fetchLoginState.value?.data || null;
  const customerRegister = fetchRegisterState?.value || null;
  const customerEdited = fetchEditState?.value || null;

  const customerLoginError = fetchLoginState?.error as AxiosError<Customer, any> || null;

  return {
    customer,
    customerLogin,
    customerLoginError,
    customerRegister,
    customerEdited,
    isLoadingCustomer: fetchCustomerState.loading,
    isLoadingLogin: fetchLoginState.loading,
    isLoadingRegister: fetchRegisterState.loading,
    isLoadingEditCustomer: fetchEditState.loading,
    isLoadingDeleteCustomer: fetchDeleteState.loading,
    handleCustomer: fetchCustomerRequest,
    handleLoginCustomer: fetchLoginRequest,
    handleRegisterCustomer: fetchRegisterRequest,
    handleEditCustomer: fetchEditRequest,
    handleDeleteCustomer: fetchDeleteRequest,
  };
};

export default useCustomerService;