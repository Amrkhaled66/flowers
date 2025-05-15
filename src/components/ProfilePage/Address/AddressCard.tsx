import Address from "src/types/UserInfo/Address";
import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";
import DeleteAddressModel from "./DeleteAddreesModel";

import { useState } from "react";
const AddressCard = ({
  address: { recipient_name, address, recipient_phone, id, area },
  onEditAddress,
  refetch,
}: {
  address: Address;
  onEditAddress: (address: Address) => void;
  refetch: () => void;
}) => {
  const [isDelete, setIsDelete] = useState(false);

  const handleDeleteAddress = () => setIsDelete(true);
  const handleEditAddress = () =>
    onEditAddress({
      id,
      recipient_name,
      address,
      recipient_phone,
      area,
    });

  return (
    <ProfileCard onDelete={handleDeleteAddress} onEdit={handleEditAddress}>
      <div>
        <Row name="Name" value={recipient_name} />
        <Row name="Address" value={address} />
        <Row name="Phone Number" value={recipient_phone} />
        <Row name="Area" value={area} />
      </div>
      <DeleteAddressModel
        refetch={refetch}
        id={id}
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
      />
    </ProfileCard>
  );
};

export default AddressCard;
