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
  recipientName: "",
  recipientPhone: "",
  address: "",
  area: "",
  id: 0,
};

const DeliveryInfo = () => {
  usePageTitle("Delivery Info");
  const { t } = useTranslation("profile");
  const { t: tCart } = useTranslation("sharedCart");
  const { setConfig } = useOrderSummary();
  const { cartLength } = useCart();
  const { updateOrder, order } = useOrder();
  const navigate = useNavigate();

  const {
    formData,
    formErrors,
    handleLocationSelection,
    validateForm,
    deliveryError,
    handleSelectArea,
    handleInputChange,
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
      recipientName: formData.recipientName,
      phoneNumber: formData.recipientPhone,
      area: formData.area,
      fullAddress: formData.address,
    });
    return navigate("/cart/payment");
  };

  useEffect(() => {
    setConfig({
      buttonText: tCart("orderSummary.toCheckOut"),
      onClick() {
        onSubmit();
      },
    });

    return () => {
      setConfig({});
    };
  }, [formData, order, tCart, t]);

  if (cartLength === 0) return <Navigate to="/" replace />;
  return (
    <div className="flex h-fit w-full flex-col gap-y-6 lg:w-[62%]">
      <div className="lg:!bg-main-50 space-y-4 rounded-xl bg-white lg:px-4 lg:py-6">
        <FormInput
          bgColor=" bg-main-50 lg:bg-white"
          type="text"
          name="recipientName"
          required
          label={t("address.form.recipientName")}
          value={formData.recipientName || order.recipientName}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => updateOrder({ recipientName: e.target.value })}
          onChange={handleInputChange}
          error={formErrors.recipientName}
        />
        <FormInput
          bgColor="bg-main-50 lg:bg-white"
          type="text"
          name="recipientPhone"
          required
          label={t("address.form.recipientPhone")}
          value={formData.recipientPhone || order.phoneNumber}
          // onChange={(e: ChangeEvent<HTMLInputElement>) => updateOrder({ phoneNumber: e.target.value })}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
        />

        <MapButton onLocationSelected={handleLocationSelection} />
        <AreaSelection
          defaultValue={formData.area || order.area}
          error={formErrors.area}
          // onAreaSelected={(value) => updateOrder({ area: value })}
          onAreaSelected={handleSelectArea}
        />
        <div className="space-y-1">
          <div className="">
            <label className="text-text-main t font-bold">
              {t("address.form.address")}
            </label>
            <textarea
              value={formData.address || order.fullAddress}
              name="address"
              onChange={handleInputChange}
              // onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateOrder({ fullAddress: e.target.value })}
              className={`bg-main-50 placeholder:text-subTitle animate focus:border-main mt-3 h-[100px] w-full rounded-xl border p-3 placeholder:text-sm lg:bg-white ${formErrors.address ? "border-red" : "border-stroke"}`}
              placeholder={t("address.form.addressPlaceholder")}
            />
          </div>
          <p className="text-red px-2 text-xs">{formErrors.address}</p>
        </div>
        <PrivacyConsentToggle />
        <DeliveryTime error={deliveryError} />
      </div>
      <Button
        className="!py-3 text-white lg:hidden"
        onClick={onSubmit}
        text={tCart("orderSummary.buttonText")}
      />
    </div>
  );
};

export default DeliveryInfo;
