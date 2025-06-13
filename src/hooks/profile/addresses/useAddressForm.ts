import { useState, ChangeEvent } from "react";
import Address from "src/types/UserInfo/Address";
import { validatePhoneNumber } from "src/utils/register";
import { useTranslation } from "react-i18next";

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

export const useAddressFormBase = (initialData: Address) => {
  const [formData, setFormData] = useState<Address>(initialData);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

  const { t } = useTranslation("errors");
  const { t: tProfile } = useTranslation("profile");

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

  const validateBaseForm = (): boolean => {
    const errors = { ...initialFormErrors };
    let isValid = true;

    if (!formData.recipient_name.trim()) {
      errors.name = tProfile("address.formErrors.name.required");
      isValid = false;
    } else if (formData.recipient_name.length < 3) {
      errors.name = tProfile("address.formErrors.name.minLength");
      isValid = false;
    }

    if (!formData.recipient_phone.trim()) {
      errors.phoneNumber = tProfile("address.formErrors.phoneNumber.required");
      isValid = false;
    } else if (
      validatePhoneNumber(formData.recipient_phone.replace(/\s+/g, ""), t)
    ) {
      errors.phoneNumber = tProfile("address.formErrors.phoneNumber.invalid");
      isValid = false;
    }

    if (!formData.area) {
      errors.area = tProfile("address.formErrors.area.required");
      isValid = false;
    }

    if (!formData.address.trim()) {
      errors.address = tProfile("address.formErrors.address.required");
      isValid = false;
    } else if (formData.address.length < 5) {
      errors.address = tProfile("address.formErrors.address.minLength");
      isValid = false;
    }

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
  };
};

export const useAddressForm = (initialData: Address) => useAddressFormBase(initialData);