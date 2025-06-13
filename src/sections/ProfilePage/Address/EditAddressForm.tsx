import Address from "src/types/UserInfo/Address";
import AddressForm from "./AddressForm";
import { useUpdateAddress } from "src/hooks/profile/addresses/useAddressMutations";
import Alert from "src/components/ui/Alert";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
const EditAddressForm = ({
  editedAddress,
  onClose,
  refetch,
}: {
  editedAddress: Address;
  onClose: () => void;
  refetch: () => void;
}) => {
  const { mutate, isPending } = useUpdateAddress();

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
            refetch();
            onClose();
          });
        },
      },
    );
  };
  return (
    <ProfilePageCompetent>
      <AddressForm
        FormData={editedAddress}
        onSubmit={onSubmit}
        isPending={isPending}
      />
    </ProfilePageCompetent>
  );
};

export default EditAddressForm;
