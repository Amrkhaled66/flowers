import { useState, ChangeEvent, FormEvent } from "react";
import Address from "src/types/UserInfo/Address";
import { validatePhoneNumber } from "src/utils/register";
interface FormErrors {
  name: string;
  phoneNumber: string;
  area: string;
  address: string;
}

const initialFormErrors: FormErrors = {
  name: "",
  phoneNumber: "",
  area: "",
  address: "",
};

const useAddressForm = (
  initialData: Address,
  onSubmit: (formData: Address) => void,
) => {
  const [formData, setFormData] = useState<Address>(initialData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  console.log("formData");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectArea = (area: string) => {
    setFormData((prev) => ({ ...prev, area }));
  };

  const handleLocationSelection = (location: string) => {
    setFormData((prev) => ({ ...prev, address: location }));
  };

  const validateForm = (): boolean => {
    const errors = { ...initialFormErrors };
    let isValid = true;

    if (!formData.recipient_name.trim()) {
      errors.name = "Recipient name is required";
      isValid = false;
    } else if (formData.recipient_name.length < 3) {
      errors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.recipient_phone.trim()) {
      errors.phoneNumber = "Recipient phone is required";
      isValid = false;
    } else if (
      !validatePhoneNumber(formData.recipient_phone.replace(/\s+/g, ""))
    ) {
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
    onSubmit(formData);
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    handleSubmit,
  };
};

export default useAddressForm;
