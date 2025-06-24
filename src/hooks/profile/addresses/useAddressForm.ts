import { useState, ChangeEvent } from "react";
import Address from "src/types/UserInfo/Address";
import { useTranslation } from "react-i18next";
import { FormErrors } from "src/types/UserInfo/Address";
import validateAddressForm from "src/utils/ValidateAddressForm";
import { validatePhoneNumber } from "src/utils/register";

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

    // Validate the specific field
    setFormErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      switch (name) {
        case "recipientName":
          if (!value.trim()) {
            updatedErrors.recipientName = tProfile(
              "address.formErrors.name.required",
            );
          } else if (value.length < 3) {
            updatedErrors.recipientName = tProfile(
              "address.formErrors.name.minLength",
            );
          } else {
            updatedErrors.recipientName = "";
          }
          break;

        case "recipientPhone":
          if (!value.trim()) {
            updatedErrors.phoneNumber = tProfile(
              "address.formErrors.phoneNumber.required",
            );
          } else if (validatePhoneNumber(value.replace(/\s+/g, ""))) {
            updatedErrors.phoneNumber = tProfile(
              "address.formErrors.phoneNumber.invalid",
            );
          } else {
            updatedErrors.phoneNumber = "";
          }
          break;

        case "address":
          if (!value.trim()) {
            updatedErrors.address = tProfile(
              "address.formErrors.address.required",
            );
          } else if (value.length < 5) {
            updatedErrors.address = tProfile(
              "address.formErrors.address.minLength",
            );
          } else {
            updatedErrors.address = "";
          }
          break;
      }

      return updatedErrors;
    });
  };

  const handleSelectArea = (area: string) => {
    setFormData((prev) => ({ ...prev, area }));

    setFormErrors((prev) => ({
      ...prev,
      area: area ? "" : tProfile("address.formErrors.area.required"),
    }));
  };

  const handleLocationSelection = (location: string) => {
    setFormData((prev) => ({ ...prev, address: location }));
  };

  const validateBaseForm = (deliverWithoutAddress?:boolean) => {
    const { errors, isValid } = validateAddressForm(formData, tProfile,deliverWithoutAddress);
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
    updateFormDate,
  };
};

export const useAddressForm = (initialData: Address) =>
  useAddressFormBase(initialData);
