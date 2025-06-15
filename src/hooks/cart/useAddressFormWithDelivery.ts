import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAddressFormBase } from "src/hooks/profile/addresses/useAddressForm";
import Address from "src/types/UserInfo/Address";
import { useOrder } from "src/context/orderCtx";

export const useAddressFormWithDelivery = (initialData: Address) => {
  const {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    validateBaseForm,
  } = useAddressFormBase(initialData);

  const [deliveryError, setDeliveryError] = useState("");

  const { t: tProfile } = useTranslation("profile");
  const { order } = useOrder();
  const validateDeliveryFields = (): boolean => {
    if (!order.delivery_time.trim() || !order.delivery_date.trim()) {
      setDeliveryError(tProfile("address.formErrors.deliveryTime.required"));
      return false;
    }
    setDeliveryError("");
    return true;
  };

  const validateForm = (): boolean => {
    const baseValid = validateBaseForm();
    const deliveryValid = validateDeliveryFields();
    return baseValid && deliveryValid;
  };

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    deliveryError,
    validateForm,
    setDeliveryError,
  };
};
