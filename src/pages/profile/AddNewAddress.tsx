import useAddressForm from "src/hooks/profileHooks/useAddressForm";
import FormInput from "src/components/ui/register/FormInput";
import Button from "src/components/ui/Button";
import MapButton from "src/components/ui/AddressForm/MapModel/MapButton";
import Address from "src/types/UserInfo/Address";

const initialFormData: Address = {
  name: "",
  phoneNumber: "",
  address: "",
  id: 0,
};

const AddAddressForm = ({ FormData }: { FormData?: Address }) => {
  const {
    formData,
    formErrors,
    handleInputChange,
    handleLocationSelection,
    handleSubmit,
  } = useAddressForm(FormData || initialFormData);

  return (
    <form className="font-main w-full space-y-4 lg:p-4" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="name"
        required
        label="Recipient name"
        value={formData.name}
        onChange={handleInputChange}
        error={formErrors.name}
      />
      <FormInput
        type="text"
        name="phoneNumber"
        required
        label="Recipient phone"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        error={formErrors.phoneNumber}
      />

      <MapButton onLocationSelected={handleLocationSelection} />

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
        text="Save"
        className="animate w-full !py-3 text-white"
        onClick={undefined}
      />
    </form>
  );
};

export default AddAddressForm;
