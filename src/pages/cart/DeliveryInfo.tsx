import useAddressForm from "src/hooks/profile/addresses/useAddressForm";
import FormInput from "src/components/ui/register/FormInput";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import DeliveryTime from "src/components/Cart/DeliveryInfo/DeliveryTime";

import { useEffect } from "react";
import { useOrderSummary } from "src/context/OrderSummaryContext";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useTranslation } from "react-i18next";
import AreaSelection from "src/components/ui/AddressForm/AreaSelection";

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

  const { setConfig } = useOrderSummary();
  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSubmit,
    handleSelectArea,
  } = useAddressForm(initialFormData, () => {});

  useEffect(() => {
    setConfig({
      buttonText: "Continue to Checkout",
      pathName: "/cart/payment",
    });

    return () => {
      setConfig({});
    };
  }, []);

  return (
    <div className="flex h-fit w-full flex-col gap-y-6 lg:w-[62%]">
      <div
        className="lg:!bg-main-50 space-y-4 rounded-xl bg-white lg:px-4 lg:py-6"
        onSubmit={handleSubmit}
      >
        <FormInput
          bgColor=" bg-main-50 lg:bg-white"
          type="text"
          name="name"
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
        <AreaSelection onAreaSelected={handleSelectArea} />
        <div className="space-y-3">
          <label className="text-text-main t font-bold">
            {t("address.form.address")}
          </label>
          <textarea
            className="bg-main-50 placeholder:text-subTitle animate border-stroke h-[100px] w-full rounded-xl border p-3 placeholder:text-sm lg:bg-white"
            placeholder={t("address.form.addressPlaceholder")}
          />
        </div>
        <DeliveryTime />
      </div>
    </div>
  );
};

export default DeliveryInfo;
