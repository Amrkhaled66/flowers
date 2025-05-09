import AddressCard from "src/components/ProfilePage/Address/AddressCard";
import Address from "src/types/UserInfo/Address";

const Addresses: Address[] = [
  {
    name: "Amr",
    address: "Sued City",
    phoneNumber: "01066244158",
    id: 1,
  },
];

const AddressCards = ({
  onEditAddress,
}: {
  onEditAddress: (address: Address) => void;
}) => {
  return (
    <div>
      {Addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onEditAddress={onEditAddress}
        />
      ))}
    </div>
  );
};

export default AddressCards;
