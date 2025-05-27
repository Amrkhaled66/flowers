import AddressCard from "src/components/ProfilePage/Address/AddressCard";
import Address from "src/types/UserInfo/Address";
import AddressCardSk from "src/components/ui/Skeletons/InfoCardSkeleton.tsx";
import { useGetAddresses } from "src/hooks/profile/addresses/useAddressMutations";

const AddressCards = ({
  onEditAddress,
}: {
  onEditAddress: (address: Address) => void;
}) => {
  const { data, isLoading, isError, refetch } = useGetAddresses();

  if (isError) return;

  if (data && data.data.length === 0) return;
  return (
    <div className="flex h-full w-full flex-col space-y-4 sm:space-y-5 lg:space-y-5">
      {isLoading ? (
        <>
          <AddressCardSk />
          <AddressCardSk />
        </>
      ) : (
        data.data.map((address: Address) => (
          <AddressCard
            refetch={() => refetch()}
            key={address.id}
            address={address}
            onEditAddress={onEditAddress}
          />
        ))
      )}
    </div>
  );
};

export default AddressCards;
