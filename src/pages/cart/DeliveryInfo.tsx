import useAddressForm from "src/hooks/profile/addresses/useAddressForm";
import FormInput from "src/components/ui/register/FormInput";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import DeliveryTime from "src/components/Cart/DeliveryInfo/DeliveryTime";
import Button from "src/components/ui/Button";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useOrderSummary } from "src/context/OrderSummaryContext";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";

const initialFormData: Address = {
  name: "",
  phoneNumber: "",
  address: "",
  id: 0,
};

const DeliveryInfo = () => {
  usePageTitle("Delivery Info");

  const { setConfig } = useOrderSummary();
  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSubmit,
  } = useAddressForm(initialFormData);

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
          label="Recipient name"
          value={formData.name}
          onChange={handleInputChange}
          error={formErrors.name}
        />
        <FormInput
          bgColor=" bg-main-50 lg:bg-white"
          type="text"
          name="phoneNumber"
          required
          label="Recipient phone"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          error={formErrors.phoneNumber}
        />

        <MapButton onLocationSelected={handleLocationSelection} />

        <div className="space-y-3">
          <label className="text-text-main t font-bold">Full Address</label>
          <textarea
            className="bg-main-50 placeholder:text-subTitle animate border-stroke h-[100px] w-full rounded-xl border p-3 placeholder:text-sm"
            placeholder="Enter your apartment/villa number, floor, building name and street"
          />
        </div>
        <DeliveryTime />
      </div>
      <Link to="/cart/payment">
        <Button
          text="Continue to Checkout"
          className="hover:bg-main-50 animate bg-main block w-full !py-3 !text-base text-white lg:hidden"
        />
      </Link>
    </div>
  );
};

export default DeliveryInfo;
