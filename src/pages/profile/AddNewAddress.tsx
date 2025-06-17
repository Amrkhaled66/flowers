import AddressForm from "src/sections/ProfilePage/Address/AddressForm";
import Address from "src/types/UserInfo/Address";
import Alert from "src/components/ui/Alert";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import transformKeysToSnakeCase from "src/utils/transformToSnakeCase";

import { useNavigate } from "react-router";
import { useAddAddress } from "src/hooks/profile/addresses/useAddressMutations";

const AddNewAddress = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddAddress();
  const onSubmit = (formData: Address) => {
    mutate(
      { ...transformKeysToSnakeCase(formData),title: "dff" },
      {
        onSuccess: () => {
          Alert({
            title: "Success",
            text: "Address added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          }).then(() => {
            navigate("/profile/addresses");
          });
        },
      },
    );
  };

  return (
    <ProfilePageCompetent>
      <AddressForm onSubmit={onSubmit} isPending={isPending} />
    </ProfilePageCompetent>
  );
};

export default AddNewAddress;
