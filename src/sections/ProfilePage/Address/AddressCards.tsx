import AddressCard from "src/components/ProfilePage/Address/AddressCard";
import Address from "src/types/UserInfo/Address";
import { useGetAddresses } from "src/hooks/profile/addresses/useAddressMutations";

const AddressCards = ({
  onEditAddress,
}: {
  onEditAddress: (address: Address) => void;
}) => {
  const { data, isLoading, isError, refetch } = useGetAddresses();

  if (isError) return;

  if (!data || isLoading) return;
  if (!data.data.length) return;
  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      {data.data.map((address: Address) => (
        <AddressCard
          refetch={() => refetch()}
          key={address.id}
          address={address}
          onEditAddress={onEditAddress}
        />
      ))}
    </div>
  );
};

export default AddressCards;
