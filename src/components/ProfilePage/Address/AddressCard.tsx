import Address from "src/types/UserInfo/Address";
import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";
import DeleteAddressModel from "./DeleteAddreesModel";

import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("profile");

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
        <Row name={t("address.addressCard.name")} value={recipient_name} />
        <Row name={t("address.addressCard.address")} value={address} />
        <Row name={t("address.addressCard.phone")} value={recipient_phone} />
        <Row name={t("address.addressCard.area")} value={area} />
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
