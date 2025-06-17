import { useState, ChangeEvent } from "react";
import Address from "src/types/UserInfo/Address";
import { useTranslation } from "react-i18next";
import { FormErrors } from "src/types/UserInfo/Address";
import validateAddressForm from "src/utils/ValidateAddressForm";

const initialFormErrors: FormErrors = {
  recipientName: "",
  phoneNumber: "",
  area: "",
  address: "",
};
export const useAddressFormBase = (initialData: Address) => {
  const [formData, setFormData] = useState<Address>(initialData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const { t: tProfile } = useTranslation("profile");

  const updateFormDate = (updates: Partial<Address>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

  const validateBaseForm = () => {
    const { errors, isValid } = validateAddressForm(formData, tProfile);
    setFormErrors(errors);
    return isValid;
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    validateBaseForm,
    updateFormDate
  };
};

export const useAddressForm = (initialData: Address) =>
  useAddressFormBase(initialData);
