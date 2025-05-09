import Address from "src/types/UserInfo/Address";
import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";

const AddressCard = ({
  address: { name, address, phoneNumber, id },
  onEditAddress,
}: {
  address: Address;
  onEditAddress: (address: Address) => void;
}) => {
  const handleEditAddress = () =>
    onEditAddress({ id, name, address, phoneNumber });
  return (
    <ProfileCard onDelete={() => {}} onEdit={handleEditAddress}>
      <div>
        <Row name="Name" value={name} />
        <Row name="Address" value={address} />
        <Row name="Phone Number" value={phoneNumber} />
      </div>
    </ProfileCard>
  );
};

export default AddressCard;
