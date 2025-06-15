import { useAddressFormWithDelivery } from "src/hooks/cart/useAddressFormWithDelivery";
import FormInput from "src/components/ui/register/FormInput";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import DeliveryTime from "src/components/Cart/DeliveryInfo/DeliveryTime/DeliveryTime";
import AreaSelection from "src/components/ui/AddressForm/AreaSelection";
import Alert from "src/components/ui/Alert";
import PrivacyConsentToggle from "src/components/Cart/DeliveryInfo/PrivacyConsentToggle ";
import Button from "src/components/ui/Button";

import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { useOrderSummary } from "src/context/OrderSummaryContext";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useTranslation } from "react-i18next";
import { useOrder } from "src/context/orderCtx";
import { useCart } from "src/context/user/cartCtx";

const initialFormData: Address = {
  recipient_name: "",
  recipient_phone: "",
  address: "",
  area: "",
  id: 0,
};

const DeliveryInfo = () => {
  usePageTitle("Delivery Info");
  const { t } = useTranslation("profile");
  const { t : tCart} = useTranslation("sharedCart");
  const { setConfig } = useOrderSummary();
  const { cartLength } = useCart();
  const { updateOrder } = useOrder();
  const navigate = useNavigate();

  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    validateForm,
    deliveryError,
  } = useAddressFormWithDelivery(initialFormData);

  const onSubmit = () => {
    const isValid = validateForm();
    if (!isValid)
      return Alert({
        title: "Error",
        text: "Please fill all the required fields",
        icon: "error",
        confirmButtonText: "Okay",
      });
    updateOrder({
      recipient_name: formData.recipient_name,
      phone_number: formData.recipient_phone,
      area: formData.area,
      full_address: formData.address,
    });
    return navigate("/cart/payment");
  };

  useEffect(() => {
    setConfig({
      buttonText: "Continue to Checkout",
      onClick() {
        onSubmit();
      },
    });

    return () => {
      setConfig({});
    };
  }, [formData]);

  if (cartLength === 0) return <Navigate to="/" replace />;
  return (
    <div className="flex h-fit w-full flex-col gap-y-6 lg:w-[62%]">
      <div className="lg:!bg-main-50 space-y-4 rounded-xl bg-white lg:px-4 lg:py-6">
        <FormInput
          bgColor=" bg-main-50 lg:bg-white"
          type="text"
          name="recipient_name"
          required
          label={t("address.form.recipientName")}
          value={formData.recipient_name}
          onChange={handleInputChange}
          error={formErrors.name}
        />
        <FormInput
          bgColor="bg-main-50 lg:bg-white"
          type="text"
          name="recipient_phone"
          required
          label={t("address.form.recipientPhone")}
          value={formData.recipient_phone}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
        />

        <MapButton onLocationSelected={handleLocationSelection} />
        <AreaSelection
          error={formErrors.area}
          onAreaSelected={handleSelectArea}
        />
        <div className="space-y-1">
          <div className="">
            <label className="text-text-main t font-bold">
              {t("address.form.address")}
            </label>
            <textarea
              value={formData.address}
              name="address"
              onChange={handleInputChange}
              className={`bg-main-50 mt-3 placeholder:text-subTitle animate focus:border-main h-[100px] w-full rounded-xl border p-3 placeholder:text-sm lg:bg-white ${formErrors.address ? "border-red" : "border-stroke"}`}
              placeholder={t("address.form.addressPlaceholder")}
            />
          </div>
          <p className="text-red px-2 text-xs">{formErrors.address}</p>
        </div>
        <PrivacyConsentToggle />
        <DeliveryTime error={deliveryError} />
      </div>
      <Button className="text-white lg:hidden !py-3" onClick={onSubmit} text={tCart("orderSummary.buttonText")} />
    </div>
  );
};

export default DeliveryInfo;
