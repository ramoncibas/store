import { useEffect, useState } from "react";
import useCustomerStorage from "hooks/useCustomerStorage.hook";
import useCustomerService from "../../../service/useCustomerService.service";
import { Customer } from "types";

interface IUseProfileProps {
  user: Customer | null;
  handleEdit: () => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
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

  const [user, setUser] = useState<Customer | null>(null);

  const handleSetUser = (newValue: any | null) => {
    if (newValue) {
      setUser((prevState) => ({
        ...prevState,
        ...newValue,
      }));
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files, name, value } = event.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const imageData: string | ArrayBuffer | null = e.target.result;
          if (imageData) {
            handleSetUser({ [name]: imageData });
          }
        }
      };
    } else {
      handleSetUser({ [name]: value });
    }
  };

  useEffect(() => {
    if (customerUUID) {
      handleCustomer(customerUUID).then((result: any) => {
        if (result) {
          handleSetUser(result);
        }
      });
    }
  }, [customerUUID]);

  return {
    user,
    handleEdit: () => {
      if (customerUUID && user) {
        handleEditCustomer(customerUUID, user as Customer);
      }
    },
    handleChange,
    isLoadingCustomer,
    isLoadingEditCustomer,
  };
}

export default useProfile;
