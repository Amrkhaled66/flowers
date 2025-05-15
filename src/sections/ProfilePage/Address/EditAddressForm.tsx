import Address from "src/types/UserInfo/Address";
import AddressForm from "./AddressForm";
import { useUpdateAddress } from "src/hooks/profile/addresses/useAddressMutations";
import Alert from "src/components/ui/Alert";
const EditAddressForm = ({
  editedAddress,
  onClose,
}: {
  editedAddress: Address;
  onClose: () => void;
}) => {
  const { mutate, isPending } = useUpdateAddress();

  console.log(editedAddress);
  const onSubmit = (formData: Address) => {
    mutate(
      { address: formData, id: editedAddress.id },
      {
        onSuccess: () => {
          Alert({
            title: "Success",
            text: "Address updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => {
            onClose();
          });
        },
      },
    );
  };
  return (
    <AddressForm
      FormData={editedAddress}
      onSubmit={onSubmit}
      isPending={isPending}
    />
  );
};

export default EditAddressForm;
