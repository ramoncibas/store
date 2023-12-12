import { useEffect, useState } from "react";
import useCustomerStorage from "hooks/useCustomerStorage.hook";
import useCustomerService from "../../../service/useCustomerService.service";
import { Customer } from "types";
import { useDevices } from "hooks/useDevices";

interface IUseProfileProps {
  user: Customer | null;
  imagePreview: any;
  handleEdit: (event: any) => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isDesktop: any;
  isLoadingCustomer: boolean;
  isLoadingEditCustomer: boolean;
}

const useProfile = (): IUseProfileProps => {
  const { customerUUID } = useCustomerStorage();
  const { 
    customer,
    handleCustomer,
    handleEditCustomer,
    isLoadingCustomer,
    isLoadingEditCustomer
  } = useCustomerService();

  const { isDesktop } = useDevices();

  const [user, setUser] = useState<Customer | null>(null);
  const [imagePreview, setImagePreview] = useState();

  const handleSetUser = (newValue: any | null) => {
    setUser((prevState) => ({
      ...prevState,
      ...(newValue instanceof FormData ? Object.fromEntries(newValue) : newValue),
    }));
  };

  // console.log(user)
  

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { files, name, value } = event.target;

    if (files && files[0]) {     
      const formData = new FormData();
      const previewURL: any = URL.createObjectURL(files[0]);

      formData.append('user_picture', files[0]);
  
      handleSetUser(formData);
      setImagePreview(previewURL);
    } else {
      handleSetUser({ [name]: value });
    }
  };

  const handleEdit = (event: any) => {
    event.preventDefault();

    if (customerUUID && user) {
      handleEditCustomer(customerUUID, user as Customer);
    }
  }

  useEffect(() => {
    if (customerUUID) {
      handleCustomer(customerUUID);
    }

    if (customer) {
      handleSetUser(customer);
    }

  }, [customerUUID]);


  useEffect(() => {
    if (customer) {
      handleSetUser(customer);
    }

  }, [customer]);


  return {
    user,
    imagePreview,
    handleEdit,
    handleChange,
    isDesktop,
    isLoadingCustomer,
    isLoadingEditCustomer,
  };
}

export default useProfile;
