import AddressCard from "src/components/ProfilePage/Address/AddressCard";
import Address from "src/types/UserInfo/Address";
import AddressCardSk from "src/components/ui/Skeletons/InfoCardSkeleton.tsx";

const AddressCards = ({
  onEditAddress,
  data,
  isLoading,
  refetch,
  isError,
}: {
  onEditAddress: (address: Address) => void;
  data: Address[] | null;
  isLoading: boolean;
  refetch: () => void;
  isError: boolean;
}) => {
  if (isError) return;

  if (data && data.length === 0) return;
  return (
    <div className="flex h-full w-full flex-col space-y-4 sm:space-y-5 lg:space-y-5">
      {isLoading ? (
        <>
          <AddressCardSk />
          <AddressCardSk />
        </>
      ) : (
        data &&
        data.map((address: Address) => (
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
