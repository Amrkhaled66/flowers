import useAddressForm from "src/hooks/profile/addresses/useAddressForm";
import FormInput from "src/components/ui/register/FormInput";
import Button from "src/components/ui/Button";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";
import AreaSelection from "src/components/ui/AddressForm/AreaSelection";
import { useMemo } from "react";

const initialFormData: Address = {
  recipient_name: "",
  recipient_phone: "",
  address: "",
  area: "",
  title: "",
  id: 0,
};
const AddressForm = ({
  FormData = null,
  onSubmit,
  isPending,
}: {
  FormData?: Address | null;
  onSubmit: (formData: Address) => void;
  isPending?: boolean;
}) => {
  const initialData = useMemo(() => FormData || initialFormData, [FormData]);

  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSelectArea,
    handleSubmit,
  } = useAddressForm(initialData, onSubmit);

  return (
    <form className="w-full space-y-4 lg:p-4" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="recipient_name"
        required
        label="Recipient name"
        value={formData.recipient_name}
        onChange={handleInputChange}
        error={formErrors.name}
      />
      <FormInput
        type="text"
        name="recipient_phone"
        required
        label="Recipient phone"
        value={formData.recipient_phone}
        onChange={handleInputChange}
        error={formErrors.phoneNumber}
      />

      <MapButton onLocationSelected={handleLocationSelection} />

      <AreaSelection onAreaSelected={handleSelectArea} />
      <FormInput
        type="text"
        name="address"
        required
        label="Address"
        value={formData.address}
        onChange={handleInputChange}
        error={formErrors.address}
      />

      <Button
        loading={isPending}
        text="Save"
        className="animate w-full !py-3 text-white"
        onClick={undefined}
      />
    </form>
  );
};

export default AddressForm;
