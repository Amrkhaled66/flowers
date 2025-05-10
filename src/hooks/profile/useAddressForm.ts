import { useState, ChangeEvent, FormEvent } from "react";
import Address from "src/types/UserInfo/Address";

interface FormErrors {
  name: string;
  phoneNumber: string;
  areaId: string;
  address: string;
}

const initialFormErrors: FormErrors = {
  name: "",
  phoneNumber: "",
  areaId: "",
  address: "",
};

const useAddressForm = (initialData: Address) => {
  const [formData, setFormData] = useState<Address>(initialData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLocationSelection = (location: string) => {
    setFormData((prev) => ({ ...prev, address: location }));
  };

  const validateForm = (): boolean => {
    const errors = { ...initialFormErrors };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Recipient name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Recipient phone is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      errors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    } else if (formData.address.length < 5) {
      errors.address = "Address must be at least 5 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSubmit,
  };
};

export default useAddressForm;
