import AddressForm from "src/sections/ProfilePage/Address/AddressForm";
import Address from "src/types/UserInfo/Address";
import Alert from "src/components/ui/Alert";
import { useNavigate } from "react-router";
import { useAddAddress } from "src/hooks/profile/addresses/useAddressMutations";

const AddNewAddress = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddAddress();
  const onSubmit = (formData: Address) => {
    mutate(
      { ...formData, title: "Delivery Request" },
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

  return <AddressForm onSubmit={onSubmit} isPending={isPending} />;
};

export default AddNewAddress;
