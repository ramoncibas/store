import { useCallback, useEffect, useState } from "react";
import useCustomerStorage from "hooks/useCustomerStorage.hook";
import useCustomerService from "../../../service/useCustomerService.service";
import { Customer } from "types";
import { useDevices } from "hooks/useDevices";

interface IAlertMessage {
  type: "error" | "warning" | "info" | "success" | undefined;
  title: string;
  message: string;
  status: number;
}

interface IUseProfileProps {
  user: Customer | null;
  hasChangedUser: boolean;
  imagePreview: any;
  handleEdit: (event: any) => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isDesktop: any;
  showAlert: IAlertMessage;
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

  const [hasChangedUser, setHasChangedUser] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<IAlertMessage>({
    type: undefined,
    title: "",
    message: "",
    status: 0
  });

  const handleSetUser = (newValue: any | null) => {
    setUser((prevState) => ({
      ...prevState,
      ...(newValue instanceof FormData ? Object.fromEntries(newValue) : newValue),
    }));
  };

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
      handleEditCustomer(customerUUID, user as Customer).then(
        ({ data: { type, title, message }, status }: any) => {
          setShowAlert({ type, title, message, status });
        });
    }
  }

  useEffect(() => {
    if (customerUUID) {
      handleCustomer(customerUUID);
    }
  }, [customerUUID]);

  useEffect(() => {
    setUser(customer);
    setHasChangedUser(false);
  }, [customer]);

  useEffect(() => {
    const hasObjectChanged = (oldObj: any | null, newObj: any | null): boolean => {
      if (!oldObj || !newObj) {
        return false;
      }

      const { user_picture: oldUserPicture, ...oldRest } = oldObj;
      const { user_picture: newUserPicture, ...newRest } = newObj;
      const restChanged = Object.keys(oldRest).some((key) => oldRest[key] !== newRest[key]);

      // Checks if the image has been modified
      const pictureChanged = oldUserPicture !== newUserPicture;

      return restChanged || pictureChanged;
    };

    const changed = customer && hasObjectChanged(customer, user);
    setHasChangedUser(changed ?? false);
  }, [customer, user]);

  return {
    user,
    hasChangedUser,
    imagePreview,
    handleEdit,
    handleChange,
    showAlert,
    isDesktop,
    isLoadingCustomer,
    isLoadingEditCustomer,
  };
}

export default useProfile;
