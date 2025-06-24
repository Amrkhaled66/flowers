import { useEffect, useState } from "react";
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
    updateFormDate,
  } = useAddressFormBase(initialData);

  const [deliveryError, setDeliveryError] = useState("");

  const { t: tProfile } = useTranslation("profile");
  const { order, updateOrder } = useOrder();

  const deliveryDate = order.deliveryDate;
  const deliveryTime = order.deliveryTime;
  const validateDeliveryFields = (): boolean => {
    if (!deliveryDate || !deliveryTime) {
      setDeliveryError(tProfile("address.formErrors.deliveryTime.required"));
      return false;
    }
    setDeliveryError("");
    return true;
  };

  const validateForm = (): boolean => {
    const baseValid = validateBaseForm(order.withoutAddress);
    const deliveryValid = validateDeliveryFields();
    return baseValid && deliveryValid;
  };

  const toggleDeliverWithoutAddress = () => {
    updateOrder({
      withoutAddress: !order.withoutAddress,
    });
    updateFormDate({
      area: "",
      address: "",
    });
    updateOrder({
      area: "",
      fullAddress: "",
    });
  };
  useEffect(() => {
    updateFormDate({
      recipientName: order.recipientName || formData.recipientName,
      recipientPhone: order.phoneNumber || formData.recipientPhone,
      area: order.area || formData.area,
      address: order.fullAddress || formData.address,
    });
  }, []);

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
    toggleDeliverWithoutAddress,
    deliverWithoutAddress: order.withoutAddress,
  };
};
