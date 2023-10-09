import { useEffect, useState } from 'react';
import { Customer } from 'view/Customer/types';

interface IUseCustomer {
  customer: Customer | null;
  customerUUID: string | undefined;
  customerFirstName: string | undefined;
  customerLastName: string | undefined;
  customerEmail: string | undefined;
  customerPassword: string | undefined;
  customerPhone: string | undefined;
  customerPicture: string | undefined;
  setCustomerSession: (customer: Customer) => void;
  removeCostumerSession: () => void;
}

const useCustomerStorage = (): IUseCustomer => {
  const [customer, setCustomerStateState] = useState<Customer | null>(null);

  const setCustomerSession = (newCustomer: Customer) => {
    setCustomerStateState(newCustomer);
    localStorage.setItem('customer', JSON.stringify(newCustomer));
  };

  const getCustomerSession = (): Customer | null => {
    if (customer) {
      return customer;
    }
    const storedCustomer = localStorage.getItem('customer');
    if (storedCustomer) {
      setCustomerStateState(JSON.parse(storedCustomer));
    }
    return null;
  };

  const removeCostumerSession = () => {
    setCustomerStateState(null);
    localStorage.removeItem('customer');
  };

  useEffect(() => {
    getCustomerSession()
  }, [])
  
  return {
    customer,
    customerUUID: customer?.uuid,
    customerFirstName: customer?.first_name,
    customerLastName: customer?.last_name,
    customerEmail: customer?.email,
    customerPassword: customer?.password,
    customerPhone: customer?.phone,
    customerPicture: customer?.user_picture,
    setCustomerSession,
    removeCostumerSession,
  }
};

export default useCustomerStorage;