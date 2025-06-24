import { useAddressFormWithDelivery } from "src/hooks/cart/useAddressFormWithDelivery";
import FormInput from "src/components/ui/register/FormInput";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import DeliveryTime from "src/components/Cart/DeliveryInfo/DeliveryTime/DeliveryTime";
import AreaSelection from "src/components/ui/AddressForm/AreaSelection";
import Alert from "src/components/ui/Alert";
import PrivacyConsentToggle from "src/components/Cart/DeliveryInfo/PrivacyConsentToggle ";
import Button from "src/components/ui/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    setDeliveryError,
    toggleDeliverWithoutAddress,
    deliverWithoutAddress,
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
        <div className="bg-main-50 flex items-start justify-between rounded-xl p-4 lg:bg-white">
          <div className="flex gap-x-3">
            <Icon icon="zondicons:location" className="text-main size-6" />
            <div className="space-y-1">
              <p className="text-main font-bold">
                {tCart("deliveryInfo.withoutAddressTitle")}
              </p>
              <p className="text-subTitle lg:w-[50%]">
                {tCart("deliveryInfo.withoutAddressSubTitle")}
              </p>
            </div>
          </div>

          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              onChange={toggleDeliverWithoutAddress}
              checked={order.withoutAddress||deliverWithoutAddress}
              className="peer sr-only"
            />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-600 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
          </label>
        </div>
        <FormInput
          bgColor=" bg-main-50 lg:bg-white"
          type="text"
          name="recipientName"
          required
          label={t("address.form.recipientName")}
          value={formData.recipientName || order.recipientName}
          onChange={handleInputChange}
          error={formErrors.recipientName}
        />
        <FormInput
          bgColor="bg-main-50 lg:bg-white"
          inputmode="tel"
          type="tel"
          name="recipientPhone"
          required
          label={t("address.form.recipientPhone")}
          value={formData.recipientPhone || order.phoneNumber}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
        />

        {!deliverWithoutAddress && (
          <MapButton onLocationSelected={handleLocationSelection} />
        )}
        {!deliverWithoutAddress && (
          <AreaSelection
            disabled={deliverWithoutAddress}
            defaultValue={formData.area || order.area}
            error={formErrors.area}
            onAreaSelected={handleSelectArea}
          />
        )}
        {!deliverWithoutAddress && (
          <div className="space-y-1">
            <div className="">
              <label className="text-text-main t font-bold">
                {t("address.form.address")}
              </label>
              <textarea
                disabled={deliverWithoutAddress}
                value={formData.address || order.fullAddress}
                name="address"
                onChange={handleInputChange}
                className={`bg-main-50 placeholder:text-subTitle animate focus:border-main mt-3 h-[100px] w-full rounded-xl border p-3 placeholder:text-sm disabled:cursor-not-allowed lg:bg-white ${formErrors.address ? "border-red" : "border-stroke"} disabled:opacity-40`}
                placeholder={t("address.form.addressPlaceholder")}
              />
            </div>
            <p className="text-red px-2 text-xs">{formErrors.address}</p>
          </div>
        )}
        <PrivacyConsentToggle />
        <DeliveryTime
          resetDeliveryError={() => setDeliveryError("")}
          error={deliveryError}
        />
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
